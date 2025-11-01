"use client";

import { MainNavItem } from "@/components/navigation/main-nav-item";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

// todo fix backdrop blur animation on scroll

export const AppHeader = () => {
  const [scroll, setScroll] = useState(false);

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
        "fixed px-4 md:px-6 inset-x-0 top-0 z-50 mx-auto border-b backdrop-blur transition-colors duration-500 border-b-transparent h-(--header-height) flex",
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
              <MainNavItem
                key={navItem.href}
                href={navItem.href}
                label={navItem.label}
              />
            ))}
          </div>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};
