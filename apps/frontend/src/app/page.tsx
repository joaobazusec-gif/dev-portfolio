'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { ProjectCard } from '@/components/ProjectCard';
import { ContactForm } from '@/components/ContactForm';
import { portfolioData } from '@/data/portfolioData';
import { FolderGit2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-12">
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Showcase Section */}
      <section id="projects" className="py-16 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">03. Projetos</h2>
              <h3 className="text-3xl font-extrabold text-white mt-1">Trabalhos em Destaque</h3>
            </div>

            {/* Filtros por Categoria */}
            <div className="flex items-center gap-2 bg-zinc-900/60 p-1 rounded-xl border border-zinc-800">
              {['Todos', 'Full-Stack', 'Frontend', 'Backend'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeCategory === category
                      ? 'bg-emerald-500 text-black font-bold shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />

    </div>
  );
}
