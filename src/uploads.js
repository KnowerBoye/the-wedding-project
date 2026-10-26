import { firestore, storage, hasStorage, warmUp } from './firebase.js';
import { ownerId, uuid, withTimeout } from './identity.js';

const $ = (id) => document.getElementById(id);

const MAX_BYTES = 15 * 1024 * 1024; // matches storage.rules
const MAX_INPUT_BYTES = 40 * 1024 * 1024; // larger originals are resized below 15 MB, or refused
const LONG_EDGE = 2560;
const TYPES = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/heic': 'heic', 'image/heif': 'heif' };
const CONCURRENCY = 2;
const STALL_MS = 40000;

// Errors written for guests (bad file, too big). Anything else is unexpected
// and gets a generic message with a retry.
const guestError = (message) => Object.assign(new Error(message), { forGuest: true });

const mb = (n) => `${(n / 1024 / 1024).toFixed(n < 1024 * 1024 ? 2 : 1)} MB`;

// Some phones report HEIC with an empty type; fall back to the extension.
function typeOf(file) {
  if (TYPES[file.type]) return file.type;
  const ext = (file.name.split('.').pop() || '').toLowerCase();
  return { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', heic: 'image/heic', heif: 'image/heif' }[ext] || null;
}

async function decode(file) {
  if ('createImageBitmap' in window) {
    try { return await createImageBitmap(file, { imageOrientation: 'from-image' }); } catch { /* fall through */ }
  }
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
    await img.decode();
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
}

// Resize to LONG_EDGE and re-encode as JPEG. Keeps the original when it is
// already small enough and the re-encode wouldn't help. HEIC that the browser
// can't decode (most non-Apple browsers) is sent as-is if it fits.
async function prepare(file, type) {
  let bitmap;
  try {
    bitmap = await decode(file);
  } catch {
    if (file.size <= MAX_BYTES) return { blob: file, type, width: null, height: null };
    throw guestError(`This photo is ${mb(file.size)} and your browser can’t resize it. The limit is 15 MB.`);
  }
  const w = bitmap.width;
  const h = bitmap.height;
  const scale = Math.min(1, LONG_EDGE / Math.max(w, h));
  const keepOriginal = scale === 1 && file.size <= MAX_BYTES && (type === 'image/jpeg' || type === 'image/webp' || file.size < 3 * 1024 * 1024);
  if (keepOriginal) {
    bitmap.close?.();
    return { blob: file, type, width: w, height: h };
  }
  const width = Math.round(w * scale);
  const height = Math.round(h * scale);
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close?.();
  const blob = await new Promise((res) => canvas.toBlob(res, 'image/jpeg', 0.86));
  canvas.width = canvas.height = 0;
  if (!blob) throw guestError('This photo couldn’t be prepared for upload.');
  if (blob.size > MAX_BYTES) throw guestError(`Even after resizing this photo is ${mb(blob.size)}. The limit is 15 MB.`);
  return { blob, type: 'image/jpeg', width, height };
}

export function initUploads({ token }) {
  if (!hasStorage) {
    $('uploads-soon').hidden = false;
    return;
  }
  const input = $('uploads-input');
  const list = $('uploads-list');
  const owner = ownerId(token);
  $('uploads-ready').hidden = false;

  const pocket = $('uploads-ready');
  pocket.addEventListener('pointerenter', () => warmUp('storage'), { once: true });
  input.addEventListener('focus', () => warmUp('storage'), { once: true });

  const queue = [];
  let running = 0;

  input.addEventListener('change', () => {
    [...input.files].forEach(addFile);
    input.value = ''; // the same photo can be picked again after a failure
    pump();
  });

  // Drag and drop onto the pocket, for desktop guests.
  pocket.addEventListener('dragover', (e) => { e.preventDefault(); pocket.classList.add('is-over'); });
  pocket.addEventListener('dragleave', () => pocket.classList.remove('is-over'));
  pocket.addEventListener('drop', (e) => {
    e.preventDefault();
    pocket.classList.remove('is-over');
    [...(e.dataTransfer?.files || [])].forEach(addFile);
    pump();
  });

  function addFile(file) {
    const item = { file, id: uuid(), state: 'queued', stage: 'upload', path: null, prepared: null };
    item.el = renderItem(item);
    list.prepend(item.el);
    const type = typeOf(file);
    if (!type) return fail(item, 'Only photos can be shared here (JPEG, PNG, WebP or HEIC).', false);
    if (file.size > MAX_INPUT_BYTES) return fail(item, `This file is ${mb(file.size)}. Please choose a photo under 15 MB.`, false);
    item.type = type;
    queue.push(item);
  }

  function pump() {
    while (running < CONCURRENCY && queue.length) {
      const item = queue.shift();
      running++;
      run(item).finally(() => { running--; pump(); });
    }
  }

  async function run(item) {
    try {
      if (!item.prepared) {
        setState(item, 'working', 'Preparing…', 0);
        item.prepared = await prepare(item.file, item.type);
      }
      const ext = TYPES[item.prepared.type];
      item.path ||= `uploads/${owner}/${item.id}.${ext}`;

      if (item.stage === 'upload') {
        const { storage: st, st: api } = await withTimeout(storage(), 30000);
        const ref = api.ref(st, item.path);
        await new Promise((resolve, reject) => {
          const task = api.uploadBytesResumable(ref, item.prepared.blob, {
            contentType: item.prepared.type,
            customMetadata: { owner },
          });
          item.task = task;
          // Watchdog: no bytes moving for STALL_MS means a dead connection.
          let last = -1;
          let stalled = 0;
          const watchdog = setInterval(() => {
            const now = task.snapshot.bytesTransferred;
            stalled = now === last ? stalled + 5000 : 0;
            last = now;
            if (stalled >= STALL_MS) task.cancel();
          }, 5000);
          const done = (fn) => (v) => { clearInterval(watchdog); fn(v); };
          task.on('state_changed',
            (snap) => setState(item, 'working', 'Uploading…', snap.bytesTransferred / snap.totalBytes),
            done(reject),
            done(resolve));
        });
        item.stage = 'record'; // the file is in; only the record is left
      }

      setState(item, 'working', 'Saving…', 1);
      const { db, fs } = await withTimeout(firestore(), 20000);
      const record = {
        path: item.path,
        owner,
        contentType: item.prepared.type,
        size: item.prepared.blob.size,
        status: 'pending',
        originalName: item.file.name.slice(0, 200),
        createdAt: fs.serverTimestamp(),
        ...(owner === token ? { token } : {}),
        ...(Number.isInteger(item.prepared.width) ? { width: item.prepared.width, height: item.prepared.height } : {}),
      };
      await withTimeout(fs.setDoc(fs.doc(db, 'photos', item.id), record), 20000);
      item.stage = 'done';
      setState(item, 'done', 'Sent. Thank you!', 1);
    } catch (err) {
      console.error('Upload failed', err);
      const offline = err.code === 'storage/retry-limit-exceeded' || err.code === 'storage/canceled' || err.code === 'unavailable' || err.code === 'timeout' || !navigator.onLine;
      let msg;
      if (err.code === 'storage/unauthorized') msg = 'The upload was refused. Is this a photo under 15 MB?';
      else if (item.stage === 'record') msg = 'The photo arrived, but we couldn’t log it. Tap retry.';
      else if (offline) msg = 'Connection lost. Nothing was sent. Tap retry.';
      else if (err.forGuest) msg = err.message;
      else msg = 'Upload failed. Nothing was sent. Tap retry.';
      // Problems with the file itself won't change on retry.
      fail(item, msg, !err.forGuest);
    }
  }

  function renderItem(item) {
    const li = document.createElement('li');
    li.className = 'upload';
    li.innerHTML = `
      <span class="upload__thumb" aria-hidden="true"></span>
      <span class="upload__body">
        <span class="upload__name"></span>
        <span class="upload__state"></span>
        <span class="upload__bar"><i></i></span>
      </span>
      <button class="upload__retry linkish" type="button" hidden>Retry</button>`;
    li.querySelector('.upload__name').textContent = item.file.name;
    if (/^image\/(jpeg|png|webp)/.test(item.file.type)) {
      const url = URL.createObjectURL(item.file);
      const img = new Image();
      img.alt = '';
      img.onload = img.onerror = () => URL.revokeObjectURL(url);
      img.src = url;
      li.querySelector('.upload__thumb').appendChild(img);
    }
    li.querySelector('.upload__retry').addEventListener('click', () => {
      li.querySelector('.upload__retry').hidden = true;
      queue.push(item);
      pump();
    });
    setState(item, 'queued', 'Waiting…', 0, li);
    return li;
  }

  function setState(item, state, text, progress, el = item.el) {
    item.state = state;
    el.dataset.state = state;
    el.querySelector('.upload__state').textContent = text;
    el.querySelector('.upload__bar i').style.transform = `scaleX(${progress})`;
  }

  function fail(item, message, retryable) {
    setState(item, 'error', message, 0);
    item.el.querySelector('.upload__retry').hidden = !retryable;
  }
}
