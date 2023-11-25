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
      className="inline-block rounded-lg px-2 py-1 text-sm text-gray-400 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  );
};

export default NavLink;