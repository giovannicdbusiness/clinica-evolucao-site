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
  city: string;
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

const PHONE = '5511919271919';
const PHONE_DISPLAY = '(11) 91927-1919';
const EMAIL = 'evolucaoprime@gmail.com';

function makeWhatsAppUrl(message: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

// Vídeos do canal Bruno Ferrari (https://www.youtube.com/@brunoferrari4845)
// "Faces e Vozes" removido a pedido do cliente.
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
];

const pick = (order: number[]): ClinicVideo[] => order.map((i) => channelVideos[i]);

// Helper para construir galeria de uma unidade a partir do nome da pasta + lista de arquivos.
// Caminho é absoluto a partir de /public/. Espaços na URL são automaticamente encoded pelo browser.
function buildGallery(folder: string, files: string[], unitName: string): ClinicGalleryImage[] {
  return files.map((f, i) => ({
    src: `/${folder}/${f}`,
    alt: `Estrutura ${unitName} - foto ${i + 1}`,
  }));
}

const galleryEvolucao = buildGallery(
  'todos rede evolucao principal',
  [
    '0bd1ec12-cfcc-424d-bc8b-50aadeb5aeb8.JPG',
    '0c05d0f7-fd45-48ef-9fe1-1e62886c5a64.JPG',
    '1f48ffa0-8aea-484d-8806-5f7142ec47bc.JPG',
    '29d99765-e6c0-45f1-8600-63ac763ba507.JPG',
    '33ba046e-8300-418e-acc3-edb22d53856f.JPG',
    '46981ba9-c9c0-42af-9387-02121d77a17b.JPG',
    '5153b5f8-8efc-48ff-b74d-4cc6f2f7ec5e.JPG',
    '79889e60-5f7e-4649-b8f3-3f8d88e09c44.JPG',
    '80ae75a5-163e-4f5a-8349-d68b9d298a27.JPG',
    '8d406e5a-4c80-4d42-9f57-e65c96fe16ca.JPG',
    '98ec993a-1a2b-4064-abc2-76658abd0302.JPG',
    'd1b0a3b0-9560-451c-8d5a-c7fb7a70dcb9.JPG',
    'fbc30c0d-90c0-421c-a548-adbe3b08c912.JPG',
    '07b6655d-4812-4bad-ac01-123977d26ca6.JPG',
  ],
  'Rede Evolução',
);

const galleryPerseveranca = buildGallery(
  'fotos itape',
  [
    'itape-01.jpeg',
    'itape-02.jpeg',
    'itape-03.jpeg',
    'itape-04.jpeg',
    'itape-05.jpeg',
    'itape-06.jpeg',
    'itape-07.jpeg',
    'itape-08.jpeg',
  ],
  'Centro Terapêutico Perseverança',
);

const galleryLitoralNorte = buildGallery(
  'fotos litoral norte',
  [
    '35a77914-11b4-45f1-96d7-c6ffbe0a0f4b.JPG',
    '42888e7e-6ef8-4425-9637-008c47269d21.JPG',
    '549f2ccc-8a5a-418a-9357-5879673d55d2.JPG',
    '562ad077-f847-4bf2-97a8-1854788fc0f1.JPG',
    '804f7d6e-d135-4f98-b7f3-a522f6f230f3.JPG',
    'a2f6cc77-82c7-4d60-b7ea-890a32d69487.JPG',
    'be0e2f78-2724-48c7-aa01-443eb13e8ea4.JPG',
    'd2a34325-fe5b-4ca3-9841-194bc620b0d1.JPG',
    'd7a809b2-cc95-4b3e-9dcd-88a8eb38d8d8.JPG',
    'e96fa315-12f0-4af8-95c3-86b3a531d006.JPG',
    'f98cb421-13d6-47e9-9af0-057956f41b67.JPG',
    '009c4e72-9eca-4ebb-bd6c-275b8fb64bcb.JPG',
    '21065ed2-5fa1-437d-9a68-851a48cdf7a8.JPG',
  ],
  'Unidade Litoral Norte',
);

const galleryVargemGrande = buildGallery(
  'fotos unidade vargem grande',
  [
    '649b5ef0-738f-409e-9ab0-173574983117.JPG',
    '68c28c2f-d0b1-46e1-805b-9c8dce2d9c9f.JPG',
    '6e8a9363-0fea-4552-bcf8-e9cf52c5552c.JPG',
    '0501efcc-11f1-4834-96a0-bd97cd57e1b6.JPG',
    '4c515e66-0faa-4f8e-9558-430d835796fc.JPG',
    '5d6ea6a2-c04d-4439-9eec-59876da87a29.JPG',
    '7761bdec-31d5-49b1-a77d-246a0fe510fc.JPG',
    '85508165-cf8f-4098-b4c8-0f18498144ed.JPG',
    '8836a955-eb55-4cc6-a236-3472c57c204b.JPG',
    '932e0584-7de7-482a-bdf3-ea3ac42d99c3.JPG',
    '9b367e97-4494-4adc-8b59-cb9ab81d87bc.JPG',
    'a1fd1ca2-40e0-40ee-884b-2fea159b126a.JPG',
    'ba310796-466b-427c-bae2-887c4344f8ce.JPG',
    'f2f33349-5b0b-4699-b12b-c9db70480328.JPG',
    'f899dd2b-05d8-4da6-aa7b-51b22f3b1431.JPG',
  ],
  'Unidade Vargem Grande Paulista',
);

// FAQ oficial do site da Rede Evolução (clinicaredeevolucao.com.br)
const baseFAQ: ClinicFAQItem[] = [
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
    brand: 'REDE EVOLUÇÃO',
    shortName: 'Rede Evolução',
    region: '4 unidades · Atendimento em todo o Brasil',
    city: 'Atendimento em todo o Brasil',
    tagline: 'Tratamento humanizado e estrutura completa',
    heroTitle: 'Aqui, você não está sozinho. Cuidamos de você e da sua história.',
    heroSubtitle:
      'Cada pessoa é única. Nossos tratamentos são personalizados, feitos com empatia, profissionalismo e total dedicação para ajudar você a reconquistar sua saúde, sua autonomia e sua qualidade de vida.',
    heroImage: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    whatsapp: PHONE,
    whatsappMessage: 'Olá! Vim pelo site da Rede Evolução e gostaria de mais informações sobre o tratamento.',
    whatsappUrl: makeWhatsAppUrl('Olá! Vim pelo site da Rede Evolução e gostaria de mais informações sobre o tratamento.'),
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
    videos: pick([0, 2, 1, 3]),
    gallery: galleryEvolucao,
    faq: baseFAQ,
  } as Clinic,

  'espaco-terapeutico': {
    slug: 'espaco-terapeutico',
    path: '/espaco-terapeutico',
    brand: 'ESPAÇO TERAPÊUTICO',
    shortName: 'Espaço Terapêutico Evolução',
    region: 'São Bernardo do Campo, SP',
    city: 'São Bernardo do Campo, SP',
    tagline: 'Moradia Assistida e estrutura de alto padrão',
    heroTitle: 'Onde a moradia se transforma em recomeço.',
    heroSubtitle:
      'Em São Bernardo do Campo, um ambiente integralmente projetado para a Moradia Terapêutica Assistida — infraestrutura completa e cuidado contínuo para a sua recuperação e autonomia.',
    heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    whatsapp: PHONE,
    whatsappMessage: 'Olá! Vim pelo site do Espaço Terapêutico Evolução e gostaria de mais informações sobre a Moradia Assistida.',
    whatsappUrl: makeWhatsAppUrl('Olá! Vim pelo site do Espaço Terapêutico Evolução e gostaria de mais informações sobre a Moradia Assistida.'),
    phoneDisplay: PHONE_DISPLAY,
    email: EMAIL,
    instagram: 'https://www.instagram.com/redevolucao',
    theme: {
      primary: '#3F8A85',
      primaryDark: '#2D6D69',
      accent: '#C8E8DD',
      cta: '#F59E0B',
      ctaDark: '#D97706',
      surface: '#F2F6F4',
      initial: 'T',
    },
    videos: pick([0, 2, 1, 3]),
    gallery: galleryEvolucao,
    faq: baseFAQ,
  } as Clinic,

  perseveranca: {
    slug: 'perseveranca',
    path: '/perseveranca',
    brand: 'PERSEVERANÇA',
    shortName: 'Centro Terapêutico Perseverança',
    region: 'Itapetininga, SP',
    city: 'Itapetininga, SP',
    tagline: 'Nova unidade · Ambiente acolhedor',
    heroTitle: 'Um novo começo, em meio à natureza.',
    heroSubtitle:
      'Em Itapetininga, um sítio terapêutico em meio à natureza, com ambiente de paz, estrutura moderna e o mesmo padrão de excelência em tratamento e acolhimento da Rede Evolução.',
    heroImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    whatsapp: PHONE,
    whatsappMessage: 'Olá! Vim pelo site do Centro Terapêutico Perseverança e gostaria de mais informações.',
    whatsappUrl: makeWhatsAppUrl('Olá! Vim pelo site do Centro Terapêutico Perseverança e gostaria de mais informações.'),
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
    videos: pick([3, 1, 0, 2]),
    gallery: galleryPerseveranca,
    faq: [
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

  'litoral-norte': {
    slug: 'litoral-norte',
    path: '/litoral-norte',
    brand: 'LITORAL NORTE',
    shortName: 'Unidade Litoral Norte',
    region: 'Caraguatatuba, SP',
    city: 'Caraguatatuba, SP',
    tagline: 'Recuperação em harmonia com a natureza',
    heroTitle: 'Recuperação à beira-mar, em harmonia com a natureza.',
    heroSubtitle:
      'Em Caraguatatuba, no litoral norte de São Paulo, um espaço terapêutico beira-mar onde a natureza e o cuidado profissional se unem para promover renovação física, emocional e espiritual.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    whatsapp: PHONE,
    whatsappMessage: 'Olá! Vim pelo site da unidade Litoral Norte e gostaria de mais informações.',
    whatsappUrl: makeWhatsAppUrl('Olá! Vim pelo site da unidade Litoral Norte e gostaria de mais informações.'),
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
    videos: pick([2, 0, 3, 1]),
    gallery: galleryLitoralNorte,
    faq: [
      {
        question: 'Quanto tempo é indicado o tratamento?',
        answer:
          'Cada caso é único. Na unidade Litoral Norte o tratamento pode variar de 90 a 180 dias, e a recuperação é um processo contínuo que segue mesmo após a alta, com acompanhamento ambulatorial e apoio familiar.',
      },
      {
        question: 'Posso obrigar meu filho a se internar? Como funciona legalmente?',
        answer:
          'A internação pode ser voluntária (com consentimento), involuntária (a pedido da família, com laudo médico) ou compulsória (determinada por um juiz). A lei exige que todo caso seja acompanhado por um médico responsável.',
      },
      {
        question: 'O que ele(a) vai fazer durante o tratamento?',
        answer:
          'A rotina no Litoral Norte inclui terapias individuais e em grupo, atividades físicas, oficinas, acompanhamento espiritual ou motivacional, além de momentos de lazer à beira-mar, sempre supervisionados pela equipe.',
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
    brand: 'VARGEM GRANDE PAULISTA',
    shortName: 'Unidade Vargem Grande Paulista',
    region: 'Vargem Grande Paulista, SP',
    city: 'Vargem Grande Paulista, SP',
    tagline: 'Tratamento completo em ambiente confortável',
    heroTitle: 'O melhor tratamento para dependência química e alcoolismo.',
    heroSubtitle:
      'Nossos tratamentos já libertaram mais de 1.000 pessoas que buscaram nossa ajuda. Equipe multidisciplinar, ambiente seguro e atendimento individualizado.',
    heroImage: '/fotos unidade vargem grande/649b5ef0-738f-409e-9ab0-173574983117.JPG',
    whatsapp: PHONE,
    whatsappMessage: 'Olá! Vim pelo site da unidade Vargem Grande Paulista Paulista e gostaria de mais informações.',
    whatsappUrl: makeWhatsAppUrl('Olá! Vim pelo site da unidade Vargem Grande Paulista Paulista e gostaria de mais informações.'),
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
    videos: pick([1, 3, 2, 0]),
    gallery: galleryVargemGrande,
    faq: [
      {
        question: 'Quanto tempo é indicado o tratamento?',
        answer:
          'Cada caso é único. Na unidade Vargem Grande Paulista o tratamento pode variar de 90 a 180 dias, e a recuperação é um processo contínuo que segue mesmo após a alta, com acompanhamento ambulatorial e apoio familiar.',
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
  clinics['espaco-terapeutico'],
  clinics.perseveranca,
  clinics['litoral-norte'],
  clinics['vargem-grande'],
];

// Lista usada como gatilho na home (HUB) — exclui a própria Rede Evolução.
export const unitsForHub: Clinic[] = [
  clinics['espaco-terapeutico'],
  clinics.perseveranca,
  clinics['litoral-norte'],
  clinics['vargem-grande'],
];

export function getClinicByPath(pathname: string): Clinic {
  const match = clinicList.find((c) => c.path === pathname);
  return match ?? clinics.evolucao;
}

export function buildWhatsAppUrl(message: string): string {
  return makeWhatsAppUrl(message);
}
