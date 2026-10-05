"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navItems, profile } from "@/content/profile";
import { cn } from "@/lib/cn";
import { scrollToId } from "@/lib/scroll";

export const OPEN_PALETTE_EVENT = "portfolio:open-palette";
export const TOGGLE_GRID_EVENT = "portfolio:toggle-grid";

type Item = {
  id: string;
  group: "Sections" | "Actions";
  label: string;
  hint?: string;
  run: () => void;
};

/** Cmd/Ctrl+K (or "/") opens a quick-jump menu. Also the mobile menu. */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const [toast, setToast] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setCursor(0);
  }, []);

  const items = useMemo<Item[]>(
    () => [
      ...navItems.map((n, i) => ({
        id: `s-${n.id}`,
        group: "Sections" as const,
        label: n.label,
        hint: String(i).padStart(2, "0"),
        run: () => scrollToId(n.id),
      })),
      {
        id: "a-copy",
        group: "Actions",
        label: "Copy email address",
        hint: profile.email,
        run: () => {
          navigator.clipboard?.writeText(profile.email);
          setToast("Email copied");
          setTimeout(() => setToast(""), 1600);
        },
      },
      {
        id: "a-github",
        group: "Actions",
        label: "Open GitHub",
        hint: "↗",
        run: () => window.open(profile.socials[0].href, "_blank", "noopener,noreferrer"),
      },
      {
        id: "a-grid",
        group: "Actions",
        label: "Toggle layout grid",
        hint: "G",
        run: () => window.dispatchEvent(new Event(TOGGLE_GRID_EVENT)),
      },
    ],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? items.filter((i) => i.label.toLowerCase().includes(q)) : items;
  }, [items, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      const typing =
        !!t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        close();
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
    };
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${cursor}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  function onInputKey(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (filtered.length ? (c + 1) % filtered.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) =>
        filtered.length ? (c - 1 + filtered.length) % filtered.length : 0,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[cursor];
      if (item) {
        close();
        item.run();
      }
    }
  }

  let lastGroup = "";

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="palette"
            className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[14vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              aria-label="Close menu"
              className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Quick menu"
              className="bg-elevated border-line-strong relative w-full max-w-xl overflow-hidden rounded-[6px] border shadow-2xl"
              initial={{ y: 16, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 8, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="border-line flex items-center gap-3 border-b px-5">
                <span aria-hidden className="text-fg-subtle font-mono text-sm">
                  /
                </span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setCursor(0);
                  }}
                  onKeyDown={onInputKey}
                  placeholder="Jump to a section or action"
                  aria-label="Search"
                  className="placeholder:text-fg-subtle w-full bg-transparent py-4 text-base outline-none"
                />
                <kbd className="text-fg-subtle border-line-strong rounded-[3px] border px-1.5 py-0.5 font-mono text-[10px]">
                  esc
                </kbd>
              </div>

              <ul
                ref={listRef}
                role="listbox"
                className="max-h-[52vh] overflow-y-auto p-2"
              >
                {filtered.length === 0 && (
                  <li className="text-fg-subtle px-3 py-6 text-center text-sm">
                    No results
                  </li>
                )}
                {filtered.map((item, i) => {
                  const header = item.group !== lastGroup;
                  lastGroup = item.group;
                  return (
                    <li key={item.id} role="presentation">
                      {header && <p className="label px-3 pt-3 pb-1.5">{item.group}</p>}
                      <button
                        role="option"
                        aria-selected={i === cursor}
                        data-index={i}
                        onMouseMove={() => setCursor(i)}
                        onClick={() => {
                          close();
                          item.run();
                        }}
                        className={cn(
                          "flex w-full items-center justify-between gap-4 rounded-[4px] px-3 py-2.5 text-left transition-colors duration-150",
                          i === cursor ? "text-fg bg-white/[0.07]" : "text-fg-muted",
                        )}
                      >
                        <span>{item.label}</span>
                        {item.hint && (
                          <span className="text-fg-subtle truncate font-mono text-xs">
                            {item.hint}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="border-line text-fg-subtle flex gap-4 border-t px-5 py-2.5 font-mono text-[10px]">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        role="status"
        className={cn(
          "ease-smooth bg-elevated border-line-strong fixed bottom-6 left-1/2 z-[95] -translate-x-1/2 rounded-[3px] border px-4 py-2.5 font-mono text-xs transition-all duration-500",
          toast
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        {toast}
      </div>
    </>
  );
}
