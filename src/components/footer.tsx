import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-line border-t py-8">
      <Container className="text-fg-subtle flex flex-col items-center justify-between gap-2 text-sm md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">Built with Next.js · Tailwind · Motion</p>
      </Container>
    </footer>
  );
}
