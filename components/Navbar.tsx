
import React from 'react';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300 mix-blend-difference text-white">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <a className="flex items-center gap-3 group" href="#">
          <span className="material-symbols-outlined text-3xl group-hover:text-neon transition-colors">graphic_eq</span>
          <span className="text-sm font-bold tracking-[0.2em] uppercase hidden md:block">The Maravillosos Tenors</span>
        </a>
        <div className="flex items-center gap-12">
          <div className="hidden md:flex items-center gap-10">
            <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
              <a className="hover:text-neon transition-colors" href="#shows">{t('nav.shows')}</a>
              <a className="hover:text-neon transition-colors" href="#tenors">{t('nav.artists')}</a>
              <a className="hover:text-neon transition-colors" href="#repertoire">{t('nav.repertoire')}</a>
              <a className="hover:text-neon transition-colors" href="#contact">{t('nav.contact')}</a>
            </div>
            <div className="h-4 w-px bg-white/20"></div>
            
            {/* Language Selector */}
            <div 
              aria-label="Language Selector" 
              className="relative group cursor-pointer"
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            >
              <div className="absolute -inset-2 bg-neon/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-[3px] w-[74px] h-[30px] backdrop-blur-md overflow-hidden">
                <div 
                  className={`absolute top-[3px] bottom-[3px] left-[3px] w-[32px] bg-neon shadow-[0_0_12px_rgba(75,92,160,0.6)] rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${lang === 'en' ? 'translate-x-[0px]' : 'translate-x-[36px]'}`}
                ></div>
                <div className="relative z-10 w-full flex justify-between px-[10px]">
                  <span className={`text-[9px] font-bold tracking-widest transition-colors duration-300 ${lang === 'en' ? 'text-white' : 'text-white/40'}`}>EN</span>
                  <span className={`text-[9px] font-bold tracking-widest transition-colors duration-300 ${lang === 'es' ? 'text-white' : 'text-white/40'}`}>ES</span>
                </div>
              </div>
            </div>

          </div>
          <button className="md:hidden text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
