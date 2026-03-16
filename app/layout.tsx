import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

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
    <html lang="ru">
      <body className="min-h-screen bg-black text-white font-sans">
        <header className="border-b border-white/10">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6">
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

        <main className="mx-auto max-w-[1600px] px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
