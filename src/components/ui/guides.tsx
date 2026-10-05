"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { navItems } from "@/content/profile";
import { SectionAnnotation } from "./section-annotation";

/**
 * Blueprint layer. Lines sit just outside the content edges (same container math as <Container>),
 * so every mark lines up with the real layout.
 */

const hatch =
  "repeating-linear-gradient(135deg, rgba(255,255,255,0.07) 0 1px, transparent 1px 9px)";

/** Diagonal hatching in the margin outside a guide, fading out away from it and toward the screen's top/bottom. */
function SideHatch({ side }: { side: "left" | "right" }) {
  const outward = `linear-gradient(to ${side === "left" ? "left" : "right"}, #000 0%, transparent 100%)`;
  return (
    <div
      className={`absolute inset-y-0 w-[min(30vw,28rem)] ${side === "left" ? "right-full" : "left-full"}`}
      style={{ maskImage: outward, WebkitMaskImage: outward }}
    >
      <div
        className="h-full"
        style={{ backgroundImage: hatch, maskImage: fade, WebkitMaskImage: fade }}
      />
    </div>
  );
}

const fade = "linear-gradient(to bottom, transparent, #000 14%, #000 86%, transparent)";
const TOP = 10; // % of viewport where the progress line starts (clear of the top corner links)
const SPAN = 86; // % of viewport it travels

/**
 * Two vertical hairlines framing the site. They fade out toward the top and bottom of the screen.
 * The right guide doubles as the scroll indicator: it fills with the accent as you scroll,
 * with a notch per section.
 */
export function GuideLines() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const head = useTransform(p, (v) => `${TOP + v * SPAN}%`);
  const fill = useTransform(p, (v) => `${v * SPAN}%`);
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
      {/* horizontal line across the whole viewport, level with where the scroll line starts */}
      <div
        className="bg-line-strong absolute inset-x-0 h-px"
        style={{ top: `${TOP}%` }}
      />
      <div className="mx-auto h-full max-w-6xl px-6 md:px-10">
        <div className="relative -mx-3 h-full md:-mx-5">
          <SideHatch side="left" />
          <SideHatch side="right" />

          <Plus className="left-0" top={`${TOP}%`} />
          <Plus className="right-0" top={`${TOP}%`} />

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
            style={{ top: `${TOP}%`, height: fill }}
            className="bg-accent/60 absolute right-0 w-px"
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

function Plus({ className, top }: { className: string; top?: string }) {
  return (
    <span
      className={`text-fg-subtle absolute size-3.5 -translate-x-1/2 -translate-y-1/2 ${className}`}
      style={{
        ...(top ? { top } : {}),
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
