import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Darya portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} min-h-screen bg-black text-white font-sans`}>
        <header className="border-b border-white/10">
          <div className="mx-auto grid max-w-[1600px] grid-cols-4 items-center px-6 py-6 text-sm">
            <Link href="/" className="justify-self-start whitespace-nowrap hover:text-white/80">
              Захарьящева Дарья
            </Link>

            <nav className="col-span-3 grid grid-cols-3 items-center text-white/80">
              <Link href="/work" className="justify-self-center hover:text-white">
                CV
              </Link>
              <Link href="/#about" className="justify-self-center hover:text-white">
                Обо мне
              </Link>
              <a
                href="https://t.me/i_young_designer"
                target="_blank"
                rel="noreferrer"
                className="justify-self-end hover:text-white"
              >
                Telegram
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
