import { profile } from "@/content/profile";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title={
          <>
            Engineer with an <em className="text-accent">eye</em> for detail.
          </>
        }
      />
      <div className="grid items-start gap-12 md:grid-cols-5 md:gap-16">
        <Reveal className="md:col-span-2">
          <PlaceholderImage
            hue={265}
            label="Portrait placeholder"
            className="border-line aspect-[4/5] rounded-[var(--radius-card)] border"
          />
        </Reveal>
        <div className="space-y-10 md:col-span-3">
          <div className="text-fg-muted space-y-5 text-lg md:text-xl md:leading-relaxed">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <dl className="border-line grid grid-cols-2 gap-x-6 gap-y-6 border-t pt-8">
              {profile.facts.map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow">{f.label}</dt>
                  <dd className="mt-1.5">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
