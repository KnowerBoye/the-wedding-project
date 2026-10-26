import { gsap } from 'gsap';

if (import.meta.env.DEV) window.__gsap = gsap; // lets the browser checks seek the timeline

const ENVELOPE = `${import.meta.env.BASE_URL}img/envelope-emboss.webp`;

// --- Flap geometry -------------------------------------------------------
// Each flap is a triangle in % of the screen whose inner tip is rounded, like
// the folded card in the reference. Left and right tips overlap the centre so
// the closed envelope has no gap.
const SHAPES = {
  top: [[100, 0], [50, 57], [0, 0]],
  bottom: [[0, 100], [50, 43], [100, 100]],
  left: [[0, -1], [54, 50], [0, 101]],
  right: [[100, 101], [46, 50], [100, -1]],
};
const ORIGIN = { top: '50% 0%', bottom: '50% 100%', left: '0% 50%', right: '100% 50%' };

function roundedTriangle([a, tip, b], r = 0.14, steps = 10) {
  const lerp = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
  const p1 = lerp(a, tip, 1 - r);
  const p2 = lerp(tip, b, r);
  const pts = [a, p1];
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    const u = 1 - t;
    pts.push([u * u * p1[0] + 2 * u * t * tip[0] + t * t * p2[0], u * u * p1[1] + 2 * u * t * tip[1] + t * t * p2[1]]);
  }
  pts.push(p2, b);
  return pts;
}

const polygon = (pts) => `polygon(${pts.map(([x, y]) => `${x.toFixed(2)}% ${y.toFixed(2)}%`).join(',')})`;

function shapeFlaps(root) {
  root.querySelectorAll('.flap').forEach((flap) => {
    const side = flap.dataset.flap;
    const pts = roundedTriangle(SHAPES[side], side === 'left' || side === 'right' ? 0.12 : 0.1);
    // The back face is turned 180° about the hinge, so its clip is mirrored on that axis.
    const horizontal = side === 'left' || side === 'right';
    const mirrored = pts.map(([x, y]) => (horizontal ? [100 - x, y] : [x, 100 - y]));
    flap.querySelector('.flap__face').style.clipPath = polygon(pts);
    flap.querySelector('.flap__back').style.clipPath = polygon(mirrored);
    flap.style.transformOrigin = ORIGIN[side];
  });
}

// Wrap each character in a span for the letter-by-letter reveal.
function splitLetters(root) {
  const chars = [];
  root.querySelectorAll('[data-split]').forEach((node) => {
    const text = node.textContent;
    node.textContent = '';
    node.setAttribute('aria-hidden', 'true');
    for (const ch of text) {
      const s = document.createElement('span');
      s.className = 'char';
      s.textContent = ch;
      node.appendChild(s);
      chars.push(s);
    }
  });
  return chars;
}

function loadTexture(timeout = 6000) {
  return new Promise((resolve) => {
    const img = new Image();
    const timer = setTimeout(() => resolve(false), timeout);
    img.onload = () => {
      clearTimeout(timer);
      // decode() can stay pending in a background tab, so never wait on it for long.
      const decoded = img.decode ? img.decode().catch(() => {}) : Promise.resolve();
      Promise.race([decoded, new Promise((r) => setTimeout(r, 800))]).then(() => resolve(true));
    };
    img.onerror = () => { clearTimeout(timer); resolve(false); };
    img.src = ENVELOPE;
  });
}

// --- The opening ---------------------------------------------------------
export function runIntro({ guest, names, initials, date, reducedMotion, replyBody, onLeave, onDone }) {
  const $ = (id) => document.getElementById(id);
  const intro = $('intro');
  const stage = $('intro-stage');
  const tap = $('intro-tap');
  const tapLabel = $('intro-tap-label');
  const flaps = [...intro.querySelectorAll('.flap')];
  const flap = (side) => intro.querySelector(`.flap--${side}`);

  window.__introReady = true;
  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  // Copy
  $('intro-dear').textContent = guest?.name ? `Dear ${guest.name},` : 'Dear guest,';
  $('intro-for').textContent = guest?.name ? `For ${guest.name}` : '';
  $('intro-names').textContent = names;
  $('seal-1').textContent = initials[0];
  $('seal-2').textContent = initials[1];
  $('intro-date').textContent = date;

  shapeFlaps(intro);
  const chars = splitLetters(intro);
  const lateCopy = [$('intro-to'), $('intro-continue')];

  // Hold "Tap to open" until the texture is ready; a failed or slow texture
  // falls back to flat burgundy rather than blocking the guest.
  tap.disabled = true;
  tapLabel.textContent = 'Preparing your invitation…';
  loadTexture().then((ok) => {
    if (!ok) intro.classList.add('intro--flat');
    intro.classList.add('is-ready');
    tap.disabled = false;
    tapLabel.textContent = 'Tap to open';
    tap.focus({ preventScroll: true });
  });

  let state = 'closed';
  let tl = null;
  let sheen = null;

  if (!reducedMotion) {
    gsap.set($('intro-dear'), { autoAlpha: 0, y: 8 });
    gsap.set(chars, { autoAlpha: 0, y: 6, filter: 'blur(10px)' });
    gsap.set(lateCopy, { autoAlpha: 0, y: 8 });
    // A slow light drift over the closed envelope, as in the first second of the reference.
    sheen = gsap.fromTo($('intro-sheen'), { xPercent: -30, opacity: 0.0 }, { xPercent: 30, opacity: 0.5, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 });
  }

  function open() {
    if (state !== 'closed' || tap.disabled) return;
    state = 'opening';

    if (reducedMotion) {
      gsap.to([...flaps, tap, $('intro-sheen'), $('intro-seal')], { autoAlpha: 0, duration: 0.6, ease: 'none' });
      gsap.to($('intro-shade'), { autoAlpha: 0, duration: 0.6 });
      state = 'open';
      intro.classList.add('is-open');
      $('intro-continue').focus({ preventScroll: true });
      return;
    }

    tl = gsap.timeline({ onComplete: () => { state = 'open'; $('intro-continue').focus({ preventScroll: true }); } });
    tl.call(() => intro.classList.add('is-open'), null, 1.2);
    sheen?.kill();
    tl.to(tap, { autoAlpha: 0, duration: 0.35 })
      .to($('intro-sheen'), { opacity: 0, duration: 0.6 }, 0)
      // The navy seal gives first: a small press, then it lifts away.
      .to($('intro-seal'), { scale: 1.08, duration: 0.18, ease: 'power1.out' }, 0)
      .to($('intro-seal'), { scale: 0.7, y: 70, rotation: 24, autoAlpha: 0, duration: 0.55, ease: 'power2.in' }, 0.18)
      .addLabel('open', 0.5);

    // Peel order from the reference: left first, then right, bottom, top last.
    const plan = [
      ['left', 0, { rotationY: -118, x: '-62%' }],
      ['right', 0.16, { rotationY: 118, x: '62%' }],
      ['bottom', 0.32, { rotationX: 118, y: '58%' }],
      ['top', 0.5, { rotationX: -118, y: '-58%' }],
    ];
    plan.forEach(([side, at, to]) => {
      const f = flap(side);
      const light = f.querySelector('.flap__light');
      tl.to(f, { ...to, duration: 2.0, ease: 'power2.inOut' }, `open+=${at}`)
        // Catches the light as it tilts toward the camera, then turns past it.
        .to(light, { opacity: 0.6, duration: 0.7, ease: 'sine.in' }, `open+=${at + 0.15}`)
        .to(light, { opacity: 0.1, duration: 0.8, ease: 'sine.out' }, `open+=${at + 0.85}`);
    });
    tl.to($('intro-shade'), { autoAlpha: 0, duration: 1.8, ease: 'power1.inOut' }, 'open+=0.4')
      .set(flaps, { autoAlpha: 0 }, 'open+=2.6')
      .addLabel('text', 'open+=1.75')
      .to($('intro-dear'), { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power2.out' }, 'text')
      .to(chars, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.9, stagger: 0.055, ease: 'power2.out' }, 'text+=0.5')
      .to(lateCopy, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.25, ease: 'power2.out' }, '>-0.2');
  }

  // --- Reply side: the card turns over to the RSVP --------------------------
  // The page's RSVP body is borrowed for this scene and put back on close, so
  // there is one form, one state, and guests can still change it later.
  const homeMarker = document.createComment('rsvp home');
  function toReply() {
    // Continue can be tapped while the last words are still settling: finish the reveal first.
    if (state === 'opening') tl?.progress(1);
    if (state !== 'open') return;
    if (!replyBody) return close();
    state = 'reply';
    replyBody.parentNode.insertBefore(homeMarker, replyBody);
    $('intro-rsvp-slot').appendChild(replyBody);
    const reply = $('intro-reply');
    reply.hidden = false;
    const focusTitle = () => $('intro-reply-title').focus({ preventScroll: true });
    if (reducedMotion) {
      gsap.timeline({ onComplete: focusTitle })
        .to($('intro-copy'), { autoAlpha: 0, duration: 0.35, ease: 'none' })
        .fromTo(reply, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45, ease: 'none' });
      return;
    }
    tl = gsap.timeline({ onComplete: focusTitle })
      .to($('intro-copy'), { rotationY: -90, autoAlpha: 0, duration: 0.5, ease: 'power2.in' })
      .fromTo(reply, { rotationY: 90, autoAlpha: 0 }, { rotationY: 0, autoAlpha: 1, duration: 0.65, ease: 'power2.out' })
      .from(reply.querySelectorAll('.intro__reply-script, .intro__reply-title, .rsvp__intro, .rsvp__card, .soon, .intro__enter'), { y: 10, autoAlpha: 0, stagger: 0.07, duration: 0.45, ease: 'power2.out' }, '-=0.25');
  }

  function returnReplyBody() {
    if (homeMarker.parentNode) homeMarker.parentNode.replaceChild(replyBody, homeMarker);
  }

  function close() {
    if (state === 'closing') return;
    state = 'closing';
    tl?.kill();
    sheen?.kill();
    onLeave();
    const finish = () => {
      document.documentElement.classList.remove('has-invite');
      intro.hidden = true;
      gsap.set(intro, { clearProps: 'all' });
      returnReplyBody();
      document.getElementById('site').focus({ preventScroll: true });
      onDone();
    };
    if (reducedMotion) {
      gsap.to(intro, { autoAlpha: 0, duration: 0.5, ease: 'none', onComplete: finish });
      return;
    }
    // The card slides up like a sheet lifted off the pile, uncovering the page beneath.
    document.documentElement.classList.add('intro-leaving');
    gsap.timeline({ onComplete: () => { document.documentElement.classList.remove('intro-leaving'); finish(); } })
      .to(intro, { yPercent: -104, duration: 1.15, ease: 'power3.inOut' })
      .fromTo('.column', { y: 60, rotationX: 6, transformOrigin: '50% 0%' }, { y: 0, rotationX: 0, duration: 1.2, ease: 'power3.out', clearProps: 'transform' }, 0.25);
  }

  tap.addEventListener('click', open);
  stage.addEventListener('click', open);
  $('intro-continue').addEventListener('click', toReply);
  $('intro-enter').addEventListener('click', close);
  $('intro-skip')?.addEventListener('click', close); // Skip may be removed from the markup
  intro.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}
