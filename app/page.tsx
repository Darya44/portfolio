import Link from 'next/link';
import { ProjectCard } from '@/components/project-card';
import { featuredProjects } from '@/data/projects';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">Portfolio Template</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Дизайнер цифровых продуктов и интерфейсов.
        </h1>
        <p className="max-w-2xl text-lg text-white/75">
          Основа для персонального сайта-портфолио на Next.js App Router с готовой структурой кейсов,
          типизированными данными и анимациями.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="/work"
            className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
          >
            Смотреть все кейсы
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Избранные проекты</h2>
          <Link href="/work" className="text-sm text-white/70 hover:text-white">
            Все проекты →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
