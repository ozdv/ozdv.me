"use client";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { Fragment } from "react";
import { Container } from "./Container";
import NavLink from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "iCatholic", href: "icatholic" },
  { label: "OpenGames", href: "opengames" },
  { label: "About", href: "about" },
  { label: "Contact", href: "contact" },
];

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Popover.Button
      as={Link}
      href={href}
      className="flex items-center whitespace-nowrap rounded px-6 py-2 font-medium text-white transition-colors duration-200 hover:text-white lg:px-0 lg:py-0 lg:text-sm"
    >
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-gray-900 dark:stroke-white"
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
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-gray-900/50 opacity-100 backdrop-blur backdrop-filter" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full flex origin-top flex-col rounded-2xl border border-white/10 bg-gray-900 p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 backdrop-blur backdrop-filter"
          >
            {navItems.map((navItem) => (
              <MobileNavLink href={navItem.href} key={navItem.href}>
                {navItem.label}
              </MobileNavLink>
            ))}
            {/* <hr className="m-2 border-white/10" /> */}
            {/* <MobileNavLink href="/login">Sign in</MobileNavLink> */}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/75 dark:bg-gray-900/50 sm:backdrop-blur sm:backdrop-filter">
      <Container>
        <div className="relative z-50 flex w-full flex-1 justify-between  px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center md:gap-x-12">
            <Link
              href="/"
              aria-label="Home"
              scroll={false}
              className="text-xl text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400"
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
  );
};

export default Header;
