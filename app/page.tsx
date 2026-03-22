import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="pt-6">
        <div className="space-y-16 md:space-y-20">
          <div className="w-full max-w-[760px]">
            <img
              src="/images/ава-нью.png"
              alt="Дарья Захарьящева"
              className="aspect-[5/4] w-full rounded-[18px] object-cover"
            />
          </div>

          <div className="max-w-[1300px] space-y-3 md:space-y-5">
            <h1 className="font-display text-5xl font-medium leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Привет! Я Дарья Захарьящева
            </h1>
            <p className="font-display text-4xl leading-[1.12] text-white/80 sm:text-5xl lg:text-6xl">
              Дизайнер визуальных концепций и key visual с 7-летним опытом, работаю с AI Среди проектов — Сбер, ВК, Яндекс, Winline, Самолет, Балтика
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-medium">Избранные проекты</h2>
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
            <a href="mailto:zakharyashchevad@bk.ru" className="block hover:text-white/80">
              zakharyashchevad@bk.ru
            </a>
            <a href="tel:+79521265853" className="block hover:text-white/80">
              +7 (952) 126 58 53
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-base text-white/60 md:text-lg">Telegram channel</p>
            <a href="https://t.me/dashadesgn" target="_blank" rel="noreferrer" className="block hover:text-white/80">
              @dashadesgn
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-base text-white/60 md:text-lg">My telegram</p>
            <a href="https://t.me/i_young_designer" target="_blank" rel="noreferrer" className="block hover:text-white/80">
              @i_young_designer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

