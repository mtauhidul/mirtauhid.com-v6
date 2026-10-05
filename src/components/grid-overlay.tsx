"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { TOGGLE_GRID_EVENT } from "./command-palette";

/** Press G to overlay the 12-column grid and outline every section. No on-screen button. */
export function GridOverlay() {
  const [on, setOn] = useState(false);
  const [toast, setToast] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const toggle = () => {
      setOn((v) => !v);
      setToast(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setToast(false), 1600);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "g" || e.metaKey || e.ctrlKey || e.altKey || e.repeat)
        return;
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))
        return;
      toggle();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener(TOGGLE_GRID_EVENT, toggle);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(TOGGLE_GRID_EVENT, toggle);
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.grid = on ? "on" : "off";
  }, [on]);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "ease-smooth pointer-events-none fixed inset-0 z-[70] transition-opacity duration-700",
          on ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="mx-auto h-full max-w-6xl px-6 md:px-10">
          <div className="grid h-full grid-cols-4 gap-x-4 md:grid-cols-12 md:gap-x-10">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className={cn(
                  "border-accent/30 relative border-x border-dashed",
                  i >= 4 && "hidden md:block",
                )}
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(198,244,50,0.07), rgba(198,244,50,0.015))",
                }}
              >
                <span className="text-accent/80 absolute top-20 left-1.5 font-mono text-[10px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        role="status"
        className={cn(
          "ease-smooth bg-elevated border-line-strong fixed bottom-6 left-1/2 z-[80] flex -translate-x-1/2 items-center gap-3 rounded-[3px] border px-4 py-2.5 font-mono text-xs transition-all duration-500",
          toast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <kbd className="border-line-strong text-fg inline-flex size-5 items-center justify-center rounded-[3px] border">
          G
        </kbd>
        <span className="text-fg-muted">Grid overlay {on ? "on" : "off"}</span>
      </div>
    </>
  );
}
