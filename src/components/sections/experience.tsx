import { experience } from "@/content/experience";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <Section id="experience" aria-label="Experience">
      <SectionHeading index="03" label="Experience" title="Where I've done the work." />
      <div>
        {experience.map((job) => (
          <Reveal key={job.company}>
            <div className="border-line grid gap-4 border-t py-8 md:grid-cols-12 md:gap-10 md:py-10">
              <p className="label pt-1.5 md:col-span-3">{job.period}</p>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl tracking-tight">{job.role}</h3>
                <p className="text-fg-subtle">
                  {job.company} · {job.location}
                </p>
              </div>
              <ul className="text-fg-muted space-y-2 md:col-span-5">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span aria-hidden className="text-fg-subtle">
                      —
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
