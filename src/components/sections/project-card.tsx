"use client";

import { useState } from "react";
import type { CaseStudy } from "@/types/content";
import { TechIcon, hasBrandIcon } from "@/components/ui/tech-icon";

const MAX_CHIPS = 4;

type Side = "top" | "right" | "bottom" | "left";
type Entry = { side: Side; on: boolean };

/** Small `+` mark centered on a card corner, like the section crosshairs. */
function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`text-fg-subtle absolute size-3.5 ${className}`}
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

/** Faint accent line on one edge. It expands from the middle of the edge out to both ends, and collapses back on leave. */
function EdgeLine({ side, entry }: { side: Side; entry: Entry | null }) {
  const active = !!entry && entry.on && entry.side === side;
  const horizontal = side === "top" || side === "bottom";
  const position =
    side === "top"
      ? "inset-x-0 top-0 h-px"
      : side === "bottom"
        ? "inset-x-0 bottom-0 h-px"
        : side === "left"
          ? "inset-y-0 left-0 w-px"
          : "inset-y-0 right-0 w-px";

  return (
    <span
      aria-hidden
      className={`bg-accent/40 ease-smooth pointer-events-none absolute origin-center transition-transform duration-500 ${position}`}
      style={{
        transform: horizontal ? `scaleX(${active ? 1 : 0})` : `scaleY(${active ? 1 : 0})`,
      }}
    />
  );
}

/**
 * A compact small project: hairline frame with corner crosshairs, no screenshot.
 * The card is not a link; only the links inside are clickable.
 * On hover the card never moves: its background lightens softly and a faint accent line expands from the middle of the edge the pointer entered through.
 */
export function ProjectCard({ project }: { project: CaseStudy }) {
  const [entry, setEntry] = useState<Entry | null>(null);

  function onEnter(e: React.PointerEvent<HTMLElement>) {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const d: Record<Side, number> = {
      top: y,
      bottom: r.height - y,
      left: x,
      right: r.width - x,
    };
    const side = (Object.keys(d) as Side[]).reduce((a, b) => (d[a] <= d[b] ? a : b));
    setEntry({ side, on: true });
  }

  return (
    <article
      onPointerEnter={onEnter}
      onPointerLeave={() => setEntry((cur) => (cur ? { ...cur, on: false } : cur))}
      className="group border-line ease-smooth relative flex h-full flex-col border p-5 transition-colors duration-500 hover:bg-white/[0.025]"
    >
      <Corner className="-top-[0.5px] -left-[0.5px] -translate-x-1/2 -translate-y-1/2" />
      <Corner className="-top-[0.5px] -right-[0.5px] translate-x-1/2 -translate-y-1/2" />
      <Corner className="-bottom-[0.5px] -left-[0.5px] -translate-x-1/2 translate-y-1/2" />
      <Corner className="-right-[0.5px] -bottom-[0.5px] translate-x-1/2 translate-y-1/2" />

      <EdgeLine side="top" entry={entry} />
      <EdgeLine side="right" entry={entry} />
      <EdgeLine side="bottom" entry={entry} />
      <EdgeLine side="left" entry={entry} />

      <div className="text-fg-subtle font-mono text-[11px]">{project.kind}</div>

      <h3 className="font-display mt-3 text-2xl leading-tight tracking-tight">
        {project.title}
      </h3>
      <p className="text-fg-muted mt-1.5 line-clamp-2 flex-1 text-sm leading-snug">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1">
        {project.stack.slice(0, MAX_CHIPS).map((t) => (
          <li
            key={t}
            className="border-line text-fg-muted inline-flex items-center gap-1 rounded-[3px] border px-1.5 py-0.5 font-mono text-[11px]"
          >
            {hasBrandIcon(t) && <TechIcon name={t} className="size-3" />}
            {t}
          </li>
        ))}
        {project.stack.length > MAX_CHIPS && (
          <li className="border-line text-fg-subtle rounded-[3px] border px-1.5 py-0.5 font-mono text-[11px]">
            +{project.stack.length - MAX_CHIPS}
          </li>
        )}
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
