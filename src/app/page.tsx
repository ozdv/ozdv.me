import { About } from "@/components/homepage/about";
import { ContactCta } from "@/components/homepage/contact-cta";
import { Experience } from "@/components/homepage/experience";
import { HeroSection } from "@/components/homepage/hero";
import { Projects } from "@/components/homepage/projects";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Projects />
      <Experience />
      <ContactCta />
    </div>
  );
}
