"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const AppHeader = () => {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-colors duration-500 border-b-transparent",
          scroll && "border-b-border",
        )}
      >
        <nav className="mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              aria-label="Home"
              scroll={false}
              className="text-2xl text-muted-foreground transition-colors hover:text-foreground px-2 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              OZDV
            </Link>

            <div className="flex items-center gap-6">
              {NAV_ITEMS.map((navItem: { label: string; href: string }) => (
                <Link
                  key={navItem.href}
                  href={navItem.href}
                  className={cn(
                    "text-base px-1 text-muted-foreground hover:text-foreground transition-colors first-letter:uppercase",
                    pathname === navItem.href && "text-foreground",
                  )}
                >
                  {navItem.label}
                </Link>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>
      <div className="h-16" />
    </>
  );
};
