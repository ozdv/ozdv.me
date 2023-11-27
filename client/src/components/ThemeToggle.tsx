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

export function ThemeToggle() {
  let [mounted, setMounted] = useState(false);
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className="group"
      onClick={() => setTheme(otherTheme)}
    >
      <span className="sr-only">Switch to {otherTheme} theme</span>
      <ThemeIcon
        className={clsx(
          "h-6 w-6 transform fill-slate-600 transition-all hover:ease-in-out group-hover:fill-slate-900 dark:fill-slate-200 dark:group-hover:fill-white",
          resolvedTheme === "dark" ? " rotate-180" : ""
        )}
      />
    </button>
  );
}
