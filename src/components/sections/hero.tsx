"use client";

import { motion } from "motion/react";
import { profile } from "@/content/profile";
import { buttonClasses } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16"
    >
      {/* ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="animate-drift absolute top-[-10%] left-[15%] size-[38rem] rounded-full bg-[#5b5bd6]/20 blur-[140px]" />
        <div className="animate-drift-slow absolute right-[5%] bottom-[0%] size-[30rem] rounded-full bg-[#2dd4bf]/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at 50% 35%, #000, transparent 70%)",
          }}
        />
      </div>

      <Container>
        <motion.div {...fade(0.3)} className="mb-8 inline-flex">
          <span className="border-line-strong bg-surface/70 text-fg-muted inline-flex items-center gap-2.5 rounded-full border py-1.5 pr-4 pl-3 text-sm backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(3.4rem,10vw,8.5rem)] leading-[0.98] tracking-tight">
          <Line delay={0.35}>I build calm,</Line>
          <Line delay={0.47}>
            <em className="text-accent">considered</em> software
          </Line>
          <Line delay={0.59}>for the web.</Line>
        </h1>

        <motion.p {...fade(1)} className="text-fg-muted mt-8 max-w-xl text-lg md:text-xl">
          Hi, I&apos;m <span className="text-fg">{profile.name}</span>, a {profile.role}.{" "}
          {profile.intro}
        </motion.p>

        <motion.div {...fade(1.15)} className="mt-10 flex flex-wrap items-center gap-3">
          <a href="#projects" className={buttonClasses("primary")}>
            View selected work <span aria-hidden>↓</span>
          </a>
          <a href="#contact" className={buttonClasses("secondary")}>
            Get in touch
          </a>
        </motion.div>

        <motion.dl
          {...fade(1.3)}
          className="border-line mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t pt-8"
        >
          {profile.stats.map((s) => (
            <div key={s.label}>
              <dt className="text-fg-subtle text-sm">{s.label}</dt>
              <dd className="font-display mt-1 text-4xl md:text-5xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
