// Resolves ?i=<token> to { name } from /i/<token>.json.
// No token → null (plain visit). Unknown token or network failure → a generic
// guest, so a mistyped invite still gets the opening rather than an error.
const TOKEN = /^[A-Za-z0-9_-]{8,64}$/;

export function inviteToken() {
  return new URLSearchParams(location.search).get('i');
}

// First-open bookkeeping, per token. Storage may be unavailable (private
// mode, blocked site data); then the opening simply plays every time.
const openedKey = (token) => `deeroy26:opened:${token}`;

export function shouldPlayIntro(token) {
  if (new URLSearchParams(location.search).get('replay') === '1') return true;
  try { return !localStorage.getItem(openedKey(token)); } catch { return true; }
}

export function markIntroSeen(token) {
  try { localStorage.setItem(openedKey(token), new Date().toISOString()); } catch { /* ignore */ }
}

// Link to watch the opening again: same invite, with replay=1.
export function replayUrl(token) {
  const url = new URL(location.href);
  url.searchParams.set('i', token);
  url.searchParams.set('replay', '1');
  url.hash = '';
  return url.toString();
}

export async function resolveGuest(token) {
  if (token === null) return null;
  const generic = { name: null, known: false };
  if (!TOKEN.test(token)) return generic;
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}i/${token}.json`, { cache: 'no-cache' });
    if (!res.ok) return generic;
    const data = await res.json();
    const name = typeof data.name === 'string' ? data.name.trim().slice(0, 80) : null;
    return { name: name || null, known: Boolean(name) };
  } catch {
    return generic;
  }
}
