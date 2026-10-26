# Assets: sources and licences

Every image the site ships is in `public/img/`. All of it is either made for this project or public-domain / freely licensed stock. Nothing from the Pinterest or Klickpin references in `references/` is shipped.

## Photos (placeholders until the couple's own photos arrive)

| File | What | Source | Licence |
|---|---|---|---|
| `img/photos/couple-hero.webp` | Groom kissing bride on the forehead | [Pexels #26711184](https://www.pexels.com/photo/groom-kissing-bride-on-forehead-at-wedding-26711184/), photo by Pierre Habumuremyi | [Pexels licence](https://www.pexels.com/license/): free to use, attribution not required |
| `img/photos/couple-steps.webp` | Couple on a staircase | [Pexels #32694832](https://www.pexels.com/photo/elegant-wedding-couple-on-staircase-outdoors-32694832/), photo by Chris Wade Ntezicimpa | Pexels licence |
| `img/photos/couple-garden.webp` | Couple under a tree | [Pexels #34371784](https://www.pexels.com/photo/elegant-outdoor-wedding-couple-portrait-34371784/), photo by King Shooter | Pexels licence |

All three are resized to 800px wide WebP (q70, about 50–75 KB). To swap in real photos, drop new files in `public/img/photos/` and update `photos` in `content/wedding.json`.

## Florals (transparent WebP)

| File | Made from | Licence |
|---|---|---|
| `img/floral-seam-a.webp`, `img/floral-seam-b.webp` | Cut-outs from Pierre-Joseph Redouté's *Les Roses* (1817–24), hand-coloured stipple engravings in the Cleveland Museum of Art Open Access collection, via Wikimedia Commons. Plates used: Rosa Hudsoniana Salicifolia (1965.292), Rosa indica (1955.473), Rosa villosa pomifera (1955.470), Pompon Rose (1943.142), Provence or French Rose (1943.139), Rosa Indica Stelligera (1943.140), and Star-glory Morning-glory (1939.292), whose violet blooms are shifted to navy (`tools/art/navy_bloom.py`) so the seams carry both theme colours. | **CC0 / public domain.** Example file page: [Rosa Hudsoniana Salicifolia](https://commons.wikimedia.org/wiki/File:Henry_Joseph_Redout%C3%A9_-_Les_Roses-_Rosa_Hudsoniana_Salicifolia_-_1965.292_-_Cleveland_Museum_of_Art.jpg) |

The paper background was keyed out, the colours slightly desaturated, and the sprigs composed into horizontal seam sprays. Scripts: `tools/art/cut.py` (background removal) and `tools/art/florals.py` (composition).

## Envelope and paper textures (made for this project)

| File | What | How |
|---|---|---|
| `img/envelope-emboss.webp` | Burgundy card with tone-on-tone embossed florals (1080×1920, 78 KB). Used for the opening flaps and the hero band. | Generated with `tools/art/emboss.py`: the Redouté silhouettes become a height map, lit from the top left, on burgundy with paper-fibre noise. It's an original texture, not derived from the reference image. |
| `img/paper-cream.webp` | Off-white paper tile (400px, seamless) | `tools/art/paper.py` (procedural noise + fibres) |
| `img/paper-grey.webp` | Grey "table" behind the sheet | `tools/art/paper.py` |
| `img/paper-grain.webp` | Neutral grain, blended over the burgundy bands with `soft-light` | `tools/art/paper.py` |

## Fonts (self-hosted via npm, SIL Open Font Licence)

- Cormorant Garamond (`@fontsource/cormorant-garamond`): headings in spaced caps, and body text
- Pinyon Script (`@fontsource/pinyon-script`): names and accent phrases

## Icons

Inline SVG line icons drawn for this project (`src/icons.js`).

## Retired

`legacy/` holds the rejected first design (`index.html`, `styles.css`, `script.js`, placeholder SVGs) for reference. Nothing in it is used.
