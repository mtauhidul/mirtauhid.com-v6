"use client";

import { MotionConfig } from "motion/react";

/** Honors the OS reduced-motion setting for every motion animation. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
