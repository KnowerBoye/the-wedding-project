// The RSVP's own card, opened from the page. The form is borrowed from its
// hidden home in the RSVP section while the card is open, so the page itself
// never shows the form.
const $ = (id) => document.getElementById(id);

export function initReplySheet() {
  const sheet = $('reply-sheet');
  const body = $('rsvp-body');
  const home = $('rsvp-home');
  const openBtn = $('rsvp-open');
  let opener = null;

  function open() {
    if (!sheet.hidden) return;
    opener = document.activeElement;
    $('sheet-rsvp-slot').appendChild(body);
    sheet.hidden = false;
    document.documentElement.classList.add('sheet-open');
    sheet.offsetHeight; // start the slide from the closed position
    sheet.classList.add('is-open');
    $('sheet-reply-title').focus({ preventScroll: true });
  }

  function close() {
    if (sheet.hidden || !sheet.classList.contains('is-open')) return;
    sheet.classList.remove('is-open');
    const done = () => {
      sheet.hidden = true;
      home.appendChild(body);
      document.documentElement.classList.remove('sheet-open');
      opener?.focus?.({ preventScroll: true });
    };
    const ms = parseFloat(getComputedStyle(sheet).transitionDuration) * 1000 || 0;
    setTimeout(done, ms);
  }

  openBtn.addEventListener('click', open);
  $('reply-sheet-close').addEventListener('click', close);
  $('reply-sheet-done').addEventListener('click', close);
  // On the document, not the sheet: focus can drop to <body> (e.g. the submit
  // button is disabled while sending) and Escape must still close it.
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) close(); });

  // Once a reply exists, the page prompt says so.
  const reflect = ({ name, attending }) => {
    $('rsvp-prompt').textContent = attending === false
      ? `Thank you${name ? `, ${name}` : ''}. We have your reply.`
      : `Thank you${name ? `, ${name}` : ''}. We have your RSVP.`;
    openBtn.textContent = 'View or change your RSVP';
  };
  document.addEventListener('rsvp:sent', (e) => reflect(e.detail));
  return { reflect };
}
