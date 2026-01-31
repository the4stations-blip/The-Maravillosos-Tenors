

import React, { useState, useRef } from 'react';
import { useLanguage } from './LanguageContext';
import { ArrowBackIcon, ArrowForwardIcon } from './Icons';

const Tenors: React.FC = () => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [selectedArtist, setSelectedArtist] = useState<{ name: string, voice: string, bio: string, image: string } | null>(null);

  const artistData = [
    {
      name: "Iván Nieto",
      voice: t('tenors.profiles.ivan.voice'),
      bio: t('tenors.profiles.ivan.bio'),
      image: "/tenor-ivan.jpg"
    },
    {
      name: "Matteo",
      voice: t('tenors.profiles.matteo.voice'),
      bio: t('tenors.profiles.matteo.bio'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr_Zw8ybUk7StU43bmWkcCrlVktL2wxUSK6sA-mhlYhmHvVDJ3ptz_VnKPvRszXQxh_PoY0dfvsEDhPf0QAKirUTisgw1yQsVt5Nd7OdZUvbJVBtDrhs_rlOQgCph0A5d5RrhyBNbxCEXloBBYKRmMcnQh5HvNDMWJPQt_kmtLoM0fYUqiXPIQEMgN6McjrZc7JStZIrpOwexC6zC7SOFH4JFW2CO1siaSvPRHH1Awq0bXEHojYea6xNL4ouZx0pNngxFV7p3YwyW2"
    },
    {
      name: "Luca",
      voice: t('tenors.profiles.luca.voice'),
      bio: t('tenors.profiles.luca.bio'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnXYrwQRQUyWYiyx993smivWFGjL2ugfvVzfdMtuSKDctFOP6HqAxxPE5n05BRW1FvV59cnLtLqA3guuFvqRCM90vsyTHFLic9pkUiWB6Kkq1W1CWlHLUP908uu6D6wzMdBk2d5-X9p7xaGQyqN-5FEZibo7kA3dLsGiSOw3rEodL8AJa6ulqoOTSrm5DCrI36q4xr968OYZpx2smOf8YyErusbR_JI5pFdVIgGiRLBbH7YLhIOlB82yVfeULiNkWOTwE6bOY6UEuV"
    },
    {
      name: "Giovanni",
      voice: t('tenors.profiles.giovanni.voice'),
      bio: t('tenors.profiles.giovanni.bio'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXHv0zHRe78z-0NPtJC-OVIO9vQhzlbeQV4Gqi4b250uYQ89-yhW77UWRomdDWYdwIASTNPYrGl3SsxlerPnV-YyNOYwRrLjVWnsoQM_3lVnDze5f8T9wFhIdQjPpTeGdUqkble6bJsQuYs8Yi5lcyjC3LWwy26dCI2aFvt8gmH8shCRzEhYyWuIBaz91xUvZls-dgxgGeF7u8GPn5oHSeKFZjI-YsgdU5YHyTQcouHHbrMyNcCHa7YTdc0QNDfR2U22mJr11urGqn"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section className="relative min-h-[80vh] w-full bg-dark overflow-hidden flex flex-col py-20 md:py-32" id="tenors">
        <div className="max-w-[1800px] mx-auto w-full px-4 md:px-8 lg:px-12 flex flex-col h-full z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-24 border-b border-white/5 pb-8 gap-8">
            <div>
              <h2 className="font-serif text-5xl md:text-8xl text-white mb-4 md:mb-6 leading-[0.9]">{t('tenors.title')}</h2>
              <div className="flex items-center gap-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">{t('tenors.tagline')}</span>
                <div className="w-8 h-[1px] bg-neon/50"></div>
              </div>
            </div>
            <div className="flex gap-4 self-end md:self-auto">
              <button
                className="size-11 md:size-12 rounded-full border border-white/10 flex items-center justify-center text-neon hover:bg-neon hover:text-white transition-all duration-300"
                onClick={() => scroll('left')}
                aria-label="Scroll Left"
              >
                <ArrowBackIcon className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                className="size-11 md:size-12 rounded-full border border-white/10 flex items-center justify-center text-neon hover:bg-neon hover:text-white transition-all duration-300"
                onClick={() => scroll('right')}
                aria-label="Scroll Right"
              >
                <ArrowForwardIcon className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>

          <div ref={scrollContainerRef} className="group/container gallery-scroll flex overflow-x-auto snap-x snap-mandatory pb-4 md:pb-12 gap-6 md:gap-16 w-full -mx-4 px-4 md:mx-0 md:px-0">
            {artistData.map((artist, idx) => (
              <div
                key={idx}
                className="snap-center shrink-0 w-[80vw] sm:w-[350px] md:w-[450px] h-[550px] md:h-[650px] relative overflow-hidden group rounded-lg bg-dark-surface border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] md:hover:scale-[1.02] lg:group-hover/container:opacity-40 lg:hover:!opacity-100 lg:group-hover/container:grayscale lg:hover:!grayscale-0 z-0 lg:hover:z-10 cursor-pointer"
                onClick={() => setSelectedArtist(artist)}
              >
                <div className="absolute inset-0 z-0 bg-dark-surface">
                  <img
                    alt={artist.name}
                    className="w-full h-full object-cover transition-all duration-1000 ease-out md:group-hover:scale-105"
                    src={artist.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-90 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 noise-bg opacity-10 mix-blend-overlay"></div>
                </div>
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-10 pointer-events-none">
                  <div className="pointer-events-auto transform transition-transform duration-700">
                    <div className="flex items-center gap-4 mb-3 md:mb-4">
                      <span className="text-neon text-[8px] md:text-[10px] tracking-[0.2em] uppercase font-bold">{artist.voice}</span>
                      <div className="h-[1px] w-6 md:w-8 bg-neon/50"></div>
                    </div>
                    <h3 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-4 group-hover:mb-6 transition-all duration-500">{artist.name}</h3>
                    <div className="h-0 md:group-hover:h-auto overflow-hidden opacity-0 md:group-hover:opacity-100 transition-all duration-700 delay-100">
                      <p className="text-text-muted font-display text-xs md:text-sm leading-relaxed border-l border-neon/30 pl-4 mb-6 line-clamp-3">
                        {artist.bio}
                      </p>
                      <button
                        className="text-[10px] tracking-[0.2em] uppercase text-white hover:text-neon transition-colors flex items-center gap-2 group/btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedArtist(artist);
                        }}
                      >
                        {t('tenors.viewProfile')} <ArrowForwardIcon className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Profile Modal */}
      {selectedArtist && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedArtist(null)}
        >
          <div
            className="bg-dark-surface border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-20 text-white/50 hover:text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
              onClick={() => setSelectedArtist(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Section */}
            <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
              <img
                src={selectedArtist.image}
                alt={selectedArtist.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent md:bg-gradient-to-r"></div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-neon text-xs tracking-[0.25em] uppercase font-bold">{selectedArtist.voice}</span>
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">{selectedArtist.name}</h2>

              <div className="prose prose-invert prose-sm md:prose-base max-w-none text-text-muted">
                <p className="whitespace-pre-line leading-relaxed">
                  {selectedArtist.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tenors;
