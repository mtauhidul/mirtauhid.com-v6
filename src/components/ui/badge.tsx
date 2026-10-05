import { cn } from "@/lib/cn";

export function Badge({ className, ...props }: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(
        "border-line bg-surface text-fg-muted inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs",
        className,
      )}
      {...props}
    />
  );
}
