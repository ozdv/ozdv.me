import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

export const ContactCta = () => {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 pt-16 pb-24">
      <div className="flex flex-col items-center gap-4 rounded-xl border bg-muted/40 px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-primary">Let&apos;s talk</h2>
        <p className="max-w-md text-muted-foreground">
          Have a project, a role, or just want to say hi? I&apos;d love to hear
          from you.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/contact">Get in touch</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`mailto:${SOCIAL_LINKS.email}`}>
              {SOCIAL_LINKS.email}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
