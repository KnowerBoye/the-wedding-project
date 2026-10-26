import { firestore, hasFirestore, warmUp } from './firebase.js';
import { ownerId, store, withTimeout } from './identity.js';
import { normaliseGhanaPhone, formatGhanaPhone } from './phone.js';

const $ = (id) => document.getElementById(id);

export function initRsvp({ token, guest }) {
  if (!hasFirestore) {
    $('rsvp-soon').hidden = false;
    return;
  }

  const form = $('rsvp-form');
  const nameEl = $('rsvp-name');
  const phoneEl = $('rsvp-phone');
  const status = $('rsvp-status');
  const button = $('rsvp-submit');
  const choice = $('rsvp-attending');
  const radios = [...form.elements.attending];
  const docId = ownerId(token);
  const sentKey = `deeroy26:rsvp:${docId}`;
  const sent = store.get(sentKey);

  form.hidden = false;
  // Prefill: what this browser sent before, else the invite's name. Always editable.
  nameEl.value = sent?.name || guest?.name || '';
  if (sent?.phone) phoneEl.value = formatGhanaPhone(sent.phone);
  if (typeof sent?.attending === 'boolean') radios.forEach((r) => { r.checked = (r.value === 'yes') === sent.attending; });
  if (sent) document.dispatchEvent(new CustomEvent('rsvp:sent', { detail: sent }));
  if (sent) { setStatus('done', `We have your RSVP${sent.name ? `, ${sent.name}` : ''}. You can update it below.`); button.textContent = 'Update RSVP'; }
  radios.forEach((r) => r.addEventListener('change', () => choice.removeAttribute('aria-invalid')));

  form.addEventListener('focusin', () => warmUp('firestore'), { once: true });
  phoneEl.addEventListener('blur', () => {
    const e164 = normaliseGhanaPhone(phoneEl.value);
    if (e164) phoneEl.value = formatGhanaPhone(e164);
  });
  [nameEl, phoneEl].forEach((el) => el.addEventListener('input', () => el.removeAttribute('aria-invalid')));

  function setStatus(kind, text) {
    status.dataset.kind = kind;
    status.textContent = text;
  }

  let busy = false;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (busy) return; // double-submit guard

    const name = nameEl.value.trim().replace(/\s+/g, ' ');
    const phone = normaliseGhanaPhone(phoneEl.value);
    if (name.length < 2) {
      nameEl.setAttribute('aria-invalid', 'true');
      nameEl.focus();
      return setStatus('error', 'Please enter your name.');
    }
    if (!phone) {
      phoneEl.setAttribute('aria-invalid', 'true');
      phoneEl.focus();
      return setStatus('error', 'That doesn’t look like a Ghana number. Try 024 123 4567 or +233 24 123 4567.');
    }

    const picked = radios.find((r) => r.checked);
    if (!picked) {
      choice.setAttribute('aria-invalid', 'true');
      radios[0].focus();
      return setStatus('error', 'Please let us know whether you can attend.');
    }
    const attending = picked.value === 'yes';

    busy = true;
    form.setAttribute('aria-busy', 'true');
    button.disabled = true;
    setStatus('loading', 'Sending…');

    try {
      const { db, fs } = await withTimeout(firestore(), 20000);
      const ref = fs.doc(db, 'rsvps', docId);
      const data = { name, phone, attending, updatedAt: fs.serverTimestamp(), ...(docId === token ? { token } : {}) };
      // createdAt is set once; the rules reject changing it. Try the likely
      // path first and fall back to the other if the document state differs.
      const create = () => fs.setDoc(ref, { ...data, createdAt: fs.serverTimestamp() });
      const update = () => fs.updateDoc(ref, data);
      const [first, second] = store.get(sentKey) ? [update, create] : [create, update];
      try {
        await withTimeout(first(), 20000);
      } catch (err) {
        if (err.code !== 'permission-denied' && err.code !== 'not-found') throw err;
        await withTimeout(second(), 20000);
      }
      store.set(sentKey, { name, phone, attending, at: new Date().toISOString() });
      document.dispatchEvent(new CustomEvent('rsvp:sent', { detail: { name, attending } }));
      setStatus('done', attending
        ? `Thank you, ${name}! We’re so glad you’ll be with us on the day.`
        : `Thank you for letting us know, ${name}. You’ll be missed, and we’re grateful for your kind wishes.`);
      button.textContent = 'Update RSVP';
    } catch (err) {
      console.error('RSVP failed', err);
      const offline = err.code === 'unavailable' || err.code === 'timeout' || !navigator.onLine;
      setStatus('error', offline
        ? 'We couldn’t reach the server. Check your connection and try again. Nothing was saved.'
        : 'Sorry, your RSVP didn’t go through. Please try again. Nothing was saved.');
    } finally {
      busy = false;
      form.removeAttribute('aria-busy');
      button.disabled = false;
    }
  });
}
