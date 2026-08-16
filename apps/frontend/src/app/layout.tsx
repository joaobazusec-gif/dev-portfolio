import './globals.css';
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'João Silva | Desenvolvedor Full-Stack Senior',
  description: 'Portfólio de João Silva, especialista em Next.js 14, NestJS, TypeScript, React e PostgreSQL.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col justify-between bg-[#0A0A0A] text-zinc-100 font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
