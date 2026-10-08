import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Crosshairs } from "@/components/ui/guides";
import { Reveal } from "@/components/ui/reveal";
import { CopyCommand } from "./copy-command";
import { TurnDemo } from "./turn-demo";

const facts = [
  { label: "What", value: "21 React components for chat, agents and tool use" },
  { label: "Built on", value: "Base UI, Tailwind CSS v4, shadcn registry" },
  { label: "Care", value: "Keyboard, screen reader and reduced-motion tested" },
  { label: "License", value: "MIT. Copy the code, own every line" },
];

/** Founded and open-sourced project. Deliberately not a project card: wordmark, live demo and an install line. */
export function Turn() {
  return (
    <section
      id="turn"
      aria-label="turn, an open-source project I founded"
      className="bg-surface relative py-20 md:py-28"
    >
      <Crosshairs />
      <Container>
        <Reveal>
          <p className="label flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="bg-accent size-2" />
            Founded by me · Open source
            <span aria-hidden className="text-fg-subtle/60 hidden sm:inline">
              ·
            </span>
            <span className="hidden sm:inline">v0.1.2 · MIT</span>
          </p>
        </Reveal>

        <div className="mt-8 grid gap-12 md:mt-12 md:grid-cols-12 md:gap-x-10">
          <Reveal delay={0.05} className="md:col-span-7">
            <h2 className="display text-[clamp(6rem,22vw,15rem)] leading-[0.8]">
              turn<span className="text-accent">.</span>
            </h2>
            <p className="font-display mt-8 text-2xl tracking-tight md:text-4xl">
              Interfaces for intelligence.
            </p>
            <p className="text-fg-muted mt-4 max-w-xl text-lg">
              I started turn because I kept rebuilding the same chat and agent UI. It is a
              small set of accessible components for AI apps, free for anyone to use.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-5 md:pt-4">
            <TurnDemo />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14 md:mt-20">
          <dl>
            {facts.map((f) => (
              <div
                key={f.label}
                className="border-line grid grid-cols-3 gap-4 border-t py-4 last:border-b md:grid-cols-12"
              >
                <dt className="label pt-1 md:col-span-3">{f.label}</dt>
                <dd className="col-span-2 md:col-span-9">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-center md:gap-x-10">
            <div className="min-w-0 md:col-span-7">
              <CopyCommand command="npx shadcn@latest add https://turnui.xyz/r/prompt-composer.json" />
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
              <a
                href="https://turnui.xyz"
                target="_blank"
                rel="noreferrer"
                className={buttonClasses("primary")}
              >
                turnui.xyz <span aria-hidden>↗</span>
              </a>
              <a
                href="https://github.com/mtauhidul/turnui"
                target="_blank"
                rel="noreferrer"
                className={buttonClasses("secondary")}
              >
                GitHub <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
