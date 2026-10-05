import { profile } from "@/content/profile";
import { buttonClasses } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <p className="label mb-6 flex items-center gap-3">
          <span className="text-accent">05</span>
          Contact
        </p>
        <h2 className="display text-[clamp(2.75rem,8vw,7.5rem)]">
          Got a product to build?
          <br />
          Let&apos;s talk.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="hover:text-accent ease-smooth decoration-line-strong mt-10 inline-block font-mono text-[clamp(1.1rem,3vw,2rem)] underline underline-offset-8 transition-colors duration-300"
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="border-line mt-16 grid gap-10 border-t pt-8 md:grid-cols-3">
          <div>
            <p className="label mb-3">Good fit</p>
            <ul className="text-fg-muted space-y-1.5">
              {profile.fit.good.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label mb-3">Reply time</p>
            <p className="text-fg-muted">{profile.fit.reply}</p>
            <p className="label mt-6 mb-3">Availability</p>
            <p className="text-fg-muted">{profile.availability}</p>
          </div>
          <div>
            <p className="label mb-3">Elsewhere</p>
            <ul className="space-y-1.5">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className={buttonClasses("secondary", "mt-6")}>
              Résumé (PDF)
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
