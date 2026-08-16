import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div>
          <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">02. Competências</h2>
          <h3 className="text-3xl font-extrabold text-white mt-1">Habilidades Técnicas & Ferramentas</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioData.skills.map((skill, idx) => (
            <div
              key={idx}
              className="p-4 bg-zinc-900/40 rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500">{skill.category}</span>
                <Cpu className="w-4 h-4 text-emerald-500 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                {skill.name}
              </h4>
              <span className="inline-block text-[11px] font-semibold text-emerald-400/80 bg-emerald-500/10 px-2 py-0.5 rounded">
                {skill.level}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
