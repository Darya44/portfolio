import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="pt-6">
        <div className="flex flex-col md:flex-row items-start gap-14">
          {/* Фото */}
          <div className="w-full md:w-[520px]">
            <img
              src="/images/ава-нью.png"
              alt="Дарья Захарьящева"
              className="w-full aspect-square rounded-[40px] object-cover"
            />
          </div>

          {/* Текст */}
          <div className="w-full md:pt-2">
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95]">
              Дарья
              <br />
              Захарьящева
            </h1>

            <div className="mt-8 max-w-[44ch] space-y-2 text-lg leading-relaxed text-white">
              <p>
                Я работаю креативным дизайнером в агентстве «Цех» и&nbsp;создаю
                визуальные концепции для&nbsp;Сбера, Яндекса, VK, Winline,
                Самолёта, Балтики и&nbsp;других брендов.
              </p>

              <p>
                Работаю на&nbsp;стыке графического и&nbsp;digital-дизайна,
                интегрирую AI-инструменты в&nbsp;креативные процессы
                и&nbsp;обучаю этому коллег.
              </p>

              <p>
                Сильная сторона — сочные рекламные имиджи: от&nbsp;концепции
                до&nbsp;финального продакшена.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Избранные проекты</h2>
          <a href="/work" className="text-sm text-white/70 hover:text-white">
            Все проекты →
          </a>
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
