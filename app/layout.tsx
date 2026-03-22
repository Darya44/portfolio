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
          <div className="mx-auto grid max-w-[1600px] grid-cols-[auto_1fr] items-center px-3 py-3 text-[13px] sm:grid-cols-4 sm:px-6 sm:py-6 sm:text-sm">
            <Link href="/" className="justify-self-start leading-[1.05] hover:text-white/80">
              <span className="block sm:inline">Р—Р°С…Р°СЂСЊСЏС‰РµРІР°</span>
              <span className="block sm:ml-1 sm:inline">Р”Р°СЂСЊСЏ</span>
            </Link>

            <nav className="grid grid-cols-2 items-center text-white/80 sm:col-span-3 sm:grid-cols-3">
              <Link href="/work" className="justify-self-center whitespace-nowrap hover:text-white">
                CV
              </Link>
              <Link href="/#about" className="justify-self-center whitespace-nowrap hover:text-white">
                РћР±Рѕ РјРЅРµ
              </Link>
              <a
                href="https://t.me/i_young_designer"
                target="_blank"
                rel="noreferrer"
                className="justify-self-end whitespace-nowrap hover:text-white"
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

