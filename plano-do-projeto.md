# Plano de Projeto – DevPortfolio (João Silva)

## 1. Visão Geral do Projeto

- **Cliente:** João Silva (Desenvolvedor Full-Stack)
- **Objetivo:** Criação de um site de portfólio pessoal minimalista, performático e moderno para exibição de projetos, trajetória profissional e formulário de contato.
- **Público-Alvo:** Recrutadores de tech, tech leads, empresas de tecnologia e clientes potenciais.
- **Prazo Executivo:** 1 semana.
- **Orçamento:** R$ 3.000,00.

---

## 2. Pesquisa & Tendências (2026)

- **Design Minimalista & Dark Mode Refinado:** Fundo escuro com paleta Slate/Zinc (`#0A0A0A`), tipografia limpa (Inter / Outfit) e acento verde esmeralda (`#10B981`).
- **Showcase Focado em Problema-Solução:** Cards de projetos que destacam a stack técnica, impacto gerado, links para repositório GitHub e live demo.
- **Formulário de Contato Direto & Resend:** Integração serverless para recebimento de mensagens instantâneas diretamente no e-mail.
- **Mobile-First & Micro-Interações:** Navegação fluida para dispositivos móveis com suporte a gestos e velocidade de carregamento < 1.0s.

---

## 3. Arquitetura Proposta

### Tech Stack
- **Frontend:** Next.js 14 (App Router) + Tailwind CSS + TypeScript + Lucide Icons + Framer Motion (opcional).
- **Backend & Serverless:** Next.js Route Handlers (`src/app/api/contact/route.ts`).
- **Formulário de E-mail:** Resend / Formspree API.
- **Hospedagem:** Vercel Production.

### Estrutura de Pastas
```
projects/dev-portfolio/
├── apps/
│   └── frontend/
│       ├── src/
│       │   ├── app/
│       │   │   ├── page.tsx            # Homepage (Hero, About, Skills, Projects, Contact)
│       │   │   ├── projects/page.tsx   # Galeria com Filtros por Categoria
│       │   │   ├── contact/page.tsx    # Formulário de Contato
│       │   │   ├── api/contact/route.ts# Route Handler para envio de e-mail
│       │   │   ├── globals.css
│       │   │   └── layout.tsx
│       │   ├── components/             # Navbar, Footer, ProjectCard, SkillBadge, ContactForm
│       │   └── data/                   # Data mock dos projetos e biografia
├── docs/                               # Documentação de Arquitetura e Design System
├── tests/                              # Testes automatizados
├── .gitignore
├── README.md
└── plano-do-projeto.md
```

---

## 4. Cronograma de Execução (1 Semana)

### Dia 1-2: Setup & Arquitetura de Design
- [x] Definição de Plano de Projeto e Estrutura Inicial.
- [ ] Design System Tokens (Preto `#0A0A0A`, Verde `#10B981`, Tipografia Inter).
- [ ] Configuração do projeto Next.js 14 e Tailwind CSS.

### Dia 3-4: Desenvolvimento das Seções & Componentes
- [ ] **Hero & About:** Seção de apresentação pessoal, resumo e links sociais (GitHub, LinkedIn, X).
- [ ] **Galeria de Projetos:** Cards responsivos com tags de tecnologia e filtros por categoria.
- [ ] **Skills & Timeline:** Grade de habilidades técnicas e linha do tempo de experiência.

### Dia 5-6: Formulário de Contato, QA & Deploy
- [ ] **Formulário de Contato:** Route handler API serverless e integração de e-mail.
- [ ] **Testes & Performance:** Validação de responsividade mobile e auditoria Lighthouse.
- [ ] **Publicação & Git Push:** Deploy na Vercel e repositório oficial no GitHub.

---

## 5. Matriz de Tarefas por Agente

### 🏛️ Architect Agent
- Estruturar a arquitetura Next.js 14 App Router.
- Definir o contrato do endpoint de contato `POST /api/contact`.

### 🎨 Designer Agent
- Especificar a paleta de cores (Fundo `#0A0A0A`, Acento Verde `#10B981`, Textos `#F9FAFB`).
- Projetar a hierarquia tipográfica e componentes de UI minimalistas.

### 💻 Frontend Agent
- Implementar as páginas e componentes (`Navbar`, `Hero`, `ProjectCard`, `SkillBadge`, `ContactForm`).
- Garantir 100% de responsividade mobile-first.

### ⚙️ Backend Agent
- Implementar o Route Handler `POST /api/contact` em Next.js.

### 🧪 QA Agent
- Validar envio de mensagens, formulário de contato e links sociais.
- Audit de performance e SEO.
