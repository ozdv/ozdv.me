import { ExperienceTimeline } from "@/components/homepage/experience";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EXPERIENCE_HIGHLIGHTS, SKILLS, SOCIAL_LINKS } from "@/lib/constants";
import { FileText } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience, skills, and highlights of Cameron Davies, full-stack software engineer in Calgary.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">
          Experience
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Full-stack engineer with 5+ years building web and mobile products at
          early-stage startups, from first commit to production at scale.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={SOCIAL_LINKS.resume} target="_blank" rel="noopener">
              <FileText />
              View resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </header>

      <section aria-label="Highlights">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {EXPERIENCE_HIGHLIGHTS.map((highlight) => (
            <li key={highlight.label}>
              <Card className="h-full gap-2 py-5">
                <CardContent className="flex flex-col gap-1 px-5">
                  <span className="text-3xl font-bold tracking-tight text-primary tabular-nums">
                    {highlight.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {highlight.label}
                  </span>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="work-history" className="flex flex-col gap-6">
        <h2 id="work-history" className="text-2xl font-bold text-primary">
          Work history
        </h2>
        <ExperienceTimeline />
      </section>

      <section aria-labelledby="skills" className="flex flex-col gap-6">
        <h2 id="skills" className="text-2xl font-bold text-primary">
          Skills
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((skill) => (
            <Card key={skill.group} className="gap-4">
              <CardHeader>
                <CardTitle>{skill.group}</CardTitle>
                <CardDescription className="sr-only">
                  {skill.group} skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <li key={item}>
                      <Badge variant="secondary" className="font-normal">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
