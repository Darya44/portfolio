'use client';

import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="-mt-8 pt-0 md:-mt-10">
        <div className="space-y-8 md:space-y-20">
          <div className="w-full max-w-[760px]">
            <img
              src="/images/ава-нью.png"
              alt="Дарья Захарьящева"
              className="aspect-[5/4] w-full rounded-[18px] object-cover"
            />
          </div>

          <div id="about" className="max-w-[1300px] space-y-3 md:space-y-5 scroll-mt-24">
            <h1 className="font-display text-5xl font-medium leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              Привет! Я Дарья Захарьящева
            </h1>
            <p className="font-display text-[2.25rem] leading-[1.12] text-white/80 sm:text-5xl lg:text-6xl">
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

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.98,
                  filter: "blur(6px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
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


