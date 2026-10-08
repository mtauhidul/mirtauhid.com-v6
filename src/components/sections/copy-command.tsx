"use client";

import { useState } from "react";

export function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable: the command is still selectable */
    }
  }

  return (
    <div className="border-line-strong flex items-stretch border">
      <code className="text-fg-muted min-w-0 flex-1 overflow-x-auto px-4 py-3.5 font-mono text-[13px] whitespace-nowrap">
        <span className="text-accent select-none">$ </span>
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        className="label border-line-strong hover:bg-elevated hover:text-fg ease-smooth shrink-0 border-l px-4 transition-colors duration-300"
      >
        <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
      </button>
    </div>
  );
}
