import { projects } from "@/content/projects";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Work() {
  return (
    <Section id="work" aria-label="Selected work">
      <SectionHeading
        index="01"
        label="Selected work"
        title="Things I've built."
        description="The problem, how I built it, and what came out of it."
      />
      <div>
        {projects.map((p, i) => (
          <Reveal key={p.slug}>
            <article className="border-line grid gap-8 border-t py-12 md:grid-cols-12 md:gap-12 md:py-16">
              <div className="space-y-8 md:col-span-5">
                <div>
                  <p className="label mb-4">
                    <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>{" "}
                    · {p.year} · {p.role}
                  </p>
                  <h3 className="display text-4xl md:text-5xl">{p.title}</h3>
                  <p className="text-fg-subtle mt-2 text-sm">{p.context}</p>
                </div>

                <dl className="space-y-5">
                  <div>
                    <dt className="label mb-1.5">Problem</dt>
                    <dd className="text-fg-muted">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="label mb-1.5">What I built</dt>
                    <dd className="text-fg-muted">{p.solution}</dd>
                  </div>
                </dl>

                <ul className="border-line flex gap-8 border-t pt-6">
                  {p.results.map((r) => (
                    <li key={r.label}>
                      <p className="display text-3xl md:text-4xl">{r.value}</p>
                      <p className="text-fg-subtle mt-1 text-sm">{r.label}</p>
                    </li>
                  ))}
                </ul>

                <p className="text-fg-subtle font-mono text-sm">{p.stack.join(" / ")}</p>

                <div className="flex gap-6 text-sm font-medium">
                  {p.live && (
                    <a href={p.live} className="hover:text-accent transition-colors">
                      Live site ↗
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} className="hover:text-accent transition-colors">
                      Source code ↗
                    </a>
                  )}
                </div>
              </div>

              <a
                href={p.live ?? "#"}
                aria-label={`${p.title} screenshot`}
                className="group block overflow-hidden md:col-span-7"
              >
                <PlaceholderImage
                  mock
                  label={`${p.slug} / 1600×1000`}
                  className="ease-smooth aspect-[16/11] transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
