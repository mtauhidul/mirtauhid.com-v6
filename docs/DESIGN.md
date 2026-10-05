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

- **Guide lines** (`GuideLines`): two fixed hairlines just outside the content edges, fading out toward the top and bottom of the screen. A faint dashed horizontal line runs between the two guides 10% down, below the corner links, ending at a crosshair on each guide (like the section dividers); both fade out within the first 140px of scrolling.
- **Side hatching** (`SideHatch`, inside `GuideLines`): faint diagonal hatching in the margins outside the guides, strongest at the guide and fading outward and toward the screen top and bottom. Only visible when the viewport is wider than the content (about 1200px and up).
- **Crosshairs** (`Crosshairs`, inside `Section`): a divider with a `+` where it meets each guide, at the top of every section, plus a live annotation (`SectionAnnotation`, md+): `02 — About / width × height · y offset`.
- **Grid overlay** (`GridOverlay`): press `G` (hinted in the footer, no on-screen button). Shows the 12-column grid (4 on mobile) as dashed columns, outlines every section and lights up the annotations. A small toast confirms on/off. All 12-column section grids use `md:gap-x-10` so it matches the layout.

## Smooth scroll and heading reveals

- **Smooth scroll:** Lenis inertial scrolling (`SmoothScroll`). In-page anchors, the footer's back-to-top and the quick menu all glide through `scrollToId` (`src/lib/scroll.ts`).
- **Headings:** `SplitReveal` slides each word up out of a mask, staggered, once, when the heading scrolls into view. The in-view trigger sits on the unclipped outer element, because an observer on a clipped element never fires. Used by `SectionHeading` and the contact heading.

## Quick menu

`CommandPalette` (`Cmd/Ctrl+K`, or `/`): jump to sections, copy the email, open GitHub, toggle the grid. The "Menu" button sits at the top right beside Contact. It doubles as the mobile navigation.

## Motion

Easing `cubic-bezier(0.22, 1, 0.36, 1)`. Hero lines slide up from a mask; sections fade and rise once. Hovers 300-700ms. Animations always play (reduced-motion handling intentionally disabled).
