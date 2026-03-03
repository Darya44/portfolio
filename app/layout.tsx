import "./styles.css";
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
  title: "Дарья Захарьящева — Portfolio",
  description: "Creative / digital designer portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${dela.variable}`}>
      <body className="font-sans bg-black text-white">
        <header className="mx-auto mb-12 max-w-6xl px-6 pt-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Portfolio
            </Link>

            <nav className="flex gap-6 text-sm text-white/70">
              <Link href="/work" className="hover:text-white">
                Кейсы
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 pb-24">{children}</main>
      </body>
    </html>
  );
}
