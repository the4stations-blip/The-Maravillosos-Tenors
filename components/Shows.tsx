
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';

type TabId = 'sinfonico' | 'una-noche' | 'pasion-latina' | 'navidad';

const Shows: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabId>('sinfonico');

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
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDr_Zw8ybUk7StU43bmWkcCrlVktL2wxUSK6sA-mhlYhmHvVDJ3ptz_VnKPvRszXQxh_PoY0dfvsEDhPf0QAKirUTisgw1yQsVt5Nd7OdZUvbJVBtDrhs_rlOQgCph0A5d5RrhyBNbxCEXloBBYKRmMcnQh5HvNDMWJPQt_kmtLoM0fYUqiXPIQEMgN6McjrZc7JStZIrpOwexC6zC7SOFH4JFW2CO1siaSvPRHH1Awq0bXEHojYea6xNL4ouZx0pNngxFV7p3YwyW2'
      };
      case 'una-noche': return {
        label: t('shows.unaNoche.label'),
        title: t('shows.unaNoche.title'),
        subtitle: t('shows.unaNoche.subtitle'),
        tag: t('shows.unaNoche.tag'),
        desc: t('shows.unaNoche.desc'),
        features: t('shows.unaNoche.features'),
        cta: t('shows.unaNoche.cta'),
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBClwy6TkHwFHU7MJWxOslggiZYFiXz79SHx1egYPs3VdkJ0tpJcsVzndIluPfwDFSdMfKD_3uOqhffLdYEQ2WYRmbZgcPc1FEXKjuWysqx2oByDedabRIou5t3VpRISBz5E4hmYyyhY3ozgjisPXVHMXbZhJb0E1PmMYCOQdgShEjr0GH7mrwmffvcXBFNdFw5MpmiEgDsZTC8_jty21tQFMADScA4Nz5py2AEMpKEHGiCmZG7CDO6RNY1CF1PIbzq1zhx69GRcvy8'
      };
      case 'pasion-latina': return {
        label: t('shows.pasionLatina.label'),
        title: t('shows.pasionLatina.title'),
        subtitle: t('shows.pasionLatina.subtitle'),
        tag: t('shows.pasionLatina.tag'),
        desc: t('shows.pasionLatina.desc'),
        features: t('shows.pasionLatina.features'),
        cta: t('shows.pasionLatina.cta'),
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnXYrwQRQUyWYiyx993smivWFGjL2ugfvVzfdMtuSKDctFOP6HqAxxPE5n05BRW1FvV59cnLtLqA3guuFvqRCM90vsyTHFLic9pkUiWB6Kkq1W1CWlHLUP908uu6D6wzMdBk2d5-X9p7xaGQyqN-5FEZibo7kA3dLsGiSOw3rEodL8AJa6ulqoOTSrm5DCrI36q4xr968OYZpx2smOf8YyErusbR_JI5pFdVIgGiRLBbH7YLhIOlB82yVfeULiNkWOTwE6bOY6UEuV'
      };
      case 'navidad': return {
        label: t('shows.navidad.label'),
        title: t('shows.navidad.title'),
        subtitle: t('shows.navidad.subtitle'),
        tag: t('shows.navidad.tag'),
        desc: t('shows.navidad.desc'),
        features: t('shows.navidad.features'),
        cta: t('shows.navidad.cta'),
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXHv0zHRe78z-0NPtJC-OVIO9vQhzlbeQV4Gqi4b250uYQ89-yhW77UWRomdDWYdwIASTNPYrGl3SsxlerPnV-YyNOYwRrLjVWnsoQM_3lVnDze5f8T9wFhIdQjPpTeGdUqkble6bJsQuYs8Yi5lcyjC3LWwy26dCI2aFvt8gmH8shCRzEhYyWuIBaz91xUvZls-dgxgGeF7u8GPn5oHSeKFZjI-YsgdU5YHyTQcouHHbrMyNcCHa7YTdc0QNDfR2U22mJr11urGqn'
      };
    }
  };

  const activeContent = getActiveContent(activeTab);

  return (
    <section className="bg-dark-surface py-32 relative overflow-hidden border-t border-white/5" id="shows">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-white/5 pb-8">
          <h2 className="font-serif text-5xl md:text-7xl text-white leading-[0.9]">
            {t('shows.title')} <span className="text-neon italic">{t('shows.titleAccent')}</span>
          </h2>
          <div className="text-right hidden md:block">
            <p className="text-text-muted text-sm tracking-wide uppercase">{t('shows.select')}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-16 mb-16 border-b border-white/5 pb-2">
          {tabs.map(id => (
            <button 
              key={id}
              className={`pb-4 relative group text-sm md:text-base tracking-widest uppercase font-bold transition-colors ${activeTab === id ? 'text-white' : 'text-text-muted hover:text-white'}`}
              onClick={() => setActiveTab(id)}
            >
              {getActiveContent(id).label}
              <span className={`absolute bottom-[-9px] left-0 h-[2px] bg-neon transition-all duration-300 ${activeTab === id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[600px]">
          <div key={activeTab} className="flex flex-col md:flex-row gap-12 md:gap-24 items-center animate-fade-in-slide">
            <div className="w-full md:w-[60%] h-[400px] md:h-[600px] relative rounded-lg overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: `url('${activeContent.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
                <span className="inline-block px-3 py-1 bg-neon/80 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase mb-2">
                  {activeContent.tag}
                </span>
              </div>
            </div>
            <div className="w-full md:w-[40%] flex flex-col justify-center">
              <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
                {activeContent.title} <span className="italic text-neon">{activeContent.subtitle}</span>
              </h3>
              <div className="w-12 h-[1px] bg-neon mb-8"></div>
              <p className="text-text-muted leading-relaxed mb-8 font-light text-lg">
                {activeContent.desc}
              </p>
              <ul className="space-y-4 mb-10 text-sm text-white/80 tracking-wide">
                {activeContent.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-neon text-lg">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a className="inline-flex items-center gap-2 text-neon uppercase tracking-widest text-xs font-bold hover:text-white transition-colors group" href="#">
                {activeContent.cta} <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shows;
