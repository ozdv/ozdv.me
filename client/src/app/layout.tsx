import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      className={clsx("h-full scroll-smooth antialiased", inter.variable)}
    >
      <body className="flex h-full flex-col bg-gray-900 text-gray-400">
        {children}
      </body>
    </html>
  );
}
