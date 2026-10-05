"use client";

import { useEffect, useState } from "react";

export function LocalTime({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span className="tabular-nums">
      {time || "--:--"} <span className="text-fg-subtle">{timeZone}</span>
    </span>
  );
}
