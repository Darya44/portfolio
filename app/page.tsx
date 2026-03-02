import Link from 'next/link';
import { ProjectCard } from '@/components/project-card';
import { featuredProjects } from '@/data/projects';

export default function HomePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-24 pb-16">
      <div className="flex flex-col md:flex-row items-start gap-10">
        <img
          src="/images/ава-нью.png"
          alt="Darya Zakharyashcheva"
          className="w-44 h-44 rounded-2xl object-cover"
        />

        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Дарья Захарьящева
          </h1>

          <div className="space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>
              Я работаю креативным дизайнером в агентстве «Цех» и создаю визуальные
              концепции для Сбера, Яндекса, VK, Winline, Самолета, Балтики и других брендов.
            </p>

            <p>
              Работаю на стыке графического и digital-дизайна, интегрирую AI-инструменты
              в креативные процессы и обучаю этому коллег.
            </p>

            <p>
              Сильная сторона — создание сочных рекламных имиджей: от концепции
              до финального продакшена.
            </p>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/work"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              Смотреть все кейсы
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

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
