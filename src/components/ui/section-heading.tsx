import { Reveal } from "./reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-3xl space-y-5 md:mb-20">
      <p className="eyebrow flex items-center gap-3">
        <span className="text-accent">{index}</span>
        <span className="bg-line-strong h-px w-8" />
        {eyebrow}
      </p>
      <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
        {title}
      </h2>
      {description && <p className="text-fg-muted max-w-xl text-lg">{description}</p>}
    </Reveal>
  );
}
