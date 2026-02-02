
import React, { useEffect } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import SinfoniaVisual from './components/SinfoniaVisual';
import NuestrosShows from './components/NuestrosShows';
import Tenors from './components/Tenors';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LogoMarquee from './components/LogoMarquee';

const App: React.FC = () => {
  useEffect(() => {
    // Forzar scroll arriba al cargar, ignorando la restauración del navegador
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Detectar si hay un hash o si la ruta es específica (ej: /shows)
    const hash = window.location.hash;
    const path = window.location.pathname;

    // Determinar el objetivo del scroll
    let targetSelector = '';

    if (hash) {
      targetSelector = hash;
    } else if (path.includes('/shows') || path.endsWith('/shows')) {
      targetSelector = '#shows';
    }

    if (targetSelector) {
      // Pequeño timeout para asegurar que el DOM esté listo
      setTimeout(() => {
        // Asegurarse de que el selector sea válido (comience con #)
        if (!targetSelector.startsWith('#')) targetSelector = '#' + targetSelector;

        // Intentar encontrar el elemento
        try {
          const element = document.querySelector(targetSelector);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } catch (e) {
          console.warn('Selector inválido:', targetSelector);
        }
      }, 100);
    } else {
      // Si no hay hash ni ruta específica, ir al principio
      window.scrollTo(0, 0);
    }
  }, []);
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <Hero />
        <Marquee />
        <NuestrosShows />
        <SinfoniaVisual />
        <Tenors />
        <LogoMarquee />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default App;
