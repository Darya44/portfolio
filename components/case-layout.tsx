import Image from 'next/image';
import { ReactNode } from 'react';

type CaseLayoutProps = {
  left: ReactNode;
  right: ReactNode;
};

type CaseImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

type CaseGridProps = {
  columns?: 2 | 3;
  children: ReactNode;
};

export function CaseLayout({ left, right }: CaseLayoutProps) {
  return (
    <section className="mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-10 md:grid-cols-[420px_minmax(0,1fr)]">
      <aside className="space-y-6 md:sticky md:top-[120px] md:self-start">{left}</aside>
      <div className="space-y-12">{right}</div>
    </section>
  );
}

export function CaseImage({ src, alt, priority = false }: CaseImageProps) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
      <Image src={src} alt={alt} fill className="object-cover" priority={priority} />
    </div>
  );
}

export function CaseGrid({ columns = 2, children }: CaseGridProps) {
  return <div className={`grid gap-6 ${columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>{children}</div>;
}
