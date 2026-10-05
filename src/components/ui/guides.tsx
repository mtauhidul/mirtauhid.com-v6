/**
 * Blueprint layer. Lines sit just outside the content edges (same container math as <Container>),
 * so every mark lines up with the real layout.
 */

/** Two vertical hairlines framing the whole site. Fixed, behind content. */
export function GuideLines() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="mx-auto h-full max-w-6xl px-6 md:px-10">
        <div className="border-line -mx-3 h-full border-x md:-mx-5" />
      </div>
    </div>
  );
}

function Plus({ className }: { className: string }) {
  return (
    <span
      className={`text-fg-subtle absolute size-3.5 -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(currentColor, currentColor), linear-gradient(currentColor, currentColor)",
        backgroundSize: "100% 1px, 1px 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

/** Section divider: hairline between the guides, with a crosshair where it meets each guide. */
export function Crosshairs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-0">
      <div className="relative mx-auto h-0 max-w-6xl">
        <div className="bg-line absolute inset-x-3 h-px md:inset-x-5" />
        <Plus className="top-0 left-3 md:left-5" />
        <Plus className="top-0 right-3 translate-x-1/2! md:right-5" />
      </div>
    </div>
  );
}
