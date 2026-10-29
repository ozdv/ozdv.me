import {
  SectionHeading,
  StackList,
} from "@/components/homepage/section-heading";
import { CAREER_EXPERIENCE, EDUCATION } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const Experience = ({ as = "h2" }: { as?: "h1" | "h2" }) => {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        as={as}
        title="Experience"
        description="Full-stack engineering at early-stage startups in Calgary."
      />
      <ol className="flex flex-col gap-10">
        {CAREER_EXPERIENCE.map((job) => (
          <li
            key={`${job.company.name}-${job.from}`}
            className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <div className="pt-1 text-sm text-muted-foreground tabular-nums">
              {job.from} – {job.to}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-lg font-semibold">
                  {job.role}
                  <span className="text-muted-foreground"> @ </span>
                  {job.company.url ? (
                    <Link
                      href={job.company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 underline-offset-4 hover:underline"
                    >
                      {job.company.name}
                      <ArrowUpRight className="size-4" />
                    </Link>
                  ) : (
                    job.company.name
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">{job.location}</p>
              </div>
              <p>{job.summary}</p>
              <ul className="list-outside list-disc space-y-1 pl-4 text-muted-foreground">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <StackList stack={job.stack} />
            </div>
          </li>
        ))}
        <li className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8">
          <div className="pt-1 text-sm text-muted-foreground tabular-nums">
            {EDUCATION.year}
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg font-semibold">{EDUCATION.degree}</h3>
            <p className="text-sm text-muted-foreground">{EDUCATION.school}</p>
          </div>
        </li>
      </ol>
    </section>
  );
};
