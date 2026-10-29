import type { StaticImageData } from "next/image";
import icatholicIcon from "../../public/projects/icatholic-icon.png";
import legionScreenshot from "../../public/projects/legion-of-mary.jpg";

export const SITE_URL = "https://www.ozdv.me";

export const NAV_ITEMS = [
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/ozdv",
  linkedin: "https://www.linkedin.com/in/ozdv/",
  email: "cam@ozdv.me",
  resume: "/Cameron_Davies_Resume.pdf",
};

type LinkT = { label: string; href: string };

type ProjectT = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  since: string;
  image: { src: StaticImageData; alt: string; fit: "cover" | "contain" };
  links: LinkT[];
};

export const PROJECTS: ProjectT[] = [
  {
    name: "iCatholic",
    tagline: "Catholic companion app for iOS and Android",
    description:
      "Daily Mass readings, the Divine Office, the Rosary, prayers in English and Latin, and a guided examination of conscience, all with custom reminders.",
    highlights: [
      "Built and shipped the full stack: a React Native app and a NestJS + PostgreSQL backend for liturgical calendar and Bible data.",
      "Grew to 1,000+ downloads with 21% monthly active users through organic SEO and App Store optimization.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "NestJS"],
    since: "2022",
    image: {
      src: icatholicIcon,
      alt: "iCatholic app icon",
      fit: "contain",
    },
    links: [
      { label: "Learn more", href: "/icatholic" },
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/icatholic/id1666078538",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.ozdv.icatholic",
      },
    ],
  },
  {
    name: "Legion of Mary Calgary",
    tagline: "Website for the Legion of Mary in the Diocese of Calgary",
    description:
      "Prayers, events, and resources for the three Curiae and their local groups across the diocese.",
    highlights: [
      "Designed and built the site, and maintain it alongside other volunteers.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    since: "2024",
    image: {
      src: legionScreenshot,
      alt: "Homepage of the Legion of Mary Calgary website",
      fit: "cover",
    },
    links: [
      { label: "Visit site", href: "https://www.legionofmarycalgary.com" },
      { label: "Source", href: "https://github.com/ozdv/legion" },
    ],
  },
];

type CareerExperienceT = {
  role: string;
  company: { name: string; url?: string };
  location: string;
  from: string;
  to: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const CAREER_EXPERIENCE: CareerExperienceT[] = [
  {
    role: "Full-Stack Software Engineer",
    company: { name: "Quickly", url: "https://helloquickly.com" },
    location: "Calgary, AB",
    from: "Feb 2023",
    to: "Present",
    summary:
      "Early engineer at a B2B invoicing and payments platform for small and mid-sized businesses.",
    points: [
      "Built the entire frontend architecture from scratch, taking Quickly from zero to a working SaaS platform in 3 months.",
      "Built backend services on Node.js, AWS Lambda, Aurora, and SQS for ERP integrations and high-volume invoice processing.",
      "Designed APIs and infrastructure supporting 600+ businesses, contributing to 200% customer growth and a 138% year-over-year revenue increase.",
      "Integrated QuickBooks, Sage, Xero, and other ERPs to automate invoicing across 50,000+ invoices.",
      "Implemented EFT and credit card payment processing, handling millions of dollars in transactions.",
      "Set up CI/CD with Jest unit tests and Cypress end-to-end tests.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "AWS",
      "Turborepo",
      "Tailwind CSS",
      "Docker",
    ],
  },
  {
    role: "Full-Stack Software Engineer",
    company: { name: "White Whale Analytics" },
    location: "Calgary, AB",
    from: "Sep 2021",
    to: "Jan 2023",
    summary:
      "Joined as an intern and moved to full-time, building DeepSea, an end-to-end AI data platform.",
    points: [
      "Built real-time data visualization dashboards with React and ECharts for enterprise clients.",
      "Improved data ingestion pipelines for AI modeling, speeding up processing by 22% and cutting deployment issues by 30%.",
    ],
    stack: ["React", "Node.js", "HapiJS", "MongoDB", "Python", "Pandas"],
  },
];

export const EDUCATION = {
  school: "University of Calgary",
  degree: "BSc in Computer Science & BA in Philosophy",
  year: "2022",
};

export const EXPERIENCE_HIGHLIGHTS = [
  { value: "600+", label: "Businesses on the platform I helped build" },
  { value: "50,000+", label: "Invoices automated through ERP integrations" },
  { value: "200%", label: "Year-over-year customer growth at Quickly" },
  { value: "1,000+", label: "Downloads of my app, iCatholic" },
];

export const SKILLS = [
  {
    group: "Frontend",
    items: [
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "Turborepo",
      "Storybook",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Sequelize",
      "PostgreSQL",
      "MongoDB",
      "HapiJS",
      "OpenAPI",
    ],
  },
  {
    group: "Cloud & tooling",
    items: ["AWS", "GCP", "Firebase", "Supabase", "Docker", "Jest", "Cypress"],
  },
  {
    group: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Java", "C#", "C/C++"],
  },
];
