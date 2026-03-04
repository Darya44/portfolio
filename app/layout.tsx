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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
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
