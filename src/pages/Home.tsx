import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '@/components/sections/Hero';
import YouTubeSlider from '@/components/sections/YouTubeSlider';
import TriagemForm from '@/components/forms/TriagemForm';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Stats from '@/components/sections/Stats';
import LogoCarousel from '@/components/sections/LogoCarousel';
import CountUp from '@/components/CountUp';
import {
  PhoneCall,
  Building2,
  Clock,
  User,
  Users,
  Home as HomeIcon,
  ShieldCheck,
  Heart,
  Stethoscope,
  Award,
  Calendar,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { clinics, unitsForHub } from '@/data/clinics';

export default function Home() {
  const clinic = clinics.evolucao;
  const { theme } = clinic;

  const stats = [
    { icon: Calendar, value: '+16', countUpTo: 16, countUpPrefix: '+', label: 'Anos de experiência', description: 'Tradição em cuidado humanizado' },
    { icon: Users, value: '+2.500', countUpTo: 2500, countUpPrefix: '+', label: 'Vidas transformadas', description: 'Pacientes atendidos' },
    { icon: Stethoscope, value: '24h', label: 'Atendimento contínuo', description: 'Equipe disponível sempre' },
    { icon: HeartHandshake, value: '+30', countUpTo: 30, countUpPrefix: '+', label: 'Profissionais', description: 'Equipe multidisciplinar' },
  ];

  const convenios = [
    '/logo caroussel/Rectangle-26.png',
    '/logo caroussel/Rectangle-27.png',
    '/logo caroussel/Rectangle-28.png',
    '/logo caroussel/Rectangle-29.png',
    '/logo caroussel/Rectangle-30.png',
    '/logo caroussel/Rectangle-32.png',
    '/logo caroussel/Rectangle-33.png',
    '/logo caroussel/Rectangle-34.png',
  ];

  return (
    <div style={{ backgroundColor: theme.surface }}>
      <Hero
        title={clinic.heroTitle}
        subtitle={clinic.heroSubtitle}
        backgroundImage={clinic.heroImage}
        primaryButtonUrl={clinic.whatsappUrl}
        secondaryButtonUrl={`tel:+${clinic.whatsapp}`}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        accentColor={theme.accent}
        badge="Atendimento sigiloso 24h"
        trustSignals={['Equipe médica especializada', 'Sigilo absoluto', '+16 anos de experiência']}
      />

      {/* Quick highlights - 3 cards */}
      <section className="pt-10 md:py-20 md:-mt-24 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              icon: PhoneCall,
              title: 'Internação imediata e sigilosa',
              cta: 'FALAR COM NOSSA EQUIPE',
              href: clinic.whatsappUrl,
              bg: theme.primary,
            },
            {
              icon: Building2,
              title: 'Estrutura completa e acolhedora',
              cta: 'CONHECER AS ESTRUTURAS',
              href: '#estruturas',
              bg: theme.primaryDark,
            },
            {
              icon: Clock,
              title: 'Atendimento 24h em todo o Brasil',
              cta: 'CONVERSAR NO WHATSAPP',
              href: clinic.whatsappUrl,
              bg: theme.primary,
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 md:p-8 rounded-3xl text-white shadow-elevation-2 hover:shadow-elevation-3 transition-shadow duration-300 group"
                style={{ backgroundColor: card.bg }}
              >
                <div className="w-14 h-14 mb-5 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold mb-5 leading-tight">{card.title}</h3>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold border-b border-white/40 pb-0.5 hover:border-white transition-colors cursor-pointer"
                >
                  {card.cta}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Sobre */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div
                className="absolute -inset-4 rounded-3xl transform -rotate-2 opacity-[0.08]"
                style={{ backgroundColor: theme.primary }}
              />
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Equipe profissional da Rede Evolução"
                className="relative rounded-3xl shadow-elevation-3 w-full object-cover h-[460px] md:h-[520px]"
              />
              <div
                className="absolute -bottom-6 -right-2 md:-right-6 bg-white px-5 py-4 rounded-2xl shadow-elevation-3 flex items-center gap-3 border border-gray-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm"
                  style={{ backgroundColor: theme.primary }}
                >
                  <Award size={22} strokeWidth={2} />
                </div>
                <div>
                  <div className="text-2xl font-extrabold tracking-tight" style={{ color: theme.primary }}>
                    <CountUp to={16} prefix="+" /> anos
                  </div>
                  <div className="text-xs text-gray-500 font-medium">de experiência</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
              >
                Sobre a Rede Evolução
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15] text-gray-900 tracking-tight">
                Uma rede comprometida com a sua{' '}
                <span style={{ color: theme.primary }}>recuperação</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                A Rede Evolução é referência em tratamento humanizado para dependência química,
                alcoolismo e transtornos psiquiátricos. Unimos estrutura moderna, equipe
                multidisciplinar experiente e protocolos clínicos atualizados para oferecer o
                melhor caminho de recuperação.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { Icon: Heart, title: 'Acolhimento', desc: 'Tratamento humanizado', tone: theme.primary },
                  { Icon: ShieldCheck, title: 'Sigilo total', desc: 'Atendimento confidencial', tone: theme.cta },
                  { Icon: Stethoscope, title: 'Equipe médica', desc: 'Multidisciplinar', tone: theme.primary },
                  { Icon: Award, title: 'Excelência', desc: 'Mais de 16 anos', tone: theme.cta },
                ].map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${f.tone}15`, color: f.tone }}
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
          </div>
        </div>
      </section>

      {/* Stats - Trust signals */}
      <Stats
        title="Resultados que falam por si"
        subtitle="Mais de uma década dedicada a transformar vidas e reconstruir histórias."
        items={stats}
        primaryColor={theme.primary}
        accentColor={theme.cta}
        bgColor={theme.surface}
      />

      {/* Serviços */}
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
            >
              Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: theme.primary }}>
              Cuidado integral em cada etapa
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Acompanhamento médico, terapias e atividades que fortalecem sua recuperação e
              bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                Icon: User,
                title: 'Casa Terapêutica Masculina',
                desc: 'Cuidado especializado para homens em reabilitação, com equilíbrio, autoconhecimento e recuperação.',
                bg: theme.primary,
                textColor: '#fff',
                iconBg: 'rgba(255,255,255,0.2)',
              },
              {
                Icon: HomeIcon,
                title: 'Moradia Terapêutica Assistida',
                desc: 'Ambiente seguro e supervisionado para a reintegração social com apoio contínuo na sobriedade e autonomia.',
                bg: theme.primaryDark,
                textColor: '#fff',
                iconBg: 'rgba(255,255,255,0.2)',
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl p-8 md:p-12 shadow-elevation-2 hover:shadow-elevation-3 transition-shadow duration-300"
                style={{ backgroundColor: service.bg, color: service.textColor }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: service.iconBg, color: service.textColor }}
                >
                  <service.Icon size={32} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">{service.title}</h3>
                <p className="leading-relaxed opacity-90 text-base md:text-lg">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner amarelo */}
      <CTABanner
        title="O primeiro passo pode ser uma mensagem, uma ligação ou uma conversa."
        subtitle="Fale com um atendente agora mesmo, com total sigilo."
        buttonText="COMECE AGORA SUA NOVA VIDA"
        buttonUrl={clinic.whatsappUrl}
        bgColor={theme.cta}
        buttonBg="#fff"
        buttonText2={theme.cta}
      />

      {/* Nossas Unidades — seção-gatilho do HUB */}
      <section id="estruturas" className="py-20 md:py-28" style={{ backgroundColor: theme.surface }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
            >
              Nossas unidades
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight" style={{ color: theme.primary }}>
              Conheça os espaços da Rede Evolução
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Cada unidade foi pensada para um perfil de cuidado. Escolha o ambiente que mais
              combina com a sua jornada de recuperação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
            {unitsForHub.map((u, i) => {
              const cover = u.gallery[0]?.src;
              return (
                <motion.div
                  key={u.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group rounded-3xl overflow-hidden bg-white shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-300 border border-gray-100 flex flex-col"
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    {cover ? (
                      <img
                        src={cover}
                        alt={`${u.shortName} - estrutura`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full"
                        style={{
                          background: `linear-gradient(135deg, ${u.theme.primary}, ${u.theme.primaryDark})`,
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/95 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full inline-block">
                        {u.region}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight text-gray-900">
                      {u.shortName}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                      {u.tagline}
                    </p>
                    <Link
                      to={u.path}
                      className="inline-flex items-center justify-between gap-2 px-5 py-3.5 rounded-full font-bold text-sm text-white shadow-elevation-1 hover:shadow-elevation-2 transition-all duration-200 cursor-pointer"
                      style={{ backgroundColor: u.theme.primary }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = u.theme.primaryDark)}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = u.theme.primary)}
                    >
                      SAIBA MAIS
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Triagem */}
      <TriagemForm
        title="Triagem Rede Evolução"
        subtitle="Preencha o formulário abaixo para que nossa equipe entenda melhor o seu caso ou o de seu familiar. Entraremos em contato o mais breve possível."
        clinicName={clinic.shortName}
        whatsappUrl={clinic.whatsappUrl}
        whatsappPhone={clinic.whatsapp}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        surface={theme.surface}
        ctaColor={theme.cta}
      />

      {/* YouTube */}
      <YouTubeSlider
        title="Conheça mais sobre nosso trabalho"
        videos={clinic.videos}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        surface={theme.surface}
      />

      {/* FAQ */}
      <FAQ
        title="As perguntas mais frequentes"
        subtitle="Reunimos as principais dúvidas recebidas pelos nossos canais de atendimento. Se a sua não estiver aqui, entre em contato."
        items={clinic.faq}
        primaryColor={theme.primary}
        surface={theme.surface}
        whatsappUrl={clinic.whatsappUrl}
      />

      {/* Planos de Saúde - Carrossel */}
      <LogoCarousel
        images={convenios}
        bgColor={theme.primary}
        accentColor={theme.accent}
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            A recuperação é possível. Nós acreditamos em você.
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale com a Rede Evolução e descubra como podemos ajudar você ou seu ente querido a
            iniciar uma nova jornada de vida.
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
