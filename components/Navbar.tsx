
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjusted for mobile
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'shows', label: t('nav.shows') },
    { id: 'tenors', label: t('nav.artists') },
    { id: 'repertoire', label: t('nav.repertoire') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] px-4 md:px-8 py-4 md:py-6 transition-all duration-300 mix-blend-difference text-white">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <a 
            className="flex items-center gap-3 group" 
            href="#"
            onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <span className="material-symbols-outlined text-2xl md:text-3xl group-hover:text-neon transition-colors">graphic_eq</span>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">The Maravillosos Tenors</span>
          </a>

          <div className="flex items-center gap-4 md:gap-12">
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
                {navLinks.map(link => (
                  <a 
                    key={link.id}
                    className="hover:text-neon transition-colors" 
                    href={`#${link.id}`}
                    onClick={(e) => handleScroll(e, link.id)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="h-4 w-px bg-white/20"></div>
            </div>

            {/* Language Selector: ES Left, EN Right */}
            <div 
              aria-label="Language Selector" 
              className="relative group cursor-pointer select-none"
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            >
              <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-[3px] md:p-[4px] w-[70px] md:w-[80px] h-[28px] md:h-[32px] backdrop-blur-md overflow-hidden">
                <div 
                  className={`absolute top-[3px] md:top-[4px] bottom-[3px] md:bottom-[4px] left-[3px] md:left-[4px] w-[30px] md:w-[34px] bg-neon rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${lang === 'en' ? 'translate-x-[34px] md:translate-x-[38px]' : 'translate-x-[0px]'}`}
                ></div>
                <div className="relative z-10 w-full flex items-center justify-around h-full">
                  <span className={`text-[8px] md:text-[10px] font-bold tracking-widest transition-colors duration-300 flex-1 text-center ${lang === 'es' ? 'text-white' : 'text-white/30'}`}>ES</span>
                  <span className={`text-[8px] md:text-[10px] font-bold tracking-widest transition-colors duration-300 flex-1 text-center ${lang === 'en' ? 'text-white' : 'text-white/30'}`}>EN</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden flex items-center justify-center size-10 rounded-full bg-white/5 border border-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[55] bg-dark/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className="text-2xl font-serif text-white hover:text-neon transition-colors tracking-tight"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-20 flex flex-col items-center gap-4">
              <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase">{t('hero.tagline')}</span>
              <div className="w-12 h-px bg-white/10"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
