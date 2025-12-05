export const NAV_ITEMS = [
  { label: "Experience", href: "/experience" },
  // { label: "Projects", href: "/projects" },
  { label: "iCatholic", href: "/icatholic" },
  // { label: "OpenGames", href: "/openGames" },
  { label: "Contact", href: "/contact" },
];

export const PROJECTS = [
  { label: "iCatholic", href: "/icatholic" },
  { label: "OpenGames", href: "/opengames" },
  { label: "Taglish", href: "/taglish" },
];

type CareerExperienceT = {
  from: number;
  to: number;
  jobTitle: string;
  company: { name: string; url: string };
  location: string;
  description: string;
  subRoles?: CareerExperienceT[];
  points?: string[];
};

export const CAREER_EXPERIENCE: CareerExperienceT[] = [
  {
    from: 2001,
    to: 2005,
    jobTitle: "Software Engineer",
    company: { name: "iCatholic", url: "" },
    location: "Calgary, Canada",
    description:
      "Developed and maintained the iCatholic website and mobile app.",
    points: [
      "Developed and maintained the iCatholic website and mobile app.",
      "another point",
    ],
  },
  {
    from: 2001,
    to: 2005,
    jobTitle: "Software Engineer",
    company: { name: "iCatholic", url: "" },
    location: "Calgary, Canada",
    description:
      "Developed and maintained the iCatholic website and mobile app.",
    subRoles: [
      {
        from: 2001,
        to: 2005,
        jobTitle: "Software Engineer",
        company: { name: "iCatholic", url: "" },
        description:
          "Developed and maintained the iCatholic website and mobile app.",
        location: "Calgary, Canada",
      },
    ],
  },
];
