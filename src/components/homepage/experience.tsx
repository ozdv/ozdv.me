import {
  SectionHeading,
  StackList,
} from "@/components/homepage/section-heading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CAREER_EXPERIENCE, EDUCATION } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import Link from "next/link";

const TimelineMarker = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative z-10 hidden size-10 shrink-0 items-center justify-center rounded-full border bg-background text-sm font-semibold text-muted-foreground shadow-sm sm:flex",
        active && "border-primary text-primary",
      )}
    >
      {children}
    </div>
  );
};

const DateBadge = ({ from, to }: { from: string; to: string }) => {
  return (
    <Badge variant="outline" className="font-normal text-muted-foreground">
      {from} – {to}
    </Badge>
  );
};

export const ExperienceTimeline = () => {
  return (
    <ol className="relative flex flex-col gap-6 sm:before:absolute sm:before:inset-y-5 sm:before:left-5 sm:before:w-px sm:before:bg-border">
      {CAREER_EXPERIENCE.map((job) => {
        const current = job.to === "Present";
        return (
          <li key={`${job.company.name}-${job.from}`} className="flex gap-6">
            <TimelineMarker active={current}>
              {job.company.name.charAt(0)}
            </TimelineMarker>
            <Card className="flex-1 gap-5">
              <CardHeader className="has-data-[slot=card-action]:grid-cols-1 sm:has-data-[slot=card-action]:grid-cols-[1fr_auto]">
                <CardTitle className="text-lg/snug">{job.role}</CardTitle>
                <CardDescription className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  {job.company.url ? (
                    <Link
                      href={job.company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      {job.company.name}
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  ) : (
                    <span className="font-medium text-foreground">
                      {job.company.name}
                    </span>
                  )}
                  <span aria-hidden="true">·</span>
                  <span>{job.location}</span>
                </CardDescription>
                <CardAction className="hidden flex-col items-end gap-1.5 sm:flex">
                  <DateBadge from={job.from} to={job.to} />
                  {current && <Badge>Current role</Badge>}
                </CardAction>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5 sm:hidden">
                  <DateBadge from={job.from} to={job.to} />
                  {current && <Badge>Current role</Badge>}
                </div>
                <p>{job.summary}</p>
                <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/50"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="border-t pt-5">
                <StackList stack={job.stack} />
              </CardFooter>
            </Card>
          </li>
        );
      })}
      <li className="flex gap-6">
        <TimelineMarker>
          <GraduationCap className="size-4" />
        </TimelineMarker>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="text-lg/snug">{EDUCATION.degree}</CardTitle>
            <CardDescription>{EDUCATION.school}</CardDescription>
            <CardAction>
              <Badge
                variant="outline"
                className="font-normal text-muted-foreground"
              >
                {EDUCATION.year}
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>
      </li>
    </ol>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        title="Experience"
        description="Full-stack engineering at early-stage startups in Calgary."
        moreHref="/experience"
        moreLabel="Skills and highlights"
      />
      <ExperienceTimeline />
    </section>
  );
};
