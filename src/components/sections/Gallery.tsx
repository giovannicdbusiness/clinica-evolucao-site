import { motion } from 'framer-motion';
import { ArrowRight, ImageIcon } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  title: string;
  subtitle?: string;
  images: GalleryImage[];
  primaryColor?: string;
  ctaColor?: string;
  ctaDark?: string;
  ctaUrl?: string;
  ctaText?: string;
  surface?: string;
  eyebrow?: string;
}

export default function Gallery({
  title,
  subtitle,
  images,
  primaryColor = '#5A9EA8',
  ctaColor = '#F59E0B',
  ctaDark = '#D97706',
  ctaUrl = 'https://wa.me/5515998271753',
  ctaText = 'CONHEÇA NOSSAS ESTRUTURAS',
  surface = '#F4F4F0',
  eyebrow = 'Nossa estrutura',
}: GalleryProps) {
  return (
    <section id="estruturas" className="py-20 md:py-24" style={{ backgroundColor: surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
          >
            <ImageIcon size={12} /> {eyebrow}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          {subtitle && <p className="text-gray-600 text-base md:text-lg">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300 group cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/70 mb-1 block">
                  Estrutura
                </span>
                <span className="text-white font-bold text-lg md:text-xl drop-shadow-md block">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full font-bold shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-200 cursor-pointer"
            style={{ backgroundColor: ctaColor }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ctaDark)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ctaColor)}
          >
            {ctaText}
            <ArrowRight
              size={18}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
