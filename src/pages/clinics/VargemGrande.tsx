import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import YouTubeSlider from '@/components/sections/YouTubeSlider';
import TriagemForm from '@/components/forms/TriagemForm';
import FAQ from '@/components/sections/FAQ';
import Gallery from '@/components/sections/Gallery';
import CTABanner from '@/components/sections/CTABanner';
import Stats from '@/components/sections/Stats';
import {
  Stethoscope,
  Users,
  ShieldCheck,
  Award,
  Heart,
  Activity,
  BookOpen,
  HandHeart,
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
    { icon: Award, value: '+25', countUpTo: 25, countUpPrefix: '+', label: 'Profissionais', description: 'Equipe multidisciplinar' },
  ];

  const equipe = [
    { icon: Stethoscope, label: 'Equipe médica', desc: 'Psiquiatras, clínicos e enfermagem 24h' },
    { icon: BookOpen, label: 'Psicólogos', desc: 'Atendimento individual e em grupo' },
    { icon: Activity, label: 'Atividades físicas', desc: 'Educadores físicos e nutricionistas' },
    { icon: HandHeart, label: 'Monitores', desc: 'Acompanhamento integral do dia a dia' },
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
        badge="Unidade Vargem Grande Paulista"
        trustSignals={['Equipe multidisciplinar', 'Ambiente seguro 24h', 'Diárias a partir de R$ 3.500']}
      />

      {/* Quem somos */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
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
                Quem somos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
                Devolvemos o bem-estar à{' '}
                <span style={{ color: theme.primary }}>sua família</span>
              </h2>
              <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  A unidade Vargem Grande Paulista é especializada no tratamento de dependência química,
                  alcoolismo e transtornos psiquiátricos. Nosso compromisso é com a recuperação
                  integral do paciente e o reencontro com a família.
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
                className="absolute -inset-4 rounded-3xl transform rotate-2 opacity-[0.08]"
                style={{ backgroundColor: theme.primary }}
              />
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Unidade Vargem Grande Paulista"
                className="relative rounded-3xl shadow-elevation-3 w-full object-cover h-[460px] md:h-[520px]"
              />
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

      {/* Atendimento especializado - faixa */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: theme.primary }}>
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ backgroundColor: theme.accent }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-white/10 text-white">
            Investimento
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Tratamento completo em um ambiente confortável
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            As diárias variam entre <strong>R$ 3.500</strong> e <strong>R$ 5.000</strong>,
            conforme a acomodação e o plano terapêutico escolhido.
          </p>
          <a
            href={clinic.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold shadow-elevation-2 hover:shadow-elevation-3 transition-shadow duration-200 cursor-pointer"
            style={{ backgroundColor: theme.accent, color: '#1A1A1A' }}
          >
            SOLICITAR ORÇAMENTO
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </section>

      {/* Cronograma 3 passos */}
      <section className="py-20 md:py-24 bg-white">
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

      {/* Equipe */}
      <section className="py-20 md:py-24" style={{ backgroundColor: theme.surface }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
            >
              Equipe
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: theme.primary }}>
              Equipe multidisciplinar
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Profissionais qualificados e dedicados à sua recuperação em todas as etapas do
              tratamento.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {equipe.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white p-6 md:p-7 rounded-3xl shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300 text-center border border-gray-100"
                >
                  <div
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                  >
                    <Icon size={28} strokeWidth={1.8} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{m.label}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                </motion.div>
              );
            })}
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

      {/* Missão / Visão / Valores */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
            >
              Nosso compromisso
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: theme.primary }}>
              Missão, Visão e Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Missão',
                desc: 'Vencer transtornos causados por substâncias psicoativas, devolvendo saúde, dignidade e esperança a cada paciente e familiar.',
              },
              {
                title: 'Visão',
                desc: 'Ser referência em atendimento cauteloso, individualizado e humanizado em tratamento de dependência química e alcoolismo.',
              },
              {
                title: 'Valores',
                desc: 'Empatia, sigilo absoluto, profissionalismo, compromisso com resultados e cuidado integral com paciente e família.',
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-3xl shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300 bg-gray-50/60 border-t-4"
                style={{ borderColor: theme.primary }}
              >
                <h3 className="font-bold text-2xl mb-4 tracking-tight" style={{ color: theme.primary }}>
                  {b.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TriagemForm
        title="Triagem Unidade Vargem Grande Paulista"
        subtitle="Inicie agora o processo. Atendimento sigiloso e individualizado."
        clinicName={clinic.shortName}
        whatsappUrl={clinic.whatsappUrl}
        whatsappPhone={clinic.whatsapp}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        surface={theme.surface}
        ctaColor={theme.cta}
      />

      <YouTubeSlider
        title="Vídeos da nossa rede"
        subtitle="Acompanhe conteúdos, depoimentos e informações sobre nosso trabalho."
        videos={clinic.videos}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        surface={theme.surface}
      />

      <FAQ
        title="Perguntas frequentes"
        subtitle="As principais dúvidas sobre o tratamento na unidade Vargem Grande Paulista."
        items={clinic.faq}
        primaryColor={theme.primary}
        surface={theme.surface}
        whatsappUrl={clinic.whatsappUrl}
      />

      {/* CTA Final */}
      <section
        className="py-20 md:py-24 text-center px-4 relative overflow-hidden"
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
            Fale com a unidade Vargem Grande Paulista e descubra como podemos ajudar você ou seu ente querido.
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
