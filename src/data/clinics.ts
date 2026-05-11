export interface ClinicVideo {
  id: string;
  title: string;
  url: string;
}

export interface ClinicGalleryImage {
  src: string;
  alt: string;
}

export interface ClinicFAQItem {
  question: string;
  answer: string;
}

export interface ClinicTheme {
  primary: string;
  primaryDark: string;
  accent: string;
  cta: string;
  ctaDark: string;
  surface: string;
  initial: string;
}

export interface Clinic {
  slug: string;
  path: string;
  brand: string;
  shortName: string;
  region: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  whatsapp: string;
  whatsappUrl: string;
  whatsappMessage: string;
  phoneDisplay: string;
  email: string;
  instagram: string;
  theme: ClinicTheme;
  videos: ClinicVideo[];
  gallery: ClinicGalleryImage[];
  faq: ClinicFAQItem[];
}

const PHONE = '5515998271753';
const PHONE_DISPLAY = '(15) 99827-1753';
const EMAIL = 'evolucaoprime@gmail.com';

function makeWhatsAppUrl(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

// All 5 videos from the Bruno Ferrari channel (https://www.youtube.com/@brunoferrari4845)
const channelVideos: ClinicVideo[] = [
  {
    id: 'enpNrdKtpmA',
    title: 'No começo a droga é boa. E depois destrói.',
    url: 'https://www.youtube.com/watch?v=enpNrdKtpmA',
  },
  {
    id: 'AyWDN48Ly10',
    title: '15 dias sem cigarro. Precisa querer muito parar e persistir dia a dia.',
    url: 'https://www.youtube.com/watch?v=AyWDN48Ly10',
  },
  {
    id: 'sdksUdFRqV4',
    title: 'Reflexão - 29 de fevereiro de 2024',
    url: 'https://www.youtube.com/watch?v=sdksUdFRqV4',
  },
  {
    id: 'kGLqtVo-brA',
    title: 'Qual o melhor tratamento? Bruno Ferrari',
    url: 'https://www.youtube.com/watch?v=kGLqtVo-brA',
  },
  {
    id: 'TONudnLKkBo',
    title: 'Faces e Vozes - Documentário',
    url: 'https://www.youtube.com/watch?v=TONudnLKkBo',
  },
];

const pick = (order: number[]): ClinicVideo[] => order.map((i) => channelVideos[i]);

const sharedGallery: ClinicGalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Área Externa' },
  { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Acomodações' },
  { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Piscina' },
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Consultório' },
  { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Sala de Convivência' },
  { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Refeitório' },
];

// FAQ oficial do site da Rede Evolução (clinicaredeevolucao.com.br)
const baseFAQ: ClinicFAQItem[] = [
  {
    question: 'Quanto custa e o que está incluso no valor?',
    answer:
      'O valor varia conforme a estrutura, a equipe e o tempo de internação. Geralmente inclui hospedagem, alimentação, acompanhamento médico e psicológico, atividades terapêuticas e suporte à família. Medicamentos, exames e cantina podem ser cobrados à parte.',
  },
  {
    question: 'Quanto tempo é indicado o tratamento?',
    answer:
      'Cada caso é único. O tratamento pode variar de 90 a 180 dias, e a recuperação é um processo contínuo que segue mesmo após a alta, com acompanhamento ambulatorial e apoio familiar.',
  },
  {
    question: 'Posso obrigar meu filho a se internar? Como funciona legalmente?',
    answer:
      'A internação pode ser voluntária (com consentimento), involuntária (a pedido da família, com laudo médico) ou compulsória (determinada por um juiz). A lei exige que todo caso seja acompanhado por um médico responsável.',
  },
  {
    question: 'O que ele(a) vai fazer durante o tratamento?',
    answer:
      'A rotina inclui terapias individuais e em grupo, atividades físicas, oficinas, acompanhamento espiritual ou motivacional, e momentos de lazer, sempre supervisionados pela equipe.',
  },
  {
    question: 'Quais são as chances reais de recuperação e como evitar recaídas depois da alta?',
    answer:
      'Com o tratamento certo e o apoio da família, as chances aumentam muito. Também oferecemos acompanhamento após a alta para fortalecer a prevenção de recaídas.',
  },
];

export const clinics = {
  evolucao: {
    slug: 'evolucao',
    path: '/',
    brand: 'EVOLUÇÃO',
    shortName: 'Clínica Evolução',
    region: 'São Bernardo do Campo · SP',
    tagline: 'Tratamento humanizado e estrutura completa',
    heroTitle: 'Aqui, você não está sozinho. Cuidamos de você e da sua história.',
    heroSubtitle:
      'Cada pessoa é única. Nossos tratamentos são personalizados, feitos com empatia, profissionalismo e total dedicação para ajudar você a reconquistar sua saúde, sua autonomia e sua qualidade de vida.',
    heroImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    whatsapp: PHONE,
    whatsappMessage: 'Olá! Vim pelo site da Clínica Evolução e gostaria de mais informações sobre o tratamento.',
    whatsappUrl: makeWhatsAppUrl('Olá! Vim pelo site da Clínica Evolução e gostaria de mais informações sobre o tratamento.'),
    phoneDisplay: PHONE_DISPLAY,
    email: EMAIL,
    instagram: 'https://www.instagram.com/redevolucao',
    theme: {
      primary: '#5A9EA8',
      primaryDark: '#4A8C96',
      accent: '#86EFAC',
      cta: '#F59E0B',
      ctaDark: '#D97706',
      surface: '#F4F4F0',
      initial: 'E',
    },
    videos: pick([0, 4, 1, 3]),
    gallery: sharedGallery,
    faq: baseFAQ,
  } as Clinic,

  perseveranca: {
    slug: 'perseveranca',
    path: '/perseveranca',
    brand: 'PERSEVERANÇA',
    shortName: 'Clínica Perseverança',
    region: 'Itapetininga · SP',
    tagline: 'Nova unidade · Ambiente acolhedor',
    heroTitle: 'Clínica Perseverança: um novo começo.',
    heroSubtitle:
      'Nossa nova unidade oferece um ambiente de paz, estrutura moderna e o mesmo padrão de excelência em tratamento e acolhimento que você já conhece.',
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    whatsapp: PHONE,
    whatsappMessage: 'Olá! Vim pelo site da Clínica Perseverança e gostaria de mais informações.',
    whatsappUrl: makeWhatsAppUrl('Olá! Vim pelo site da Clínica Perseverança e gostaria de mais informações.'),
    phoneDisplay: PHONE_DISPLAY,
    email: EMAIL,
    instagram: 'https://www.instagram.com/redevolucao',
    theme: {
      primary: '#5A9EA8',
      primaryDark: '#4A8C96',
      accent: '#86EFAC',
      cta: '#F59E0B',
      ctaDark: '#D97706',
      surface: '#F4F4F0',
      initial: 'P',
    },
    videos: pick([3, 2, 4, 0]),
    gallery: sharedGallery,
    faq: [
      {
        question: 'Quanto custa e o que está incluso no valor?',
        answer:
          'O valor da Clínica Perseverança em Itapetininga varia conforme a estrutura, a equipe e o tempo de internação. Geralmente inclui hospedagem, alimentação, acompanhamento médico e psicológico, atividades terapêuticas e suporte à família. Medicamentos, exames e cantina podem ser cobrados à parte.',
      },
      {
        question: 'Quanto tempo é indicado o tratamento?',
        answer:
          'Cada caso é único. Na unidade Perseverança o tratamento pode variar de 90 a 180 dias, e a recuperação é um processo contínuo que segue mesmo após a alta, com acompanhamento ambulatorial e apoio familiar.',
      },
      {
        question: 'Posso obrigar meu filho a se internar? Como funciona legalmente?',
        answer:
          'A internação pode ser voluntária (com consentimento), involuntária (a pedido da família, com laudo médico) ou compulsória (determinada por um juiz). A lei exige que todo caso seja acompanhado por um médico responsável.',
      },
      {
        question: 'O que ele(a) vai fazer durante o tratamento?',
        answer:
          'A rotina na Perseverança inclui terapias individuais e em grupo, atividades físicas, oficinas, acompanhamento espiritual ou motivacional, além de momentos de lazer em meio à natureza de Itapetininga, sempre supervisionados pela equipe.',
      },
      {
        question: 'Quais são as chances reais de recuperação e como evitar recaídas depois da alta?',
        answer:
          'Com o tratamento certo e o apoio da família, as chances aumentam muito. Oferecemos acompanhamento após a alta para fortalecer a prevenção de recaídas e dar continuidade ao processo iniciado na unidade.',
      },
    ],
  } as Clinic,

  'litoral-sul': {
    slug: 'litoral-sul',
    path: '/litoral-sul',
    brand: 'LITORAL SUL',
    shortName: 'Unidade Litoral Sul',
    region: 'Espaço terapêutico beira-mar',
    tagline: 'Recuperação em harmonia com a natureza',
    heroTitle: 'Litoral Sul: recuperação à beira-mar, em harmonia com a natureza.',
    heroSubtitle:
      'Um espaço terapêutico onde o ambiente natural, a tranquilidade do mar e o cuidado profissional se unem para promover renovação física, emocional e espiritual.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    whatsapp: PHONE,
    whatsappMessage: 'Olá! Vim pelo site da unidade Litoral Sul e gostaria de mais informações.',
    whatsappUrl: makeWhatsAppUrl('Olá! Vim pelo site da unidade Litoral Sul e gostaria de mais informações.'),
    phoneDisplay: PHONE_DISPLAY,
    email: EMAIL,
    instagram: 'https://www.instagram.com/redevolucao',
    theme: {
      primary: '#1F7A8C',
      primaryDark: '#0F4C5C',
      accent: '#F4D58D',
      cta: '#F4A259',
      ctaDark: '#D97706',
      surface: '#F8F4EC',
      initial: 'L',
    },
    videos: pick([4, 0, 2, 1]),
    gallery: [
      { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Vista para o mar' },
      { src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Praia tranquila' },
      { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Acomodações beira-mar' },
      { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Área de meditação' },
      { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Piscina externa' },
      { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Jardim terapêutico' },
    ],
    faq: [
      {
        question: 'Quanto custa e o que está incluso no valor?',
        answer:
          'O valor na unidade Litoral Sul varia conforme a estrutura, a equipe e o tempo de internação. Geralmente inclui hospedagem beira-mar, alimentação, acompanhamento médico e psicológico, atividades terapêuticas integradas à natureza e suporte à família. Medicamentos, exames e cantina podem ser cobrados à parte.',
      },
      {
        question: 'Quanto tempo é indicado o tratamento?',
        answer:
          'Cada caso é único. Na unidade Litoral Sul o tratamento pode variar de 90 a 180 dias, e a recuperação é um processo contínuo que segue mesmo após a alta, com acompanhamento ambulatorial e apoio familiar.',
      },
      {
        question: 'Posso obrigar meu filho a se internar? Como funciona legalmente?',
        answer:
          'A internação pode ser voluntária (com consentimento), involuntária (a pedido da família, com laudo médico) ou compulsória (determinada por um juiz). A lei exige que todo caso seja acompanhado por um médico responsável.',
      },
      {
        question: 'O que ele(a) vai fazer durante o tratamento?',
        answer:
          'A rotina na Litoral Sul inclui terapias individuais e em grupo, atividades físicas, oficinas, acompanhamento espiritual ou motivacional, além de momentos de lazer à beira-mar, sempre supervisionados pela equipe.',
      },
      {
        question: 'Quais são as chances reais de recuperação e como evitar recaídas depois da alta?',
        answer:
          'Com o tratamento certo e o apoio da família, as chances aumentam muito. Oferecemos acompanhamento após a alta para fortalecer a prevenção de recaídas e prolongar os benefícios do contato com o ambiente natural.',
      },
    ],
  } as Clinic,

  'vargem-grande': {
    slug: 'vargem-grande',
    path: '/vargem-grande',
    brand: 'VARGEM GRANDE',
    shortName: 'Unidade Vargem Grande',
    region: 'Tratamento estruturado',
    tagline: 'Tratamento completo em ambiente confortável',
    heroTitle: 'Vargem Grande: o melhor tratamento para dependência química e alcoolismo.',
    heroSubtitle:
      'Nossos tratamentos já libertaram centenas de pessoas que buscaram nossa ajuda. Equipe multidisciplinar, ambiente seguro e atendimento individualizado.',
    heroImage: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    whatsapp: PHONE,
    whatsappMessage: 'Olá! Vim pelo site da unidade Vargem Grande e gostaria de mais informações.',
    whatsappUrl: makeWhatsAppUrl('Olá! Vim pelo site da unidade Vargem Grande e gostaria de mais informações.'),
    phoneDisplay: PHONE_DISPLAY,
    email: EMAIL,
    instagram: 'https://www.instagram.com/redevolucao',
    theme: {
      primary: '#1E40AF',
      primaryDark: '#1E3A8A',
      accent: '#C9A96E',
      cta: '#F59E0B',
      ctaDark: '#D97706',
      surface: '#F4F6FB',
      initial: 'V',
    },
    videos: pick([2, 1, 3, 4]),
    gallery: [
      { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Sala de convivência' },
      { src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Piscina' },
      { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Academia' },
      { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Refeitório' },
      { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Quartos' },
      { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Área externa' },
    ],
    faq: [
      {
        question: 'Quanto custa e o que está incluso no valor?',
        answer:
          'Na unidade Vargem Grande as diárias variam entre R$ 3.500 e R$ 5.000, conforme a acomodação e o plano terapêutico. O valor inclui hospedagem, alimentação, acompanhamento médico e psicológico, atividades terapêuticas e suporte à família. Medicamentos, exames e cantina podem ser cobrados à parte.',
      },
      {
        question: 'Quanto tempo é indicado o tratamento?',
        answer:
          'Cada caso é único. Na unidade Vargem Grande o tratamento pode variar de 90 a 180 dias, e a recuperação é um processo contínuo que segue mesmo após a alta, com acompanhamento ambulatorial e apoio familiar.',
      },
      {
        question: 'Posso obrigar meu filho a se internar? Como funciona legalmente?',
        answer:
          'A internação pode ser voluntária (com consentimento), involuntária (a pedido da família, com laudo médico) ou compulsória (determinada por um juiz). A lei exige que todo caso seja acompanhado por um médico responsável.',
      },
      {
        question: 'O que ele(a) vai fazer durante o tratamento?',
        answer:
          'A rotina na Vargem Grande inclui terapias individuais e em grupo, atividades físicas, oficinas, acompanhamento espiritual ou motivacional e momentos de lazer, sempre supervisionados pela equipe multidisciplinar 24h.',
      },
      {
        question: 'Quais são as chances reais de recuperação e como evitar recaídas depois da alta?',
        answer:
          'Com o tratamento certo e o apoio da família, as chances aumentam muito. Oferecemos acompanhamento após a alta para fortalecer a prevenção de recaídas e dar continuidade ao programa terapêutico.',
      },
    ],
  } as Clinic,
} as const;

export const clinicList: Clinic[] = [
  clinics.evolucao,
  clinics.perseveranca,
  clinics['litoral-sul'],
  clinics['vargem-grande'],
];

export function getClinicByPath(pathname: string): Clinic {
  const match = clinicList.find((c) => c.path === pathname);
  return match ?? clinics.evolucao;
}

export function buildWhatsAppUrl(message: string): string {
  return makeWhatsAppUrl(message);
}
