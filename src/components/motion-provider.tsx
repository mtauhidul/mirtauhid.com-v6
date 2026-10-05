"use client";

import { MotionConfig } from "motion/react";

/** Always plays motion animations, regardless of the OS reduced-motion setting. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
