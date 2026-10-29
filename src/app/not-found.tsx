import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-6 py-24 text-center sm:py-32">
      <p className="font-mono text-sm text-muted-foreground">404</p>
      <h1 className="text-4xl font-bold text-primary sm:text-5xl">
        Page not found
      </h1>
      <p className="text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Back home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/projects">See my projects</Link>
        </Button>
      </div>
    </div>
  );
}
