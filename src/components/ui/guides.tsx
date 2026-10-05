"use client";

import { motion, useScroll, useTransform } from "motion/react";
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
const TOP = 10; // % of viewport where the dashed top line sits (clear of the top corner links)

/**
 * Two vertical hairlines framing the site, fading out toward the top and bottom of the screen,
 * plus a dashed horizontal line near the top that fades away once you scroll.
 */
export function GuideLines() {
  // the top line and its crosshairs fade out as soon as you start scrolling
  const { scrollY } = useScroll();
  const topLineOpacity = useTransform(scrollY, [0, 140], [1, 0]);
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="mx-auto h-full max-w-6xl px-6 md:px-10">
        <div className="relative -mx-3 h-full md:-mx-5">
          <SideHatch side="left" />
          <SideHatch side="right" />

          <motion.div className="absolute inset-0" style={{ opacity: topLineOpacity }}>
            {/* dashed line between the two crosshairs, like the section dividers; fades out on scroll */}
            <div
              className="absolute inset-x-0 h-px"
              style={{
                top: `${TOP}%`,
                backgroundImage:
                  "repeating-linear-gradient(to right, rgba(255,255,255,0.14) 0 6px, transparent 6px 12px)",
              }}
            />
            <Plus className="left-0 mt-[0.5px] ml-[0.5px]" top={`${TOP}%`} />
            <Plus
              className="right-0 mt-[0.5px] mr-[0.5px] translate-x-1/2!"
              top={`${TOP}%`}
            />
          </motion.div>

          <div
            className="absolute inset-0"
            style={{ maskImage: fade, WebkitMaskImage: fade }}
          >
            <div className="bg-line absolute inset-y-0 left-0 w-px" />
            <div className="bg-line absolute inset-y-0 right-0 w-px" />
          </div>
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
