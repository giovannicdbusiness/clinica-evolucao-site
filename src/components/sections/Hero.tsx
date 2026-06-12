import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonUrl?: string;
  primaryColor?: string;
  primaryDark?: string;
  accentColor?: string;
  accentTextColor?: string;
  badge?: string;
  trustSignals?: string[];
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText = 'FALE COM NOSSA EQUIPE',
  secondaryButtonText = 'LIGUE AGORA',
  primaryButtonUrl = 'https://wa.me/5515998271753',
  secondaryButtonUrl = 'tel:+5515998271753',
  primaryColor = '#5A9EA8',
  primaryDark = '#4A8C96',
  accentColor = '#86EFAC',
  accentTextColor = '#1A4D2E',
  badge,
  trustSignals,
}: HeroProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <div className="relative h-[78vh] min-h-[520px] md:h-[88vh] md:min-h-[640px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Layered overlays for richer contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        <div
          className="absolute inset-0 mix-blend-multiply opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${primaryColor}, transparent 60%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {badge && (
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg"
              style={{ backgroundColor: accentColor, color: accentTextColor }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: accentTextColor }}
              />
              {badge}
            </motion.span>
          )}

          <motion.h1
            variants={item}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-4 md:mb-6 tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed max-w-xl"
          >
            {subtitle}
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
            <a
              href={primaryButtonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-center text-white shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: primaryColor }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primaryDark)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primaryColor)}
            >
              {primaryButtonText}
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={secondaryButtonUrl}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-center shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: accentColor, color: accentTextColor }}
            >
              <Phone size={16} strokeWidth={2.4} />
              {secondaryButtonText}
            </a>
          </motion.div>

          {trustSignals && trustSignals.length > 0 && (
            <motion.div
              variants={item}
              className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-white/85 text-sm"
            >
              {trustSignals.map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  {s}
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/70"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest font-semibold">Role para descobrir</span>
        <div className="w-px h-10 bg-white/40 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2"
            style={{ backgroundColor: '#fff' }}
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  );
}
