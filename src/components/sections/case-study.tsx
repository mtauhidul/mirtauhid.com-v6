import type { CaseStudy as CaseStudyData } from "@/types/content";
import { Reveal } from "@/components/ui/reveal";
import { ScreenshotFrame } from "./screenshot-frame";

/** The large, in-depth project card: summary, proof, screenshots and links, with the rest behind one Details toggle. */
export function CaseStudy({ project }: { project: CaseStudyData }) {
  return (
    <Reveal>
      <article className="border-line border-t pt-10 md:pt-14">
        <div className="grid gap-6 md:grid-cols-12 md:items-end md:gap-x-10">
          <div className="md:col-span-8">
            <p className="label mb-4">
              <span className="text-accent">Case study</span> · {project.year}
            </p>
            <h3 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">
              {project.title}
            </h3>
            <p className="text-fg-muted mt-4 max-w-2xl text-lg">{project.summary}</p>
          </div>
          {project.status && (
            <ul className="flex flex-wrap gap-2 md:col-span-4 md:justify-end">
              {project.status.map((s) => (
                <li
                  key={s}
                  className="border-line-strong text-fg-muted rounded-[3px] border px-2.5 py-1 font-mono text-xs"
                >
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>

        {project.results.length > 0 && (
          <ul className="border-line mt-10 grid grid-cols-3 border-y md:mt-12">
            {project.results.map((r, i) => (
              <li
                key={r.label}
                className={`px-1 py-6 md:px-6 ${i > 0 ? "border-line border-l" : ""} ${i === 0 ? "md:pl-0" : ""}`}
              >
                <p className="display text-3xl md:text-5xl">{r.value}</p>
                <p className="text-fg-subtle mt-2 text-xs md:text-sm">{r.label}</p>
              </li>
            ))}
          </ul>
        )}

        <div
          className={`mt-10 md:mt-12 ${project.results.length === 0 ? "border-line border-t pt-10 md:pt-12" : ""}`}
        >
          <ScreenshotFrame
            shots={project.screenshots ?? []}
            url={project.live}
            name={project.slug}
          />
        </div>

        <div className="border-line mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t pt-6">
          <p className="text-fg-subtle font-mono text-sm">{project.stack.join(" / ")}</p>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="link-draw hover:text-accent -my-2 inline-block py-2 text-sm font-medium transition-colors"
            >
              {project.liveLabel ?? "Live site"} ↗
            </a>
          )}
        </div>

        {project.demoLogin && (
          <dl className="border-line mt-6 grid gap-x-8 gap-y-2 border-t pt-4 font-mono text-sm sm:grid-cols-[auto_1fr_auto_1fr] sm:items-baseline">
            <dt className="text-fg-subtle">Demo admin login</dt>
            <dd className="text-fg-muted select-all">{project.demoLogin.email}</dd>
            <dt className="text-fg-subtle">Password</dt>
            <dd className="text-fg-muted select-all">{project.demoLogin.password}</dd>
          </dl>
        )}

        <details className="group border-line mt-6 border-t pt-4">
          <summary className="text-fg-muted hover:text-fg flex cursor-pointer list-none items-center justify-between gap-4 py-2 text-sm font-medium transition-colors [&::-webkit-details-marker]:hidden">
            Details: problem, what I built, what I owned, features
            <span
              aria-hidden
              className="ease-smooth text-lg transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-6 space-y-10 pb-4">
            <div className="grid gap-8 md:grid-cols-12 md:gap-x-10">
              <div className="md:col-span-5">
                <p className="label mb-3">Problem</p>
                <p className="text-fg-muted">{project.problem}</p>
              </div>
              <div className="md:col-span-7">
                <p className="label mb-3">What I built</p>
                <p className="text-fg-muted">{project.solution}</p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-12 md:gap-x-10">
              {project.owned && (
                <div className="md:col-span-5">
                  <p className="label mb-4">What I owned</p>
                  <dl>
                    {project.owned.map((o) => (
                      <div
                        key={o.area}
                        className="border-line border-t py-3 last:border-b"
                      >
                        <dt className="text-fg font-medium">{o.area}</dt>
                        <dd className="text-fg-muted mt-0.5 text-sm leading-snug">
                          {o.text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              )}
              {project.features && (
                <div className="md:col-span-7">
                  <p className="label mb-4">Key features</p>
                  <ul>
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="border-line text-fg-muted flex gap-3 border-t py-3 text-sm leading-snug last:border-b"
                      >
                        <span aria-hidden className="text-accent">
                          →
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </details>
      </article>
    </Reveal>
  );
}
