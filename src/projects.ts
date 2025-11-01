import ProjetoPrompts from './assets/projects/project_prompts.png';
import ProjetoAgendamento from './assets/projects/project_agend.png';
import ProjetoRoomsReservation from './assets/projects/project_rooms_reservation.png';
import ProjetoBrevly from './assets/projects/project_brevly.png';
import ProjetoWebhooks from './assets/projects/project_webhooks.png'

export const projects = [
  {
    id: 1,
    image: ProjetoPrompts,
    title: 'Prompts Manager',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Aplicação desenvolvida para organizar e gerenciar prompts de forma eficiente. Permite criar, editar, buscar, salvar e excluir prompts, facilitando o trabalho de quem utiliza IA generativa no dia a dia.',
    link: 'https://gabrielmelo04.github.io/nwl-prompts-manager/',
    url: 'https://github.com/gabrielmelo04/nwl-prompts-manager',
    eixoX: '-40%',
  },
  {
    id: 2,
    image: ProjetoAgendamento,
    title: 'Agendamento',
    tags: ['Next.js', 'Prisma', 'TypeScript'],
    description:
      'Desenvolvido em Next.js com Prisma, este sistema permite gerenciar agendamentos diretamente pelo Google Calendar. Basta compartilhar seu login e as pessoas poderão marcar horários de forma prática e automática no seu calendário.',
    link: 'https://ignite-call-nu-neon.vercel.app/',
    url: 'https://github.com/gabrielmelo04/ignite-call',
    eixoX: '-58%',
  },
  {
    id: 3,
    image: ProjetoRoomsReservation,
    title: 'Reserva de Quartos',
    tags: ['React.js', 'TypeScript', 'Styled-Components'],
    description:
      'Desenvolvi um mini sistema interativo para gerenciar reservas de quartos, permitindo visualizar disponibilidade em tempo real, cadastrar novas reservas e deletar reservas anteriores.',
    link: 'https://room-reservation-zeta.vercel.app/',
    url: 'https://github.com/gabrielmelo04/room-reservation',
    eixoX: '-70%',
  },
  {
    id: 4,
    image: ProjetoBrevly,
    title: 'Brevly',
    tags: ['React.js', 'Node.js', 'Drizzle', 'Tailwind CSS', 'PostgreSQL', 'Fastify'],
    description:
      'Criei um sistema eficiente de links encurtados, combinando PostgreSQL com Drizzle ORM para gerenciamento robusto de dados. Além disso, utilizei Cloudflare para armazenar e organizar CSV com listas de links, garantindo alta performance e escalabilidade.',
    link: 'https://github.com/gabrielmelo04/projeto-brevly-desafio-01',
    url: 'https://github.com/gabrielmelo04/projeto-brevly-desafio-01',
    eixoX: '-101%',
  },
  {
    id: 5,
    image: ProjetoWebhooks,
    title: 'Webhook Inspector',
    tags: ['React.js', 'Node.js', 'Drizzle', 'Tailwind CSS', 'PostgreSQL', 'Fastify'],
    description:
      'Aplicação para inspecionar e gerenciar webhooks em tempo real. Interface em React com visualização de requisições, headers, body e query params. Inclui geração de handlers com IA. Arquitetura monorepo com backend Fastify/TypeScript e PostgreSQL.',
    link: 'https://github.com/gabrielmelo04/webhook-inspector',
    url: 'https://github.com/gabrielmelo04/webhook-inspector',
    eixoX: '-101%',
  },
];