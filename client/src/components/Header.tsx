"use client";

import { navItems } from "@/constants/navItems";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="text-sm font-semibold leading-6 text-zinc-600 transition-colors duration-300 hover:text-zinc-900 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400 dark:text-zinc-300 dark:hover:text-white dark:focus-visible:outline-zinc-700"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <PopoverButton
      as={Link}
      href={href}
      className="flex items-center whitespace-nowrap rounded px-6 py-2 text-lg font-semibold tracking-tight text-zinc-900 transition-colors duration-200 dark:text-white"
    >
      {children}
    </PopoverButton>
  );
};

const MobileNavIcon = ({ open }: { open: boolean }) => {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-zinc-900 dark:stroke-white"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          "origin-center transition",
          open && "scale-90 opacity-0"
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          "origin-center transition",
          !open && "scale-90 opacity-0"
        )}
      />
    </svg>
  );
};

const MobileNavigation = () => {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>

      <PopoverBackdrop
        transition
        className="fixed inset-0 h-screen bg-white/75 dark:bg-zinc-900/75"
      />

      <PopoverPanel
        transition
        className="absolute inset-x-4 mt-4 flex origin-top flex-col rounded-2xl border bg-white p-4 shadow-xl ring-0 backdrop-blur backdrop-filter dark:bg-zinc-900"
      >
        {navItems.map((navItem) => (
          <MobileNavLink href={navItem.href} key={navItem.href}>
            {navItem.label}
          </MobileNavLink>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

const Header = () => {
  const [scroll, setScroll] = useState(false);

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
    <div className="mb-24">
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur transition-colors duration-500",
          {
            "border-b": scroll,
            "!border-b-transparent": !scroll,
          }
        )}
      >
        <Container>
          <div
            className={clsx(
              "relative flex justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8",
              {
                "py-3": scroll,
                "py-6": !scroll,
              }
            )}
          >
            <nav className="flex items-center md:gap-x-12">
              <Link
                href="/"
                aria-label="Home"
                scroll={false}
                className="text-2xl text-zinc-900 transition-colors duration-300 hover:text-indigo-600 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 dark:text-slate-200 dark:hover:text-indigo-400 dark:focus-visible:outline-indigo-600"
              >
                OZDV
              </Link>
              <div className="hidden md:flex md:gap-x-6">
                {navItems.map((navItem) => (
                  <NavLink href={navItem.href} key={navItem.href}>
                    {navItem.label}
                  </NavLink>
                ))}
              </div>
            </nav>
            <div className="flex items-center gap-x-5">
              {/* <div className="hidden md:block">
              <NavLink href="/login">Sign in</NavLink>
            </div> */}

              <ThemeToggle />
              <div className="-mr-1 md:hidden">
                <MobileNavigation />
              </div>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};

export default Header;
