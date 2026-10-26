/* ============================================================
   #DeeRoy26 — Robert & Dora
   Vanilla, no-build static site. Content comes from the inline
   #wedding-data block (so the page works even when opened from
   disk), falling back to content/wedding.json.
   ============================================================ */

'use strict';

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- tiny DOM helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text != null) node.textContent = text;
  return node;
};

/* ---------- data loading ---------- */
// Prefer the inline block (works on file://), then fall back to fetch.
async function loadWedding() {
  const inline = document.getElementById('wedding-data');
  if (inline && inline.textContent.trim()) {
    try { return JSON.parse(inline.textContent); }
    catch (err) { console.warn('Inline wedding data failed to parse; fetching instead.', err); }
  }
  const res = await fetch('content/wedding.json', { cache: 'no-cache' });
  if (!res.ok) throw new Error(`Failed to load wedding.json: ${res.status}`);
  return res.json();
}

/* ---------- date / time formatting (venue timezone) ---------- */
// Africa/Accra is UTC+0 year-round, so we anchor the ceremony to the first
// programme time in UTC.
function ceremonyInstant(wedding) {
  const firstTime = (wedding.programme && wedding.programme[0] && wedding.programme[0].time) || '10:45';
  return new Date(`${wedding.date}T${firstTime}:00+00:00`);
}

function formatLongDate(dateStr, timezone) {
  const d = new Date(`${dateStr}T12:00:00+00:00`);
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    timeZone: timezone || 'UTC',
  }).format(d);
}

/* ============================================================
   HOMEPAGE
   ============================================================ */
function renderHome(wedding) {
  const { couple, theme } = wedding;
  applyTheme(theme);

  const names = couple.display || couple.names.join(' & ');
  $('#couple-names').textContent = names;
  $('#hero-date').textContent = formatLongDate(wedding.date, wedding.timezone);
  if (couple.hashtag) {
    $('#hashtag').textContent = couple.hashtag;
    $('#footer-hashtag').textContent = couple.hashtag;
  }
  $('#footer-names').textContent = names;
  $('#footer-meta').textContent =
    `${formatLongDate(wedding.date, wedding.timezone)} · ${wedding.venue.area || ''}`.replace(/ · $/, '');

  // Details — when
  $('#detail-date').textContent = formatLongDate(wedding.date, wedding.timezone);
  const prog = wedding.programme || [];
  if (prog.length) {
    const start = prog[0].time;
    const end = prog[prog.length - 1].time;
    $('#detail-time').textContent = `Ceremony from ${start} · photography at ${end}`;
  }

  // Details — where
  $('#venue-name').textContent = wedding.venue.name || '';
  $('#venue-area').textContent = wedding.venue.area || '';
  renderMapLink(wedding.venue);

  renderTimeline(prog);
  renderNotes(wedding.announcements);
  renderPhotoOrder(wedding.photographyOrder);
  renderGifts(wedding.gifts);

  if (wedding.closingRemarks && wedding.closingRemarks.text) {
    $('#closing-text').textContent = wedding.closingRemarks.text;
    $('#closing').hidden = false;
  }

  startCountdown(ceremonyInstant(wedding));
  wireImageFallbacks();
}

function applyTheme(theme) {
  if (!theme || !theme.colors) return;
  const named = { burgundy: '#6a1626', 'navy blue': '#273253', navy: '#273253' };
  const root = document.documentElement;
  const primary = named[(theme.colors.primary || '').toLowerCase()];
  const secondary = named[(theme.colors.secondary || '').toLowerCase()];
  if (primary) root.style.setProperty('--burgundy', primary);
  if (secondary) root.style.setProperty('--navy', secondary);
}

// Any <img data-fallback="..."> swaps to its fallback (a placeholder SVG) if the
// real asset is missing — so a 404 shows a tasteful placeholder, not a broken icon.
function wireImageFallbacks() {
  document.querySelectorAll('img[data-fallback]').forEach((img) => {
    const swap = () => {
      if (img.dataset.fellback) return;
      img.dataset.fellback = '1';
      img.src = img.getAttribute('data-fallback');
    };
    img.addEventListener('error', swap, { once: true });
    if (img.complete && img.naturalWidth === 0) swap(); // already failed before listener
  });
}

function renderMapLink(venue) {
  const link = $('#venue-map');
  let href = null;
  if (venue.gps && typeof venue.gps.lat === 'number' && typeof venue.gps.lng === 'number') {
    href = `https://www.google.com/maps/search/?api=1&query=${venue.gps.lat},${venue.gps.lng}`;
  } else if (venue.name) {
    const q = encodeURIComponent(`${venue.name}, ${venue.area || ''}`.trim());
    href = `https://www.google.com/maps/search/?api=1&query=${q}`;
  }
  if (href) {
    link.href = href;
    link.hidden = false;
    link.textContent = venue.gps ? 'Open in Maps' : 'Find on Maps';
  }
}

function renderTimeline(programme) {
  const list = $('#timeline');
  list.innerHTML = '';
  programme.forEach((item) => {
    const li = el('li', 'timeline__item');
    li.appendChild(el('span', 'timeline__time', item.time));
    const body = el('div', 'timeline__body');
    body.appendChild(el('span', 'timeline__title', item.title));
    li.appendChild(body);
    list.appendChild(li);
  });
}

function renderNotes(announcements) {
  if (!announcements || !announcements.length) return;
  const list = $('#notes');
  list.innerHTML = '';
  announcements.forEach((text) => list.appendChild(el('li', 'notes__item', text)));
  $('#announcements').hidden = false;
}

function renderPhotoOrder(order) {
  const list = $('#photo-order');
  list.innerHTML = '';
  (order || []).forEach((group) => list.appendChild(el('li', 'photo-order__item', group)));
}

function renderGifts(gifts) {
  if (!gifts) return;
  $('#gifts-message').textContent = gifts.message || '';
  const actions = $('#gifts-actions');
  actions.innerHTML = '';
  if (gifts.giftTable) {
    actions.appendChild(el('span', 'gifts__badge', 'A gift table will be available at the venue'));
  }
  const digital = gifts.digital;
  if (digital && digital.enabled && digital.url) {
    const a = el('a', 'btn btn--gift', 'Send a cash gift');
    a.href = digital.url;
    a.target = '_blank';
    a.rel = 'noopener';
    actions.appendChild(a);
  }
}

/* ---------- countdown ---------- */
let countdownTimer = null;
function startCountdown(target) {
  const root = $('#countdown');

  function render(units) {
    root.innerHTML = '';
    units.forEach(([value, label]) => {
      const unit = el('div', 'countdown__unit');
      unit.appendChild(el('span', 'countdown__value', String(value).padStart(2, '0')));
      unit.appendChild(el('span', 'countdown__label', label));
      root.appendChild(unit);
    });
  }

  function tick() {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) {
      root.innerHTML = '';
      root.appendChild(el('span', 'countdown__today', 'Today is the day'));
      if (countdownTimer) clearInterval(countdownTimer);
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    render([[days, 'days'], [hours, 'hrs'], [mins, 'min'], [secs, 'sec']]);
  }

  tick();
  countdownTimer = setInterval(tick, 1000);
}

/* ============================================================
   INVITE RESOLUTION
   A direct invite is ?to=Name. Its presence triggers the cinematic.
   ============================================================ */
function resolveInvite() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get('to');
  if (raw == null) return { isInvite: false, name: null };
  return { isInvite: true, name: cleanName(raw) };
}

function cleanName(raw) {
  const cleaned = String(raw)
    .replace(/[^\p{L}\p{M}'. -]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 60);
  if (!cleaned) return null;
  return cleaned.replace(/\b\p{L}/gu, (c) => c.toUpperCase());
}

/* ============================================================
   CINEMATIC INVITE (direct invites only)
   Envelope -> reveal -> main page.
   ============================================================ */
function runCinematic(wedding, name, onFinish) {
  const root = $('#cinematic');
  const envelope = $('#envelope');
  const phaseEnv = $('#phase-envelope');
  const phaseReveal = $('#phase-reveal');
  const names = wedding.couple.display || wedding.couple.names.join(' & ');

  // Personalize
  $('#invite-name').textContent = name || 'you';
  $('#reveal-names').textContent = names;
  $('#reveal-date').textContent = formatLongDate(wedding.date, wedding.timezone);
  $('#reveal-greeting').textContent = name
    ? `Dear ${name}, your presence would mean the world to us.`
    : 'Your presence would mean the world to us.';

  // Envelope: use the real image if present, otherwise the CSS fallback.
  const envImg = $('#envelope-img');
  const envFallback = $('#envelope-fallback');
  const useImage = () => { envFallback.hidden = true; envImg.hidden = false; };
  const useFallback = () => { envImg.hidden = true; envFallback.hidden = false; };
  if (envImg.getAttribute('src')) {
    if (envImg.complete) {
      envImg.naturalWidth > 0 ? useImage() : useFallback();
    } else {
      envImg.addEventListener('load', useImage, { once: true });
      envImg.addEventListener('error', useFallback, { once: true });
    }
  }

  root.hidden = false;
  document.body.classList.add('cinematic-open');

  let opened = false;
  function openEnvelope() {
    if (opened) return;
    opened = true;
    envelope.classList.add('is-open');
    $('#envelope-hint').textContent = '';
    const toReveal = () => {
      phaseEnv.hidden = true;
      phaseReveal.hidden = false;
      // next frame so the transition runs
      requestAnimationFrame(() => phaseReveal.classList.add('is-in'));
    };
    if (REDUCED_MOTION) toReveal();
    else setTimeout(toReveal, 1050);
  }

  function finish() {
    document.body.classList.remove('cinematic-open');
    root.classList.add('is-leaving');
    const done = () => {
      root.hidden = true;
      root.classList.remove('is-leaving');
      onFinish();
    };
    if (REDUCED_MOTION) done();
    else setTimeout(done, 650);
  }

  envelope.addEventListener('click', openEnvelope);
  $('#reveal-enter').addEventListener('click', finish);
  $('#cinematic-skip').addEventListener('click', finish);
}

/* ============================================================
   BOOT
   ============================================================ */
function shouldSkipStory() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('skip') === '1') return true;
  try { return sessionStorage.getItem('deeroy26_story_seen') === '1'; }
  catch { return false; }
}

function markStorySeen() {
  try { sessionStorage.setItem('deeroy26_story_seen', '1'); } catch { /* ignore */ }
}

async function boot() {
  let wedding;
  try {
    wedding = await loadWedding();
  } catch (err) {
    console.error(err);
    document.getElementById('site').innerHTML =
      '<p style="padding:2rem;text-align:center;font-family:sans-serif">Wedding details are temporarily unavailable. Please try again shortly.</p>';
    return;
  }

  renderHome(wedding);

  const invite = resolveInvite();
  if (!invite.isInvite || shouldSkipStory()) return;

  runCinematic(wedding, invite.name, markStorySeen);
}

document.addEventListener('DOMContentLoaded', boot);
