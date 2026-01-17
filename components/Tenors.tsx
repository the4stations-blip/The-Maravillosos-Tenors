
import React from 'react';
import { useLanguage } from './LanguageContext';

const Tenors: React.FC = () => {
  const { t } = useLanguage();

  const artistData = [
    {
      name: "Alessandro",
      voice: t('tenors.profiles.alessandro.voice'),
      bio: t('tenors.profiles.alessandro.bio'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnXYrwQRQUyWYiyx993smivWFGjL2ugfvVzfdMtuSKDctFOP6HqAxxPE5n05BRW1FvV59cnLtLqA3guuFvqRCM90vsyTHFLic9pkUiWB6Kkq1W1CWlHLUP908uu6D6wzMdBk2d5-X9p7xaGQyqN-5FEZibo7kA3dLsGiSOw3rEodL8AJa6ulqoOTSrm5DCrI36q4xr968OYZpx2smOf8YyErusbR_JI5pFdVIgGiRLBbH7YLhIOlB82yVfeULiNkWOTwE6bOY6UEuV"
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

  return (
    <section className="relative min-h-screen w-full bg-dark overflow-hidden flex flex-col pt-32 pb-32" id="tenors">
      <div className="max-w-[1800px] mx-auto w-full px-8 lg:px-12 flex flex-col h-full z-10">
        <div className="flex justify-between items-end mb-24 border-b border-white/5 pb-8">
          <h2 className="font-serif text-6xl md:text-8xl text-white leading-[0.9]">{t('tenors.title')}</h2>
          <div className="text-right hidden md:block">
            <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted block">{t('tenors.tagline')}</span>
            <div className="w-full h-[2px] bg-white/10 mt-4 relative overflow-hidden rounded-full">
              <div className="absolute left-0 top-0 h-full w-1/4 bg-neon"></div>
            </div>
          </div>
        </div>

        <div className="group/container gallery-scroll flex overflow-x-auto snap-x snap-mandatory pb-12 gap-8 md:gap-16 w-full">
          {artistData.map((artist, idx) => (
            <div 
              key={idx}
              className="snap-center shrink-0 w-[85vw] md:w-[450px] h-[650px] relative overflow-hidden group rounded-lg bg-dark-surface border border-white/5 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.02] group-hover/container:opacity-40 hover:!opacity-100 group-hover/container:grayscale hover:!grayscale-0 z-0 hover:z-10"
            >
              <div className="absolute inset-0 z-0 bg-dark-surface">
                <img 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-all duration-1000 ease-out hover:scale-105" 
                  src={artist.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute inset-0 noise-bg opacity-20 mix-blend-overlay"></div>
              </div>
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 lg:p-10 pointer-events-none">
                <div className="pointer-events-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-neon text-[10px] tracking-[0.2em] uppercase font-bold">{artist.voice}</span>
                    <div className="h-[1px] w-8 bg-neon/50"></div>
                  </div>
                  <h3 className="font-serif text-5xl text-white tracking-tight mb-4 group-hover:mb-6 transition-all duration-500">{artist.name}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                    <p className="text-text-muted font-display text-sm leading-relaxed border-l border-neon/30 pl-4 mb-6">
                      {artist.bio}
                    </p>
                    <button className="text-[10px] tracking-[0.2em] uppercase text-white hover:text-neon transition-colors flex items-center gap-2 group/btn">
                      {t('tenors.viewProfile')} <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tenors;
