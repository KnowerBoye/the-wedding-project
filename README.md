# #DeeRoy26: Robert & Dora, 5 December 2026

Static wedding invitation site. Vite, plain HTML/CSS/JS and GSAP. No backend.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static site in dist/
```

- **Content:** everything is in `content/wedding.json`. Empty fields (parents, dress code, closing remarks) hide their block. Pending items carry a `_todo` note.
- **Personal invites:** `content/guests.json` lists guests. `npm run tokens` gives each new guest a random token and prints their link (`/?i=<token>`); pass your live URL to print real links: `npm run tokens -- https://example.com`. The build writes one tiny `i/<token>.json` per guest, so the full list never ships. A plain visit (no `?i=`) skips the opening and greets "Dear friends".
- **First open only:** the envelope plays once per invite token (stored in localStorage); the footer's "Replay invitation" link plays it again.

## Firebase (RSVPs and guest photos)

The site works without Firebase: the RSVP and photo sections just show "opening soon". To switch them on:

1. Create a Firebase project. Add a **Web app**, enable **Cloud Firestore** (production mode) and **Storage**.
2. `cp .env.example .env.local` and fill in the `VITE_FIREBASE_*` values from Project settings → Your apps. These identify the project and are public by design; the rules are what protect the data.
3. Install the CLI and connect the folder:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use --add        # pick the project
   ```
4. Deploy the security rules (do this before sharing any links):
   ```bash
   firebase deploy --only firestore:rules,storage
   ```
5. Optional, to host the site on Firebase too: `npm run build`, then `firebase deploy --only hosting` (serves `dist/`). Any static host works; set the same env vars at build time.

What the rules allow:
- `rsvps/{token-or-browser-id}`: create/update only. Fields are `name` (2–80 chars), `phone` (`+233` E.164), `attending` (boolean), optional `token` (must equal the document ID), and server `createdAt`/`updatedAt`; `createdAt` can't change. **No reads.**
- `photos/{uuid}`: create only, `status` must be `"pending"`, and the path/type/size must match the Storage object. **No reads, updates or deletes.**
- Storage `uploads/{owner}/{uuid}.{ext}`: images only (JPEG/PNG/WebP/HEIC), up to 15 MB, create only. **No public reads.**

### Reading RSVPs

Firebase console → **Firestore Database** → **Data** → collection **`rsvps`**. Each document is one response: `name`, `phone` (+233…), `attending` (`true` = coming, `false` = not coming), the invite `token` if there was one, and `createdAt`/`updatedAt`. When a guest resubmits, the same document is updated. To export, use the console's query view or `gcloud firestore export`.

### Approving guest photos

Every upload lands as `status: "pending"`, and nothing is public.

1. Firebase console → **Firestore Database** → **Data** → collection **`photos`**. Each document is one photo, named by a random id.
2. To see the image, copy the document's `path` (e.g. `uploads/X9kViEaAFoAm/1b2c….jpg`), then open **Storage** → **Files** → `uploads` → that folder → the file. The preview panel shows it.
3. To approve: back in the `photos` document, click the **`status`** field's value, change `pending` to `approved` (type string), then **Update**.
4. To reject: leave it `pending`, or delete both the `photos` document and the Storage file.

Console edits bypass the security rules, so this works even though guests can never change `status`. There's no public gallery yet; when one is built it will show only `approved` photos. Before sharing links widely, consider turning on App Check to slow down spam.

- **Design notes:** `docs/DESIGN.md`. **Scope:** `docs/SCOPE.md`. **Image sources and licences:** `assets/ASSETS.md`.
