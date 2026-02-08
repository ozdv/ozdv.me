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
        "fixed inset-x-0 top-0 z-50 mx-auto flex h-(--header-height) border-b border-b-transparent px-4 backdrop-blur-sm transition-colors duration-500 md:px-6",
        scroll && "border-b-border",
      )}
    >
      <div className="flex w-full flex-row items-center justify-between">
        <nav className="flex flex-row items-center gap-4">
          <MobileNav className="flex md:hidden" />

          <Button
            asChild
            variant={null}
            className="relative hidden text-2xl font-normal after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-linear-to-r after:from-blue-400 after:to-pink-500 after:transition-all after:duration-300 hover:after:w-full md:flex"
          >
            <Link href="/">
              OZDV
              <span className="sr-only">Home</span>
            </Link>
          </Button>

          <div className="hidden items-center gap-2 md:flex">
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
