import Link from 'next/link';
import { ProjectCard } from '@/components/project-card';
import { featuredProjects } from '@/data/projects';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
    <section className="max-w-6xl mx-auto px-6 pt-28 pb-20">
  <div className="flex flex-col md:flex-row items-start gap-14">
    {/* ЛЕВАЯ КОЛОНКА: фото по ширине контейнера */}
    <div className="w-full md:w-[420px]">
      <img
        src="/images/ава-нью.png"
        alt="Дарья Захарьящева"
        className="w-full aspect-square rounded-3xl object-cover"
      />
    </div>

    {/* ПРАВАЯ КОЛОНКА: ограничиваем ширину, чтобы строки были короче */}
    <div className="w-full max-w-xl">
     <h1 className="font-display text-5xl md:text-6xl font-bold mb-7 text-white">
  Дарья Захарьящева
</h1>

      {/* меньше расстояние между абзацами */}
      <div className="space-y-3 text-lg leading-relaxed text-white">
        <p>
          Я работаю креативным дизайнером в агентстве «Цех» и&nbsp;создаю визуальные
          концепции для&nbsp;Сбера, Яндекса, VK, Winline, Самолета, Балтики и&nbsp;других
          брендов.
        </p>

        <p>
          Работаю на&nbsp;стыке графического и&nbsp;digital-дизайна, интегрирую AI-инструменты
          в&nbsp;креативные процессы и&nbsp;обучаю этому коллег.
        </p>

        <p>
          Сильная сторона — создание сочных рекламных имиджей:
          от&nbsp;концепции до&nbsp;финального продакшена.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* FEATURED PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white">Избранные проекты</h2>

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
