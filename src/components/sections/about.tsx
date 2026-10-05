import { profile } from "@/content/profile";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="02" label="About" title="One developer, whole product." />
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-4">
          <PlaceholderImage label="portrait / 4×5" className="aspect-[4/5]" />
        </Reveal>
        <div className="space-y-10 md:col-span-8">
          <Reveal className="space-y-6">
            <p className="font-display text-2xl leading-snug tracking-tight md:text-4xl">
              {profile.about.lead}
            </p>
            <p className="text-fg-muted max-w-2xl text-lg">{profile.about.body}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl>
              {profile.about.facts.map((f) => (
                <div
                  key={f.label}
                  className="border-line grid grid-cols-3 gap-4 border-t py-4 last:border-b"
                >
                  <dt className="label pt-1">{f.label}</dt>
                  <dd className="col-span-2">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
