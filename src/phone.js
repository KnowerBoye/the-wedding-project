// Ghana phone numbers → E.164 (+233XXXXXXXXX). Accepts 0XX XXX XXXX,
// +233 XX XXX XXXX, 233…, 00233…, with spaces, dashes, dots or brackets.
// National significant numbers are 9 digits starting 2 (mobile), 3 (fixed) or 5 (mobile).
export function normaliseGhanaPhone(input) {
  const s = String(input || '').replace(/[\s\-().]/g, '');
  const m = s.match(/^(?:\+233|00233|233)0?([235]\d{8})$/) || s.match(/^0([235]\d{8})$/);
  return m ? `+233${m[1]}` : null;
}

// +233241234567 → 024 123 4567
export function formatGhanaPhone(e164) {
  const n = e164.replace('+233', '0');
  return `${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6)}`;
}
