import { projects } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/cn";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="02"
        eyebrow="Selected work"
        title={
          <>
            Projects that <em className="text-accent">moved</em> the needle.
          </>
        }
        description="A few things I've designed and built recently, with the outcome up front."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.slug}
            delay={(i % 2) * 0.1}
            className={cn(p.featured && "md:col-span-2")}
          >
            <a
              href={p.href}
              className="block h-full"
              aria-label={`${p.title} — view project`}
            >
              <SpotlightCard className="h-full">
                <div className={cn(p.featured && "md:grid md:grid-cols-5")}>
                  <div className={cn("overflow-hidden", p.featured && "md:col-span-3")}>
                    <PlaceholderImage
                      hue={p.hue}
                      mock
                      label={p.slug}
                      className={cn(
                        "ease-smooth aspect-[16/10] transition-transform duration-700 group-hover:scale-[1.03]",
                        p.featured && "md:aspect-auto md:h-full md:min-h-[22rem]",
                      )}
                    />
                  </div>
                  <div
                    className={cn(
                      "flex flex-col gap-4 p-7 md:p-8",
                      p.featured && "justify-center md:col-span-2 md:p-10",
                    )}
                  >
                    <div className="text-fg-subtle flex items-center justify-between font-mono text-xs">
                      <span>{p.role}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="flex items-center justify-between gap-4 text-2xl font-medium tracking-tight md:text-3xl">
                      {p.title}
                      <span className="text-fg-subtle group-hover:text-accent ease-smooth text-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                        ↗
                      </span>
                    </h3>
                    <p className="text-fg-muted">{p.summary}</p>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
