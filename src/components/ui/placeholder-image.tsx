import { cn } from "@/lib/cn";

/** Generated placeholder art. Swap for real <Image> later. */
export function PlaceholderImage({
  hue = 250,
  label,
  mock = false,
  className,
}: {
  hue?: number;
  label?: string;
  mock?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn("relative isolate overflow-hidden", className)}
      style={{
        background: `radial-gradient(120% 90% at 20% 0%, hsl(${hue} 70% 32% / 0.85), transparent 60%),
          radial-gradient(90% 80% at 100% 100%, hsl(${(hue + 50) % 360} 70% 28% / 0.7), transparent 60%),
          #0d0d11`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(circle at 50% 40%, #000, transparent 75%)",
        }}
      />
      {mock && (
        <div className="absolute inset-x-[10%] top-[14%] bottom-0 rounded-t-xl border border-white/15 bg-black/45 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-white/25" />
            <span className="size-2 rounded-full bg-white/25" />
          </div>
          <div className="space-y-2 p-4">
            <div className="h-2.5 w-1/3 rounded bg-white/25" />
            <div className="h-2 w-3/4 rounded bg-white/10" />
            <div className="h-2 w-2/3 rounded bg-white/10" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-14 rounded bg-white/10" />
              <div className="h-14 rounded bg-white/10" />
              <div className="h-14 rounded bg-white/10" />
            </div>
          </div>
        </div>
      )}
      {label && (
        <span className="absolute bottom-3 left-4 font-mono text-[0.7rem] tracking-widest text-white/60 uppercase">
          {label}
        </span>
      )}
    </div>
  );
}
