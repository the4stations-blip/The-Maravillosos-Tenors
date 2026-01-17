
import React, { useRef } from 'react';
import { useLanguage } from './LanguageContext';

const Repertoire: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const performanceData = [
    {
      title: "Nessun Dorma - Live Gala",
      tag: t('repertoire.gala'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBClwy6TkHwFHU7MJWxOslggiZYFiXz79SHx1egYPs3VdkJ0tpJcsVzndIluPfwDFSdMfKD_3uOqhffLdYEQ2WYRmbZgcPc1FEXKjuWysqx2oByDedabRIou5t3VpRISBz5E4hmYyyhY3ozgjisPXVHMXbZhJb0E1PmMYCOQdgShEjr0GH7mrwmffvcXBFNdFw5MpmiEgDsZTC8_jty21tQFMADScA4Nz5py2AEMpKEHGiCmZG7CDO6RNY1CF1PIbzq1zhx69GRcvy8",
      large: true,
      isLive: true
    },
    {
      title: "Wedding Processional",
      tag: t('repertoire.bts'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnXYrwQRQUyWYiyx993smivWFGjL2ugfvVzfdMtuSKDctFOP6HqAxxPE5n05BRW1FvV59cnLtLqA3guuFvqRCM90vsyTHFLic9pkUiWB6Kkq1W1CWlHLUP908uu6D6wzMdBk2d5-X9p7xaGQyqN-5FEZibo7kA3dLsGiSOw3rEodL8AJa6ulqoOTSrm5DCrI36q4xr968OYZpx2smOf8YyErusbR_JI5pFdVIgGiRLBbH7YLhIOlB82yVfeULiNkWOTwE6bOY6UEuV",
      large: false,
      icon: "slow_motion_video"
    },
    {
      title: "O Sole Mio",
      tag: t('repertoire.masterclass'),
      sub: "Teatro Real, Madrid",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXHv0zHRe78z-0NPtJC-OVIO9vQhzlbeQV4Gqi4b250uYQ89-yhW77UWRomdDWYdwIASTNPYrGl3SsxlerPnV-YyNOYwRrLjVWnsoQM_3lVnDze5f8T9wFhIdQjPpTeGdUqkble6bJsQuYs8Yi5lcyjC3LWwy26dCI2aFvt8gmH8shCRzEhYyWuIBaz91xUvZls-dgxgGeF7u8GPn5oHSeKFZjI-YsgdU5YHyTQcouHHbrMyNcCHa7YTdc0QNDfR2U22mJr11urGqn",
      large: true
    }
  ];

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = dir === 'left' ? -scrollRef.current.clientWidth * 0.8 : scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-dark py-20 md:py-32 relative overflow-hidden" id="repertoire">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <h2 className="font-serif text-5xl md:text-8xl text-white mb-4 md:mb-6 leading-[0.9]">
              {t('repertoire.title')}<br/><span className="text-neon italic">{t('repertoire.titleAccent')}</span>
            </h2>
            <p className="text-text-muted max-w-sm text-sm md:text-base">{t('repertoire.desc')}</p>
          </div>
          <div className="flex gap-4 self-end md:self-auto">
            <button 
              className="size-10 md:size-12 rounded-full border border-white/10 flex items-center justify-center text-neon hover:bg-neon hover:text-white transition-all duration-300"
              onClick={() => handleScroll('left')}
              aria-label="Scroll Left"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">arrow_back</span>
            </button>
            <button 
              className="size-10 md:size-12 rounded-full border border-white/10 flex items-center justify-center text-neon hover:bg-neon hover:text-white transition-all duration-300"
              onClick={() => handleScroll('right')}
              aria-label="Scroll Right"
            >
              <span className="material-symbols-outlined text-xl md:text-2xl">arrow_forward</span>
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="gallery-scroll flex items-center gap-4 md:gap-8 overflow-x-auto pb-4 md:pb-8 h-[450px] md:h-[550px] snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0"
        >
          {performanceData.map((item, idx) => (
            <div 
              key={idx}
              className={`snap-center shrink-0 h-full ${item.large ? 'w-[85vw] md:w-[600px]' : 'w-[75vw] md:w-[350px]'} relative group cursor-pointer overflow-hidden rounded-lg bg-dark-surface border border-white/5`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 md:group-hover:scale-105" 
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              {/* Enhanced bottom gradient for better text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-100 transition-all duration-500"></div>
              
              {item.icon && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="material-symbols-outlined text-white/80 drop-shadow-md">{item.icon}</span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
                <div className="flex flex-col">
                  {item.isLive && (
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
                      <span className="text-neon text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase">{item.tag}</span>
                    </div>
                  )}
                  {!item.isLive && item.tag && (
                    <span className={`inline-block w-fit px-2 py-1 ${item.large ? 'bg-white/10 backdrop-blur-md border border-white/10 mb-4' : 'text-neon mb-2'} text-[9px] md:text-[10px] font-bold tracking-widest uppercase`}>
                      {item.tag}
                    </span>
                  )}
                  <h3 className={`font-serif ${item.large ? 'text-2xl md:text-4xl' : 'text-xl md:text-3xl'} text-white leading-tight engraved-text`}>
                    {item.title}
                  </h3>
                  {item.sub && <p className="text-text-muted text-xs md:text-sm mt-3 opacity-80">{item.sub}</p>}
                </div>
              </div>
              
              {/* Play button shifted slightly up to avoid collision with bottom text on smaller heights */}
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 md:size-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 md:group-hover:opacity-100 transform scale-90 md:group-hover:scale-100 transition-all duration-300 shadow-2xl">
                <span className="material-symbols-outlined text-white text-2xl md:text-3xl">play_arrow</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repertoire;
