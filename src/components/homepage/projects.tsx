import {
  SectionHeading,
  StackList,
} from "@/components/homepage/section-heading";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Projects = ({ as = "h2" }: { as?: "h1" | "h2" }) => {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        as={as}
        title="Projects"
        description="Things I've built and shipped outside of my day job."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className="flex flex-col overflow-hidden rounded-xl border bg-card"
          >
            <div className="relative aspect-video border-b bg-muted">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                placeholder="blur"
                className={cn(
                  project.image.fit === "cover"
                    ? "size-full object-cover object-top"
                    : "absolute inset-0 m-auto size-28 rounded-3xl shadow-lg",
                )}
                sizes="(min-width: 768px) 480px, 100vw"
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <span className="text-xs text-muted-foreground">
                    Since {project.since}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground">
                  {project.tagline}
                </p>
              </div>
              <p className="text-sm">{project.description}</p>
              <ul className="list-outside list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-col gap-4 pt-2">
                <StackList stack={project.stack} />
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {project.links.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        {...(external && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                        className="flex items-center gap-0.5 text-sm font-medium underline-offset-4 hover:underline"
                      >
                        {link.label}
                        {external && <ArrowUpRight className="size-3.5" />}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
