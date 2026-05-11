import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight, ChevronLeft, ChevronRight, Youtube } from 'lucide-react';
import { useCallback } from 'react';

interface Video {
  id: string;
  title: string;
  url: string;
}

interface YouTubeSliderProps {
  title: string;
  subtitle?: string;
  videos: Video[];
  primaryColor?: string;
  primaryDark?: string;
  surface?: string;
}

export default function YouTubeSlider({
  title,
  subtitle = 'Acompanhe nossos conteúdos, depoimentos e informações importantes sobre tratamento e recuperação.',
  videos,
  primaryColor = '#5A9EA8',
  primaryDark = '#4A8C96',
  surface = '#F4F4F0',
}: YouTubeSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const navButton = (onClick: () => void, label: string, Icon: typeof ChevronLeft) => (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors duration-200 cursor-pointer hover:text-white"
      style={{ borderColor: primaryColor, color: primaryColor }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = primaryColor;
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = primaryColor;
      }}
    >
      <Icon size={22} strokeWidth={2.4} />
    </button>
  );

  return (
    <section id="youtube" className="py-20 md:py-24" style={{ backgroundColor: surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
            >
              <Youtube size={12} /> Vídeos da rede
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-3 tracking-tight"
              style={{ color: primaryColor }}
            >
              {title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg">{subtitle}</p>
          </div>
          <div className="hidden md:flex gap-3 flex-shrink-0">
            {navButton(scrollPrev, 'Vídeo anterior', ChevronLeft)}
            {navButton(scrollNext, 'Próximo vídeo', ChevronRight)}
          </div>
        </div>

        <div className="overflow-hidden -mx-2 px-2" ref={emblaRef}>
          <div className="flex -ml-4">
            {videos.map((video) => {
              const videoId = getYouTubeId(video.url);
              return (
                <div
                  key={video.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <article className="bg-white rounded-3xl overflow-hidden shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-300 h-full flex flex-col border border-gray-100">
                    <div className="relative pt-[56.25%] bg-gray-900">
                      {videoId ? (
                        <iframe
                          className="absolute top-0 left-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                          Vídeo indisponível
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between gap-4">
                      <h3 className="font-bold text-base md:text-lg text-gray-900 line-clamp-2 leading-snug">
                        {video.title}
                      </h3>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 font-semibold text-sm transition-colors cursor-pointer"
                        style={{ color: primaryColor }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = primaryDark)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = primaryColor)}
                      >
                        Assistir no YouTube
                        <ArrowRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      </a>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex md:hidden justify-center gap-4 mt-8">
          {navButton(scrollPrev, 'Vídeo anterior', ChevronLeft)}
          {navButton(scrollNext, 'Próximo vídeo', ChevronRight)}
        </div>
      </div>
    </section>
  );
}
