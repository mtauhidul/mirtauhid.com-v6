import { skills } from "@/content/skills";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const marquee = skills.flatMap((g) => g.items);

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="04"
        eyebrow="Skills"
        title={
          <>
            A toolkit built for <em className="text-accent">shipping</em>.
          </>
        }
      />
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.1}>
            <SpotlightCard className="h-full p-7 md:p-8">
              <h3 className="text-xl font-medium">{g.title}</h3>
              <p className="text-fg-muted mt-2 mb-6">{g.description}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
      <div
        aria-hidden
        className="border-line mt-16 overflow-hidden border-y [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] py-6"
      >
        <div className="animate-marquee flex w-max gap-12">
          {[...marquee, ...marquee].map((s, i) => (
            <span
              key={i}
              className="font-display text-fg-subtle text-3xl whitespace-nowrap md:text-4xl"
            >
              {s} <span className="text-accent/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
