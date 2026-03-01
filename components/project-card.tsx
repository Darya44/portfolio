'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/data/projects';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <Link href={`/work/${project.slug}`} className="block">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-3 p-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-wide text-white/60">
            <span>{project.client}</span>
            <span>{project.year}</span>
          </div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-sm text-white/75">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
