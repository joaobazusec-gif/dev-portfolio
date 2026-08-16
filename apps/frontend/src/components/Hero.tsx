import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Elementos de Brilho Visual */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Disponível para novos projetos & contratações
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Olá, sou <span className="text-emerald-400">{portfolioData.name}</span>.
            <br />
            <span className="text-zinc-400 font-normal text-3xl sm:text-5xl">
              Desenvolvedor Full-Stack Senior.
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            {portfolioData.bio}
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#projects"
              className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              Ver Projetos <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-bold text-sm rounded-xl border border-zinc-800 transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Entre em Contato
            </Link>
          </div>

          {/* Links Sociais */}
          <div className="flex items-center gap-6 pt-6 text-zinc-500 border-t border-zinc-900">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs hover:text-white transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <span className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <Terminal className="w-4 h-4 text-emerald-400" /> {portfolioData.location}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
