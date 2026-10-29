import { Projects } from "@/components/homepage/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Apps and websites built by Cameron Davies, including the iCatholic mobile app.",
};

export default function ProjectsPage() {
  return <Projects as="h1" />;
}
