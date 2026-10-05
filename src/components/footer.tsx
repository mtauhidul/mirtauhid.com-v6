import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-line border-t py-8">
      <Container className="text-fg-subtle flex flex-col justify-between gap-2 font-mono text-xs md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Next.js · TypeScript · Tailwind</p>
      </Container>
    </footer>
  );
}
