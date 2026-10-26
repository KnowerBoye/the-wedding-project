import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Every section arrives like paper: laid down, dealt, unfolded, pinned.
// Adjacent sections never share an entrance. Content is visible without JS;
// start states are only applied here.
const ENTRANCES = {
  hero(el) {
    const tl = gsap.timeline();
    tl.from(el.querySelector('.hero__flap'), { rotationX: -70, transformOrigin: '50% 0%', duration: 1.3, ease: 'power3.out' })
      .from(el.querySelectorAll('.hero__name, .hero__amp'), { clipPath: 'inset(0 100% 0 0)', duration: 1.1, stagger: 0.25, ease: 'power2.inOut' }, 0.3)
      .from(el.querySelector('.hero__date'), { autoAlpha: 0, letterSpacing: '0.6em', duration: 1.2, ease: 'power2.out' }, 0.9);
    return tl;
  },
  // A sheet laid onto the table: tips back, then settles flat.
  lay(el) {
    return gsap.from(el, { rotationX: -14, y: 36, transformOrigin: '50% 100%', boxShadow: '0 30px 40px -20px rgba(40,20,25,.45)', duration: 1.1, ease: 'power3.out' });
  },
  // A photograph dealt onto the page from the side.
  deal(el) {
    const fromLeft = !el.classList.contains('print--tilt-r');
    return gsap.from(el, { x: fromLeft ? -120 : 120, rotation: fromLeft ? -9 : 9, autoAlpha: 0, duration: 1.1, ease: 'power3.out' });
  },
  // A folded band opens out from its top crease.
  unfold(el) {
    const tl = gsap.timeline();
    tl.from(el, { scaleY: 0.08, transformOrigin: '50% 0%', duration: 1.0, ease: 'power3.inOut' })
      .from(el.children, { autoAlpha: 0, y: 14, stagger: 0.1, duration: 0.6, ease: 'power2.out' }, 0.55);
    return tl;
  },
  'unfold-up'(el) {
    const tl = gsap.timeline();
    tl.from(el, { scaleY: 0.08, transformOrigin: '50% 100%', duration: 1.0, ease: 'power3.inOut' })
      .from(el.children, { autoAlpha: 0, y: -10, stagger: 0.08, duration: 0.6, ease: 'power2.out' }, 0.55);
    return tl;
  },
  rise(el) {
    return gsap.from(el.children, { autoAlpha: 0, y: 24, stagger: 0.08, duration: 0.8, ease: 'power2.out' });
  },
  // The rule is drawn down the page; each stop slides in from its own side.
  timeline(el) {
    const tl = gsap.timeline();
    tl.from(el.querySelector('.timeline'), { '--rule': 0, duration: 1.6, ease: 'power1.inOut' })
      .from(el.querySelectorAll('.timeline__item'), {
        autoAlpha: 0,
        x: (i, t) => (t.classList.contains('is-left') ? -30 : 30),
        stagger: 0.16,
        duration: 0.7,
        ease: 'power2.out',
      }, 0.2);
    return tl;
  },
  // Index cards flipping up one after another.
  index(el) {
    const tl = gsap.timeline();
    tl.from(el.querySelectorAll('.icon, .caps-heading, .fineprint'), { autoAlpha: 0, duration: 0.6 })
      .from(el.querySelectorAll('.photo-order li'), { rotationX: -90, transformOrigin: '50% 0%', autoAlpha: 0, stagger: 0.045, duration: 0.55, ease: 'back.out(1.6)' }, 0.2);
    return tl;
  },
  // The pocket slides up into place, then its flap settles.
  pocket(el) {
    const tl = gsap.timeline();
    tl.from(el.querySelectorAll('.script-accent, .caps-heading, .uploads__intro'), { autoAlpha: 0, y: 10, stagger: 0.08, duration: 0.6 })
      .from(el.querySelector('.pocket__label, .soon'), { y: 50, rotation: 3, autoAlpha: 0, duration: 0.8, ease: 'power3.out' }, 0.2)
      .from(el.querySelector('.pocket__flap'), { scaleY: 0, transformOrigin: '50% 0%', duration: 0.5, ease: 'power2.out' }, 0.8);
    return tl;
  },
  // The closing card is set down, then THANK YOU opens out.
  card(el) {
    const tl = gsap.timeline();
    tl.from(el.querySelector('.thanks-card'), { scale: 0.92, rotation: -2.5, autoAlpha: 0, duration: 1.0, ease: 'power3.out' })
      .from(el.querySelector('.thanks-card__centre'), { letterSpacing: '0.02em', autoAlpha: 0, duration: 1.2, ease: 'power2.out' }, 0.5);
    return tl;
  },
  // A note dropped and pinned with tape.
  pin(el) {
    const note = el.querySelector('.note');
    const tl = gsap.timeline();
    tl.from(note, { y: -60, rotation: -8, autoAlpha: 0, duration: 0.9, ease: 'back.out(1.4)' })
      .from(el.querySelector('.note__tape'), { scaleX: 0, duration: 0.35, ease: 'power2.out' }, 0.7);
    return tl;
  },
};

export function playEntrances() {
  document.querySelectorAll('.sheet[data-enter]').forEach((el) => {
    if (el.hidden) return;
    const make = ENTRANCES[el.dataset.enter];
    if (!make) return;
    const anim = make(el);
    if (el.dataset.enter === 'hero') return; // plays immediately
    anim.pause(0);
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => anim.play() });
  });

  // Florals drift slightly against the scroll, as if lying on a separate layer.
  document.querySelectorAll('.seam').forEach((seam) => {
    gsap.fromTo(seam, { y: 18 }, { y: -18, ease: 'none', scrollTrigger: { trigger: seam, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

export function refresh() {
  ScrollTrigger.refresh();
}
