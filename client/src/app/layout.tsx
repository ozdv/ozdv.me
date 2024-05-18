import Header from "@/components/Header";
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
      <body className="flex h-screen flex-col bg-white dark:bg-zinc-900">
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
