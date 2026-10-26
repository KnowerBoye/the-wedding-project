import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const GUESTS = resolve(__dirname, 'content/guests.json');
const TOKEN = /^[A-Za-z0-9_-]{8,64}$/;

const loadGuests = () => JSON.parse(readFileSync(GUESTS, 'utf8')).guests.filter((g) => TOKEN.test(g.token || ''));
// Only the name is published; seats stay in the private list.
const publicEntry = (g) => JSON.stringify({ name: g.name });

// Serves /i/<token>.json in dev and writes one file per guest at build time,
// so the guest list itself is never shipped to the browser.
function guestTokens() {
  return {
    name: 'guest-tokens',
    configureServer(server) {
      server.watcher.add(GUESTS);
      server.middlewares.use((req, res, next) => {
        const m = req.url.match(/^\/i\/([^/?]+)\.json/);
        if (!m) return next();
        const guest = loadGuests().find((g) => g.token === m[1]);
        res.setHeader('Cache-Control', 'no-store');
        if (!guest) { res.statusCode = 404; return res.end('{}'); }
        res.setHeader('Content-Type', 'application/json');
        res.end(publicEntry(guest));
      });
    },
    generateBundle() {
      for (const g of loadGuests()) {
        this.emitFile({ type: 'asset', fileName: `i/${g.token}.json`, source: publicEntry(g) });
      }
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [guestTokens()],
  build: { assetsInlineLimit: 0 },
});
