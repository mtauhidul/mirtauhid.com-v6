import { cn } from "@/lib/cn";
import { Container } from "./container";

export function Section({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("py-24 md:py-36", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}
