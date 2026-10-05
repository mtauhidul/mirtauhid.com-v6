"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/** Press G (or click the hint) to overlay the 12-column layout grid. */
export function GridOverlay() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "g" || e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))
        return;
      setOn((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "ease-smooth pointer-events-none fixed inset-0 z-[70] transition-opacity duration-500",
          on ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="mx-auto h-full max-w-6xl px-6 md:px-10">
          <div className="grid h-full grid-cols-4 gap-x-4 md:grid-cols-12 md:gap-x-10">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className={cn(
                  "border-accent/25 bg-accent/[0.05] relative border-x",
                  i >= 4 && "hidden md:block",
                )}
              >
                <span className="text-accent/70 absolute top-20 left-1.5 font-mono text-[10px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOn((v) => !v)}
        aria-pressed={on}
        aria-label="Toggle layout grid overlay"
        className="text-fg-subtle hover:text-fg fixed right-6 bottom-6 z-[60] hidden items-center gap-2 font-mono text-xs transition-colors md:right-10 md:inline-flex"
      >
        <kbd
          className={cn(
            "border-line-strong inline-flex size-5 items-center justify-center rounded-[3px] border transition-colors",
            on && "bg-accent text-accent-ink border-accent",
          )}
        >
          G
        </kbd>
        grid {on ? "on" : "off"}
      </button>
    </>
  );
}
