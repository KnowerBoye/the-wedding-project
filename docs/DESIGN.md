# Design notes (redesign, 2026-10-25)

Working notes for the cinematic redesign. `docs/SCOPE.md` remains the source of truth. This file records how the direction there was translated into the build. It loosely follows the `cinematic-ui` process; its reference library isn't installed, so these choices are from first principles.

## Decisions

- **Start mode:** screenshot or reference. Refs 01–03 define the layout and the opening, and placeholders are allowed (stock couple photos).
- **Film language:** period drama about letters on paper (think Joe Wright's *Atonement* or *Pride & Prejudice*): handled stationery, warm daylight on paper, intimacy over spectacle. This stays internal and never appears in the UI.
- **Composition family:** a vertical sheet. One long column of paper on a grey table, the opposite of a full-bleed landing page. Shell bans: no top nav, no card grids, no dark full-screen sections, no gradient hero.
- **Palette:** cream paper `#f6f1e8`, burgundy `#5e1626` / `#46101c`, navy `#243152`, table grey `#d6d4d1`. See the colour roles below.

## Colour roles (updated 2026-10-25: navy as a co-accent)

Target split, measured on the full mobile page with the grey table excluded: about **60 / 25 / 15** paper / burgundy / navy. Before this change it measured 72 / 26 / 2; it now measures 62 / 25 / 13.

| Role | Burgundy (lead) | Navy (co-accent) |
|---|---|---|
| Full-width bands | Hero envelope, date + countdown, gifts | Photography order |
| Opening | Embossed envelope, inner-card type | Wax seal (R \| D), flap liners, double-rule card frame, date line |
| Paper sections | Filled pills (View location, Send RSVP), script accents, timeline icons, THANK YOU | Spaced-caps headings, timeline rule and rings, times, song chips (outline pills), "D" and the divider of the monogram, washi tape, Replay link, RSVP card frame and labels, upload pocket flap and progress lines, appreciation rules and frame |
| Seams | Red and pink Redouté roses | Morning glories shifted to navy (`tools/art/navy_bloom.py`) |

Rules:
- The page rhythm alternates paper → burgundy → paper → navy → paper → burgundy. A burgundy band never touches a navy band; there's always paper and a floral seam between them.
- Text on navy is cream (#f6f1e8, about 12:1) or dusty rose `#e7b9c1` for the index numbers (about 7:1). Navy on cream is about 11:1. All pass AA.
- Navy small caps on burgundy were considered for the countdown labels and rejected: about 1.3:1 contrast, which fails AA.
- **Type:** Pinyon Script for names and accents, Cormorant Garamond in spaced caps for headings, Cormorant for body.

## Storyboard

| Scene | Signature composition | Entrance |
|---|---|---|
| Opening (invite links) | The embossed envelope fills the screen; four flaps peel outward in 3D, catching rose light, revealing the cream card | Timed to ref-03; letters blur in one by one |
| Hero band | Envelope with its flap down, script names on the flap, date on the body | The flap swings down; the names are written in |
| Greeting / scripture / monogram | Centred stationery: "Dear {name}", Col 3:14, R \| D | The sheet is laid down (tips back, settles) |
| Photos | A print with a white border and a slight tilt | Dealt from the side |
| Date + countdown band | DAY / 05 / MONTH bar, DD : HH : MM : SS | Unfolds from its top crease |
| Venue | Hall icon, time, name, pill | Rise (fade-up #1) |
| Programme | Central rule; stops alternate sides with line icons; song chips | The rule draws down, stops slide in from their side |
| Photography order (navy band) | Numbered index cards in two columns, cream on navy | Cards flip up in sequence |
| Announcement | Taped note, slightly rotated | Dropped and pinned |
| RSVP (invite links only, until the wedding day; the form only ever appears on a full-screen card: the invitation's reply side, or a reply card that slides up from the page's "Kindly reply" prompt) | Scene 2 of the opening: Continue turns the card over to its reply side ("Kindly reply" in script, RSVP), then "Enter the celebration". The same form returns to the page afterwards for later changes. A reply card with a navy double rule; underline-only fields; "Will you attend?" as two round paper ticks (navy ring, burgundy dot); one burgundy pill | Laid down |
| Gifts | Burgundy band, outlined pills | Unfolds from the bottom crease |
| Your photos | A paper pocket with a navy-lined flap: tap to add photos; polaroid thumbs with a thin navy progress line under each | Pocket slides up, flap settles |
| Appreciation | Stationery card, navy + burgundy double frame, "With gratitude" in script, THANK YOU in burgundy spaced caps between navy hairlines with a ◆, R \| D | Card set down; THANK YOU opens out |
| Footer | Small monogram, hashtag | Rise (fade-up #2) |

Watercolour seams (Redouté roses) sit across every paper/band boundary and drift slightly against the scroll.

## Forms and states (RSVP, uploads)

- **Fields:** underline only, with the label in navy spaced caps above and a hint in italics below. Invalid fields get a burgundy-red underline (`#a3243b`).
- **Choice:** round ticks with a navy ring that fill with a burgundy dot, and a 44px tap height. A missing answer turns the rings red.
- **Status line:** one italic line above the button. The success wording differs for yes and no. Loading is ink-soft, success is navy with a ✓, error is red. Errors say whether anything was saved ("Nothing was saved").
- **Uploads:** each file shows a thumbnail, its name, and Waiting / Preparing / Uploading (a navy line fills) / Saving / Sent, or an error with Retry. Problems with the file itself (wrong type, too large) show no Retry, because retrying won't help.
- **Without Firebase config:** a dashed navy "opens soon" pill instead of the form or pocket.

## Motion rules

- One heavy interaction: the envelope. Everything else is a single paper gesture per section, with no two adjacent sections using the same one.
- Content is visible without JS. Entrance start states are applied only by GSAP.
- `prefers-reduced-motion`: the envelope cross-fades to the card, the card fades out, and no scroll entrances run.
- The opening runs envelope → "You're cordially invited" → the card turns over (rotateY, 1.2s; cross-fade with reduced motion) → RSVP → the card lifts off to the page.
- The opening plays once per invite token; "Replay invitation" in the footer brings it back.
- No audio, ever, unless the couple adds music later (the tap to open is the moment to offer it).
