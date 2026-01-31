
import React from 'react';

const LogoMarquee: React.FC = () => {
    const logos = [
        { src: '/logo-1.png', alt: 'Partner Logo 1' },
        { src: '/logo-2.png', alt: 'Partner Logo 2' },
        { src: '/logo-3.png', alt: 'Partner Logo 3' },
        { src: '/logo-4.png', alt: 'Partner Logo 4' },
        { src: '/logo-5.png', alt: 'Partner Logo 5' },
        { src: '/logo-6.png', alt: 'Partner Logo 6' },
        { src: '/logo-7.png', alt: 'Partner Logo 7' },
        { src: '/logo-8.png', alt: 'Partner Logo 8' },
        { src: '/logo-9.png', alt: 'Partner Logo 9' },
        { src: '/logo-10.png', alt: 'Partner Logo 10' },
        { src: '/logo-11.png', alt: 'Partner Logo 11' },
    ];

    // Duplicamos la lista para crear el efecto de bucle infinito
    const marqueeItems = [...logos, ...logos];

    return (
        <div className="bg-dark border-y border-white/5 py-10 md:py-14 overflow-hidden relative z-20">
            {/* Gradientes laterales profundos para un efecto cinemático */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-dark via-dark/90 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-dark via-dark/90 to-transparent z-10 pointer-events-none"></div>

            {/* Movimiento de izquierda a derecha (inverso al Marquee de ciudades) */}
            <div className="flex whitespace-nowrap animate-marquee-reverse w-max opacity-80 hover:opacity-100 transition-opacity duration-700">
                <div className="flex items-center gap-20 md:gap-32 px-16">
                    {marqueeItems.map((logo, idx) => (
                        <div
                            key={`logo-${idx}`}
                            className="flex items-center justify-center h-12 md:h-16 transition-all duration-500 hover:scale-110"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-full w-auto object-contain filter brightness-90 hover:brightness-110 transition-all duration-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;
