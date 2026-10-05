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

/** Small geometric drawing for the top of a card. Purely decorative; varies per card. */
function Motif({ index }: { index: number }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1,
    "aria-hidden": true,
    className:
      "text-fg-subtle/60 group-hover:text-accent/80 size-14 shrink-0 transition-colors duration-500",
  } as const;
  const variant = index % 3;
  if (variant === 0)
    return (
      <svg {...common}>
        <circle cx="32" cy="32" r="22" />
        <circle cx="32" cy="32" r="10" />
        <path d="M32 4v56M4 32h56" />
      </svg>
    );
  if (variant === 1)
    return (
      <svg {...common}>
        <rect x="10" y="10" width="44" height="44" />
        <path d="M10 10l44 44M54 10L10 54" />
        <rect x="23" y="23" width="18" height="18" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M32 6l26 46H6z" />
      <path d="M32 6v46M19 29h26" />
      <circle cx="32" cy="38" r="5" />
    </svg>
  );
}

/** A smaller project: no screenshot, a hairline frame with corner crosshairs and a geometric drawing. */
function ProjectCard({ project, index }: { project: CaseStudy; index: number }) {
  return (
    <article className="group border-line ease-smooth hover:border-line-strong relative flex h-full flex-col border p-6 transition-all duration-500 hover:bg-white/[0.02]">
      <Corner className="-top-[0.5px] -left-[0.5px] -translate-x-1/2 -translate-y-1/2" />
      <Corner className="-top-[0.5px] -right-[0.5px] translate-x-1/2 -translate-y-1/2" />
      <Corner className="-bottom-[0.5px] -left-[0.5px] -translate-x-1/2 translate-y-1/2" />
      <Corner className="-right-[0.5px] -bottom-[0.5px] translate-x-1/2 translate-y-1/2" />

      <div className="flex items-start justify-between gap-4">
        <div className="font-mono text-xs leading-relaxed">
          <p className="text-accent">{String(index + 1).padStart(2, "0")}</p>
          <p className="text-fg-subtle mt-1">{project.year}</p>
        </div>
        <Motif index={index} />
      </div>

      <div className="border-line mt-6 flex flex-1 flex-col gap-3 border-t pt-6">
        <h3 className="font-display text-3xl leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="text-fg-muted">{project.summary}</p>
      </div>

      <div className="border-line mt-6 space-y-4 border-t pt-4">
        <p className="text-fg-subtle font-mono text-xs">{project.stack.join(" / ")}</p>
        <Links project={project} />
      </div>
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
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <li key={p.slug}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <ProjectCard project={p} index={i} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
