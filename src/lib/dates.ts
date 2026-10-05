const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function parse(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return { y, m: m - 1 };
}

/** "Jul 2023 — Present" */
export function formatPeriod(start: string, end: string | null): string {
  const a = parse(start);
  const from = `${MONTHS[a.m]} ${a.y}`;
  if (!end) return `${from} — Present`;
  const b = parse(end);
  return `${from} — ${MONTHS[b.m]} ${b.y}`;
}

/** "3 yrs 4 mos", counting both the first and last month (the way LinkedIn does). */
export function formatDuration(
  start: string,
  end: string | null,
  now = new Date(),
): string {
  const a = parse(start);
  const b = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() };
  const months = (b.y - a.y) * 12 + (b.m - a.m) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (rest) parts.push(`${rest} ${rest === 1 ? "mo" : "mos"}`);
  return parts.join(" ") || "1 mo";
}
