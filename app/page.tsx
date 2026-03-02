import Link from 'next/link';
import { ProjectCard } from '@/components/project-card';
import { featuredProjects } from '@/data/projects';

<section className="max-w-6xl mx-auto px-6 pt-28 pb-20">
  <div className="flex flex-col md:flex-row items-start gap-16">

    {/* Фото */}
    <img
      src="/images/ава-нью.png"
      alt="Дарья Захарьящева"
      className="w-72 h-72 rounded-3xl object-cover"
    />

    {/* Текст */}
    <div className="max-w-2xl">
      <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white">
        Дарья Захарьящева
      </h1>

      <div className="space-y-6 text-lg leading-relaxed text-white">
        <p>
          Я работаю креативным дизайнером в агентстве «Цех» и создаю визуальные
          концепции для Сбера, Яндекса, VK, Winline, Самолета, Балтики и других брендов.
        </p>

        <p>
          Работаю на стыке графического и digital-дизайна, интегрирую AI-инструменты
          в креативные процессы и обучаю этому коллег.
        </p>

        <p>
          Сильная сторона — создание сочных рекламных имиджей:
          от концепции до финального продакшена.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* FEATURED PROJECTS */}
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
