
import React, { useRef, useState } from 'react';
import { useLanguage } from './LanguageContext';
import { ArrowBackIcon, ArrowForwardIcon } from './Icons';

type MediaItem = {
  type: 'youtube' | 'instagram';
  id: string;
  title: string;
  thumbnail?: string;
};

const SinfoniaVisual: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Intercalando Reel - Video - Reel - Video...
  const mediaItems: MediaItem[] = [
    { type: 'youtube', id: 'irF2lHkQAAM', title: t('repertoire.items.showreel') },
    { type: 'instagram', id: 'DH9DtZytr64', title: t('repertoire.items.myWay'), thumbnail: '/reel-1.jpg' },
    { type: 'instagram', id: 'DHq48h3t3PM', title: t('repertoire.items.musicFeel'), thumbnail: '/pasion-latina-thumb.jpg' },

    { type: 'youtube', id: 'KqlXxnAjbcA', title: t('repertoire.items.live3') },
    { type: 'instagram', id: 'DGabMKEtNBm', title: t('repertoire.items.story'), thumbnail: '/reel-7.jpg' },
  ];

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = dir === 'left' ? -scrollRef.current.clientWidth * 0.6 : scrollRef.current.clientWidth * 0.6;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getYouTubeThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleMediaClick = (item: MediaItem) => {
    if (item.type === 'youtube') {
      setActiveVideo(item.id);
    } else {
      window.open(`https://www.instagram.com/reel/${item.id}/`, '_blank');
    }
  };

  return (
    <>
      <section className="bg-dark py-20 md:py-32 relative overflow-hidden" id="repertoire">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-8">
            <div>
              <h2 className="font-serif text-4xl md:text-8xl text-white mb-4 md:mb-6 leading-[0.9]">
                {t('repertoire.title')}<br /><span className="text-neon italic">{t('repertoire.titleAccent')}</span>
              </h2>
              <p className="text-text-muted max-w-sm text-base md:text-lg">{t('repertoire.desc')}</p>
            </div>
            <div className="flex gap-4 self-end md:self-auto">
              <button
                className="size-11 md:size-12 rounded-full border border-white/10 flex items-center justify-center text-neon hover:bg-neon hover:text-white transition-all duration-300"
                onClick={() => handleScroll('left')}
                aria-label="Scroll Left"
              >
                <ArrowBackIcon className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                className="size-11 md:size-12 rounded-full border border-white/10 flex items-center justify-center text-neon hover:bg-neon hover:text-white transition-all duration-300"
                onClick={() => handleScroll('right')}
                aria-label="Scroll Right"
              >
                <ArrowForwardIcon className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          {/* Gallery */}
          <div
            ref={scrollRef}
            className="gallery-scroll flex items-center gap-6 md:gap-8 overflow-x-auto pb-4 md:pb-8 h-[450px] md:h-[500px] snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
          >
            {mediaItems.map((item, idx) => (
              <div
                key={`${item.type}-${item.id}`}
                className={`snap-center shrink-0 h-full relative group cursor-pointer overflow-hidden rounded-lg bg-dark-surface border border-white/5 hover:border-neon/30 transition-all duration-500 ${item.type === 'instagram'
                  ? 'w-[253px] md:w-[281px]'  // 9:16 aspect ratio (height 450/500 * 9/16)
                  : 'w-[533px] md:w-[590px]'  // 16:9 aspect ratio (height 450/500 * 16/9)
                  }`}
                onClick={() => handleMediaClick(item)}
              >
                {/* Thumbnail */}
                <div className="absolute inset-0">
                  {item.type === 'youtube' ? (
                    <img
                      src={getYouTubeThumbnail(item.id)}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
                      }}
                    />
                  ) : item.thumbnail ? (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/60 via-pink-800/40 to-orange-700/30 flex items-center justify-center">
                      <div className="text-center opacity-60">
                        <svg className="w-16 h-16 mx-auto text-white/70 mb-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                        </svg>
                        <span className="text-white/50 text-sm tracking-wider uppercase">{t('repertoire.instagramReel')}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-2xl ${item.type === 'youtube'
                    ? 'w-16 h-16 md:w-20 md:h-20 bg-red-600/90 group-hover:bg-red-600'
                    : 'w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400'
                    }`}>
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase backdrop-blur-md shadow-lg ${item.type === 'youtube'
                    ? 'bg-red-600/90 text-white'
                    : 'bg-gradient-to-r from-purple-600/90 to-pink-500/90 text-white'
                    }`}>
                    {item.type === 'youtube' ? (
                      <>
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                        YouTube
                      </>
                    ) : (
                      <>
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                        </svg>
                        {t('repertoire.reel')}
                      </>
                    )}
                  </span>
                </div>

                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-1 engraved-text">{item.title}</h3>
                  <p className="text-text-muted text-xs tracking-wider uppercase flex items-center gap-2">
                    {item.type === 'youtube' ? t('shows.watchYouTube') : t('repertoire.watchInstagram')}
                    <ArrowForwardIcon className="w-3 h-3" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              src={`https://www.youtube-nocookie.com/embed/${activeVideo}?rel=0&modestbranding=1&autoplay=1`}
              title="Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              className="absolute -top-12 right-0 text-white/60 hover:text-white text-sm uppercase tracking-wider flex items-center gap-2"
              onClick={() => setActiveVideo(null)}
            >
              {t('modal.close')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SinfoniaVisual;
