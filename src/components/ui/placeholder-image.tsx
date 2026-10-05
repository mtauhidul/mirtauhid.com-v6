import { cn } from "@/lib/cn";

/** Flat placeholder for screenshots. Swap for real <Image> later. */
export function PlaceholderImage({
  label,
  mock = false,
  className,
}: {
  label?: string;
  mock?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-surface border-line relative isolate overflow-hidden border",
        className,
      )}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, transparent 0 14px, rgba(255,255,255,0.025) 14px 15px)",
      }}
    >
      {mock && (
        <div className="border-line-strong bg-bg absolute inset-x-[8%] top-[12%] bottom-0 border border-b-0">
          <div className="border-line flex items-center gap-1.5 border-b px-3 py-2">
            <span className="bg-line-strong size-1.5 rounded-full" />
            <span className="bg-line-strong size-1.5 rounded-full" />
            <span className="bg-line-strong size-1.5 rounded-full" />
          </div>
          <div className="space-y-2.5 p-5">
            <div className="bg-line-strong h-2.5 w-1/3" />
            <div className="bg-line h-2 w-2/3" />
            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="bg-line h-16" />
              <div className="bg-line h-16" />
              <div className="bg-accent/70 h-16" />
            </div>
            <div className="bg-line h-24" />
          </div>
        </div>
      )}
      {label && <span className="label absolute right-3 bottom-3">{label}</span>}
    </div>
  );
}
