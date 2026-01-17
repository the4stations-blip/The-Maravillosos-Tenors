
import React from 'react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden isolate">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark/20 z-10"></div>
        <img 
          alt="Cinematic Background" 
          className="w-full h-full object-cover animate-[pulse-slow_15s_ease-in-out_infinite] scale-110 brightness-150" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr_Zw8ybUk7StU43bmWkcCrlVktL2wxUSK6sA-mhlYhmHvVDJ3ptz_VnKPvRszXQxh_PoY0dfvsEDhPf0QAKirUTisgw1yQsVt5Nd7OdZUvbJVBtDrhs_rlOQgCph0A5d5RrhyBNbxCEXloBBYKRmMcnQh5HvNDMWJPQt_kmtLoM0fYUqiXPIQEMgN6McjrZc7JStZIrpOwexC6zC7SOFH4JFW2CO1siaSvPRHH1Awq0bXEHojYea6xNL4ouZx0pNngxFV7p3YwyW2"
        />
      </div>
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center immersive-mask pointer-events-none select-none">
        <div className="relative text-center px-4">
          <h1 className="font-serif text-[18vw] md:text-[14vw] leading-[0.8] font-black tracking-tighter uppercase text-white mix-blend-screen">
            {t('hero.titleTop')}<br/>
            <span className="font-thin italic tracking-tight">{t('hero.titleBottom')}</span>
          </h1>
        </div>
      </div>
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-end pb-24 pointer-events-none">
        <p className="text-white/60 text-xs tracking-[0.4em] uppercase animate-reveal [animation-delay:800ms] mix-blend-difference">
          {t('hero.tagline')}
        </p>
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent mt-8 animate-reveal [animation-delay:1s]"></div>
      </div>
    </section>
  );
};

export default Hero;
