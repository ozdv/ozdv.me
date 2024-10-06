import Link from "next/link";
import React from "react";

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

export default NavLink;
