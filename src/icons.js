// Thin line icons, one stroke style. Filled in wherever [data-icon] appears.
const svg = (body) =>
  `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const ICONS = {
  hall: svg('<path d="M8 22 24 10l16 12"/><path d="M12 19v19h24V19"/><path d="M20 38v-9h8v9"/><path d="M6 38h36"/><path d="M17 25h3M28 25h3"/>'),
  clock: svg('<circle cx="24" cy="24" r="14"/><path d="M24 16v8l5 4"/>'),
  people: svg('<circle cx="18" cy="17" r="4.5"/><circle cx="31" cy="17" r="4.5"/><path d="M9 36c0-6 4-10 9-10s9 4 9 10"/><path d="M27 27c1.2-.7 2.5-1 4-1 5 0 8 4 8 10"/>'),
  rings: svg('<circle cx="19" cy="28" r="9"/><circle cx="29" cy="28" r="9"/><path d="M16 14l3-4 3 4-3 3z"/>'),
  mic: svg('<rect x="19" y="8" width="10" height="18" rx="5"/><path d="M14 22a10 10 0 0 0 20 0"/><path d="M24 32v7M18 39h12"/>'),
  song: svg('<path d="M19 33V13l16-4v20"/><circle cx="15" cy="33" r="4"/><circle cx="31" cy="29" r="4"/><path d="M19 18l16-4"/>'),
  book: svg('<path d="M24 14c-4-3-9-3-15-2v24c6-1 11-1 15 2 4-3 9-3 15-2V12c-6-1-11-1-15 2z"/><path d="M24 14v24"/>'),
  camera: svg('<path d="M8 17h8l3-4h10l3 4h8v20H8z"/><circle cx="24" cy="26" r="6.5"/>'),
  gift: svg('<rect x="9" y="19" width="30" height="20"/><path d="M7 14h34v5H7zM24 14v25"/><path d="M24 14c-3-5-10-6-10-2s7 2 10 2c3 0 10 2 10-2s-7-3-10 2z"/>'),
  envelope: svg('<rect x="7" y="13" width="34" height="23"/><path d="M7 13l17 13 17-13"/>'),
  pin: svg('<path d="M24 41s12-12 12-21a12 12 0 0 0-24 0c0 9 12 21 12 21z"/><circle cx="24" cy="20" r="4"/>'),
  dress: svg('<path d="M14 40l5-16-4-8 5-6h8l5 6-4 8 5 16z"/>'),
};

export function paintIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    const icon = ICONS[el.dataset.icon];
    if (icon && !el.firstChild) el.innerHTML = icon;
  });
}

// Picks an icon for a programme item from its title.
export function iconFor(item) {
  const t = item.title.toLowerCase();
  if (item.songNumber) return 'song';
  if (t.includes('photo')) return 'camera';
  if (t.includes('couple')) return 'rings';
  if (t.includes('guest')) return 'people';
  if (t.includes('discourse')) return 'book';
  if (t.includes('chairman')) return 'mic';
  return 'clock';
}
