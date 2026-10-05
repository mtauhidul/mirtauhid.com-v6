"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/content/profile";
import { cn } from "@/lib/cn";

/** Floating text chrome instead of a navbar: wordmark, contact link, and a section index on the edge. */
export function EdgeIndex() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a
        href="#top"
        className="fixed top-6 left-6 z-50 font-mono text-sm text-white mix-blend-difference md:left-10"
      >
        mir.tauhidul
      </a>
      <a
        href="#contact"
        className="fixed top-6 right-6 z-50 font-mono text-sm text-white mix-blend-difference md:right-10"
      >
        <span className="decoration-white/60 underline-offset-4 hover:underline">
          Start a project
        </span>{" "}
        →
      </a>

      <nav
        aria-label="Sections"
        className="fixed top-1/2 left-6 z-40 hidden -translate-y-1/2 xl:block"
      >
        <ul className="space-y-3">
          {navItems.map(({ id, label }, i) => (
            <li key={id}>
              <a href={`#${id}`} className="group flex items-center gap-3 py-0.5">
                <span
                  className={cn(
                    "ease-smooth block h-px transition-all duration-500",
                    active === id
                      ? "bg-accent w-8"
                      : "bg-line-strong w-4 group-hover:w-6",
                  )}
                />
                <span
                  className={cn(
                    "font-mono text-xs transition-all duration-300",
                    active === id
                      ? "text-accent translate-x-0 opacity-100"
                      : "text-fg-subtle -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100",
                  )}
                >
                  {String(i).padStart(2, "0")} {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
