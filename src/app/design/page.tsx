import type { Metadata } from "next";
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
            <p className="label">Design system</p>
            <h1 className="display text-6xl md:text-8xl">Flat. Sharp. Legible.</h1>
          </header>
          <div className="space-y-4">
            <p className="label">Color</p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-7">
              {swatches.map(([name, cls]) => (
                <div key={name} className="space-y-2">
                  <div className={`${cls} border-line-strong h-20 border`} />
                  <p className="text-fg-subtle font-mono text-xs">{name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="label">Type</p>
            <p className="display text-5xl">Space Grotesk, display</p>
            <p className="text-fg-muted text-xl">
              Geist, body copy with a comfortable 1.65 line height.
            </p>
            <p className="text-fg-subtle font-mono text-sm">
              JetBrains Mono, labels and code
            </p>
          </div>
          <div className="space-y-4">
            <p className="label">Buttons</p>
            <div className="flex gap-3">
              <a href="#" className={buttonClasses("primary")}>
                Primary
              </a>
              <a href="#" className={buttonClasses("secondary")}>
                Secondary
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
