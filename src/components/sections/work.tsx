import { projects } from "@/content/projects";
import type { CaseStudy } from "@/types/content";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

function Links({ project }: { project: CaseStudy }) {
  if (!project.live && !project.repo) return null;
  return (
    <div className="flex gap-6 text-sm font-medium">
      {project.live && (
        <a href={project.live} className="link-draw hover:text-accent transition-colors">
          Live site ↗
        </a>
      )}
      {project.repo && (
        <a href={project.repo} className="link-draw hover:text-accent transition-colors">
          Source code ↗
        </a>
      )}
    </div>
  );
}

/** The one large, in-depth project: problem, what was built, results. */
function FeaturedCaseStudy({ project }: { project: CaseStudy }) {
  return (
    <Reveal>
      <article className="border-line border-t pt-10 md:pt-14">
        <div className="label flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
          <span>
            <span className="text-accent">Featured case study</span> · {project.year}
          </span>
          <span>{project.role}</span>
        </div>

        <h3 className="display mt-6 text-[clamp(2.5rem,7vw,6rem)]">{project.title}</h3>
        <p className="text-fg-muted mt-5 max-w-2xl text-lg md:text-xl">
          {project.summary}
        </p>

        <PlaceholderImage
          mock
          label={`${project.slug} / 1600×900`}
          className="mt-10 aspect-[16/9] md:mt-14"
        />

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-x-10">
          <div className="md:col-span-4">
            <p className="label mb-3">Problem</p>
            <p className="text-fg-muted">{project.problem}</p>
          </div>
          <div className="md:col-span-4">
            <p className="label mb-3">What I built</p>
            <p className="text-fg-muted">{project.solution}</p>
          </div>
          <div className="md:col-span-4">
            <p className="label mb-3">Result</p>
            <ul className="space-y-5">
              {project.results.map((r) => (
                <li key={r.label} className="flex items-baseline gap-4">
                  <span className="display text-4xl md:text-5xl">{r.value}</span>
                  <span className="text-fg-subtle text-sm">{r.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-line mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t pt-6">
          <p className="text-fg-subtle font-mono text-sm">{project.stack.join(" / ")}</p>
          <Links project={project} />
        </div>
      </article>
    </Reveal>
  );
}

/** Small `+` mark centered on a card corner, like the section crosshairs. */
function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`text-fg-subtle group-hover:text-accent absolute size-3.5 transition-colors duration-500 ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(currentColor, currentColor), linear-gradient(currentColor, currentColor)",
        backgroundSize: "100% 1px, 1px 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}

/** A compact small project: hairline frame with corner crosshairs, no screenshot. Only the links inside are clickable. */
function ProjectCard({ project }: { project: CaseStudy }) {
  return (
    <article className="group border-line ease-smooth hover:border-line-strong relative flex h-full flex-col border p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.025]">
      <Corner className="-top-[0.5px] -left-[0.5px] -translate-x-1/2 -translate-y-1/2" />
      <Corner className="-top-[0.5px] -right-[0.5px] translate-x-1/2 -translate-y-1/2" />
      <Corner className="-bottom-[0.5px] -left-[0.5px] -translate-x-1/2 translate-y-1/2" />
      <Corner className="-right-[0.5px] -bottom-[0.5px] translate-x-1/2 translate-y-1/2" />

      {/* accent line that draws across the top edge on hover */}
      <span
        aria-hidden
        className="bg-accent ease-smooth absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
      />

      <div className="text-fg-subtle flex items-center justify-between gap-3 font-mono text-[11px]">
        <span>{project.role}</span>
      </div>

      <h3 className="font-display mt-3 text-2xl leading-tight tracking-tight">
        {project.title}
      </h3>
      <p className="text-fg-muted mt-1.5 flex-1 text-sm leading-snug">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <li
            key={t}
            className="border-line text-fg-muted rounded-[3px] border px-2 py-0.5 font-mono text-[11px]"
          >
            {t}
          </li>
        ))}
      </ul>

      {(project.live || project.repo) && (
        <div className="border-line mt-4 flex items-center gap-5 border-t pt-3 text-xs font-medium">
          {project.live && (
            <a
              href={project.live}
              className="link-draw hover:text-accent transition-colors"
            >
              Live site <span aria-hidden>↗</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              className="link-draw hover:text-accent transition-colors"
            >
              Source code <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export function Work() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <Section id="work" aria-label="Selected work">
      <SectionHeading
        index="01"
        label="Selected work"
        title="Things I've built."
        description="One project in depth, and a few smaller ones."
      />
      <FeaturedCaseStudy project={featured} />

      {rest.length > 0 && (
        <div className="mt-20 md:mt-28">
          <Reveal>
            <p className="label border-line mb-8 border-t pt-6">More projects</p>
          </Reveal>
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
