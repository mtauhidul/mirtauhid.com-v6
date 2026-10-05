import { PaletteTrigger } from "./palette-trigger";

/** Floating text chrome instead of a navbar: wordmark (left), menu and contact (right). */
export function CornerLinks() {
  return (
    <>
      <a
        href="#top"
        className="fixed top-6 left-6 z-50 font-mono text-sm text-white mix-blend-difference md:left-10"
      >
        mir.tauhidul
      </a>
      <div className="fixed top-6 right-6 z-50 flex items-center gap-6 font-mono text-sm text-white mix-blend-difference md:right-10">
        <PaletteTrigger />
        <a href="#contact">
          <span className="decoration-white/60 underline-offset-4 hover:underline">
            Contact
          </span>{" "}
          →
        </a>
      </div>
    </>
  );
}
