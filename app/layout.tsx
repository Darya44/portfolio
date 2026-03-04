import "./globals.css";
import type { Metadata } from "next";
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
  title: "Portfolio",
  description: "Darya portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${manrope.variable} ${dela.variable}`}>
      <body className="min-h-screen bg-black text-white font-sans">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Portfolio
            </Link>

            <nav className="flex items-center gap-6 text-sm text-white/70">
              <Link href="/work" className="hover:text-white">
                Кейсы
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
