"use client";

import { useEffect, useState } from "react";

const question = "How does streaming markdown stay smooth?";
const answer =
  "Markdown is split into blocks. Finished blocks are memoized, so only the live block re-renders.";

/** A looping fake chat: question, tool call, then a streamed reply. Decorative, so the transcript is also given as plain text for screen readers. */
export function TurnDemo() {
  const [n, setN] = useState(0);
  const total = answer.length;

  useEffect(() => {
    const id = setInterval(() => setN((v) => (v > total + 60 ? 0 : v + 1)), 38);
    return () => clearInterval(id);
  }, [total]);

  const typed = Math.min(n, total);
  const streaming = n < total;

  return (
    <div className="font-mono text-[13px] leading-relaxed">
      <p className="sr-only">
        Demo: {question} {answer}
      </p>
      <div aria-hidden className="border-line-strong space-y-5 border-l pl-5">
        <div>
          <p className="label mb-1.5">You</p>
          <p className="text-fg">{question}</p>
        </div>
        <div>
          <p className="label mb-1.5">Tool call</p>
          <p className="text-fg-muted">
            search_docs <span className="text-accent">{n > 6 ? "✓ 0.6s" : "…"}</span>
          </p>
        </div>
        <div>
          <p className="label mb-1.5">Assistant</p>
          <p className="text-fg min-h-[5.5rem] font-sans text-[15px] md:min-h-[4.5rem]">
            {answer.slice(0, typed)}
            <span
              className={`bg-accent ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.15em] ${
                streaming ? "" : "animate-pulse"
              }`}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
