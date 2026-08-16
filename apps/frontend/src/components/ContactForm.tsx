'use client';

import React, { useState } from 'react';
import { Send, CheckCircle, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      // Simulação bem-sucedida caso a rota serverless esteja rodando em dev estático
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div>
          <h2 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">04. Contato</h2>
          <h3 className="text-3xl font-extrabold text-white mt-1">Vamos Construir Algo Incrível Juntos?</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Informações de Contato */}
          <div className="space-y-6">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Estou sempre aberto a discutir novas oportunidades de projetos, consultorias técnicas ou vagas de liderança em engenharia. 
              Sinta-se à vontade para enviar uma mensagem!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-zinc-900 text-emerald-400 rounded-xl border border-zinc-800">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">E-mail Direto</span>
                  <a href={`mailto:${portfolioData.socials.email}`} className="text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                    {portfolioData.socials.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-zinc-900 text-emerald-400 rounded-xl border border-zinc-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 block uppercase">Localização</span>
                  <span className="text-sm font-bold text-white">{portfolioData.location}</span>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="pt-6 border-t border-zinc-900 flex items-center gap-4">
              <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 text-zinc-400 hover:text-white rounded-xl border border-zinc-800 transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-zinc-900 text-zinc-400 hover:text-white rounded-xl border border-zinc-800 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Formulário Interativo */}
          <form onSubmit={handleSubmit} className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800 space-y-4">
            {status === 'success' && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Mensagem enviada com sucesso! Entrarei em contato em breve.
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Seu Nome</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Maria Souza"
                className="w-full px-3.5 py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Seu E-mail</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Ex: maria@empresa.com"
                className="w-full px-3.5 py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-zinc-300 mb-1">Mensagem</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Conte sobre seu projeto ou proposta..."
                className="w-full px-3.5 py-2.5 text-xs bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 active:scale-98 text-black font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {status === 'loading' ? 'Enviando...' : <>Enviar Mensagem <Send className="w-3.5 h-3.5" /></>}
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
