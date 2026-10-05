import { CommandPalette } from "@/components/command-palette";
import { CornerLinks } from "@/components/corner-links";
import { Footer } from "@/components/footer";
import { GridOverlay } from "@/components/grid-overlay";
import { GuideLines } from "@/components/ui/guides";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";
import { profile } from "@/content/profile";
import { siteConfig } from "@/config/site";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.role,
  url: siteConfig.url,
  email: profile.email,
  address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
  sameAs: profile.socials.map((s) => s.href),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <GuideLines />
      <CornerLinks />
      <GridOverlay />
      <CommandPalette />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
