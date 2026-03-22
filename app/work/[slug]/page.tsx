import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CaseLayout } from '@/components/case-layout';
import { getProjectBySlug, sortedProjects } from '@/data/projects';

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return sortedProjects.map((project) => ({ slug: project.slug }));
}
export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  const isWinlineCase = params.slug === 'kv-winline';

  if (!project) {
    notFound();
  }

  const displayedSections = isWinlineCase
    ? project.sections
    : [{ title: 'Overview', images: [project.coverImage] }, ...project.sections];
  const currentIndex = sortedProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = sortedProjects[(currentIndex + 1) % sortedProjects.length];
  const nextLinkClass = 'text-2xl font-normal leading-none text-white hover:text-white/80 max-[374px]:text-xl sm:text-3xl md:text-4xl';
  const nextArrowClass =
    'ml-2 inline-block align-middle text-[0.85em] font-light max-[374px]:ml-1.5 max-[374px]:text-[0.8em] sm:ml-3 md:ml-4 md:text-[0.95em]';
  const footerGridClass = 'grid grid-cols-1 gap-8 text-lg leading-tight max-[374px]:text-base sm:text-xl md:grid-cols-[1.4fr_1fr_1fr] md:text-3xl';
  const caseFooter = (
    <section className="space-y-10 pt-8">
      <div className="flex justify-end">
        <Link href={`/work/${nextProject.slug}`} className={nextLinkClass}>
          <span className="align-middle">next</span>
          <span className={nextArrowClass}>→</span>
        </Link>
      </div>

      <div className="relative left-1/2 right-1/2 my-12 w-screen -ml-[50vw] -mr-[50vw] border-t border-neutral-700" />

      <div className={footerGridClass}>
        <div className="space-y-2">
          <a href="mailto:zakharyashchevad@bk.ru" className="block hover:text-white/80">
            zakharyashchevad@bk.ru
          </a>
          <a href="tel:+79521265853" className="block hover:text-white/80">
            +7 (952) 126 58 53
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 md:contents">
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
      </div>
    </section>
  );

  return (
    <article className="space-y-10">
      <Link href="/work" className="inline-flex text-sm text-white/70 hover:text-white">
        ← Назад к кейсам
      </Link>

      <CaseLayout
        left={
          isWinlineCase ? (
            <div className="space-y-5 font-sans text-white/85 [&>p]:max-w-[380px] [&>p]:text-white/70">
              <h1 className="font-display font-bold text-[48px] text-white whitespace-pre-line" style={{ lineHeight: '0.9' }}>
                {'Winline —\nkey visual'}
              </h1>
              <p>
                Для букмекера Winline я разработала серию рекламных key visual.
              </p>
              <p>
                Процесс работы начинается со сбора референсов и быстрых скетчей, которые помогают найти
                композицию и основной визуальный приём. Далее формируется сцена и создаётся ключевой образ —
                в 3D или с использованием AI-инструментов. После этого прорабатываются детали композиции и
                типографика.
              </p>
              <p>
                Справа показан процесс разработки — от первых идей до финального визуала.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Project</p>
                <h1 className="font-display text-4xl leading-[0.95] sm:text-5xl">{project.title}</h1>
              </div>

              <div className="max-w-[380px] space-y-2 font-sans text-white/75">
                <p>
                  <span className="text-white/50">Client:</span> {project.client}
                </p>
                <p>
                  <span className="text-white/50">Year:</span> {project.year}
                </p>
                <p>
                  <span className="text-white/50">Category:</span> {project.tags.join(', ')}
                </p>
              </div>

              <div className="max-w-[380px] space-y-2 font-sans text-white/75">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Role</p>
                <p>{project.role.join(', ')}</p>
              </div>

              <div className="max-w-[380px] space-y-2 font-sans text-white/75">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Tools</p>
                <p>{project.tools.join(', ')}</p>
              </div>

              <div className="max-w-[380px] space-y-2 font-sans text-white/75">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Description</p>
                <p>{project.shortDescription}</p>
              </div>
            </>
          )
        }
        right={
          isWinlineCase ? (
            <div className="space-y-16">
              <section className="space-y-6">
                <img src="/notion/kv-winline/nachalo.png" alt="Winline process start references" className="w-full h-auto rounded-2xl" loading="lazy" />
                <img src="/notion/kv-winline/juxtapose-gif.gif" alt="Winline animation process" className="w-full h-auto rounded-2xl" loading="lazy" />
                <div className="space-y-4">
                  <img src="/notion/kv-winline/2.png" alt="Winline process frame" className="w-full h-auto rounded-2xl" loading="lazy" />
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-xl font-semibold text-white">Моя коллекция KV Winline</h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <img src="/notion/kv-winline/16_9_(1).jpg" alt="Winline KV collection image 1" className="w-full h-auto rounded-2xl" loading="lazy" />
                  <img src="/notion/kv-winline/1920_1080_(1).png" alt="Winline KV collection image 2" className="w-full h-auto rounded-2xl" loading="lazy" />
                </div>

                <img src="/notion/kv-winline/1920_1080_5_(1).png" alt="Winline KV collection full width image" className="w-full h-auto rounded-2xl" loading="lazy" />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <img src="/notion/kv-winline/prognozy.png" alt="Winline KV collection image 3" className="w-full h-auto rounded-2xl" loading="lazy" />
                  <img src="/notion/kv-winline/KV_10.png" alt="Winline KV collection image 4" className="w-full h-auto rounded-2xl" loading="lazy" />
                </div>
              </section>
            </div>
          ) : (
            <>
              {displayedSections.map((section) => (
                <section key={section.title} className="space-y-4">
                  <h2 className="text-xl font-semibold text-white">{section.title}</h2>

                  {section.images.length === 1 ? (
                    <img
                      src={section.images[0]}
                      alt={`${project.title} - ${section.title}`}
                      className="w-full h-auto rounded-2xl"
                      loading="lazy"
                    />
                  ) : (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {section.images.map((image, index) => (
                        <img
                          key={`${section.title}-${index}`}
                          src={image}
                          alt={`${project.title} - ${section.title} ${index + 1}`}
                          className="w-full h-auto rounded-2xl"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </>
          )
        }
      />

      {caseFooter}
    </article>
  );
}

