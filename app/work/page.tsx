import { ProjectCard } from '@/components/project-card';
import { sortedProjects } from '@/data/projects';

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-white/60">All Cases</p>
        <h1 className="text-4xl font-bold">Все кейсы</h1>
        <p className="max-w-2xl text-white/75">
          Каталог проектов с типизированной моделью данных, который легко масштабируется под реальные
          кейсы.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
