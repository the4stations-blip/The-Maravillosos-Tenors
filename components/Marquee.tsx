
import React from 'react';

const Marquee: React.FC = () => {
  const cities = [
    "MALAGA", "MARSELLA", "ALMERIA", "CANNES", "TOLEDO", "ROMA",
    "MADRID", "FLORENCIA", "BARCELONA", "NAPOLES", "SANTANDER", "ATENAS",
    "VALENCIA", "NICOSIA", "BILBAO", "LA VALETA", "LONDRES", "DUBLIN",
    "COPENHAGUE", "HELSINKI", "ESTOCOLMO", "TALLIN", "SAN PETERSBURGO",
    "EL CAIRO", "MUSCAT", "DUBAI", "ABU DHABI", "MUMBAI", "TOKYO",
    "BEIJING", "SHANGAI", "CAPE TOWN", "TUNEZ", "ARUBA", "BRISBANE", "AUCKLAND"
  ];

  // Duplicamos la lista para crear el efecto de bucle infinito
  const marqueeItems = [...cities, ...cities];

  return (
    <div className="bg-dark border-y border-white/5 py-12 md:py-16 overflow-hidden relative z-20">
      {/* Gradientes laterales profundos para un efecto cinemático */}
      <div className="absolute left-0 top-0 bottom-0 w-48 md:w-96 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-48 md:w-96 bg-gradient-to-l from-dark via-dark/80 to-transparent z-10 pointer-events-none"></div>

      <div className="flex whitespace-nowrap animate-marquee-liquid w-max opacity-90 hover:opacity-100 transition-opacity duration-1000">
        <div className="flex items-center gap-12 md:gap-24 px-12">
          {marqueeItems.map((city, idx) => (
            <div
              key={`${city}-${idx}`}
              className="flex items-center gap-12 md:gap-24"
            >
              <span className="text-2xl md:text-5xl font-serif tracking-tight text-white transition-all duration-700 hover:text-neon/80">
                {city}
              </span>

              {/* Separador decorativo */}
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-neon/30 shadow-[0_0_15px_rgba(75,92,160,0.5)]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
