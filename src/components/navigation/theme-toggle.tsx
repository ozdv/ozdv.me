"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useCallback } from "react";

const ThemeIcon = (props: React.ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"
      />
    </svg>
  );
};

// todo make this a fun animation and/or fix rotation animation
export const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      title="Toggle theme"
      className="fill-muted-foreground hover:fill-foreground"
      onClick={toggleTheme}
    >
      <span className="sr-only">Switch theme</span>
      <ThemeIcon
        className={cn("size-6 transition-transform duration-500", {
          "rotate-180": resolvedTheme === "dark",
        })}
      />
    </Button>
  );
};
