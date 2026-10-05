import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = { title: "Design system", robots: { index: false } };

const swatches = [
  ["bg", "bg-bg"],
  ["surface", "bg-surface"],
  ["elevated", "bg-elevated"],
  ["fg", "bg-fg"],
  ["fg-muted", "bg-fg-muted"],
  ["fg-subtle", "bg-fg-subtle"],
  ["accent", "bg-accent"],
];

export default function DesignPage() {
  return (
    <main>
      <Section>
        <div className="space-y-20">
          <header className="space-y-4">
            <p className="eyebrow">Design system</p>
            <h1 className="font-display text-6xl leading-[1.05] tracking-tight md:text-8xl">
              Quiet, sharp, <em className="text-accent">alive.</em>
            </h1>
            <p className="text-fg-muted max-w-xl text-lg">
              Near-black surfaces, soft off-white text and a single periwinkle accent.
              Built for long reading in the dark.
            </p>
          </header>

          <div className="space-y-4">
            <p className="eyebrow">Color</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-7">
              {swatches.map(([name, cls]) => (
                <div key={name} className="space-y-2">
                  <div className={`${cls} border-line-strong h-20 rounded-xl border`} />
                  <p className="text-fg-subtle font-mono text-xs">{name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="eyebrow">Type</p>
            <p className="font-display text-5xl">Instrument Serif — display</p>
            <p className="text-3xl font-medium tracking-tight">
              Geist Sans — headings and body
            </p>
            <p className="text-fg-muted">
              Body copy sits at 17px with a 1.7 line height. Muted text keeps a 9.6:1
              contrast ratio against the background.
            </p>
            <p className="text-fg-subtle font-mono text-sm">
              Geist Mono — labels, code, metadata
            </p>
          </div>

          <div className="space-y-4">
            <p className="eyebrow">Components</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#" className={buttonClasses("primary")}>
                Primary
              </a>
              <a href="#" className={buttonClasses("secondary")}>
                Secondary
              </a>
              <a href="#" className={buttonClasses("ghost")}>
                Ghost
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>TypeScript</Badge>
              <Badge>Next.js</Badge>
              <Badge>Tailwind</Badge>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
