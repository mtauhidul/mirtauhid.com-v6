import { profile } from "@/content/profile";
import { buttonClasses } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Contact() {
  return (
    <Section id="contact" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20rem] left-1/2 -z-10 size-[44rem] -translate-x-1/2 rounded-full bg-[#5b5bd6]/20 blur-[150px]"
      />
      <Reveal className="mx-auto max-w-4xl text-center">
        <p className="eyebrow mb-6 flex items-center justify-center gap-3">
          <span className="text-accent">05</span>
          <span className="bg-line-strong h-px w-8" />
          Contact
        </p>
        <h2 className="font-display text-6xl leading-[1.02] tracking-tight md:text-8xl">
          Let&apos;s build something <em className="text-accent">worth using.</em>
        </h2>
        <p className="text-fg-muted mx-auto mt-8 max-w-xl text-lg">
          Open to full-time roles, contracts and interesting collaborations. I reply
          within a day.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className={buttonClasses("primary", "px-8 py-4 text-base")}
          >
            {profile.email}
          </a>
          <a href="#" className={buttonClasses("secondary", "px-8 py-4 text-base")}>
            Download résumé
          </a>
        </div>
        <ul className="text-fg-muted mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-fg ease-smooth inline-flex items-center gap-1.5 transition-colors duration-300"
              >
                {s.label} <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
