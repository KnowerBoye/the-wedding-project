import { ICONS, iconFor, paintIcons } from './icons.js';

const $ = (id) => document.getElementById(id);
const el = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};

// Africa/Accra is UTC+0 all year, so the first programme time is the ceremony start in UTC.
export function ceremonyStart(w) {
  const first = w.programme?.[0]?.time || '10:45';
  return new Date(`${w.date}T${first}:00Z`);
}

const fmt = (w, opts) =>
  new Intl.DateTimeFormat('en-GB', { timeZone: w.timezone || 'UTC', ...opts }).format(new Date(`${w.date}T12:00:00Z`));

// Today's date at the venue (Africa/Accra), as YYYY-MM-DD. In dev, ?today=
// overrides it so the wedding-day state can be checked.
export function venueToday(w) {
  const override = import.meta.env.DEV && new URLSearchParams(location.search).get('today');
  if (override && /^\d{4}-\d{2}-\d{2}$/.test(override)) return override;
  return new Intl.DateTimeFormat('en-CA', { timeZone: w.timezone || 'UTC' }).format(new Date());
}

// RSVPs close at the start of rsvp.closesOn (default: the wedding day).
export function rsvpOpen(w) {
  return venueToday(w) < (w.rsvp?.closesOn || w.date);
}

export function longDate(w) {
  return `${fmt(w, { weekday: 'long' })} · ${fmt(w, { day: 'numeric', month: 'long', year: 'numeric' })}`;
}

// Each part of the page renders on its own: if the markup for one part has
// been removed or renamed, that part is skipped and logged, and the rest of
// the page (and the invitation) still works.
function safely(name, fn) {
  try { fn(); } catch (err) { console.error(`Couldn't render ${name}:`, err); }
}

export function renderSite(w, guest) {
  const [n1, n2] = w.couple.names;
  safely('names', () => {
    $('hero-name-1').textContent = n1;
    $('hero-name-2').textContent = n2;
    $('mono-1').textContent = n1[0];
    $('mono-2').textContent = n2[0];
    $('foot-mono-1').textContent = n1[0];
    $('foot-mono-2').textContent = n2[0];
    $('hero-date').textContent = `${fmt(w, { day: '2-digit' })} · ${fmt(w, { month: '2-digit' })} · ${fmt(w, { year: 'numeric' })}`;
    $('footer-tag').textContent = w.couple.hashtag || '';
  });

  safely('greeting', () => { if (guest?.name) $('greeting').textContent = `Dear ${guest.name},`; });

  safely('scripture', () => {
    if (!w.scripture?.text) return;
    $('scripture-text').textContent = `“${w.scripture.text}”`;
    $('scripture-ref').textContent = w.scripture.reference || '';
    $('scripture').hidden = false;
  });

  safely('photos', () => {
    const photo = (id, src) => { if (src) $(id).src = src; else $(id).closest('figure').hidden = true; };
    photo('photo-hero', w.photos?.hero);
    photo('photo-middle', w.photos?.middle);
    photo('photo-closing', w.photos?.closing);
  });

  safely('parents', () => {
    const bride = w.parents?.bride || [];
    const groom = w.parents?.groom || [];
    if (!bride.length && !groom.length) return;
    $('parents-intro').textContent = w.parents.intro || '';
    bride.forEach((n) => $('parents-bride').appendChild(el('li', null, n)));
    groom.forEach((n) => $('parents-groom').appendChild(el('li', null, n)));
    $('parents').hidden = false;
  });

  safely('date bar', () => {
    $('date-weekday').textContent = fmt(w, { weekday: 'long' });
    $('date-day').textContent = fmt(w, { day: '2-digit' });
    $('date-monthyear').textContent = fmt(w, { month: 'long', year: 'numeric' });
  });

  safely('venue', () => renderVenue(w));
  safely('programme', () => renderTimeline(w.programme || []));

  safely('dress code', () => {
    if (!w.dressCode?.text) return;
    $('dress-text').textContent = w.dressCode.text;
    $('dress').hidden = false;
  });

  safely('photography order', () => {
    (w.photographyOrder || []).forEach((g) => $('photo-order').appendChild(el('li', null, g)));
  });

  safely('announcements', () => {
    if (!w.announcements?.length) return;
    w.announcements.forEach((t) => $('notes').appendChild(el('li', null, t)));
    $('announcements').hidden = false;
  });

  safely('gifts', () => renderGifts(w.gifts));
  safely('appreciation', () => renderAppreciation(w));
  safely('rsvp intro', () => { $('rsvp-intro').textContent = w.rsvp?.intro || ''; });
  safely('uploads intro', () => { $('uploads-intro').textContent = w.uploads?.intro || ''; });

  safely('icons', () => paintIcons());
}

// The closing card: the text is split around its centrepiece ("THANK YOU"),
// which is set large between rules. Hidden while there's no text.
function renderAppreciation(w) {
  const c = w.closingRemarks;
  if (!c?.text) return;
  const [n1, n2] = w.couple.names;
  $('thanks-mono-1').textContent = n1[0];
  $('thanks-mono-2').textContent = n2[0];
  if (c.heading) $('thanks-heading').textContent = c.heading;
  const centre = c.centrepiece && c.text.includes(c.centrepiece) ? c.centrepiece : null;
  if (centre) {
    const at = c.text.indexOf(centre);
    $('thanks-before').textContent = c.text.slice(0, at).trim();
    $('h-thanks').textContent = centre;
    $('thanks-after').textContent = c.text.slice(at + centre.length).trim();
  } else {
    $('thanks-before').textContent = c.text;
    $('h-thanks').hidden = true;
    $('thanks-after').hidden = true;
  }
  $('appreciation').hidden = false;
}

function renderVenue(w) {
  const v = w.venue;
  const prog = w.programme || [];
  $('venue-time').textContent = prog.length ? `${prog[0].time} hrs` : '';
  $('venue-name').textContent = v.name || '';
  $('venue-area').textContent = v.area || '';
  const hasGps = v.gps && typeof v.gps.lat === 'number' && typeof v.gps.lng === 'number';
  const query = hasGps ? `${v.gps.lat},${v.gps.lng}` : `${v.name}, ${v.area || ''}, Ghana`;
  // The couple's own Maps link wins; otherwise search by pin or by name.
  $('venue-map').href = v.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  const pending = $('venue-pending'); // optional "pin coming soon" note
  if (pending) pending.hidden = Boolean(v.mapUrl || hasGps);
}

function renderTimeline(programme) {
  const list = $('timeline');
  programme.forEach((item, i) => {
    const li = el('li', `timeline__item ${i % 2 ? 'is-right' : 'is-left'}`);
    const icon = el('span', 'timeline__icon');
    icon.innerHTML = ICONS[iconFor(item)];
    const text = el('div', 'timeline__text');
    text.appendChild(el('span', 'timeline__time', item.time));
    text.appendChild(el('span', 'timeline__title', item.title));
    if (item.songNumber) {
      const a = el('a', 'chip', `Song ${item.songNumber}`);
      a.href = item.lyricsUrl || `https://www.jw.org/en/search/?q=${encodeURIComponent(`song ${item.songNumber}`)}`;
      a.target = '_blank';
      a.rel = 'noopener';
      a.setAttribute('aria-label', `Open song ${item.songNumber}${item.lyricsUrl ? '' : ' on jw.org'}`);
      text.appendChild(a);
    }
    li.append(icon, text);
    list.appendChild(li);
  });
}

function renderGifts(g) {
  if (!g) return;
  $('gifts-message').textContent = g.message || '';
  $('gifts-table').hidden = !g.giftTable;
  const d = g.digital;
  if (d?.enabled && d.url) {
    if ($('gifts-digital')) $('gifts-digital').hidden = true;
    const a = $('gifts-digital-link');
    a.href = d.url;
    a.hidden = false;
  }
}

export function startCountdown(target) {
  const root = $('countdown');
  const units = [['days', 'Days'], ['hours', 'Hours'], ['mins', 'Min'], ['secs', 'Sec']];
  const cells = {};
  units.forEach(([key, label], i) => {
    if (i) root.appendChild(el('span', 'countdown__sep', ':'));
    const u = el('div', 'countdown__unit');
    cells[key] = el('span', 'countdown__value', '00');
    u.append(cells[key], el('span', 'countdown__label', label));
    root.appendChild(u);
  });
  root.setAttribute('aria-label', 'Time until the ceremony');

  let timer;
  const tick = () => {
    const diff = target - Date.now();
    if (diff <= 0) {
      clearInterval(timer);
      root.replaceChildren(el('p', 'countdown__today', 'Today is the day'));
      return;
    }
    const v = {
      days: Math.floor(diff / 864e5),
      hours: Math.floor((diff % 864e5) / 36e5),
      mins: Math.floor((diff % 36e5) / 6e4),
      secs: Math.floor((diff % 6e4) / 1e3),
    };
    for (const k in v) cells[k].textContent = String(v[k]).padStart(2, '0');
  };
  tick();
  timer = setInterval(tick, 1000);
}
