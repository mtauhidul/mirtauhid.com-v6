# Design system

Dark only. Minimal, smooth, high-contrast. Live reference: `/design`.

## Color (contrast vs `bg`)

| Token       | Value     | Use                          | Contrast |
| ----------- | --------- | ---------------------------- | -------- |
| `bg`        | `#09090b` | page background              | —        |
| `surface`   | `#101013` | cards, panels                | —        |
| `elevated`  | `#17171c` | hover, raised elements       | —        |
| `fg`        | `#f4f4f5` | headings, primary text       | 18:1     |
| `fg-muted`  | `#b4b4bd` | body copy                    | 9.6:1    |
| `fg-subtle` | `#8b8b96` | metadata, captions           | 5.6:1    |
| `accent`    | `#9ca3ff` | links, highlights (one only) | 8.6:1    |

Text is off-white rather than `#fff` to reduce glare on black. Hairlines are white at 8% / 16%.

## Type

- **Instrument Serif**: display headlines (`font-display`), italic for emphasis.
- **Geist Sans**: headings, body, UI (`font-sans`). Body 17px / 1.7.
- **Geist Mono**: labels, metadata, code (`font-mono`, `.eyebrow`).

## Motion & a11y

Easing `--ease-smooth`; 300ms transitions. Reduced-motion is respected globally. Focus rings use the accent.

## Components (`src/components/ui`)

`Container`, `Section`, `Button` / `buttonClasses`, `Badge`.
