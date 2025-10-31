"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const otherTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      id="theme-toggle-button"
      type="button"
      className={cn(
        "h-6 w-6 fill-muted-foreground hover:fill-foreground cursor-pointer",
        "focus-visible:rounded-full focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-ring/50",
        "transition-all duration-500",
        { "-rotate-180": theme === "dark" },
      )}
      onClick={() => setTheme(otherTheme)}
    >
      <span className="sr-only">Switch to {otherTheme} theme</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"
        />
      </svg>
    </button>
  );
};
