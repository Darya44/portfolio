import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio Studio',
  description: 'App Router portfolio template with case studies'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className="mx-auto min-h-screen max-w-6xl px-6 py-8">
          <header className="mb-12 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Portfolio Studio
            </Link>
            <nav className="flex items-center gap-6 text-sm text-white/80">
              <Link href="/">Главная</Link>
              <Link href="/work">Кейсы</Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
