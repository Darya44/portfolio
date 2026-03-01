import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, sortedProjects } from '@/data/projects';

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return sortedProjects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-10">
      <Link href="/work" className="text-sm text-white/70 hover:text-white">
        ← Назад к кейсам
      </Link>

      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
          <span>{project.client}</span>
          <span>•</span>
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.role.join(', ')}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="max-w-3xl text-lg text-white/75">{project.shortDescription}</p>
      </header>

      <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/10 sm:h-[420px]">
        <Image src={project.coverImage} alt={project.title} fill className="object-cover" priority />
      </div>

      <section className="grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-white/60">Problem</h2>
          <p className="text-white/85">{project.problem}</p>
        </div>
        <div>
          <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-white/60">Approach</h2>
          <p className="text-white/85">{project.approach}</p>
        </div>
        <div>
          <h2 className="mb-2 text-sm uppercase tracking-[0.2em] text-white/60">Outcome</h2>
          <p className="text-white/85">{project.outcome}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Галерея</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {project.galleryImages.map((image, index) => (
            <div key={image} className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
              <Image src={image} alt={`${project.title} gallery image ${index + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-3 text-xl font-semibold">Инструменты</h2>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="rounded-full border border-white/20 px-3 py-1 text-sm text-white/80">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-xl font-semibold">Ссылки</h2>
          <ul className="space-y-2 text-white/80">
            {project.links.map((link) => (
              <li key={link.url}>
                <a href={link.url} target="_blank" rel="noreferrer" className="hover:text-white">
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
