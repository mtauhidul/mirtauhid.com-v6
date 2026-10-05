"use client";

import { useSyncExternalStore } from "react";
import { OPEN_PALETTE_EVENT } from "./command-palette";

/** Top-right button (beside Contact) that opens the quick menu. */
export function PaletteTrigger() {
  const mod = useSyncExternalStore(
    () => () => {},
    () => (/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl"),
    () => "⌘",
  );

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
      className="inline-flex items-center gap-2.5 font-mono text-sm text-white"
      aria-label="Open quick menu"
    >
      <span className="decoration-white/60 underline-offset-4 hover:underline">Menu</span>
      <kbd className="hidden rounded-[3px] border border-white/40 px-1.5 py-0.5 text-[10px] md:inline">
        {mod} K
      </kbd>
    </button>
  );
}
