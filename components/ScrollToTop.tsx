
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpwardIcon } from './Icons';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(75, 92, 160, 0.2)' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] size-12 md:size-14 rounded-full glass-card border border-white/10 flex items-center justify-center text-white/70 hover:text-neon shadow-2xl transition-colors duration-300"
          aria-label="Volver arriba"
        >
          <ArrowUpwardIcon className="w-6 h-6 md:w-7 md:h-7" />
          <div className="absolute inset-0 rounded-full bg-neon/5 blur-lg -z-10 group-hover:bg-neon/20 transition-all duration-500"></div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
