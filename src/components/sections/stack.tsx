import { skills } from "@/content/skills";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Stack() {
  return (
    <Section id="stack">
      <SectionHeading index="04" label="Stack" title="Tools I ship with." />
      <div className="border-line grid border-t md:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.08}>
            <div className="border-line h-full border-b py-8 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <h3 className="label mb-6">{g.title}</h3>
              <ul className="font-display space-y-2 text-2xl tracking-tight">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
