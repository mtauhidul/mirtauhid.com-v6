"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navItems, profile } from "@/content/profile";
import { cn } from "@/lib/cn";

export function Nav() {
  const [active, setActive] = useState<string>("");

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
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav className="border-line-strong flex items-center gap-1 rounded-full border bg-black/55 p-1.5 backdrop-blur-xl">
        <a href="#top" className="font-display px-4 text-xl" aria-label="Home">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center md:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "relative block rounded-full px-4 py-2 text-sm transition-colors duration-300",
                  active === id ? "text-fg" : "text-fg-subtle hover:text-fg",
                )}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="bg-elevated absolute inset-0 -z-10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="bg-fg text-bg hover:bg-accent-strong ml-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300"
        >
          Let&apos;s talk
        </a>
      </nav>
    </motion.header>
  );
}
