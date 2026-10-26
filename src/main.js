// Styles are linked from index.html (src/styles/index.css) so they apply before first paint.

import wedding from '../content/wedding.json';
import { inviteToken, resolveGuest, shouldPlayIntro, markIntroSeen, replayUrl } from './guest.js';
import { renderSite, startCountdown, ceremonyStart, longDate, rsvpOpen } from './site.js';
import { initRsvp } from './rsvp.js';
import { initReplySheet } from './replysheet.js';
import { initUploads } from './uploads.js';

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

let entrancesModule = null;
async function entrances() {
  if (reducedMotion) return;
  entrancesModule = await import('./entrances.js');
  entrancesModule.playEntrances();
}

async function boot() {
  const token = inviteToken();
  const guest = await resolveGuest(token);

  renderSite(wedding, guest);
  startCountdown(ceremonyStart(wedding));
  // RSVP belongs to the invitation: invite links only, and gone from the
  // wedding day on, when the site is the day's programme.
  const rsvp = token !== null && rsvpOpen(wedding);
  if (rsvp) {
    document.getElementById('rsvp').hidden = false;
    initReplySheet(); // listens for rsvp:sent, so it goes first
    initRsvp({ token, guest });
  }
  initUploads({ token });

  if (token === null) {
    entrances();
    return;
  }

  const replay = document.getElementById('replay');
  replay.href = replayUrl(token);
  replay.hidden = false;

  if (!shouldPlayIntro(token)) {
    entrances();
    return;
  }

  // Drop replay=1 from the address bar so a refresh behaves like a normal visit.
  const url = new URL(location.href);
  if (url.searchParams.has('replay')) {
    url.searchParams.delete('replay');
    history.replaceState(null, '', url);
  }

  const { runIntro } = await import('./intro.js');
  runIntro({
    guest,
    names: wedding.couple.display || wedding.couple.names.join(' & '),
    initials: wedding.couple.names.map((n) => n[0]),
    date: longDate(wedding),
    reducedMotion,
    replyBody: rsvp ? document.getElementById('rsvp-body') : null,
    // The hero settles while the card is still lifting away; scroll positions
    // are re-measured once the page is unlocked.
    onLeave: () => { markIntroSeen(token); entrances(); },
    onDone: () => entrancesModule?.refresh(),
  });
}

boot();
