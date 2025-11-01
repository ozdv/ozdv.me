"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NAV_ITEMS, PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const MobileNav = ({ className }: { className?: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          aria-label="Toggle Mobile Menu"
          variant="ghost"
          className={cn(
            "extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 p-0! hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className,
          )}
        >
          <div className="relative flex h-8 w-4 items-center justify-center">
            <div className="relative size-4">
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  open ? "top-[0.4rem] -rotate-45" : "top-1",
                )}
              />
              <span
                className={cn(
                  "bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100",
                  open ? "top-[0.4rem] rotate-45" : "top-2.5",
                )}
              />
            </div>
            <span className="sr-only">Toggle Menu</span>
          </div>
          <span className="flex h-8 items-center text-lg leading-none font-medium">
            Menu
          </span>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="bg-background/90 no-scrollbar h-(--radix-popper-available-height) w-(--radix-popper-available-width) overflow-y-auto rounded-none border-none p-0 shadow-none backdrop-blur duration-100"
        align="start"
        side="bottom"
        alignOffset={-16}
        sideOffset={14}
      >
        <div className="flex flex-col gap-12 overflow-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            <div className="text-muted-foreground text-sm font-medium">
              Navigation
            </div>

            <div className="flex flex-col gap-3">
              <MobileLink href="/" onOpenChange={setOpen}>
                Home
              </MobileLink>

              {NAV_ITEMS.map((navItem: { label: string; href: string }) => (
                <MobileLink
                  key={navItem.href}
                  href={navItem.href}
                  onOpenChange={setOpen}
                >
                  {navItem.label}
                </MobileLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-muted-foreground text-sm font-medium">
              Projects
            </div>
            <div className="flex flex-col gap-3">
              {PROJECTS.map((navItem: { label: string; href: string }) => (
                <MobileLink
                  key={navItem.href}
                  href={navItem.href}
                  onOpenChange={setOpen}
                >
                  {navItem.label}
                </MobileLink>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-muted-foreground text-sm font-medium">
              Socials
            </div>
            <div className="flex flex-row gap-6">
              <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
                <Link href="https://github.com/ozdv" target="_blank">
                  <Github className="size-8" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" aria-label="LinkedIn" asChild>
                <Link href="https://www.linkedin.com/in/ozdv/" target="_blank">
                  <Linkedin className="size-8" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

const MobileLink = ({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-2xl font-medium", className)}
      {...props}
    >
      {children}
    </Link>
  );
};
