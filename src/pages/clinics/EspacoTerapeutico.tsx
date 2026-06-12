import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Gallery from '@/components/sections/Gallery';
import MiniGallery from '@/components/sections/MiniGallery';
import CTABanner from '@/components/sections/CTABanner';
import {
  Home as HomeIcon,
  HeartPulse,
  ShieldCheck,
  Users,
  Sparkles,
  Sun,
  Coffee,
  TreePine,
  BedDouble,
  Stethoscope,
  HandHeart,
  ArrowRight,
} from 'lucide-react';
import { clinics } from '@/data/clinics';

export default function EspacoTerapeutico() {
  const clinic = clinics['espaco-terapeutico'];
  const { theme } = clinic;

  const moradiaFeatures = [
    {
      Icon: HeartPulse,
      title: 'Acompanhamento contínuo',
      desc: 'Equipe especializada presente em cada etapa, com cuidado terapêutico individualizado.',
    },
    {
      Icon: ShieldCheck,
      title: 'Ambiente seguro',
      desc: 'Estrutura protegida, supervisionada e adaptada para promover autonomia com segurança.',
    },
    {
      Icon: HandHeart,
      title: 'Apoio em medicação',
      desc: 'Suporte profissional na administração de medicamentos e nas rotinas de cuidado pessoal.',
    },
    {
      Icon: Users,
      title: 'Socialização ativa',
      desc: 'Atividades coletivas que estimulam vínculos, habilidades sociais e reintegração gradual.',
    },
  ];

  const estruturaItens = [
    { Icon: BedDouble, label: 'Quartos confortáveis', desc: 'Acomodações pensadas para descanso e privacidade' },
    { Icon: Coffee, label: 'Áreas de convivência', desc: 'Espaços amplos para refeições e atividades em grupo' },
    { Icon: TreePine, label: 'Espaços ao ar livre', desc: 'Áreas verdes para reflexão e bem-estar' },
    { Icon: Stethoscope, label: 'Suporte clínico', desc: 'Salas dedicadas a atendimento e atividades terapêuticas' },
    { Icon: Sun, label: 'Iluminação natural', desc: 'Ambientes claros, ventilados e acolhedores' },
    { Icon: Sparkles, label: 'Padrão acima da média', desc: 'Cada detalhe pensado para conforto e dignidade' },
  ];

  return (
    <div style={{ backgroundColor: theme.surface }}>
      <Hero
        title={clinic.heroTitle}
        subtitle={clinic.heroSubtitle}
        backgroundImage={clinic.heroImage}
        primaryButtonText="FALAR COM A EQUIPE"
        secondaryButtonText="LIGUE AGORA"
        primaryButtonUrl={clinic.whatsappUrl}
        secondaryButtonUrl={`tel:+${clinic.whatsapp}`}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        accentColor={theme.accent}
        badge="São Bernardo do Campo, SP · Moradia Assistida"
      />

      {/* Quick highlights — 2 pilares (Moradia + Estrutura), reforçando o foco da página */}
      <section className="pt-10 md:py-20 md:-mt-24 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {[
            {
              Icon: HomeIcon,
              title: 'Moradia Terapêutica Assistida',
              desc: 'Um lar terapêutico com apoio contínuo, focado em autonomia, bem-estar e reintegração social.',
              href: '#moradia',
              cta: 'CONHECER A MORADIA',
            },
            {
              Icon: BedDouble,
              title: 'Estrutura completa',
              desc: 'Ambientes pensados para acolher cada etapa do tratamento — privativos, comuns e ao ar livre.',
              href: '#estruturas',
              cta: 'EXPLORAR A ESTRUTURA',
            },
          ].map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-7 md:p-9 rounded-3xl text-white shadow-elevation-2 hover:shadow-elevation-3 transition-shadow duration-300 cursor-pointer"
              style={{ backgroundColor: i === 0 ? theme.primary : theme.primaryDark }}
            >
              <div className="w-14 h-14 mb-5 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                <card.Icon size={28} strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl font-bold mb-3 leading-tight">{card.title}</h3>
              <p className="text-white/90 mb-6 leading-relaxed">{card.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">
                {card.cta}
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Seção 1 — Moradia Assistida */}
      <section id="moradia" className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
                style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
              >
                São Bernardo do Campo, SP
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] text-gray-900 tracking-tight">
                Um lar terapêutico para{' '}
                <span style={{ color: theme.primary }}>recomeçar com dignidade</span>
              </h2>
              <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Em <strong>São Bernardo do Campo</strong>, nosso Espaço Terapêutico é mais do
                  que uma estrutura: a Moradia Terapêutica Assistida é um espaço onde o cuidado
                  profissional encontra a serenidade de um lar. Cada detalhe é pensado para
                  promover autonomia, bem-estar e o resgate da rotina.
                </p>
                <p>
                  Profissionais especializados acompanham o dia a dia dos residentes, oferecendo
                  suporte em cuidados pessoais, medicação e acompanhamento terapêutico contínuo —
                  sempre com respeito, acolhimento e confiança em cada etapa.
                </p>
              </div>
              <a
                href={clinic.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 mt-8 text-white px-8 py-4 rounded-full font-bold shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: theme.cta }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.ctaDark)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.cta)}
              >
                FALE COM NOSSA EQUIPE
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div
                className="absolute -inset-4 rounded-3xl transform rotate-2 opacity-[0.08] pointer-events-none"
                style={{ backgroundColor: theme.primary }}
              />
              <div className="relative">
                <MiniGallery
                  heightClass="h-[400px] md:h-[560px]"
                  images={[
                    { src: '/todos rede evolucao principal/0bd1ec12-cfcc-424d-bc8b-50aadeb5aeb8.JPG', alt: 'Área externa com piscina do Espaço Terapêutico' },
                    { src: '/todos rede evolucao principal/29d99765-e6c0-45f1-8600-63ac763ba507.JPG', alt: 'Sala de convivência do Espaço Terapêutico' },
                    { src: '/todos rede evolucao principal/79889e60-5f7e-4649-b8f3-3f8d88e09c44.JPG', alt: 'Ambiente integrado do Espaço Terapêutico' },
                    { src: '/todos rede evolucao principal/0c05d0f7-fd45-48ef-9fe1-1e62886c5a64.JPG', alt: 'Acomodações do Espaço Terapêutico' },
                  ]}
                  primaryColor={theme.primary}
                />
              </div>
              <div
                className="absolute -bottom-6 -left-2 md:-left-6 bg-white px-5 py-4 rounded-2xl shadow-elevation-3 flex items-center gap-3 border border-gray-100 z-10"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm"
                  style={{ backgroundColor: theme.primary }}
                >
                  <HomeIcon size={22} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-tight text-gray-900">
                    Cuidado contínuo
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Equipe especializada 24h</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Features grid — diferenciais da Moradia */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {moradiaFeatures.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 rounded-3xl bg-white shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                >
                  <f.Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2 leading-tight">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA intermediário */}
      <CTABanner
        title="Um espaço terapêutico pensado para você ou seu familiar."
        subtitle="Fale agora com nossa equipe e descubra como podemos acolher cada etapa."
        buttonText="CONVERSAR PELO WHATSAPP"
        buttonUrl={clinic.whatsappUrl}
        bgColor={theme.cta}
        buttonBg="#fff"
        buttonText2={theme.cta}
      />

      {/* Seção 2 — Estrutura: galeria principal */}
      <Gallery
        title="Cada espaço pensado para o seu bem-estar"
        subtitle="Conheça a estrutura do Espaço Terapêutico Evolução: ambientes confortáveis, seguros e desenhados para promover autonomia, descanso e socialização."
        images={clinic.gallery}
        primaryColor={theme.primary}
        ctaColor={theme.cta}
        ctaDark={theme.ctaDark}
        ctaUrl={clinic.whatsappUrl}
        surface={theme.surface}
        eyebrow="Nossa estrutura"
        ctaText="QUERO CONHECER PESSOALMENTE"
      />

      {/* Detalhamento da estrutura */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
            >
              O que você encontra
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: theme.primary }}>
              Ambientes que acolhem e tratam
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Da privacidade dos quartos às áreas de convívio, cada espaço foi planejado para
              entregar conforto, segurança e dignidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {estruturaItens.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-elevation-2 transition-shadow duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                >
                  <item.Icon size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.label}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="py-14 md:py-24 text-center px-4 relative overflow-hidden"
        style={{ backgroundColor: theme.primaryDark }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full opacity-[0.08] pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${theme.accent}, transparent 50%)`,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto"
        >
          <HomeIcon size={32} className="mx-auto mb-4 opacity-80" style={{ color: theme.accent }} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Um novo lar para um novo capítulo.
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale com a equipe do Espaço Terapêutico Evolução e descubra como a Moradia Assistida
            pode ser o caminho de recomeço para você ou seu familiar.
          </p>
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-base md:text-lg shadow-elevation-3 hover:shadow-2xl transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: theme.accent, color: '#1A4D2E' }}
          >
            FALE COM NOSSA EQUIPE AGORA
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
