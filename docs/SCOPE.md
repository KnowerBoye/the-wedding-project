# Scope for #DeeRoy26 (Robert & Dora, 5 December 2026)

This project uses a reduced version of the general [PRD](PRD.md). Where this file and the PRD disagree, this file wins.

## Decisions

- **One wedding, one-off build.** No multi-wedding support, no roles or permissions.
- **Static content, small backend.** All wedding details live in [`content/wedding.json`](../content/wedding.json). There is no CMS and no story editor. Firebase (Firestore + Storage) handles only RSVPs and guest photo uploads (decided 2026-10-25). Config comes from `VITE_FIREBASE_*` env vars; without them those two sections show "opening soon" and the rest of the site works.
- **Admin dashboard: undecided.** Don't build one yet. If it's needed later, the likely minimum is a password-protected page that lists submissions, exports them, and approves or hides them.
- **One venue, ceremony only.** Kingdom Hall of Jehovah's Witnesses, Kasoa, Ofaakor. The programme runs from 10:45 to photography at 11:50.
- **Theme:** burgundy and navy blue.
- **Intro plays once per invite** (2026-10-25). The envelope opening plays on the first visit for a token, recorded in localStorage (`deeroy26:opened:<token>`). Later visits go straight to the page with the personal greeting. A "Replay invitation" link in the footer adds `replay=1` to play it again. If storage is unavailable, it plays every time.
- **RSVP = name, phone, attending** (2026-10-25). The phone must be a Ghana number and is normalised to E.164 (`+233…`), and it's required whatever the answer. "Will you attend?" is a required choice (Yes, joyfully / Regretfully, no), stored as `attending: boolean` and validated in `firestore.rules`; the thank-you message differs by answer (the couple confirmed they want the choice). One Firestore document per invite token (or per browser for plain visits), so resubmitting updates the response. Guests can't read RSVPs back; the couple reads them in the Firebase console.
- **RSVP is part of the cinematic invite** (2026-10-25, user request). After "You're cordially invited", Continue turns the card over to a reply side with the RSVP form, then "Enter the celebration" opens the page. It's the same form (moved, not copied), so the page section shows the guest's reply and lets them change it. Returning invite guests (who skip the opening) use the page section.
- **RSVP is for invite links only, and closes on the wedding day** (2026-10-25, user request). Plain visits never see it. From the wedding day on (Accra time; `rsvp.closesOn` in `wedding.json` can set an earlier date), it's hidden everywhere, including the reply side of the opening, so on the day the site reads as the programme. On the page it sits near the top, right after the greeting and monogram.
- **The RSVP form is never part of the page** (2026-10-25, user request). The page only shows a short "Kindly reply" prompt with an RSVP button ("View or change your RSVP" once sent). The button opens the form on its own full-screen paper card, which slides up over the page; Close, "Back to the invitation" or Escape returns to the page. In the opening, the form is on the card's reply side.
- **Photo moderation in the Firebase console** (2026-10-25, confirmed by the couple). Uploads stay `status: "pending"`; the couple approves by setting `status` to `"approved"` in Firestore → `photos`. Steps are in the README. No admin UI.
- **Guest photo uploads** (2026-10-25). Images only (JPEG/PNG/WebP/HEIC), resized to 2560px on the long edge in the browser, 15 MB cap. Each upload gets a Firestore `photos` record with `status: "pending"`. There's no public gallery, and Storage denies public reads.
- **No seat-reservation notice** (2026-10-25). The intro card and the page no longer mention seats. `seats` stays in `guests.json` for the couple's own planning, and the per-token JSON no longer publishes it.
- **Appreciation card** replaces the old closing "Thank you!": the couple's exact text, with THANK YOU as the centrepiece (stored in `closingRemarks` in `wedding.json`).

## Navy must have a visible structural role (feedback, 2026-10-25)

The user felt navy blue was missing from the theme. Burgundy and navy are BOTH the couple's colours — navy must not be reduced to a minor token. Ref 01 is heavily burgundy; don't copy that balance. Give navy a real, visible role. Use judgement, but for example:
- At least one full-width band in navy (not only burgundy bands), e.g. the countdown or the programme section.
- Navy for the R | D monogram and/or section headings and thin rules.
- Navy as a second ink colour for small caps, icons, and pill-button outlines.
- A deliberate navy+burgundy pairing (e.g. a navy monogram on a burgundy band) so both read as the couple's colours.

Keep the light paper ground — do not darken backgrounds.

## Design direction (feedback, 2026-10-25)

The first design was rejected. The functionality is mostly there, but the look is wrong and parts are missing (we'll go through them). The new direction:

- **Cinematic first load for invite links.** Opening a personal invite link plays a cinematic, full-screen website intro, which is the invitation story. It's not a plain landing page.
- **Colour.** Burgundy and navy are accent colours only. Backgrounds stay light: white, off-white, soft greys, or whatever suits paper.
- **Imagery.** Use stock photography and decorative PNG elements, such as florals, ribbons, wax seals, torn edges and paper textures. Only use stock with a clear free licence (for example Unsplash or Pexels), and keep a record of sources in `assets/ASSETS.md`.
- **Paper feel throughout.** The whole site should look and behave like paper: textured stationery surfaces, and transitions between sections or pages like turning, folding or sliding sheets. It shouldn't look like a generic scrolling web page.
- **References are coming.** The user will add reference images and videos. Build from those before redesigning. For videos, pull frames with `ffmpeg`.

### Reference 01: `references/ref-01-marcos-mariana-layout.jpg`

This is a single-column mobile invitation, effectively one long sheet of paper. What to take from it:

- **Ground:** warm off-white paper with a faint texture. Pages sit on a neutral grey backdrop with a small margin, like a sheet on a table.
- **Accent as bands:** deep burgundy appears as full-width colour blocks (hero envelope, countdown, music player, gifts/RSVP panel) that alternate with paper sections. Text on burgundy is white or cream. For us, navy is the second accent: icons, rules, small type, maybe one band.
- **Hero:** a burgundy envelope with its flap showing, script names, and the date underneath. This is an obvious starting frame for the cinematic intro, where the envelope opens.
- **Watercolour florals:** muted burgundy, dusty pink and sage florals (transparent PNG) sit on section seams to soften the transition between bands and paper.
- **Typography:** a flowing script for names and accent phrases ("¡Muchas Gracias!"), a classic serif with spaced small caps for headings, and a serif for body text. A monogram ("M | M", for us "R | D") with a thin divider.
- **Content blocks, in order:** scripture quote (Col 3:14, which suits a JW wedding), monogram, "We're getting married", photo, music player, parents' names, countdown in DAYS : HOURS : MIN : SEC, photo, venue with a "View location" pill button, vertical timeline with line icons on alternating sides, dress code with silhouette icons, gift suggestion with an envelope icon, RSVP button, thank-you in script, final photo.
- **Details:** thin line icons in one style, pill buttons (burgundy on paper, outlined on burgundy), generous whitespace, centred alignment throughout.

**For us:** the music player block doesn't fit our programme (Kingdom songs, no autoplay), and there's no accommodation. Everything else maps onto our content.

### Reference 02 + 03: the cinematic opening

- `references/ref-02-envelope-embossed.jpg` (1080×1920) is the closed envelope: deep burgundy card, tone-on-tone **embossed** florals, and four flaps meeting in an X at the centre. There's no wax seal. This image is the first frame.
- `references/ref-03-opening-animation.mp4` (720×1280, 35s) is the motion reference. **Use only the first ~3.5s**, plus the text reveal right after it.

Breakdown of the video, with frames taken every 0.2s:

| Time | What happens |
|---|---|
| 0 – 1.0s | Held still on the closed envelope. A slight light shift, nothing else moves. |
| ~1.0 – 1.4s | The left flap starts lifting first. As it rotates towards the camera it **catches the light** and turns lighter rose. |
| ~1.4 – 2.4s | All four flaps peel outward from the centre: left and right swing to the sides, the top folds up, the bottom folds down. A cream paper **X-shaped gap** opens in the middle, with soft shadows under each flap. |
| ~2.4 – 3.4s | The flaps keep travelling off-frame. The top flap goes last. The whole screen becomes the cream inner card. |
| ~3.4 – 6s | On the plain cream paper (soft light gradient, faint paper speckle), the text **fades/blurs in letter by letter**: "YOU'RE" (spaced serif caps), "*cordially*" (script), "INVITED" (serif caps), all in muted burgundy and centred. |

**Implementation notes:**
- Build it as four flap layers (top, bottom, left, right). Cut each from the embossed artwork, either by masking the reference image or by sourcing or generating a matching full-resolution texture.
- Animate each flap with a 3D `rotateX`/`rotateY` (`perspective` on the parent, `transform-origin` on the outer edge), a brightness or gradient overlay that lightens as the flap tilts towards the viewer, and a drop shadow onto the card underneath. Stagger: left first, then right, bottom and top, about 0.1–0.2s apart. Use an ease-in-out curve over about 2s.
- Underneath sits the cream card, which is the first scene of the story. For us, swap the copy to "Dear {Guest name}" followed by "You're *cordially* invited", revealed with a per-letter blur-to-sharp and opacity stagger.
- **Start:** play on tap ("Tap to open") rather than automatically. That gives the guest something to do, and it's the moment to offer sound if music is ever added. Skip should be visible from frame 0.
- **Reduced motion:** cross-fade from the envelope straight to the card text, with no 3D motion.
- **Mobile performance:** compress the envelope texture to a WebP about 1080px tall, preload it before showing "Tap to open", and fall back to a flat burgundy colour if it fails to load.
- **Licence:** both refs come from Pinterest/Klickpin. Use them as references only. Production artwork needs a licensed or self-made texture.

## Carried over from the PRD

- The personalized animated invitation story, with skip, reduced-motion support, no audio autoplay, and graceful fallback when media fails to load.
- Mobile-first homepage: names, date, countdown, venue and map link, programme, photography order, announcement, gifts, closing remarks.
- Unpredictable per-guest invitation tokens that don't expose guest data.

## Open questions

- **Song requests:** probably drop them. There's no reception and no DJ.
- **Reception or meal:** is there one after photography?
- **Digital gifts:** the PRD lists online payments as out of scope. The proposal is a link to a Paystack payment page, which keeps payment handling off our side.
- **Guestbook:** still undecided. It would reuse the same Firebase setup.
- **Public gallery:** approval exists (`status: "approved"`), but nothing shows approved photos yet. Build a gallery later?
- **Spam protection:** the rules validate every field, but anyone with the site can write. Consider Firebase App Check (reCAPTCHA Enterprise) before sharing links widely.
- **Intro Skip button:** someone commented out the intro's Skip button in `index.html`, but the original spec asked for Skip from frame 0. Keep it removed, or restore it?
- **Cash-gift link:** "Send a cash gift" is always shown but has no `href` until a Paystack URL is set. Hide it until then, or keep it visible?
- **Exact display names:** the venue, and the congregation groups in the photography order (West Ofaakor, Gomoa Bewadze).
- **Song titles:** whether to show titles next to songs 131 and 132.

## Pending content

- ~~GPS coordinates for the venue~~ (received: Google Maps pin https://maps.app.goo.gl/ZXksJfZp2GnLf26b6, at 5.57938, -0.450519)
- Lyrics or sheet-music links for songs 131 and 132
- Paystack details
- ~~Closing remarks text~~ (received: the appreciation text)
- Firebase project config (`VITE_FIREBASE_*`), and deploying the rules
- Guest list (names and seat counts), if we keep personalized invitations
- Story text, photos and music
