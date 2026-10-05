import { CornerLinks } from "@/components/corner-links";
import { Footer } from "@/components/footer";
import { Ruler } from "@/components/ruler";
import { GuideLines } from "@/components/ui/guides";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <GuideLines />
      <CornerLinks />
      <Ruler />
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
