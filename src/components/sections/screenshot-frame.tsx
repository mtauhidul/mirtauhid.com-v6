"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { cn } from "@/lib/cn";

type Shot = {
  label: string;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
};

/** Browser-style frame around a project screenshot. Several screenshots become tabs. */
export function ScreenshotFrame({
  shots,
  url,
  name,
}: {
  shots: Shot[];
  url?: string;
  name: string;
}) {
  const [active, setActive] = useState(0);
  const uid = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: React.KeyboardEvent) {
    const last = shots.length - 1;
    const next =
      e.key === "ArrowRight"
        ? (active + 1) % shots.length
        : e.key === "ArrowLeft"
          ? (active - 1 + shots.length) % shots.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }
  const shot = shots[active];
  const host = url ? url.replace(/^https?:\/\//, "").replace(/\/$/, "") : "";

  return (
    <figure className="border-line-strong overflow-hidden border">
      <div className="border-line flex items-center gap-1.5 border-b px-4 py-2.5">
        <span className="bg-line-strong size-2 rounded-full" />
        <span className="bg-line-strong size-2 rounded-full" />
        <span className="bg-line-strong size-2 rounded-full" />
        {host && (
          <span className="text-fg-subtle ml-3 truncate font-mono text-[11px]">
            {host}
          </span>
        )}
      </div>

      {shot ? (
        <div
          role={shots.length > 1 ? "tabpanel" : undefined}
          id={`${uid}-panel`}
          aria-labelledby={shots.length > 1 ? `${uid}-tab-${active}` : undefined}
          className={shot.src ? "relative aspect-[2000/1080]" : undefined}
        >
          {shot.src ? (
            <Image
              src={shot.src}
              alt={shot.alt ?? `${name} ${shot.label} screenshot`}
              fill
              sizes="(min-width: 1152px) 1072px, 100vw"
              className="object-cover object-top"
            />
          ) : (
            <PlaceholderImage
              label={`${shot.label} screenshot coming`}
              className="aspect-[2000/1080] border-0"
            />
          )}
        </div>
      ) : (
        <PlaceholderImage
          label={`${name} / screenshot coming`}
          className="aspect-[16/9] border-0"
        />
      )}

      {shots.length > 1 && (
        <div
          role="tablist"
          aria-label={`${name} screenshots`}
          onKeyDown={onKeyDown}
          className="border-line flex flex-wrap gap-1 border-t p-2"
        >
          {shots.map((s, i) => (
            <button
              key={s.label}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`${uid}-tab-${i}`}
              role="tab"
              aria-selected={i === active}
              aria-controls={`${uid}-panel`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-[3px] px-3 py-2 font-mono text-xs transition-colors",
                i === active ? "text-fg bg-white/[0.08]" : "text-fg-subtle hover:text-fg",
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
    </figure>
  );
}
