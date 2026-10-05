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

/** Dates are "YYYY-MM", or just "YYYY" when the month isn't known. */
function parse(value: string) {
  const [y, m] = value.split("-").map(Number);
  return { y, m: Number.isFinite(m) ? m - 1 : null };
}

function label(value: string) {
  const { y, m } = parse(value);
  return m === null ? `${y}` : `${MONTHS[m]} ${y}`;
}

/** "Jul 2023 — Present" or "2021 — 2023" */
export function formatPeriod(start: string, end: string | null): string {
  return `${label(start)} — ${end ? label(end) : "Present"}`;
}

/**
 * "3 yrs 4 mos", counting both the first and last month (the way LinkedIn does).
 * Returns null when either date has no month, since the duration would be a guess.
 */
export function formatDuration(
  start: string,
  end: string | null,
  now = new Date(),
): string | null {
  const a = parse(start);
  const b = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() };
  if (a.m === null || b.m === null) return null;
  const months = (b.y - a.y) * 12 + (b.m - a.m) + 1;
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (rest) parts.push(`${rest} ${rest === 1 ? "mo" : "mos"}`);
  return parts.join(" ") || "1 mo";
}
