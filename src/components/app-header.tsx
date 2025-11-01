"use client";

import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// todo fix backdrop blur animation on scroll

export const AppHeader = () => {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const mainElement = document.getElementById("main-content");
    if (!mainElement) return;

    const handleScroll = () => {
      if (mainElement.scrollTop > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    mainElement.addEventListener("scroll", handleScroll);
    return () => {
      mainElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto border-b backdrop-blur transition-colors duration-500 border-b-transparent h-(--header-height) flex",
        scroll && "border-b-border",
      )}
    >
      <div className="flex flex-row items-center justify-between w-full">
        <nav className="flex flex-row items-center gap-4">
          <MobileNav className="flex md:hidden" />

          <Button
            asChild
            variant="ghost"
            className="hidden lg:flex text-2xl font-normal"
          >
            <Link href="/">
              OZDV
              <span className="sr-only">Home</span>
            </Link>
          </Button>
          <div className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((navItem: { label: string; href: string }) => (
              <Button key={navItem.href} variant="ghost" asChild size="sm">
                <Link
                  key={navItem.href}
                  href={navItem.href}
                  className={cn(
                    "text-sm px-1 text-muted-foreground hover:text-foreground transition-colors font-semibold ",
                    pathname === navItem.href && "text-foreground",
                  )}
                >
                  {navItem.label}
                </Link>
              </Button>
            ))}
          </div>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};
