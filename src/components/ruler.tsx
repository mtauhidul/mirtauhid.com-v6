"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { navItems } from "@/content/profile";
import { cn } from "@/lib/cn";

/** Edge ruler: a tick per section, a marker that follows scroll, and a position readout. */
export function Ruler() {
  const [active, setActive] = useState<string>("top");
  const [positions, setPositions] = useState<number[]>(() => navItems.map(() => 0));

  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const top = useTransform(smooth, (v) => `${v * 100}%`);
  const percent = useTransform(smooth, (v) => `${Math.round(v * 100)}%`);

  useEffect(() => {
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPositions(
        navItems.map(({ id }) => {
          const el = document.getElementById(id);
          return el && max > 0 ? Math.min(1, Math.max(0, el.offsetTop / max)) : 0;
        }),
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("resize", measure);

    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      obs.disconnect();
    };
  }, []);

  const index = Math.max(
    0,
    navItems.findIndex((n) => n.id === active),
  );
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <nav
      aria-label="Page position"
      className="fixed top-1/2 z-40 hidden h-[52vh] -translate-y-1/2 xl:block"
      style={{ left: "max(1.5rem, calc((100vw - 72rem) / 2 + 2.5rem - 3.5rem))" }}
    >
      {/* track + minor ticks */}
      <div className="bg-line-strong absolute inset-y-0 left-0 w-px" />
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-1.5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(255,255,255,0.19) 0 1px, transparent 1px 12px)",
        }}
      />

      {/* section ticks */}
      {navItems.map(({ id, label }, i) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          className="group absolute left-0 flex -translate-y-1/2 items-center"
          style={{ top: `${positions[i] * 100}%` }}
        >
          <span
            className={cn(
              "ease-smooth block h-px transition-all duration-500",
              active === id ? "bg-accent w-5" : "bg-fg-subtle w-3 group-hover:w-5",
            )}
          />
          <span className="bg-bg text-fg-muted pointer-events-none absolute left-7 rounded-[2px] px-1.5 py-0.5 font-mono text-xs whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {pad(i)} {label}
          </span>
        </a>
      ))}

      {/* scroll marker */}
      <motion.div
        aria-hidden
        style={{ top }}
        className="bg-accent absolute -left-[3px] size-[7px] -translate-y-1/2"
      />

      {/* readout */}
      <p className="text-fg-subtle absolute top-full left-0 mt-5 font-mono text-xs leading-tight">
        <span className="text-fg">{pad(index)}</span>/{pad(navItems.length - 1)}
        <br />
        <motion.span>{percent}</motion.span>
      </p>
    </nav>
  );
}
