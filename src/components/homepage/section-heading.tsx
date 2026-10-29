import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const SectionHeading = ({
  as: Heading = "h2",
  title,
  description,
  moreHref,
  className,
}: {
  as?: "h1" | "h2";
  title: string;
  description?: React.ReactNode;
  moreHref?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <Heading className="text-3xl font-bold text-primary">{title}</Heading>
        {description && (
          <p className="max-w-2xl text-muted-foreground">{description}</p>
        )}
      </div>
      {moreHref && (
        <Link
          href={moreHref}
          className="group flex shrink-0 items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View all
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
};

export const StackList = ({ stack }: { stack: string[] }) => {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
      {stack.map((item) => (
        <li
          key={item}
          className="rounded-md border px-2 py-0.5 text-xs text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
