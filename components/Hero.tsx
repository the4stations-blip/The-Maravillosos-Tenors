
import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Background parallax
  const yBg = useTransform(scrollY, [0, 800], [0, 200]);
  const scaleBg = useTransform(scrollY, [0, 800], [1.1, 1.0]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.4]);

  // Text parallax
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen md:h-[110vh] w-full overflow-hidden isolate bg-dark">
      {/* Parallax Background Container */}
      <motion.div 
        style={{ y: yBg, scale: scaleBg, opacity: opacityBg }}
        className="absolute inset-0 z-0 origin-center"
      >
        <div className="absolute inset-0 bg-dark/30 z-10"></div>
        <img 
          alt="Cinematic Background" 
          className="w-full h-full object-cover brightness-[1.1] contrast-[1.1]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr_Zw8ybUk7StU43bmWkcCrlVktL2wxUSK6sA-mhlYhmHvVDJ3ptz_VnKPvRszXQxh_PoY0dfvsEDhPf0QAKirUTisgw1yQsVt5Nd7OdZUvbJVBtDrhs_rlOQgCph0A5d5RrhyBNbxCEXloBBYKRmMcnQh5HvNDMWJPQt_kmtLoM0fYUqiXPIQEMgN6McjrZc7JStZIrpOwexC6zC7SOFH4JFW2CO1siaSvPRHH1Awq0bXEHojYea6xNL4ouZx0pNngxFV7p3YwyW2"
        />
      </motion.div>

      {/* Main Title Layer */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center immersive-mask pointer-events-none select-none px-6"
      >
        <div className="relative text-center w-full max-w-[1400px]">
          <h1 className="font-serif leading-[0.85] font-black tracking-tighter uppercase text-white mix-blend-screen drop-shadow-2xl" 
              style={{ fontSize: 'clamp(3rem, 15vw, 14rem)' }}>
            {t('hero.titleTop')}<br/>
            <span className="font-thin italic tracking-tight">{t('hero.titleBottom')}</span>
          </h1>
        </div>
      </motion.div>

      {/* Static/UI Layer */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-end pb-12 md:pb-24 pointer-events-none px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white text-[10px] md:text-xs tracking-[0.4em] uppercase mix-blend-difference text-center"
        >
          {t('hero.tagline')}
        </motion.p>
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 40, md: 64 }}
          transition={{ duration: 1.5, delay: 1, ease: "circOut" }}
          className="w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent mt-6 md:mt-8"
        ></motion.div>
      </div>
      
      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-40"></div>
    </section>
  );
};

export default Hero;
