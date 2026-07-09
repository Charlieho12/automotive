import type { Metadata } from "next";
import { Rajdhani, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EGI Worldwide | Starters, Alternators, Components & Equipment",
  description:
    "Modernized EGI Worldwide website featuring starter inventory, alternator inventory, electrical components, excess inventory, and equipment listings.",
  keywords: [
    "EGI Worldwide",
    "starter inventory",
    "alternators",
    "starters",
    "electrical components",
    "excess inventory",
    "equipment listings",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${rajdhani.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
