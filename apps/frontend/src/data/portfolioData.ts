export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Frontend' | 'Backend' | 'Full-Stack';
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export const portfolioData = {
  name: 'João Silva',
  role: 'Desenvolvedor Full-Stack Senior',
  location: 'São Paulo, Brasil',
  bio: 'Especialista no ecossistema JavaScript/TypeScript (Next.js, Node.js, NestJS, React, PostgreSQL). Focado em arquiteturas resilientes, performance e interfaces minimalistas de alto impacto.',
  aboutDetailed: 'Com mais de 6 anos de experiência em engenharia de software, construo soluções escaláveis que conectam negócios e tecnologia. Apaixonado por código limpo, design resiliente e automação de sistemas.',
  socials: {
    github: 'https://github.com/joaobazusec-gif',
    linkedin: 'https://linkedin.com/in/joaosilvadev',
    twitter: 'https://twitter.com/joaosilvadev',
    email: 'joao.silva@devportfolio.com'
  },
  skills: [
    { name: 'Next.js 14 / React', level: 'Especialista', category: 'Frontend' },
    { name: 'TypeScript', level: 'Especialista', category: 'Linguagem' },
    { name: 'Tailwind CSS', level: 'Avançado', category: 'Frontend' },
    { name: 'Node.js / NestJS', level: 'Avançado', category: 'Backend' },
    { name: 'PostgreSQL / Prisma ORM', level: 'Avançado', category: 'Database' },
    { name: 'Docker / Vercel CI/CD', level: 'Intermediário', category: 'DevOps' },
    { name: 'GraphQL / REST APIs', level: 'Avançado', category: 'Backend' },
    { name: 'Jest / Testing Library', level: 'Avançado', category: 'QA' },
  ],
  experiences: [
    {
      company: 'TechStore Global',
      role: 'Tech Lead Full-Stack',
      period: '2024 - Presente',
      description: 'Liderança técnica na modernização de plataformas de e-commerce e arquiteturas headless distribuídas em microsserviços.',
      technologies: ['Next.js 14', 'NestJS', 'Prisma', 'Stripe API', 'TypeScript']
    },
    {
      company: 'Inova Digital Labs',
      role: 'Desenvolvedor Full-Stack Senior',
      period: '2022 - 2024',
      description: 'Construção de aplicações SaaS de alta carga com processamento assíncrono de dados e integração com IAs generativas.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis']
    },
    {
      company: 'CodeCraft Studio',
      role: 'Desenvolvedor Frontend',
      period: '2020 - 2022',
      description: 'Desenvolvimento de interfaces responsivas, acessíveis e otimizadas para SEO para clientes internacionais.',
      technologies: ['React', 'TypeScript', 'Next.js', 'Sass']
    }
  ] as Experience[],
  projects: [
    {
      id: 'proj-1',
      title: 'TechStore E-commerce Platform',
      description: 'Plataforma Headless de e-commerce de tecnologia com Next.js 14 App Router, NestJS API, Prisma e integração Stripe.',
      category: 'Full-Stack',
      image: 'https://images.unsplash.com/photo-1556742049-0a67daf4005a?auto=format&fit=crop&w=800&q=80',
      technologies: ['Next.js 14', 'NestJS', 'Prisma', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com/joaobazusec-gif/techstore-ecommerce',
      demoUrl: 'https://frontend-iota-six-51.vercel.app',
      featured: true,
    },
    {
      id: 'proj-2',
      title: 'SaaS Analytics Dashboard',
      description: 'Painel analítico em tempo real com gráficos dinâmicos, métricas financeiras e exportação de relatórios.',
      category: 'Frontend',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Zustand'],
      githubUrl: 'https://github.com/joaobazusec-gif/saas-analytics',
      demoUrl: 'https://saas-analytics-demo.vercel.app',
      featured: true,
    },
    {
      id: 'proj-3',
      title: 'AI Prompt Engineering Service',
      description: 'API RESTful escalável em NestJS para orquestração de chamadas de LLMs com rate limiting e cache com Redis.',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      technologies: ['NestJS', 'TypeScript', 'Redis', 'Swagger', 'Docker'],
      githubUrl: 'https://github.com/joaobazusec-gif/ai-prompt-service',
      demoUrl: 'https://api-prompt-demo.vercel.app',
      featured: true,
    }
  ] as Project[]
};
