// Who is submitting: the invite token when there is one, otherwise a random
// id kept in this browser, so resubmitting updates rather than duplicates.
const ANON_KEY = 'deeroy26:anon';

export function randomId(bytes = 12) {
  const a = crypto.getRandomValues(new Uint8Array(bytes));
  return btoa(String.fromCharCode(...a)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export function uuid() {
  if (crypto.randomUUID) return crypto.randomUUID();
  const h = [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, '0')).join('');
  return `${h.slice(0, 8)}-${h.slice(8, 12)}-4${h.slice(13, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}

let sessionAnon = null;
export function ownerId(token) {
  if (token && /^[A-Za-z0-9_-]{8,64}$/.test(token)) return token;
  try {
    let id = localStorage.getItem(ANON_KEY);
    if (!id) { id = `anon-${randomId()}`; localStorage.setItem(ANON_KEY, id); }
    return id;
  } catch {
    sessionAnon ||= `anon-${randomId()}`;
    return sessionAnon;
  }
}

export const store = {
  get(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ } },
};

// Rejects if a promise takes longer than ms. Firestore Lite has no offline
// queue, but a stalled connection can still hang, and that must never look like success.
export function withTimeout(promise, ms, message = 'timeout') {
  let t;
  return Promise.race([promise, new Promise((_, rej) => { t = setTimeout(() => rej(Object.assign(new Error(message), { code: 'timeout' })), ms); })])
    .finally(() => clearTimeout(t));
}
