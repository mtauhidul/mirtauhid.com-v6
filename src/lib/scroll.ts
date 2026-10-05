import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/** Smooth-scroll to a section on the current page. Returns false if it isn't on this page. */
export function scrollToId(id: string): boolean {
  const el = id === "top" ? document.body : document.getElementById(id);
  if (!el) return false;
  if (window.__lenis) {
    window.__lenis.scrollTo(id === "top" ? 0 : el, { duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
  history.replaceState(null, "", id === "top" ? location.pathname : `#${id}`);
  return true;
}
