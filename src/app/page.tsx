import { Experience } from "@/components/homepage/experience";
import { HeroSection } from "@/components/homepage/hero";
import { Projects } from "@/components/homepage/projects";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Experience />
      <Projects />
    </div>
  );
}
