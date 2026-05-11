import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import YouTubeSlider from '@/components/sections/YouTubeSlider';
import TriagemForm from '@/components/forms/TriagemForm';
import FAQ from '@/components/sections/FAQ';
import Gallery from '@/components/sections/Gallery';
import CTABanner from '@/components/sections/CTABanner';
import Stats from '@/components/sections/Stats';
import {
  Building2,
  Heart,
  ShieldCheck,
  Users,
  Trees,
  Sun,
  Calendar,
  Stethoscope,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { clinics } from '@/data/clinics';

export default function Perseveranca() {
  const clinic = clinics.perseveranca;
  const { theme } = clinic;

  const stats = [
    { icon: Calendar, value: 'Nova', label: 'Unidade', description: 'Inaugurada recentemente' },
    { icon: Trees, value: '100%', label: 'Área arborizada', description: 'Ambiente em meio à natureza' },
    { icon: Stethoscope, value: '24h', label: 'Atendimento', description: 'Equipe sempre disponível' },
    { icon: Users, value: '+15', label: 'Profissionais', description: 'Equipe multidisciplinar' },
  ];

  return (
    <div style={{ backgroundColor: theme.surface }}>
      <Hero
        title={clinic.heroTitle}
        subtitle={clinic.heroSubtitle}
        backgroundImage={clinic.heroImage}
        primaryButtonText="CONHECER A CLÍNICA"
        secondaryButtonText="FALAR COM ESPECIALISTA"
        primaryButtonUrl={clinic.whatsappUrl}
        secondaryButtonUrl={`tel:+${clinic.whatsapp}`}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        accentColor={theme.accent}
        badge="Nova unidade · Itapetininga - SP"
        trustSignals={['Ambiente arborizado', 'Sigilo absoluto', 'Atendimento 24h']}
      />

      {/* Sobre */}
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
                Itapetininga · SP
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
                Sobre a Clínica{' '}
                <span style={{ color: theme.primary }}>Perseverança</span>
              </h2>
              <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Localizada em <strong>Itapetininga</strong>, a Clínica Perseverança nasce com
                  o propósito de expandir nosso compromisso com a vida e a recuperação.
                </p>
                <p>
                  Nossa nova unidade foi cuidadosamente projetada para oferecer um ambiente
                  sereno, seguro e propício à cura. Instalações modernas e confortáveis garantem
                  que cada paciente se sinta acolhido durante todo o processo de reabilitação.
                </p>
                <p>
                  Equipe multidisciplinar experiente oferece tratamento humanizado e
                  personalizado, focado na superação da dependência e na reconstrução de laços
                  familiares e sociais.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">
                {[
                  { Icon: Heart, title: 'Acolhimento', desc: 'Tratamento humanizado', tone: theme.cta },
                  { Icon: ShieldCheck, title: 'Segurança', desc: 'Ambiente protegido', tone: theme.primary },
                  { Icon: Users, title: 'Equipe', desc: 'Profissionais qualificados', tone: theme.cta },
                  { Icon: Building2, title: 'Estrutura', desc: 'Instalações modernas', tone: theme.primary },
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Área externa Perseverança"
                  className="rounded-3xl shadow-elevation-2 w-full h-72 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Acomodações Perseverança"
                  className="rounded-3xl shadow-elevation-2 w-full h-72 object-cover mt-10"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-2xl shadow-elevation-3 border border-gray-100">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-3xl shadow-md"
                  style={{ backgroundColor: theme.primary }}
                >
                  P
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats
        title="Por que escolher a Perseverança?"
        subtitle="Uma unidade pensada para potencializar a recuperação em todos os aspectos."
        items={stats}
        primaryColor={theme.primary}
        accentColor={theme.cta}
        bgColor={theme.surface}
      />

      {/* Diferenciais */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
            >
              Diferenciais
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ color: theme.primary }}>
              Um ambiente para verdadeira transformação
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Estrutura, programa e equipe pensados para entregar resultados consistentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Trees,
                title: 'Ambiente arborizado',
                desc: 'Localização tranquila em meio à natureza, ideal para o processo de reflexão e cura.',
              },
              {
                icon: Sun,
                title: 'Atividades diárias',
                desc: 'Rotina estruturada com terapias, atividades físicas, espirituais e momentos de lazer.',
              },
              {
                icon: Heart,
                title: 'Atendimento familiar',
                desc: 'Reintegração familiar gradual com encontros supervisionados e acolhimento aos parentes.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300 border border-gray-100"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                  >
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="O cuidado de sempre, agora também em Itapetininga."
        subtitle="Inicie a triagem ou fale com nossa equipe pelo WhatsApp."
        buttonText="QUERO CONVERSAR AGORA"
        buttonUrl={clinic.whatsappUrl}
        bgColor={theme.cta}
        buttonBg="#fff"
        buttonText2={theme.cta}
      />

      <Gallery
        title="Conheça nossas estruturas"
        subtitle="Espaços compartilhados na rede que oferecem o melhor padrão de acolhimento e segurança."
        images={clinic.gallery}
        primaryColor={theme.primary}
        ctaColor={theme.cta}
        ctaDark={theme.ctaDark}
        ctaUrl={clinic.whatsappUrl}
        surface={theme.surface}
      />

      <TriagemForm
        title="Triagem Clínica Perseverança"
        subtitle="Dê o primeiro passo rumo à recuperação em nossa nova unidade. Preencha os dados abaixo para uma avaliação inicial."
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
        subtitle="Acompanhe depoimentos, conteúdos e detalhes do tratamento oferecido em todas as nossas unidades."
        videos={clinic.videos}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        surface={theme.surface}
      />

      <FAQ
        title="Dúvidas frequentes sobre a nova unidade"
        subtitle="Respostas para as principais dúvidas sobre a Clínica Perseverança."
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
            Um novo começo está mais perto do que você imagina.
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Entre em contato com a Clínica Perseverança e descubra como podemos ajudar você ou seu
            ente querido a iniciar uma nova jornada de vida.
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
