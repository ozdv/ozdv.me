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
      className="text-sm font-semibold leading-6 text-slate-700 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400"
    >
      {children}
    </Link>
  );
};

export default NavLink;
