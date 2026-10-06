import type { CaseStudy as CaseStudyData } from "@/types/content";
import { Reveal } from "@/components/ui/reveal";
import { TechIcon, hasBrandIcon } from "@/components/ui/tech-icon";
import { ScreenshotFrame } from "./screenshot-frame";

/** The large, in-depth project card: summary, proof, screenshots and links, with the rest behind one Details toggle. */
export function CaseStudy({ project }: { project: CaseStudyData }) {
  return (
    // The id is a public link target (printed on the resume as /#caresync, /#arista-ats, /#niblet).
    // Never rename a slug without updating those links. It sits on a plain wrapper, outside the
    // reveal animation, so the browser scrolls to a stable position.
    <div id={project.slug} className="scroll-mt-24 md:scroll-mt-28">
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
                  className={`min-w-0 px-1 py-6 md:px-6 ${i > 0 ? "border-line border-l" : ""} ${i === 0 ? "md:pl-0" : ""}`}
                >
                  <p className="display text-3xl md:text-4xl lg:text-5xl">
                    {r.shortValue ? (
                      <>
                        <span className="sm:hidden">{r.shortValue}</span>
                        <span className="max-sm:hidden">{r.value}</span>
                      </>
                    ) : (
                      r.value
                    )}
                  </p>
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
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <li
                  key={t}
                  className="border-line-strong text-fg-muted inline-flex items-center gap-2 rounded-[3px] border px-2.5 py-1.5 font-mono text-xs"
                >
                  {hasBrandIcon(t) && <TechIcon name={t} className="size-3.5" />}
                  {t}
                </li>
              ))}
            </ul>
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
              More details
              <span
                aria-hidden
                className="ease-smooth text-lg transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="mt-6 grid gap-8 pb-4 md:grid-cols-12 md:gap-x-10">
              <div className="md:col-span-5">
                <p className="label mb-3">What I built</p>
                <p className="text-fg-muted">{project.solution}</p>
                {project.owned && <p className="text-fg mt-4 text-sm">{project.owned}</p>}
              </div>
              {project.features && (
                <div className="md:col-span-7">
                  <p className="label mb-3">Key features</p>
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
          </details>
        </article>
      </Reveal>
    </div>
  );
}
