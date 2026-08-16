import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Cabeçalho da Seção */}
        <div>
          <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">01. Sobre Mim</h2>
          <h3 className="text-3xl font-extrabold text-white mt-1">Trajetória & Filosofia de Trabalho</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Biografia Detalhada */}
          <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
            <p>{portfolioData.aboutDetailed}</p>
            <p>
              Minha abordagem prioriza a clareza arquitetural, a segurança de dados e a entrega contínua. 
              Trabalho diretamente com frameworks de ponta como Next.js 14, NestJS, Prisma e PostgreSQL, aplicando boas práticas de Clean Code e DevOps em nuvem.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Monorepos & Turborepo
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Stripe & Pagamentos API
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> CI/CD & Deploy Vercel
              </div>
              <div className="flex items-center gap-2 text-zinc-200 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> SEO &amp; Web Vitals &gt; 95
              </div>
            </div>
          </div>

          {/* Timeline de Experiência */}
          <div id="experience" className="space-y-6 bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
            <h4 className="text-sm font-mono font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-500" /> Histórico Profissional
            </h4>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-2 before:w-0.5 before:bg-zinc-800">
              {portfolioData.experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-6 space-y-1">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-emerald-500" />
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="text-zinc-500 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {exp.period}
                    </span>
                  </div>
                  <span className="text-emerald-400 text-xs font-semibold block">{exp.company}</span>
                  <p className="text-xs text-zinc-400 pt-1">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-zinc-800 text-zinc-300 text-[10px] rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
