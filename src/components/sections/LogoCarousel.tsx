import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

interface LogoCarouselProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  images: string[];
  bgColor?: string;
  accentColor?: string;
}

/**
 * Carrossel infinito (auto-scroll) de logos de convênios.
 * Usa embla-carousel com loop e autoplay manual via interval.
 */
export default function LogoCarousel({
  title = 'Planos de Saúde aceitos',
  subtitle = 'Trabalhamos com os principais convênios. Consulte sua cobertura conosco.',
  eyebrow = 'Convênios',
  images,
  bgColor = '#5A9EA8',
  accentColor = '#86EFAC',
}: LogoCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
    skipSnaps: false,
  });

  // Auto-scroll suave
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, 2500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: bgColor }}>
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 bg-white/10 text-white">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-white/85 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {/* Duplicamos as imagens pra dar sensação de loop suave */}
            {[...images, ...images].map((src, idx) => (
              <div
                key={idx}
                className="flex-[0_0_50%] sm:flex-[0_0_33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] pl-4"
              >
                <div className="bg-white rounded-2xl p-5 md:p-6 flex items-center justify-center h-24 md:h-28 shadow-md transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src={src}
                    alt="Logo convênio"
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
