
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircleIcon, ArrowForwardIcon, ShareIcon } from './Icons';

type TabId = 'sinfonico' | 'una-noche' | 'pasion-latina' | 'navidad';

const Shows: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>('sinfonico');
  const [isShared, setIsShared] = useState(false);

  const tabs: TabId[] = ['sinfonico', 'una-noche', 'pasion-latina', 'navidad'];

  const getActiveContent = (id: TabId) => {
    switch (id) {
      case 'sinfonico': return {
        label: t('shows.sinfonico.label'),
        title: t('shows.sinfonico.title'),
        subtitle: t('shows.sinfonico.subtitle'),
        tag: t('shows.sinfonico.tag'),
        desc: t('shows.sinfonico.desc'),
        features: t('shows.sinfonico.features'),
        cta: t('shows.sinfonico.cta'),
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr_Zw8ybUk7StU43bmWkcCrlVktL2wxUSK6sA-mhlYhmHvVDJ3ptz_VnKPvRszXQxh_PoY0dfvsEDhPf0QAKirUTisgw1yQsVt5Nd7OdZUvbJVBtDrhs_rlOQgCph0A5d5RrhyBNbxCEXloBBYKRmMcnQh5HvNDMWJPQt_kmtLoM0fYUqiXPIQEMgN6McjrZc7JStZIrpOwexC6zC7SOFH4JFW2CO1siaSvPRHH1Awq0bXEHojYea6xNL4ouZx0pNngxFV7p3YwyW2',
        videoEmbedId: 'irF2lHkQAAM'
      };
      case 'una-noche': return {
        label: t('shows.unaNoche.label'),
        title: t('shows.unaNoche.title'),
        subtitle: t('shows.unaNoche.subtitle'),
        tag: t('shows.unaNoche.tag'),
        desc: t('shows.unaNoche.desc'),
        features: t('shows.unaNoche.features'),
        cta: t('shows.unaNoche.cta'),
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBClwy6TkHwFHU7MJWxOslggiZYFiXz79SHx1egYPs3VdkJ0tpJcsVzndIluPfwDFSdMfKD_3uOqhffLdYEQ2WYRmbZgcPc1FEXKjuWysqx2oByDedabRIou5t3VpRISBz5E4hmYyyhY3ozgjisPXVHMXbZhJb0E1PmMYCOQdgShEjr0GH7mrwmffvcXBFNdFw5MpmiEgDsZTC8_jty21tQFMADScA4Nz5py2AEMpKEHGiCmZG7CDO6RNY1CF1PIbzq1zhx69GRcvy8',
        videoEmbedId: 'KqlXxnAjbcA'
      };
      case 'pasion-latina': return {
        label: t('shows.pasionLatina.label'),
        title: t('shows.pasionLatina.title'),
        subtitle: t('shows.pasionLatina.subtitle'),
        tag: t('shows.pasionLatina.tag'),
        desc: t('shows.pasionLatina.desc'),
        features: t('shows.pasionLatina.features'),
        cta: t('shows.pasionLatina.cta'),
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnXYrwQRQUyWYiyx993smivWFGjL2ugfvVzfdMtuSKDctFOP6HqAxxPE5n05BRW1FvV59cnLtLqA3guuFvqRCM90vsyTHFLic9pkUiWB6Kkq1W1CWlHLUP908uu6D6wzMdBk2d5-X9p7xaGQyqN-5FEZibo7kA3dLsGiSOw3rEodL8AJa6ulqoOTSrm5DCrI36q4xr968OYZpx2smOf8YyErusbR_JI5pFdVIgGiRLBbH7YLhIOlB82yVfeULiNkWOTwE6bOY6UEuV',
        videoEmbedId: '3klvU2cLCEE'
      };
      case 'navidad': return {
        label: t('shows.navidad.label'),
        title: t('shows.navidad.title'),
        subtitle: t('shows.navidad.subtitle'),
        tag: t('shows.navidad.tag'),
        desc: t('shows.navidad.desc'),
        features: t('shows.navidad.features'),
        cta: t('shows.navidad.cta'),
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXHv0zHRe78z-0NPtJC-OVIO9vQhzlbeQV4Gqi4b250uYQ89-yhW77UWRomdDWYdwIASTNPYrGl3SsxlerPnV-YyNOYwRrLjVWnsoQM_3lVnDze5f8T9wFhIdQjPpTeGdUqkble6bJsQuYs8Yi5lcyjC3LWwy26dCI2aFvt8gmH8shCRzEhYyWuIBaz91xUvZls-dgxgGeF7u8GPn5oHSeKFZjI-YsgdU5YHyTQcouHHbrMyNcCHa7YTdc0QNDfR2U22mJr11urGqn',
        videoEmbedId: 'SZHAW3IOxM4'
      };
    }
  };

  const handleShare = async (content: any) => {
    const shareData = {
      title: `The Maravillosos Tenors - ${content.title} ${content.subtitle}`,
      text: `${content.tag}: ${content.desc}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
        setIsShared(true);
        setTimeout(() => setIsShared(false), 2000);
      } catch (err) {
        console.log('Clipboard error:', err);
      }
    }
  };

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const activeContent = getActiveContent(activeTab);

  return (
    <section className="bg-dark-surface py-20 md:py-32 relative overflow-hidden border-t border-white/5" id="shows">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 md:mb-16 border-b border-white/5 pb-6 md:pb-8">
          <h2 className="font-serif text-4xl md:text-7xl text-white leading-[0.9] mb-4 md:mb-0">
            {t('shows.title')} <span className="text-neon italic">{t('shows.titleAccent')}</span>
          </h2>
          <div className="text-right">
            <p className="text-text-muted text-[10px] md:text-sm tracking-wide uppercase">{t('shows.select')}</p>
          </div>
        </div>

        <div className="flex overflow-x-auto gallery-scroll gap-6 md:gap-16 mb-8 md:mb-16 border-b border-white/5 pb-2 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth">
          {tabs.map(id => (
            <button
              key={id}
              className={`pb-4 relative shrink-0 text-xs md:text-base tracking-widest uppercase font-bold transition-colors ${activeTab === id ? 'text-white' : 'text-text-muted hover:text-white'}`}
              onClick={() => setActiveTab(id)}
            >
              {getActiveContent(id).label}
              <span className={`absolute bottom-[-9px] left-0 h-[2px] bg-neon transition-all duration-300 ${activeTab === id ? 'w-full' : 'w-0'}`}></span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[500px] md:min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start"
            >
              <div className="w-full lg:w-[60%] h-[300px] md:h-[500px] lg:h-[600px] relative rounded-lg overflow-hidden group shadow-2xl bg-black">
                {activeContent.videoEmbedId ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${activeContent.videoEmbedId}?rel=0&modestbranding=1&autoplay=0&showinfo=0&controls=1`}
                    title={activeContent.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${activeContent.image}')` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </>
                )}


                {!activeContent.videoEmbedId && (
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20 pointer-events-none">
                    <span className="inline-block px-3 py-1 bg-neon/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase mb-2 shadow-lg">
                      {activeContent.tag}
                    </span>
                  </div>
                )}
              </div>

              <div className="w-full lg:w-[40%] flex flex-col justify-center pt-4">
                <h3 className="font-serif text-3xl md:text-5xl text-white mb-4 md:mb-6 leading-tight">
                  {activeContent.title} <span className="italic text-neon">{activeContent.subtitle}</span>
                </h3>
                <div className="w-12 h-[1px] bg-neon mb-6 md:mb-8"></div>
                <p className="text-text-muted leading-relaxed mb-6 md:mb-8 font-light text-base md:text-lg">
                  {activeContent.desc}
                </p>
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-xs md:text-sm text-white/80 tracking-wide">
                  {activeContent.features.map((f: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-neon" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-6 md:gap-10">
                  <a
                    className="inline-flex items-center gap-2 text-neon uppercase tracking-widest text-[10px] md:text-xs font-bold hover:text-white transition-colors group px-6 py-3 border border-neon/30 rounded-full hover:bg-neon/10 transition-all"
                    href="#contact"
                    onClick={handleCTAClick}
                  >
                    {activeContent.cta} <ArrowForwardIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {activeContent.videoEmbedId && (
                    <a
                      href={`https://youtu.be/${activeContent.videoEmbedId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white/60 hover:text-white uppercase tracking-widest text-[10px] md:text-xs font-bold transition-all group py-3 px-4"
                    >
                      <svg className="w-5 h-5 fill-current text-red-600/70 group-hover:text-red-600 transition-colors" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                      Ver en YouTube
                    </a>
                  )}

                  <button
                    onClick={() => handleShare(activeContent)}
                    className="inline-flex items-center gap-3 text-white/40 hover:text-white uppercase tracking-widest text-[10px] md:text-xs font-bold transition-all group min-w-[120px]"
                  >
                    <motion.span
                      animate={isShared ? {
                        scale: [1, 1.3, 1],
                        color: ['#8A92A3', '#4B5CA0', '#4B5CA0'],
                      } : { scale: 1, color: 'inherit' }}
                      className="transition-colors group-hover:scale-110"
                    >
                      {isShared ? <CheckCircleIcon className="w-4 h-4" /> : <ShareIcon className="w-4 h-4" />}
                    </motion.span>

                    <div className="relative overflow-hidden h-4 flex items-center">
                      <AnimatePresence mode="wait">
                        {isShared ? (
                          <motion.span
                            key="shared"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-neon block"
                          >
                            {t('shows.shared')}
                          </motion.span>
                        ) : (
                          <motion.span
                            key="share"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="block"
                          >
                            {t('shows.share')}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Shows;
