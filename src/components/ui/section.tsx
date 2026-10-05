import { cn } from "@/lib/cn";
import { Crosshairs } from "./guides";
import { Container } from "./container";

export function Section({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"section">) {
  return (
    <section className={cn("relative py-24 md:py-36", className)} {...props}>
      <Crosshairs id={props.id} />
      <Container>{children}</Container>
    </section>
  );
}
