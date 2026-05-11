import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import YouTubeSlider from '@/components/sections/YouTubeSlider';
import TriagemForm from '@/components/forms/TriagemForm';
import FAQ from '@/components/sections/FAQ';
import Gallery from '@/components/sections/Gallery';
import CTABanner from '@/components/sections/CTABanner';
import Stats from '@/components/sections/Stats';
import {
  Waves,
  Sun,
  Wind,
  Heart,
  Leaf,
  Flower2,
  Users,
  Stethoscope,
  ArrowRight,
} from 'lucide-react';
import { clinics } from '@/data/clinics';

export default function LitoralSul() {
  const clinic = clinics['litoral-sul'];
  const { theme } = clinic;

  const stats = [
    { icon: Waves, value: '100%', countUpTo: 100, countUpSuffix: '%', label: 'Beira-mar', description: 'Ambiente natural curativo' },
    { icon: Leaf, value: 'Integ.', label: 'Programa', description: 'Terapia + natureza' },
    { icon: Stethoscope, value: '24h', label: 'Atendimento', description: 'Equipe sempre disponível' },
    { icon: Users, value: '+20', countUpTo: 20, countUpPrefix: '+', label: 'Profissionais', description: 'Equipe multidisciplinar' },
  ];

  return (
    <div style={{ backgroundColor: theme.surface }}>
      <Hero
        title={clinic.heroTitle}
        subtitle={clinic.heroSubtitle}
        backgroundImage={clinic.heroImage}
        primaryButtonText="CONHECER A UNIDADE"
        secondaryButtonText="LIGAR AGORA"
        primaryButtonUrl={clinic.whatsappUrl}
        secondaryButtonUrl={`tel:+${clinic.whatsapp}`}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        accentColor={theme.accent}
        badge="Espaço terapêutico beira-mar"
        trustSignals={['Ambiente natural', 'Programa integrativo', 'Atendimento 24h']}
      />

      {/* 3 destaques */}
      <section className="py-16 md:py-20 -mt-24 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            { icon: Waves, title: 'Terapia à beira-mar', desc: 'A serenidade do oceano como aliada do tratamento.' },
            { icon: Leaf, title: 'Programa integrativo', desc: 'Equipe multidisciplinar e atividades na natureza.' },
            { icon: Flower2, title: 'Renovação total', desc: 'Cuidado físico, emocional e espiritual em um único espaço.' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 md:p-8 rounded-3xl text-white shadow-elevation-2 hover:shadow-elevation-3 transition-shadow duration-300"
                style={{ backgroundColor: theme.primary }}
              >
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center mb-5 backdrop-blur-sm">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 md:py-24 bg-white">
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
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Unidade Litoral Sul - Espaço beira-mar"
                className="relative rounded-3xl shadow-elevation-3 w-full object-cover h-[460px] md:h-[520px]"
              />
              <div className="absolute -bottom-6 -right-2 md:-right-6 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-elevation-3 font-bold flex items-center gap-2 border border-gray-100">
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center text-white text-sm shadow-sm"
                  style={{ backgroundColor: theme.primary }}
                >
                  L
                </div>
                <span style={{ color: theme.primary }}>LITORAL SUL</span>
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
                Unidade Litoral Sul
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.15] tracking-tight">
                Sobre a <span style={{ color: theme.primary }}>unidade Litoral Sul</span>
              </h2>
              <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Nossa unidade Litoral Sul é um espaço terapêutico onde o som do mar e o
                  contato direto com a natureza compõem parte fundamental do processo de cura.
                </p>
                <p>
                  Combinamos um programa terapêutico estruturado com práticas integrativas,
                  oferecendo um ambiente único para tratamento de dependência química, alcoolismo
                  e transtornos emocionais.
                </p>
                <p>
                  Cada paciente é recebido com empatia, sigilo total e um plano de cuidado
                  individualizado, conduzido por uma equipe multidisciplinar experiente.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-10">
                {[
                  { Icon: Heart, title: 'Cuidado humano', desc: 'Equipe acolhedora 24h' },
                  { Icon: Sun, title: 'Sol e mar', desc: 'Ambiente natural curativo' },
                  { Icon: Wind, title: 'Tranquilidade', desc: 'Distante do estresse urbano' },
                  { Icon: Flower2, title: 'Renovação', desc: 'Programa integrativo' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${theme.primary}15`, color: theme.primary }}
                    >
                      <item.Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats
        title="Tratamento em harmonia com a natureza"
        subtitle="Mais do que uma clínica: um espaço para reencontro consigo mesmo."
        items={stats}
        primaryColor={theme.primary}
        accentColor={theme.cta}
        bgColor={theme.surface}
      />

      <CTABanner
        title="Recupere-se em harmonia com a natureza."
        subtitle="Fale com nossa equipe e conheça a unidade Litoral Sul."
        buttonText="QUERO CONHECER"
        buttonUrl={clinic.whatsappUrl}
        bgColor={theme.cta}
        buttonBg="#fff"
        buttonText2={theme.cta}
      />

      <Gallery
        title="Conheça nosso espaço"
        subtitle="Estrutura completa em ambiente paradisíaco para a sua jornada de recuperação."
        images={clinic.gallery}
        primaryColor={theme.primary}
        ctaColor={theme.cta}
        ctaDark={theme.ctaDark}
        ctaUrl={clinic.whatsappUrl}
        surface={theme.surface}
      />

      <TriagemForm
        title="Triagem Litoral Sul"
        subtitle="Inicie agora o seu processo de recuperação. Preencha os dados e nossa equipe entrará em contato com total sigilo."
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
        subtitle="Conheça mais sobre o trabalho desenvolvido nas unidades da nossa rede de clínicas."
        videos={clinic.videos}
        primaryColor={theme.primary}
        primaryDark={theme.primaryDark}
        surface={theme.surface}
      />

      <FAQ
        title="Dúvidas sobre a unidade Litoral Sul"
        subtitle="Tire as principais dúvidas sobre o tratamento, a estrutura e o funcionamento do espaço."
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
          <Waves size={32} className="mx-auto mb-4 opacity-80" style={{ color: theme.accent }} />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Uma nova vida começa com um passo.
          </h2>
          <p className="text-white/90 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Entre em contato com a unidade Litoral Sul. Atendimento confidencial 24h.
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
