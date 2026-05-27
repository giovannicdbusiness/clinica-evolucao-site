import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ImageIcon, Maximize2 } from 'lucide-react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const total = images.length;

  // Descobre o slide mais próximo do centro do scroller (em tempo real, sem depender de state).
  const findCurrentIndex = (): number => {
    const scroller = scrollerRef.current;
    if (!scroller) return 0;
    const center = scroller.scrollLeft + scroller.clientWidth / 2;
    let bestIdx = 0;
    let bestDist = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const itemCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(itemCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = i;
      }
    });
    return bestIdx;
  };

  // Atualiza o dot ativo enquanto o usuário rola (mais responsivo que IntersectionObserver).
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setActiveIndex(findCurrentIndex());
      });
    };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      scroller.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  const scrollTo = (i: number) => {
    const target = itemRefs.current[i];
    const scroller = scrollerRef.current;
    if (!target || !scroller) return;
    const itemCenter = target.offsetLeft + target.offsetWidth / 2;
    scroller.scrollTo({
      left: itemCenter - scroller.clientWidth / 2,
      behavior: 'smooth',
    });
  };

  const next = () => {
    const current = findCurrentIndex();
    scrollTo(Math.min(current + 1, total - 1));
  };
  const prev = () => {
    const current = findCurrentIndex();
    scrollTo(Math.max(current - 1, 0));
  };

  const open = (i: number) => setOpenIndex(i);
  const close = () => setOpenIndex(null);

  return (
    <section id="estruturas" className="py-14 md:py-24" style={{ backgroundColor: surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
          >
            <ImageIcon size={12} /> {eyebrow}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 tracking-tight"
            style={{ color: primaryColor }}
          >
            {title}
          </h2>
          {subtitle && <p className="text-gray-600 text-base md:text-lg">{subtitle}</p>}
        </div>
      </div>

      {/* Carrossel */}
      <div className="relative">
        {/* Setas (desktop) */}
        <button
          type="button"
          onClick={prev}
          aria-label="Foto anterior"
          disabled={activeIndex === 0}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-elevation-2 items-center justify-center hover:shadow-elevation-3 transition-shadow disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          style={{ color: primaryColor }}
        >
          <ArrowLeft size={22} strokeWidth={2.2} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próxima foto"
          disabled={activeIndex === total - 1}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-elevation-2 items-center justify-center hover:shadow-elevation-3 transition-shadow disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          style={{ color: primaryColor }}
        >
          <ArrowRight size={22} strokeWidth={2.2} />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 md:px-8 lg:px-16 pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
        >
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              type="button"
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              data-index={i}
              onClick={() => open(i)}
              aria-label={`${img.alt} - abrir em tela cheia`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.03, ease: 'easeOut' }}
              className="relative shrink-0 snap-center overflow-hidden rounded-2xl md:rounded-3xl shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300 group cursor-pointer focus:outline-none w-[85%] sm:w-[60%] md:w-[48%] lg:w-[40%] aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              >
                <Maximize2 size={16} strokeWidth={2.2} />
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm">
                {i + 1} / {total}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 px-4">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Ir para foto ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-200 cursor-pointer"
              style={{
                width: i === activeIndex ? 28 : 8,
                backgroundColor: i === activeIndex ? primaryColor : '#CBD5E1',
              }}
            />
          ))}
        </div>
      </div>

      {/* CTAs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
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
