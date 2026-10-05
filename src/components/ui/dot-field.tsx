import { cn } from "@/lib/cn";

/**
 * Dot matrix between the guide lines, fading out toward its edges.
 * Dots are spaced 1/48 of the guide-to-guide width so they stay aligned with the frame.
 * Place inside a `relative` section.
 */
export function DotField({
  className,
  focus = "50% 40%",
}: {
  className?: string;
  /** Center of the visible area, as "x% y%". */
  focus?: string;
}) {
  const mask = `radial-gradient(ellipse 65% 60% at ${focus}, #000 0%, transparent 100%)`;
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
    >
      <div className="mx-auto h-full max-w-6xl px-6 md:px-10">
        <div className="[container-type:inline-size] -mx-3 h-full md:-mx-5">
          <div
            className="h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.32) 1px, transparent 1.4px)",
              backgroundSize: "calc(100cqw / 48) calc(100cqw / 48)",
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        </div>
      </div>
    </div>
  );
}
