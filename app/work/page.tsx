import { ProjectCard } from '@/components/project-card';
import { sortedProjects } from '@/data/projects';

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold">Все кейсы</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
