import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-[3px] px-6 py-3.5 text-[0.95rem] font-medium transition-colors duration-300 ease-smooth";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-fg",
  secondary: "border border-line-strong text-fg hover:border-fg hover:bg-elevated",
};

export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & { variant?: Variant };

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={buttonClasses(variant, className)} {...props} />;
}
