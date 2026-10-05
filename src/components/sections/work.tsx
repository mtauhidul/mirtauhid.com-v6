import { projects } from "@/content/projects";
import { CaseStudy } from "./case-study";
import { ProjectCard } from "./project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Work() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const count = featured.length;

  return (
    <Section id="work" aria-label="Selected work">
      <SectionHeading
        index="01"
        label="Selected work"
        title="Things I've built."
        description={`${count === 1 ? "One project" : "Two projects"} in depth, and a few smaller ones.`}
      />
      <div className="space-y-20 md:space-y-28">
        {featured.map((p) => (
          <CaseStudy key={p.slug} project={p} />
        ))}
      </div>

      {rest.length > 0 && (
        <div className="relative mt-20 md:mt-28">
          {/* fine horizontal rules, from the divider line down to the end of the section */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -bottom-24 text-white/[0.06] md:-bottom-36"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, currentColor 0 1px, transparent 1px 7px)",
            }}
          />
          <Reveal>
            <p className="label border-line relative mb-8 border-t pt-6">More projects</p>
          </Reveal>
          <ul className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <ProjectCard project={p} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
