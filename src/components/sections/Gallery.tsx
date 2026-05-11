import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ImageIcon, Maximize2 } from 'lucide-react';
import Lightbox from '@/components/Lightbox';

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

/**
 * Galeria estilo bento: 1 foto hero (large) + 2 médias + 3 pequenas.
 * Clicando em qualquer foto abre o lightbox com TODAS as fotos do array.
 * "Ver todas as N fotos" sempre disponível como CTA secundária.
 */
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const total = images.length;

  // Até 6 fotos visíveis no bento; resto vai pro lightbox.
  const visible = images.slice(0, 6);
  const extra = Math.max(0, total - visible.length);

  // Posições do bento em 12-col grid:
  //   Hero (col 1-7, row 1-2)  |  P2 (col 8-12, row 1)
  //                            |  P3 (col 8-12, row 2)
  //   P4 (col 1-4) | P5 (col 5-8) | P6 (col 9-12, opcional "+N")
  const slots: Array<{ idx: number; className: string }> = [
    { idx: 0, className: 'md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto md:h-full' },
    { idx: 1, className: 'md:col-span-5 aspect-[4/3]' },
    { idx: 2, className: 'md:col-span-5 aspect-[4/3]' },
    { idx: 3, className: 'md:col-span-4 aspect-[4/3]' },
    { idx: 4, className: 'md:col-span-4 aspect-[4/3]' },
    { idx: 5, className: 'md:col-span-4 aspect-[4/3]' },
  ];

  const open = (i: number) => setOpenIndex(i);
  const close = () => setOpenIndex(null);

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

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
          {slots.map((slot, position) => {
            const img = visible[slot.idx];
            if (!img) return null;
            const isLastVisible = position === visible.length - 1;
            const showOverlay = isLastVisible && extra > 0;

            return (
              <motion.button
                key={img.src}
                type="button"
                onClick={() => open(slot.idx)}
                aria-label={`${img.alt} - abrir galeria em tela cheia`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: position * 0.06, ease: 'easeOut' }}
                className={`relative overflow-hidden rounded-2xl md:rounded-3xl shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300 group cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 ${slot.className}`}
                style={{ outlineColor: primaryColor }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay sutil */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />
                {/* Ícone "abrir" no hover */}
                <div
                  className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                >
                  <Maximize2 size={16} strokeWidth={2.2} />
                </div>

                {/* Overlay "+N fotos" no último visível quando há sobra */}
                {showOverlay && (
                  <div
                    className="absolute inset-0 bg-black/55 backdrop-blur-[2px] flex items-center justify-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="text-center text-white px-4">
                      <div className="text-3xl md:text-4xl font-extrabold tracking-tight">
                        +{extra}
                      </div>
                      <div className="text-xs md:text-sm uppercase tracking-widest font-semibold mt-1 opacity-90">
                        {extra === 1 ? 'foto' : 'fotos'}
                      </div>
                    </div>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => open(0)}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold border-2 transition-colors duration-200 cursor-pointer bg-white"
            style={{ borderColor: primaryColor, color: primaryColor }}
          >
            <Maximize2 size={16} />
            Ver todas as {total} fotos
          </button>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 text-white px-7 py-3.5 rounded-full font-bold shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-200 cursor-pointer"
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

      <Lightbox images={images} openIndex={openIndex} onClose={close} />
    </section>
  );
}
