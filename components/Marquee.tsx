
import React from 'react';

const Marquee: React.FC = () => {
  const tourData = [
    { city: 'MADRID', year: '2024', accent: true },
    { city: 'BARCELONA', year: '2024', accent: false },
    { city: 'SEVILLA', year: '2024', accent: false },
    { city: 'VALENCIA', year: '2024', accent: false },
    { city: 'ZARAGOZA', year: '2024', accent: false },
    { city: 'MÁLAGA', year: '2024', accent: false },
    { city: 'BILBAO', year: '2024', accent: false },
    { city: 'GRANADA', year: '2024', accent: false },
    { city: 'PALMA', year: '2024', accent: false },
    { city: 'ROMA', year: '2025', accent: true },
    { city: 'PARÍS', year: '2025', accent: true },
    { city: 'VIENA', year: '2025', accent: true },
    { city: 'LONDRES', year: '2025', accent: true },
    { city: 'MILÁN', year: '2025', accent: true },
  ];

  // Duplicamos la lista para crear el efecto de bucle infinito
  const marqueeItems = [...tourData, ...tourData];

  return (
    <div className="bg-dark border-y border-white/5 py-12 md:py-16 overflow-hidden relative z-20">
      {/* Gradientes laterales profundos para un efecto cinemático */}
      <div className="absolute left-0 top-0 bottom-0 w-48 md:w-96 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-48 md:w-96 bg-gradient-to-l from-dark via-dark/80 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex whitespace-nowrap animate-marquee-liquid w-max opacity-90 hover:opacity-100 transition-opacity duration-1000">
        <div className="flex items-center gap-40 md:gap-64 px-24">
          {marqueeItems.map((item, idx) => (
            <div 
              key={`${item.city}-${idx}`} 
              className="flex items-center gap-8 md:gap-14"
            >
              {/* 1. Etiqueta GALA */}
              <div className="flex items-center bg-white/5 border border-white/10 px-4 md:px-6 py-2 md:py-2.5 rounded-full shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]">
                <span className="text-neon text-[10px] md:text-[12px] font-black tracking-[0.3em] uppercase">GALA</span>
              </div>

              {/* 2. CIUDAD (Ahora uniforme, sin cursivas alternas) */}
              <span className="text-4xl md:text-8xl font-serif tracking-tight text-white transition-all duration-700">
                {item.city}
              </span>
              
              {/* 3. Etiqueta de AÑO */}
              <span 
                className={`text-[11px] md:text-[14px] font-sans tracking-[0.45em] font-black border px-5 md:px-7 py-2 md:py-2.5 rounded-full transition-all duration-500
                  ${item.accent 
                    ? 'text-neon border-neon/40 bg-neon/10 shadow-[0_0_25px_rgba(75,92,160,0.2)]' 
                    : 'text-text-muted border-white/15 bg-white/5'
                  }`}
              >
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
