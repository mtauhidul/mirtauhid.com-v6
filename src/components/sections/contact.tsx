import { profile } from "@/content/profile";
import { buttonClasses } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SplitReveal } from "@/components/ui/split-reveal";
import { Section } from "@/components/ui/section";

export function Contact() {
  return (
    <Section id="contact" aria-label="Contact">
      <Reveal>
        <p className="label mb-6 flex items-center gap-3">
          <span className="text-accent">05</span>
          Contact
        </p>
        <h2 className="display text-[clamp(2.75rem,8vw,7.5rem)]">
          <SplitReveal text="Get in touch." />
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="hover:text-accent ease-smooth decoration-line-strong mt-10 inline-block font-mono text-[clamp(1.1rem,3vw,2rem)] underline underline-offset-8 transition-colors duration-300"
        >
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="border-line mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t pt-8">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
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
          <a href="#" className={buttonClasses("secondary", "md:ml-auto")}>
            Résumé (PDF)
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
