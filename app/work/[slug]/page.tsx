import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CaseGrid, CaseImage, CaseLayout } from '@/components/case-layout';
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

  const processImages = [project.coverImage, ...project.galleryImages];
  const twoColumnImages = processImages.slice(1, 3);
  const threeColumnImages = processImages.slice(3, 6);
  const remainingImages = processImages.slice(6);

  return (
    <article className="space-y-10">
      <Link href="/work" className="inline-flex text-sm text-white/70 hover:text-white">
        ← Назад к кейсам
      </Link>

      <CaseLayout
        left={
          isWinlineCase ? (
            <div className="space-y-5 font-sans text-white/85">
              <h1 className="font-display text-4xl leading-[0.95] text-white sm:text-5xl">
                Winline — разработка key visual
              </h1>
              <p>
                Для букмекера Winline я создала серию рекламных key visual. В этом кейсе показан процесс
                разработки — от первых идей до финального визуала.
              </p>
              <p>
                Работу начинаю со сбора референсов и быстрых скетчей, чтобы найти подходящую композицию и
                визуальный приём. Затем формирую основную сцену и прорабатываю ключевой образ — в 3D или с
                использованием AI-инструментов.
              </p>
              <p>
                После этого уточняю детали композиции, работаю с типографикой и довожу визуал до финального
                состояния.
              </p>
              <p>
                Справа показаны этапы создания: референсы, скетчи, разработка визуала и итоговый результат.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Project</p>
                <h1 className="font-display text-4xl leading-[0.95] sm:text-5xl">{project.title}</h1>
              </div>

              <div className="space-y-2 font-sans text-white/80">
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

              <div className="space-y-2 font-sans text-white/80">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Role</p>
                <p>{project.role.join(', ')}</p>
              </div>

              <div className="space-y-2 font-sans text-white/80">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Tools</p>
                <p>{project.tools.join(', ')}</p>
              </div>

              <div className="space-y-2 font-sans text-white/80">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">Description</p>
                <p>{project.shortDescription}</p>
              </div>
            </>
          )
        }
        right={
          <>
            <CaseImage src={processImages[0]} alt={`${project.title} process image 1`} priority />

            {twoColumnImages.length > 0 && (
              <CaseGrid columns={2}>
                {twoColumnImages.map((image, index) => (
                  <CaseImage key={image} src={image} alt={`${project.title} process image ${index + 2}`} />
                ))}
              </CaseGrid>
            )}

            {threeColumnImages.length > 0 && (
              <CaseGrid columns={3}>
                {threeColumnImages.map((image, index) => (
                  <CaseImage key={image} src={image} alt={`${project.title} process image ${index + 4}`} />
                ))}
              </CaseGrid>
            )}

            {remainingImages.map((image, index) => (
              <CaseImage key={image} src={image} alt={`${project.title} process image ${index + 7}`} />
            ))}
          </>
        }
      />
    </article>
  );
}
