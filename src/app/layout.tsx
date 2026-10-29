import { AppFooter } from "@/components/navigation/app-footer";
import { AppHeader } from "@/components/navigation/app-header";
import { SITE_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s · Cameron Davies",
    default: "Cameron Davies · Full-Stack Software Engineer",
  },
  description:
    "Cameron Davies is a full-stack software engineer in Calgary, Canada, building web and mobile products with React, Next.js, TypeScript, and Node.js.",
  authors: [{ name: "Cameron Davies", url: SITE_URL }],
  openGraph: {
    type: "website",
    siteName: "Cameron Davies",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-dvh flex-col antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppHeader />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <AppFooter />
          <Toaster position="top-center" />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
