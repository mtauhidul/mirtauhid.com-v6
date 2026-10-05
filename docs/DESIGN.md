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

## Navigation

No navbar. Floating wordmark (top-left), "Start a project" link (top-right), and an edge section index on screens 1280px and wider. Text uses `mix-blend-difference` so it stays legible over content.

## Motion

Easing `cubic-bezier(0.22, 1, 0.36, 1)`. Hero lines slide up from a mask; sections fade and rise once. Hovers 300-700ms. CSS motion respects reduced-motion.
