import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import TriagemForm from '@/components/forms/TriagemForm';
import Gallery from '@/components/sections/Gallery';
import MiniGallery from '@/components/sections/MiniGallery';
import CTABanner from '@/components/sections/CTABanner';
import Stats from '@/components/sections/Stats';
import {
  Stethoscope,
  Users,
  ShieldCheck,
  Award,
  Heart,
  Calendar,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { clinics } from '@/data/clinics';

export default function VargemGrande() {
  const clinic = clinics['vargem-grande'];
  const { theme } = clinic;

  const stats = [
    { icon: Calendar, value: '+16', countUpTo: 16, countUpPrefix: '+', label: 'Anos atuando', description: 'Tradição em recuperação' },
    { icon: Users, value: '+1.000', countUpTo: 1000, countUpPrefix: '+', label: 'Pacientes', description: 'Vidas transformadas' },
    { icon: Stethoscope, value: '24h', label: 'Atendimento', description: 'Equipe disponível sempre' },
    { icon: Award, value: '✓', label: 'Equipe multidisciplinar', description: 'Profissionais qualificados' },
  ];

  const passos = [
    {
      step: '01',
      title: 'Contato',
      desc: 'Entre em contato pelo WhatsApp ou telefone. Atendimento sigiloso 24h.',
    },
    {
      step: '02',
      title: 'Triagem & Avaliação',
      desc: 'Avaliação clínica e psicológica para definir o melhor plano de tratamento.',
    },
    {
      step: '03',
      title: 'Recuperação',
      desc: 'Início do tratamento estruturado com retomada da saúde e reinserção social.',
    },
  ];

  return (
    <div style={{ backgroundColor: theme.surface }}>
      <Hero
        title={clinic.heroTitle}
        subtitle={clinic.heroSubtitle}
        backgroundImage={clinic.heroImage}
        primaryButtonText="LIGAR AGORA"
        secondaryButtonText="WHATSAPP"
        primaryButtonUrl={`tel:+${clinic.whatsapp}`}
        secondaryButtonUrl={clinic.whatsappUrl}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        accentColor={theme.accent}
        badge="Vargem Grande Paulista, SP"
      />

      {/* Quem somos */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
              >
                Vargem Grande Paulista, SP
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
                Devolvemos o bem-estar à{' '}
                <span style={{ color: theme.primary }}>sua família</span>
              </h2>
              <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Localizada em <strong>Vargem Grande Paulista</strong>, nossa unidade é
                  especializada no tratamento de dependência química, alcoolismo e transtornos
                  psiquiátricos, com mais de <strong>16 anos de tradição</strong> e mais de{' '}
                  <strong>1.000 vidas transformadas</strong>.
                </p>
                <p>
                  Trabalhamos com terapia em grupo, palestras, atendimento individualizado e
                  programa terapêutico estruturado para garantir resultados sólidos e duradouros.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">
                {[
                  { Icon: Award, title: 'Equipe qualificada', desc: 'Profissionais especializados', tone: theme.primary },
                  { Icon: ShieldCheck, title: 'Ambiente seguro', desc: '24h por dia', tone: theme.accent, dark: true },
                  { Icon: Heart, title: 'Tratamento humano', desc: 'Atenção personalizada', tone: theme.primary },
                  { Icon: Users, title: 'Apoio à família', desc: 'Reintegração familiar', tone: theme.accent, dark: true },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: f.dark ? `${f.tone}40` : `${f.tone}15`,
                        color: f.dark ? '#5B4218' : f.tone,
                      }}
                    >
                      <f.Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{f.title}</h4>
                      <p className="text-sm text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                  images={[
                    { src: '/fotos unidade vargem grande/649b5ef0-738f-409e-9ab0-173574983117.JPG', alt: 'Piscina da unidade Vargem Grande Paulista' },
                    { src: '/fotos unidade vargem grande/68c28c2f-d0b1-46e1-805b-9c8dce2d9c9f.JPG', alt: 'Fachada da unidade Vargem Grande Paulista' },
                    { src: '/fotos unidade vargem grande/6e8a9363-0fea-4552-bcf8-e9cf52c5552c.JPG', alt: 'Varanda da unidade Vargem Grande Paulista' },
                    { src: '/fotos unidade vargem grande/4c515e66-0faa-4f8e-9558-430d835796fc.JPG', alt: 'Quartos da unidade Vargem Grande Paulista' },
                  ]}
                  primaryColor={theme.primary}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats
        title="Tradição em recuperação"
        subtitle="Resultados consistentes com programa estruturado e equipe especializada."
        items={stats}
        primaryColor={theme.primary}
        accentColor={theme.accent}
        bgColor={theme.surface}
      />

      {/* Cronograma 3 passos */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
            >
              Processo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: theme.primary }}>
              Como funciona o tratamento
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Um processo simples, acolhedor e transparente do primeiro contato à recuperação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {passos.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pt-10 p-8 rounded-3xl border border-gray-100 shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300 bg-white"
              >
                <div
                  className="absolute -top-7 left-8 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-extrabold text-2xl shadow-elevation-2"
                  style={{ backgroundColor: theme.primary }}
                >
                  {p.step}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 mt-1">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Sua recuperação começa aqui."
        subtitle={`Atendimento sigiloso 24 horas pelo telefone ${clinic.phoneDisplay}.`}
        buttonText="FALAR CONOSCO AGORA"
        buttonUrl={clinic.whatsappUrl}
        bgColor={theme.cta}
        buttonBg="#fff"
        buttonText2={theme.cta}
      />

      <Gallery
        title="Nossa estrutura"
        subtitle="Sabemos da importância de conhecer o local antes mesmo de visitá-lo. Confira nossas instalações."
        images={clinic.gallery}
        primaryColor={theme.primary}
        ctaColor={theme.cta}
        ctaDark={theme.ctaDark}
        ctaUrl={clinic.whatsappUrl}
        surface={theme.surface}
      />


      <TriagemForm
        title="Triagem"
        subtitle="Inicie agora o processo. Atendimento sigiloso e individualizado."
        clinicName={clinic.shortName}
        whatsappUrl={clinic.whatsappUrl}
        whatsappPhone={clinic.whatsapp}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        surface={theme.surface}
        ctaColor={theme.cta}
      />

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
          <HeartHandshake size={32} className="mx-auto mb-4 opacity-80" style={{ color: theme.accent }} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            A liberdade de recomeçar está ao alcance de uma ligação.
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale com nossa equipe e descubra como podemos ajudar você ou seu ente querido.
          </p>
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-base md:text-lg shadow-elevation-3 hover:shadow-2xl transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: theme.accent, color: '#1A1A1A' }}
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
