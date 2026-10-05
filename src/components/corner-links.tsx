/** Floating text chrome instead of a navbar: wordmark (left) and contact link (right). */
export function CornerLinks() {
  return (
    <>
      <a
        href="#top"
        className="fixed top-6 left-6 z-50 font-mono text-sm text-white mix-blend-difference md:left-10"
      >
        mir.tauhidul
      </a>
      <a
        href="#contact"
        className="fixed top-6 right-6 z-50 font-mono text-sm text-white mix-blend-difference md:right-10"
      >
        <span className="decoration-white/60 underline-offset-4 hover:underline">
          Contact
        </span>{" "}
        →
      </a>
    </>
  );
}
