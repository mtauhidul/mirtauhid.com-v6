"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { buttonClasses } from "@/components/ui/button";
import { Crosshairs } from "@/components/ui/guides";
import { Container } from "@/components/ui/container";

const roles = ["Frontend Developer", "Design Engineer", "Solo Builder"];

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.1em]">
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

/** Cycles through the roles. They are stacked in one grid cell, and the box eases to the width of the visible one so the location stays close. */
function RotatingRole() {
  const [i, setI] = useState(0);
  const [widths, setWidths] = useState<number[]>([]);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const measure = () => setWidths(refs.current.map((el) => el?.offsetWidth ?? 0));
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const prev = (i + roles.length - 1) % roles.length;

  return (
    <motion.span
      className="inline-grid overflow-hidden whitespace-nowrap"
      initial={false}
      animate={widths.length ? { width: widths[i] } : undefined}
      transition={{ duration: 0.6, ease }}
    >
      {roles.map((r, idx) => (
        <motion.span
          key={r}
          aria-hidden={idx !== i}
          ref={(el) => {
            refs.current[idx] = el;
          }}
          className="w-max [grid-area:1/1]"
          initial={false}
          animate={{
            y: idx === i ? "0%" : idx === prev ? "-110%" : "110%",
            opacity: idx === i ? 1 : 0,
          }}
          transition={{ duration: 0.6, ease }}
        >
          {r}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[85svh] flex-col justify-center pt-32 pb-16 md:pb-20"
    >
      {/* top divider with crosshairs, below the corner links; scrolls away with the page like the section dividers */}
      <div aria-hidden className="absolute inset-x-0 top-[5.5rem]">
        <Crosshairs />
      </div>
      <Container>
        <motion.p
          {...fade(0.2)}
          className="label mb-8 flex items-center gap-3 whitespace-nowrap max-[360px]:text-[11px]"
        >
          <span className="bg-accent size-2 shrink-0" />
          <RotatingRole />
          <span className="shrink-0">· {profile.location}</span>
        </motion.p>

        <div className="[container-type:inline-size]">
          <h1 className="display text-[15cqw] md:text-[10.8cqw]">
            <Line delay={0.3}>Design engineer</Line>
            <Line delay={0.4}>
              building for <span className="text-accent">the web.</span>
            </Line>
          </h1>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-end md:gap-x-10">
          <motion.p
            {...fade(0.6)}
            className="text-fg-muted text-base md:col-span-7 md:text-xl"
          >
            {profile.intro}
          </motion.p>
          <motion.div
            {...fade(1)}
            className="flex flex-wrap gap-3 md:col-span-5 md:justify-end"
          >
            <a href="#work" className={buttonClasses("primary")}>
              See selected work <span aria-hidden>↓</span>
            </a>
            <a
              href="https://github.com/mtauhidul"
              target="_blank"
              rel="noreferrer"
              className={buttonClasses("secondary")}
            >
              GitHub <span aria-hidden>↗</span>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
