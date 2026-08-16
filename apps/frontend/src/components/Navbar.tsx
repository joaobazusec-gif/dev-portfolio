'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-mono font-bold text-lg text-white hover:text-emerald-400 transition-colors">
            <Code2 className="w-5 h-5 text-emerald-500" />
            <span>joao<span className="text-emerald-500">.dev</span></span>
          </Link>

          {/* Links Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            <Link href="#about" className="hover:text-emerald-400 transition-colors">Sobre Mim</Link>
            <Link href="#skills" className="hover:text-emerald-400 transition-colors">Habilidades</Link>
            <Link href="#projects" className="hover:text-emerald-400 transition-colors">Projetos</Link>
            <Link href="#experience" className="hover:text-emerald-400 transition-colors">Trajetória</Link>
            <Link href="#contact" className="hover:text-emerald-400 transition-colors">Contato</Link>
          </nav>

          {/* Redes Sociais / CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <Link
              href="#contact"
              className="px-4 py-2 text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-black rounded-lg transition-all"
            >
              Falar Comigo
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#121212] border-b border-neutral-800 px-4 py-6 space-y-4">
          <Link href="#about" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-zinc-300 hover:text-emerald-400">Sobre Mim</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-zinc-300 hover:text-emerald-400">Habilidades</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-zinc-300 hover:text-emerald-400">Projetos</Link>
          <Link href="#experience" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-zinc-300 hover:text-emerald-400">Trajetória</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block text-sm font-semibold text-zinc-300 hover:text-emerald-400">Contato</Link>
        </div>
      )}
    </header>
  );
};
