import {
  siAnthropic,
  siCloudinary,
  siExpress,
  siFirebase,
  siJavascript,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";

const icons: Record<string, { path: string }> = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  React: siReact,
  "Next.js": siNextdotjs,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  "Express.js": siExpress,
  MongoDB: siMongodb,
  Firebase: siFirebase,
  "Anthropic API": siAnthropic,
  Cloudinary: siCloudinary,
  Vercel: siVercel,
};

/** Initials shown in an outlined tile when there is no brand logo. */
const monograms: Record<string, string> = {
  Accessibility: "a11y",
  "REST APIs": "API",
  Authentication: "ID",
  "OpenAI API": "AI",
  Heroku: "HK",
};

/**
 * Brand logo (monochrome, inherits the text color) or an initials tile.
 * Decorative: the tool name is always shown next to it.
 */
export function TechIcon({ name }: { name: string }) {
  const icon = icons[name];
  if (icon) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className="size-5 shrink-0 fill-current">
        <path d={icon.path} />
      </svg>
    );
  }
  return (
    <span
      aria-hidden
      className="border-line-strong flex size-5 shrink-0 items-center justify-center rounded-[3px] border font-mono text-[8px] leading-none tracking-tight"
    >
      {monograms[name] ?? name.slice(0, 2).toUpperCase()}
    </span>
  );
}
