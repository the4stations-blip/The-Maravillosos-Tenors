
import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();

  // Background parallax
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);
  const scaleBg = useTransform(scrollY, [0, 800], [1.15, 1.0]);
  const opacityBg = useTransform(scrollY, [0, 500], [1, 0.3]);

  // Text scroll effects
  const yText = useTransform(scrollY, [0, 800], [0, -120]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  // White mask opacity transition
  const opacityMask = useTransform(scrollY, [0, 300], [0.6, 0]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 0.6,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.2,
      },
    },
  };

  return (
    <section className="relative h-screen md:h-[110vh] w-full overflow-hidden isolate bg-dark">
      {/* Parallax Background Container */}
      <motion.div
        style={{ y: yBg, scale: scaleBg, opacity: opacityBg }}
        className="absolute inset-0 z-0 origin-center"
      >
        <div className="absolute inset-0 bg-dark/40 z-10"></div>
        <motion.div
          className="absolute inset-0 bg-white z-[15]"
          style={{ opacity: opacityMask }}
        ></motion.div>
        <img
          alt="Cinematic Background"
          className="w-full h-full object-cover object-top brightness-[1.2] contrast-[1.1]"
          src="/hero-image.jpg"
        />
      </motion.div>

      {/* Main Title Layer */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center immersive-mask pointer-events-none select-none px-6"
      >
        <motion.div
          className="relative text-center w-full max-w-[1400px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="font-serif leading-[0.85] font-black tracking-tighter uppercase text-white"
              style={{ fontSize: 'clamp(3rem, 15vw, 14rem)' }}
            >
              {t('hero.titleTop')}
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-[-0.1em]">
            <motion.h1
              variants={itemVariants}
              className="font-serif leading-[0.85] font-thin italic tracking-tight uppercase text-white"
              style={{ fontSize: 'clamp(3rem, 15vw, 14rem)' }}
            >
              {t('hero.titleBottom')}
            </motion.h1>
          </div>
        </motion.div>
      </motion.div>

      {/* Static/UI Layer */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-end pb-12 md:pb-24 pointer-events-none px-6">
        <motion.p
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-[10px] md:text-xs tracking-[0.4em] uppercase mix-blend-difference text-center font-bold"
        >
          {t('hero.tagline')}
        </motion.p>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 40 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "circOut" }}
          className="w-[1px] bg-gradient-to-b from-transparent via-white/80 to-transparent mt-6 md:mt-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
        ></motion.div>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-dark to-transparent z-40"></div>
    </section>
  );
};

export default Hero;
