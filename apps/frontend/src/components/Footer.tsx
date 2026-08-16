import React from 'react';
import { portfolioData } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-900 bg-[#0A0A0A] py-8 text-center text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto px-4">
        <p>© 2026 {portfolioData.name}. Todos os direitos reservados.</p>
        <p className="mt-1 text-[11px] text-zinc-600">
          Desenvolvido com Next.js 14, Tailwind CSS e orquestrado por Agentes de IA.
        </p>
      </div>
    </footer>
  );
};
