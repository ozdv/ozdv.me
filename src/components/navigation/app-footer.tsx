import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const SOCIALS = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: Github },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail },
  { label: "Resume", href: SOCIAL_LINKS.resume, icon: FileText },
];

export const AppFooter = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <Link href="/" className="font-medium">
            Cameron Davies
          </Link>
          <p className="text-sm text-muted-foreground">
            Full-stack software engineer in Calgary, Canada
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_ITEMS.map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {navItem.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-1">
          {SOCIALS.map(({ label, href, icon: Icon }) => (
            <Button
              key={label}
              variant="ghost"
              size="icon"
              aria-label={label}
              asChild
              className="text-muted-foreground hover:text-foreground"
            >
              <a
                href={href}
                {...(!href.startsWith("mailto:") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <Icon className="size-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};
