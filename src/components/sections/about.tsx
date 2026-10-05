import Image from "next/image";
import { profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <Section id="about" aria-label="About">
      <SectionHeading index="02" label="About" title="About me." />
      <div className="grid gap-12 md:grid-cols-12 md:gap-x-10">
        <Reveal className="md:col-span-4">
          <div className="border-line relative aspect-[4/5] overflow-hidden border">
            <Image
              src="/images/portrait.jpg"
              alt={`Portrait of ${profile.fullName}`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover object-[50%_28%]"
            />
            {/* darkening so the bright photo sits in the dark page: even tint + stronger fade from the bottom */}
            <div aria-hidden className="bg-bg/[0.22] absolute inset-0" />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to top, rgba(11,11,12,0.92) 0%, rgba(11,11,12,0.55) 35%, rgba(11,11,12,0) 70%)",
              }}
            />
          </div>
        </Reveal>
        <div className="space-y-10 md:col-span-8">
          <Reveal className="space-y-6">
            <p className="font-display text-2xl leading-snug tracking-tight md:text-4xl">
              {profile.about.lead}
            </p>
            <p className="text-fg-muted max-w-2xl text-lg">{profile.about.body}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <dl>
              {profile.about.facts.map((f) => (
                <div
                  key={f.label}
                  className="border-line grid grid-cols-3 gap-4 border-t py-4 last:border-b"
                >
                  <dt className="label pt-1">{f.label}</dt>
                  <dd className="col-span-2">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
