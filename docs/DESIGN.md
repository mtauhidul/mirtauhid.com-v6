# Design system

Dark only. Flat, sharp, typographic. No gradients, glows, pills or decorative effects. Live reference: `/design`.

## Color (contrast vs `bg`)

| Token       | Value     | Use                           | Contrast |
| ----------- | --------- | ----------------------------- | -------- |
| `bg`        | `#0b0b0c` | page background               | n/a      |
| `surface`   | `#121213` | image / panel fills           | n/a      |
| `elevated`  | `#1a1a1c` | hover fills                   | n/a      |
| `fg`        | `#f2f2ef` | headings, primary text        | 17.5:1   |
| `fg-muted`  | `#b0b0aa` | body copy                     | 9:1      |
| `fg-subtle` | `#85857f` | labels, metadata              | 5.2:1    |
| `accent`    | `#c6f432` | CTAs, key words, one per view | 15:1     |

Hairlines are white at 9% / 19%. Corners are square (3px on buttons).

## Type

- **Space Grotesk** (`.display`): headlines, tight tracking, large.
- **Geist**: body, 17px / 1.65.
- **JetBrains Mono** (`.label`): small uppercase labels, stack, metadata.

## Navigation & blueprint layer

No navbar. Floating wordmark (top-left) and "Contact" link (top-right), both `mix-blend-difference`.

Blueprint layer, all low contrast and aligned to the real container edges:

- **Guide lines** (`GuideLines`): two fixed hairlines just outside the content edges, fading out toward the top and bottom of the screen. The right guide is also the scroll indicator: it fills with the accent as you scroll, with a notch per section.
- **Crosshairs** (`Crosshairs`, inside `Section`): a divider with a `+` where it meets each guide, at the top of every section, plus a live annotation (`SectionAnnotation`, md+): `02 — About / width × height · y offset`.
- **Grid overlay** (`GridOverlay`): press `G` (hinted in the footer, no on-screen button). Shows the 12-column grid (4 on mobile) as dashed columns, outlines every section and lights up the annotations. A small toast confirms on/off. All 12-column section grids use `md:gap-x-10` so it matches the layout.

## Motion

Easing `cubic-bezier(0.22, 1, 0.36, 1)`. Hero lines slide up from a mask; sections fade and rise once. Hovers 300-700ms. Animations always play (reduced-motion handling intentionally disabled).
