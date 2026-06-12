import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Lightbox from '@/components/Lightbox';

interface MiniGalleryImage {
  src: string;
  alt: string;
}

interface MiniGalleryProps {
  images: MiniGalleryImage[];
  /** altura desktop, ex: 'h-[460px] md:h-[520px]' */
  heightClass?: string;
  primaryColor?: string;
  /** rounded corners — default 3xl */
  roundedClass?: string;
}

/**
 * Carrossel compacto de 1 foto por vez com swipe + setas + dots + abrir em lightbox.
 * Pensado para substituir <img/> única em blocos "Sobre" das unidades.
 */
export default function MiniGallery({
  images,
  heightClass = 'h-[380px] md:h-[520px]',
  primaryColor = '#5A9EA8',
  roundedClass = 'rounded-3xl',
}: MiniGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const total = images.length;

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

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setActiveIndex(findCurrentIndex()));
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
    scroller.scrollTo({
      left: target.offsetLeft,
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

  return (
    <div className="relative w-full">
      <div
        ref={scrollerRef}
        className={`flex overflow-x-auto snap-x snap-mandatory ${roundedClass} shadow-elevation-3 ${heightClass} [&::-webkit-scrollbar]:hidden [scrollbar-width:none]`}
      >
        {images.map((img, i) => (
          <button
            key={img.src + i}
            type="button"
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            onClick={() => setOpenIndex(i)}
            className="relative shrink-0 snap-center w-full h-full overflow-hidden group cursor-pointer focus:outline-none"
            aria-label={`${img.alt} - abrir em tela cheia`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/15 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <Maximize2 size={16} strokeWidth={2.2} />
            </div>
          </button>
        ))}
      </div>

      {/* Setas */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Foto anterior"
            disabled={activeIndex === 0}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/95 shadow-elevation-2 flex items-center justify-center hover:shadow-elevation-3 transition-shadow disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            style={{ color: primaryColor }}
          >
            <ChevronLeft size={22} strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próxima foto"
            disabled={activeIndex === total - 1}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white/95 shadow-elevation-2 flex items-center justify-center hover:shadow-elevation-3 transition-shadow disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            style={{ color: primaryColor }}
          >
            <ChevronRight size={22} strokeWidth={2.4} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Ir para foto ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  width: i === activeIndex ? 22 : 8,
                  backgroundColor:
                    i === activeIndex ? '#FFFFFF' : 'rgba(255,255,255,0.55)',
                }}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-black/40 backdrop-blur-sm">
            {activeIndex + 1} / {total}
          </div>
        </>
      )}

      <Lightbox images={images} openIndex={openIndex} onClose={() => setOpenIndex(null)} />
    </div>
  );
}
