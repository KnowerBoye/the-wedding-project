// Gives every guest without a token an unguessable one, then prints each invite link.
// Usage: npm run tokens [-- https://your-site.example]
import { readFileSync, writeFileSync } from 'node:fs';
import { randomBytes } from 'node:crypto';

const file = new URL('../content/guests.json', import.meta.url);
const base = (process.argv[2] || 'http://localhost:5173').replace(/\/$/, '');
const data = JSON.parse(readFileSync(file, 'utf8'));
const used = new Set(data.guests.map((g) => g.token).filter(Boolean));

const newToken = () => {
  let t;
  do t = randomBytes(9).toString('base64url'); while (used.has(t));
  used.add(t);
  return t;
};

let added = 0;
for (const g of data.guests) {
  if (!g.token) { g.token = newToken(); added++; }
}
writeFileSync(file, JSON.stringify(data, null, 2) + '\n');

console.log(`${added} new token(s).\n`);
for (const g of data.guests) console.log(`${g.name.padEnd(28)} ${g.seats} seat(s)  ${base}/?i=${g.token}`);
