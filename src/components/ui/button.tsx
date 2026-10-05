import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-medium transition-all duration-300 ease-smooth active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:bg-accent-strong",
  secondary: "border border-line-strong text-fg hover:border-fg-subtle hover:bg-elevated",
  ghost: "text-fg-muted hover:text-fg",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & { variant?: Variant };

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, className)} {...props} />;
}
