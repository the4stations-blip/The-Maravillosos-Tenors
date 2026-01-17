
import React from 'react';
import { useLanguage } from './LanguageContext';

const Marquee: React.FC = () => {
  const { t } = useLanguage();
  
  const cities = [
    { name: 'MADRID', tag: t('marquee.soldOut'), accent: true },
    { name: 'LONDON', tag: 'ROYAL HALL', accent: false },
    { name: 'PARIS', tag: 'GALA', accent: true },
    { name: 'MILAN', tag: 'SCALA', accent: false },
    { name: 'VIENNA', tag: '2024', accent: false },
    { name: 'NEW YORK', tag: 'MET', accent: true },
  ];

  // Duplicamos la lista para crear el efecto de bucle infinito
  const marqueeItems = [...cities, ...cities];

  return (
    <div className="bg-dark border-y border-white/5 py-8 overflow-hidden relative z-20">
      {/* Gradientes laterales para suavizar la entrada y salida de texto */}
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap animate-marquee-liquid w-max opacity-60 hover:opacity-100 transition-opacity duration-700">
        <div className="flex items-center gap-24 px-12">
          {marqueeItems.map((city, idx) => (
            <span 
              key={`${city.name}-${idx}`} 
              className={`text-5xl md:text-6xl font-serif flex items-center gap-6 ${idx % 2 === 0 ? 'text-outline italic' : 'text-white'}`}
            >
              {city.name} 
              <span className={`text-[10px] md:text-xs font-sans tracking-[0.3em] font-bold not-italic border px-3 py-1 rounded-full ${city.accent ? 'text-neon border-neon/30 bg-neon/5' : 'text-text-muted border-white/10 bg-white/5'}`}>
                {city.tag}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
