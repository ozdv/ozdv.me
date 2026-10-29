import { Experience } from "@/components/homepage/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience of Cameron Davies, full-stack software engineer in Calgary.",
};

export default function ExperiencePage() {
  return <Experience as="h1" />;
}
