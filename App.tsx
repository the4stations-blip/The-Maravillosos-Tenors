
import React from 'react';
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
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <Hero />
        <Marquee />
        <SinfoniaVisual />
        <NuestrosShows />
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
