
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
      const scrollAmount = dir === 'left' ? -600 : 600;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-dark py-32 relative overflow-hidden" id="repertoire">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-serif text-6xl md:text-8xl text-white mb-6 leading-[0.9]">
              {t('repertoire.title')}<br/><span className="text-neon italic">{t('repertoire.titleAccent')}</span>
            </h2>
            <p className="text-text-muted max-w-sm">{t('repertoire.desc')}</p>
          </div>
          <div className="flex gap-4">
            <button 
              className="size-12 rounded-full border border-white/10 flex items-center justify-center text-neon hover:bg-neon hover:text-white transition-all duration-300"
              onClick={() => handleScroll('left')}
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button 
              className="size-12 rounded-full border border-white/10 flex items-center justify-center text-neon hover:bg-neon hover:text-white transition-all duration-300"
              onClick={() => handleScroll('right')}
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="gallery-scroll flex items-center gap-6 md:gap-8 overflow-x-auto pb-8 h-[550px] snap-x snap-mandatory"
        >
          {performanceData.map((item, idx) => (
            <div 
              key={idx}
              className={`snap-start shrink-0 h-full ${item.large ? 'w-[320px] md:w-[600px]' : 'w-[280px] md:w-[350px]'} relative group cursor-pointer overflow-hidden rounded-sm bg-dark-surface border border-white/5`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-90 group-hover:opacity-60 transition-all duration-500"></div>
              
              {item.icon && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="material-symbols-outlined text-white/80 drop-shadow-md">{item.icon}</span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20">
                <div className="flex flex-col gap-1">
                  {item.isLive && (
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                      <span className="text-neon text-[10px] font-bold tracking-widest uppercase">{item.tag}</span>
                    </div>
                  )}
                  {!item.isLive && item.tag && (
                    <span className={`inline-block w-fit px-2 py-1 ${item.large ? 'bg-white/10 backdrop-blur-md border border-white/10 mb-4' : 'text-neon'} text-[10px] font-bold tracking-widest uppercase`}>
                      {item.tag}
                    </span>
                  )}
                  <h3 className={`font-serif ${item.large ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} text-white leading-tight`}>
                    {item.title}
                  </h3>
                  {item.sub && <p className="text-text-muted text-sm mt-2">{item.sub}</p>}
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                <span className="material-symbols-outlined text-white">play_arrow</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repertoire;
