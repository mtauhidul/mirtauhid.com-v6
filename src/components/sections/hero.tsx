"use client";

import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { buttonClasses } from "@/components/ui/button";
import { Crosshairs } from "@/components/ui/guides";
import { Container } from "@/components/ui/container";

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

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh flex-col justify-end pt-32 pb-12 md:pb-16"
    >
      {/* top divider with crosshairs, below the corner links; scrolls away with the page like the section dividers */}
      <div aria-hidden className="absolute inset-x-0 top-[5.5rem]">
        <Crosshairs />
      </div>
      <Container>
        <motion.p {...fade(0.2)} className="label mb-8 flex items-center gap-3">
          <span className="bg-accent size-2" />
          {profile.role} · {profile.location}
        </motion.p>

        <div className="[container-type:inline-size]">
          <h1 className="display text-[15cqw] md:text-[7.8cqw]">
            <Line delay={0.3}>Frontend design engineer</Line>
            <Line delay={0.4}>
              with <span className="text-accent">backend experience.</span>
            </Line>
          </h1>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:items-end md:gap-x-10">
          <motion.p
            {...fade(0.9)}
            className="text-fg-muted text-lg md:col-span-6 md:text-xl"
          >
            {profile.intro}
          </motion.p>
          <motion.div
            {...fade(1)}
            className="flex flex-wrap gap-3 md:col-span-6 md:justify-end"
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

        <motion.dl
          {...fade(1.15)}
          className="border-line mt-14 grid grid-cols-3 gap-6 border-t pt-6 md:mt-20"
        >
          {profile.proof.map((p) => (
            <div key={p.label}>
              <dd className="display text-3xl md:text-5xl">{p.value}</dd>
              <dt className="label mt-2">{p.label}</dt>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
