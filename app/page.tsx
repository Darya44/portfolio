import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="pt-6">
        <div className="flex flex-col-reverse items-start gap-14 md:flex-row">
          {/* Фото */}
          <div className="w-full max-w-[44ch]">
            <img
              src="/images/ава-нью.png"
              alt="Дарья Захарьящева"
              className="aspect-square w-full rounded-[40px] object-cover"
            />
          </div>

          {/* Текст */}
          <div className="w-full md:pt-2">
            <h1 className="font-display text-5xl font-bold leading-[0.95] md:text-7xl">
              Дарья
              <br />
              Захарьящева
            </h1>

            <div className="mt-8 max-w-[44ch] space-y-2 text-lg leading-relaxed text-white">
              <p>
                Я работаю креативным дизайнером в агентстве «Цех» и создаю визуальные концепции для Сбера,
                Яндекса, VK, Winline, Самолёта, Балтики и других брендов.
              </p>

              <p>
                Работаю на стыке графического и digital-дизайна, интегрирую AI-инструменты в креативные процессы
                и обучаю этому коллег.
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
            Все проекты {'->'}
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="space-y-10 pt-8">
        <div className="flex justify-end">
          <a href="/work" className="text-4xl font-medium leading-none text-white hover:text-white/80">
            next {'->'}
          </a>
        </div>

        <div className="relative left-1/2 right-1/2 my-24 w-screen -ml-[50vw] -mr-[50vw] border-t border-neutral-700" />

        <div className="grid grid-cols-1 gap-8 text-3xl leading-tight md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-2">
            <a href="mailto:postbolshakova@gmail.com" className="block hover:text-white/80">
              postbolshakova@gmail.com
            </a>
            <a href="tel:+79295277902" className="block hover:text-white/80">
              +7 929 527 79 02
            </a>
          </div>

          <div className="space-y-2">
            <a href="#" className="block hover:text-white/80">
              instagram
            </a>
            <a href="#" className="block hover:text-white/80">
              facebook
            </a>
          </div>

          <div className="space-y-2">
            <a href="#" className="block hover:text-white/80">
              linkedin
            </a>
            <a href="#" className="block hover:text-white/80">
              behance
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
