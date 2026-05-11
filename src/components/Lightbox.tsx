import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** índice da imagem inicial (-1 ou null = fechado) */
  openIndex: number | null;
  onClose: () => void;
}

/**
 * Lightbox modal acessível com Embla carousel.
 * - Setas teclado / swipe mobile
 * - ESC fecha, clique no backdrop fecha
 * - Strip de thumbnails sincronizada
 * - Trap focus + retorna foco ao trigger
 */
export default function Lightbox({ images, openIndex, onClose }: LightboxProps) {
  const isOpen = openIndex !== null && openIndex >= 0;
  const triggerRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: openIndex ?? 0,
    duration: 25,
  });
  const [thumbsRef, thumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
    align: 'center',
  });
  const [current, setCurrent] = useState(openIndex ?? 0);

  // Sincroniza embla principal com o índice externo quando abre
  useEffect(() => {
    if (!isOpen || !emblaApi) return;
    emblaApi.scrollTo(openIndex ?? 0, true);
    setCurrent(openIndex ?? 0);
  }, [isOpen, openIndex, emblaApi]);

  // Atualiza current quando o usuário navega no carrossel
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const idx = emblaApi.selectedScrollSnap();
      setCurrent(idx);
      thumbsApi?.scrollTo(idx);
    };
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, thumbsApi]);

  const goPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const goNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Salva o trigger atual ao abrir e devolve foco ao fechar
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement | null;
      // foca o botão de fechar para a navegação por teclado funcionar
      setTimeout(() => closeBtnRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      triggerRef.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Atalhos de teclado
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, goPrev, goNext]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de fotos em tela cheia"
          onClick={(e) => {
            // fecha ao clicar no backdrop (não nas imagens)
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 md:px-6 py-4 text-white">
            <div className="text-sm md:text-base font-medium tabular-nums">
              <span className="opacity-90">{current + 1}</span>
              <span className="opacity-60"> / {images.length}</span>
            </div>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar galeria"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            >
              <X size={22} />
            </button>
          </div>

          {/* Main carousel */}
          <div className="relative flex-1 min-h-0">
            <div className="overflow-hidden h-full" ref={emblaRef}>
              <div className="flex h-full">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] min-w-0 h-full flex items-center justify-center p-4 md:p-10"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="max-h-full max-w-full object-contain rounded-lg shadow-2xl select-none"
                      draggable={false}
                      loading={Math.abs(i - current) <= 1 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Prev/Next buttons */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Foto anterior"
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronLeft size={28} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Próxima foto"
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
            >
              <ChevronRight size={28} strokeWidth={2.2} />
            </button>
          </div>

          {/* Thumbnails strip */}
          <div className="bg-black/60 border-t border-white/10 py-3 px-4 md:px-6">
            <div className="overflow-hidden" ref={thumbsRef}>
              <div className="flex gap-2">
                {images.map((img, i) => {
                  const active = i === current;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => emblaApi?.scrollTo(i)}
                      aria-label={`Ir para foto ${i + 1}`}
                      aria-current={active}
                      className={`flex-[0_0_auto] w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white ${
                        active ? 'ring-2 ring-white opacity-100 scale-105' : 'opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        draggable={false}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
