import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center">
      <Container>
        <p className="label mb-6 flex items-center gap-3">
          <span className="bg-accent size-2" />
          404
        </p>
        <h1 className="display text-[clamp(2.75rem,8vw,7.5rem)]">Page not found.</h1>
        <p className="text-fg-muted mt-6 max-w-xl text-lg">
          The page you are looking for does not exist or has moved.
        </p>
        <Link href="/" className={buttonClasses("primary", "mt-10")}>
          Back to the portfolio <span aria-hidden>→</span>
        </Link>
      </Container>
    </main>
  );
}
