import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Dela_Gothic_One, Manrope } from "next/font/google";

const dela = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-dela",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Portfolio Studio",
  description: "App Router portfolio template with case studies",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${dela.variable}`}>
      <body className="font-sans bg-black text-white">
        <header className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Portfolio Studio
          </Link>
        </header>

        {children}
      </body>
    </html>
  );
}
