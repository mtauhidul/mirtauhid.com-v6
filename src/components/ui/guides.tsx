"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { navItems } from "@/content/profile";
import { SectionAnnotation } from "./section-annotation";

/**
 * Blueprint layer. Lines sit just outside the content edges (same container math as <Container>),
 * so every mark lines up with the real layout.
 */

const fade = "linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)";
const TOP = 4; // % of viewport where the progress head starts
const SPAN = 92; // % of viewport it travels

/**
 * Two vertical hairlines framing the site. They fade out toward the top and bottom of the screen.
 * The right guide doubles as the scroll indicator: it fills with the accent as you scroll,
 * with a notch per section.
 */
export function GuideLines() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const head = useTransform(p, (v) => `${TOP + v * SPAN}%`);
  const [ticks, setTicks] = useState<number[]>([]);

  useEffect(() => {
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      setTicks(
        navItems
          .filter((n) => n.id !== "top")
          .map(({ id }) => {
            const el = document.getElementById(id);
            return el ? Math.min(1, Math.max(0, el.offsetTop / max)) : 0;
          }),
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="mx-auto h-full max-w-6xl px-6 md:px-10">
        <div className="relative -mx-3 h-full md:-mx-5">
          <div
            className="absolute inset-0"
            style={{ maskImage: fade, WebkitMaskImage: fade }}
          >
            <div className="bg-line absolute inset-y-0 left-0 w-px" />
            <div className="bg-line absolute inset-y-0 right-0 w-px" />
          </div>

          {ticks.map((t, k) => (
            <span
              key={k}
              className="bg-fg-subtle/50 absolute right-0 h-px w-2"
              style={{ top: `${TOP + t * SPAN}%` }}
            />
          ))}

          <motion.div
            style={{ height: head }}
            className="bg-accent/60 absolute top-0 right-0 w-px"
          />
          <motion.span
            style={{ top: head }}
            className="bg-accent absolute right-0 size-[5px] translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </div>
  );
}

function Plus({ className }: { className: string }) {
  return (
    <span
      className={`text-fg-subtle absolute size-3.5 -translate-x-1/2 -translate-y-1/2 ${className}`}
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

/** Section divider: hairline between the guides, with a crosshair where it meets each guide. */
export function Crosshairs({ id }: { id?: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-0">
      <div className="relative mx-auto h-0 max-w-6xl">
        <div className="bg-line absolute inset-x-3 h-px md:inset-x-5" />
        <Plus className="top-0 left-3 md:left-5" />
        <Plus className="top-0 right-3 translate-x-1/2! md:right-5" />
        {id && <SectionAnnotation id={id} />}
      </div>
    </div>
  );
}
