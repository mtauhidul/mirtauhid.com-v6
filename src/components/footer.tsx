import { Container } from "@/components/ui/container";
import { LocalTime } from "@/components/local-time";
import { navItems, profile } from "@/content/profile";

const linkClass =
  "group inline-flex items-center gap-2 text-fg-muted transition-colors duration-300 hover:text-fg";

function Arrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className="ease-smooth text-accent -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
    >
      {children}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="border-line relative overflow-hidden border-t">
      <Container className="pt-16 md:pt-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="display text-3xl md:text-4xl">Thanks for stopping by.</p>
            <a
              href={`mailto:${profile.email}`}
              className="text-accent decoration-line-strong hover:text-fg mt-5 inline-flex items-center gap-2 font-mono text-base underline underline-offset-8 transition-colors"
            >
              {profile.email} <span aria-hidden>↗</span>
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-2 md:col-start-7">
            <p className="label mb-5">Navigate</p>
            <ul className="space-y-2.5">
              {navItems
                .filter((n) => n.id !== "top")
                .map((n) => (
                  <li key={n.id}>
                    <a href={`#${n.id}`} className={linkClass}>
                      {n.label}
                      <Arrow>→</Arrow>
                    </a>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className="label mb-5">Elsewhere</p>
            <ul className="space-y-2.5">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className={linkClass}>
                    {s.label}
                    <Arrow>↗</Arrow>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="label mb-5">Based in</p>
            <p className="text-fg-muted">{profile.location}</p>
            <p className="label mt-5 mb-1.5">Local time</p>
            <p className="font-mono text-sm">
              <LocalTime timeZone={profile.timezone} />
            </p>
          </div>
        </div>

        {/* oversized wordmark, fades out toward the bottom */}
        <div className="[container-type:inline-size] mt-16 md:mt-24">
          <p
            aria-hidden
            className="display px-[0.1em] py-[0.08em] text-center text-[17.5cqw] leading-[0.85] whitespace-nowrap select-none"
            style={{
              backgroundImage: "linear-gradient(to bottom, #f2f2ef 0%, #f2f2ef1a 85%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.name}
          </p>
        </div>
      </Container>

      <div className="border-line border-t">
        <Container className="text-fg-subtle flex flex-col items-start justify-between gap-3 py-6 font-mono text-xs md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with Next.js, TypeScript and Tailwind</p>
          <a
            href="#top"
            className="hover:text-fg group inline-flex items-center gap-2 transition-colors"
          >
            Back to top
            <span
              aria-hidden
              className="ease-smooth transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              ↑
            </span>
          </a>
        </Container>
      </div>
    </footer>
  );
}
