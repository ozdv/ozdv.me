"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"
      />
    </svg>
  );
}

// https://github.com/pacocoursey/next-themes
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const otherTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className={clsx(
        "h-6 w-6 fill-slate-600 hover:fill-slate-900 dark:fill-slate-200 dark:hover:fill-slate-100",
        "focus-visible:rounded-full focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600",
        "transition-all duration-500",
        { "-rotate-180": theme === "dark" }
      )}
      onClick={() => {
        setTheme(otherTheme);
      }}
    >
      <span className="sr-only">Switch to {otherTheme} theme</span>
      <ThemeIcon />
    </button>
  );
}
