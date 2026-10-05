"use client";

import { useEffect, useRef, useState } from "react";
import { navItems } from "@/content/profile";

type Dims = { w: number; h: number; y: number };

/** Drawing-style label for a section: index, name, and live width x height / y offset. */
export function SectionAnnotation({ id }: { id: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [dims, setDims] = useState<Dims | null>(null);

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!section) return;
    const measure = () => {
      const pad = window.innerWidth >= 768 ? 40 : 24;
      const wrapper = ref.current?.parentElement;
      setDims({
        w: Math.round((wrapper?.clientWidth ?? 0) - pad * 2),
        h: Math.round(section.offsetHeight),
        y: Math.round(section.offsetTop),
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(section);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  const index = navItems.findIndex((n) => n.id === id);
  const label = navItems[index]?.label ?? id;

  return (
    <span
      ref={ref}
      aria-hidden
      className="section-annotation text-fg-subtle ease-smooth absolute top-4 right-6 hidden font-mono text-[10px] leading-none tracking-wide whitespace-nowrap uppercase transition-opacity duration-700 md:right-8 md:block"
      style={{ opacity: dims ? 1 : 0 }}
    >
      <span className="text-accent">{String(Math.max(index, 0)).padStart(2, "0")}</span> —{" "}
      {label}
      {dims && (
        <>
          {" "}
          / {dims.w} × {dims.h} <span>· y {dims.y}</span>
        </>
      )}
    </span>
  );
}
