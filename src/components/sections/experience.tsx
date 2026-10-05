import { experience } from "@/content/experience";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <em className="text-accent">done</em> the work.
          </>
        }
      />
      <ol className="border-line relative ml-2 border-l md:ml-0">
        {experience.map((job, i) => (
          <li key={job.company}>
            <Reveal
              delay={0.05}
              className="relative grid gap-4 pb-14 pl-8 last:pb-0 md:grid-cols-4 md:gap-10 md:pl-12"
            >
              <span
                aria-hidden
                className="bg-bg border-accent absolute top-2 -left-[5px] size-[9px] rounded-full border-2"
              />
              <div className="md:col-span-1">
                <p className="text-accent font-mono text-sm">{job.period}</p>
                <p className="text-fg-subtle mt-1 text-sm">{job.location}</p>
              </div>
              <div className="space-y-4 md:col-span-3">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                    {job.role}
                  </h3>
                  <p className="text-fg-muted">
                    {job.company}
                    {i === 0 && <span className="text-fg-subtle"> · Current</span>}
                  </p>
                </div>
                <p className="text-fg-muted">{job.summary}</p>
                <ul className="space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="text-fg-muted flex gap-3">
                      <span aria-hidden className="text-accent mt-[0.1em]">
                        →
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
