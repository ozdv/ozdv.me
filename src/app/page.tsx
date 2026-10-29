import { About } from "@/components/homepage/about";
import { ContactCta } from "@/components/homepage/contact-cta";
import { Experience } from "@/components/homepage/experience";
import { HeroSection } from "@/components/homepage/hero";
import { Projects } from "@/components/homepage/projects";
import { EDUCATION, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cameron Davies",
  url: SITE_URL,
  image: `${SITE_URL}/square_headshot.jpg`,
  jobTitle: "Full-Stack Software Engineer",
  worksFor: { "@type": "Organization", name: "Quickly" },
  alumniOf: { "@type": "CollegeOrUniversity", name: EDUCATION.school },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HeroSection />
      <About />
      <Projects />
      <Experience />
      <ContactCta />
    </div>
  );
}
