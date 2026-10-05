import { Reveal } from "./reveal";
import { SplitReveal } from "./split-reveal";

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-20">
      <p className="label mb-6 flex items-center gap-3">
        <span className="text-accent">{index}</span>
        {label}
      </p>
      <h2 className="display max-w-4xl text-[clamp(2.5rem,6vw,5rem)]">
        <SplitReveal text={title} />
      </h2>
      {description && (
        <p className="text-fg-muted mt-6 max-w-xl text-lg">{description}</p>
      )}
    </Reveal>
  );
}
