import React from 'react';
import { Project } from '@/data/portfolioData';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg">
      
      {/* Imagem do Projeto */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <span className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-emerald-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
          {project.category}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors font-display">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tags de Tecnologias */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-0.5 bg-zinc-800 text-zinc-300 text-[10px] rounded font-mono">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" /> Code
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Demo <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
};
