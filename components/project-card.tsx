import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
    >
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <span className="text-xs text-white/60">{project.year}</span>
        </div>

        <p className="mt-2 text-sm text-white/70">{project.shortDescription}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

