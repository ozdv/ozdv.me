"use client";

import { ThemeProvider } from "next-themes";

// https://github.com/pacocoursey/next-themes
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
}
