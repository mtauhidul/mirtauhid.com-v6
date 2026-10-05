"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Heading text whose words slide up out of a mask, staggered, when scrolled into view.
 * The in-view trigger lives on the unclipped outer element (an observer on a clipped element
 * never fires); the masked words follow it through variants.
 */
export function SplitReveal({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((w, i) => (
          <span key={i}>
            <span className="-mb-[0.14em] inline-block overflow-hidden pt-[0.06em] pb-[0.14em] align-bottom">
              <motion.span
                className="inline-block"
                variants={{ hidden: { y: "115%" }, show: { y: 0 } }}
                transition={{ duration: 1, delay: i * 0.06, ease }}
              >
                {w}
              </motion.span>
            </span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </motion.span>
  );
}
