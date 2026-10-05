import { experience } from "@/content/experience";
import { formatDuration, formatPeriod } from "@/lib/dates";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <Section id="experience" aria-label="Experience">
      <SectionHeading index="03" label="Experience" title="Where I've worked." />
      <div>
        {experience.map((job) => {
          const duration = formatDuration(job.start, job.end);
          return (
            <Reveal key={`${job.company}-${job.start}`}>
              <div className="border-line grid gap-4 border-t py-8 md:grid-cols-12 md:gap-x-10 md:py-10">
                <div className="md:col-span-3">
                  <p className="label pt-1.5">{formatPeriod(job.start, job.end)}</p>
                  {duration && <p className="text-fg-subtle mt-1 text-sm">{duration}</p>}
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl tracking-tight">{job.role}</h3>
                  <p className="text-fg-muted">
                    {job.company}
                    {job.employment && (
                      <span className="text-fg-subtle"> · {job.employment}</span>
                    )}
                  </p>
                  <p className="text-fg-subtle text-sm">{job.location}</p>
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
          );
        })}
      </div>
    </Section>
  );
}
