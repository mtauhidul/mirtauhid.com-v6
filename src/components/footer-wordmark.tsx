"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Full-bleed name that rises up from below when the footer scrolls into view. */
export function FooterWordmark({ text }: { text: string }) {
  return (
    <motion.div
      aria-hidden
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="[container-type:inline-size] mt-16 overflow-hidden md:mt-24"
    >
      <motion.p
        variants={{
          hidden: { y: "110%", opacity: 0 },
          show: { y: 0, opacity: 1 },
        }}
        transition={{ duration: 1.6, ease }}
        className="display h-[11.4cqw] text-center text-[17.8cqw] leading-[0.85] whitespace-nowrap select-none"
        style={{
          backgroundImage: "linear-gradient(to bottom, #f2f2ef59 0%, #f2f2ef08 90%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          paddingInline: "0.1em",
        }}
      >
        {text}
      </motion.p>
    </motion.div>
  );
}
