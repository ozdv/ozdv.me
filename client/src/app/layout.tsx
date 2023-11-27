import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s - ozdv",
    default: "ozdv",
  },
  description: "Innovative software solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx("min-h-full antialiased", inter.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-white dark:bg-gray-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
