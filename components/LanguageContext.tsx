
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const translations = {
  es: {
    nav: {
      shows: "Espectáculos",
      artists: "Artistas",
      repertoire: "Repertorio",
      contact: "Contacto"
    },
    hero: {
      tagline: "Experiencia Operística de Vanguardia",
      titleTop: "Voces de",
      titleBottom: "Elegancia"
    },
    marquee: {
      soldOut: "AGOTADO"
    },
    repertoire: {
      title: "Sinfonía",
      titleAccent: "Visual",
      desc: "Una colección curada de nuestras actuaciones más impresionantes, capturando la emoción pura de la ópera.",
      gala: "Gala en Vivo",
      bts: "Tras las cámaras",
      masterclass: "Clase Magistral"
    },
    shows: {
      title: "Nuestros",
      titleAccent: "Shows",
      select: "Selecciona una experiencia",
      sinfonico: {
        label: "Sinfónico",
        title: "Gran",
        subtitle: "Sinfónico",
        tag: "Obra Maestra Orquestal",
        desc: "Un viaje inmersivo a través de las mejores arias de ópera, acompañado por una orquesta sinfónica de 60 músicos. Este espectáculo combina la potencia de 'The Maravillosos Tenors' con arreglos orquestales sublimes.",
        features: ['Acompañamiento de Orquesta Completa', 'Repertorio Clásico Italiano', 'Actuación de 90 Minutos'],
        cta: "Reservar este Show"
      },
      unaNoche: {
        label: "Una noche con",
        title: "Una Noche",
        subtitle: "Con Nosotros",
        tag: "Velada Íntima",
        desc: "Una sesión íntima y acústica diseñada para recintos exclusivos. Olvida la grandiosidad para revelar la belleza pura y sin adulterar de la voz humana. Acompañado solo por un piano de cola.",
        features: ['Acompañamiento de Piano de Cola', 'Interacción con la Audiencia', 'Meet & Greet VIP Exclusivo'],
        cta: "Consultar Disponibilidad"
      },
      pasionLatina: {
        label: "Pasión latina",
        title: "Pasión",
        subtitle: "Latina",
        tag: "Ritmos Ardientes",
        desc: "Una celebración vibrante de las baladas románticas y tangos latinoamericanos. Desde 'Bésame Mucho' hasta 'Granada', esta actuación energética fusiona la técnica operística con el fuego latino.",
        features: ['Baladas Latinas y Boleros', 'Actuación de Alta Energía', 'Bailarines Opcionales'],
        cta: "Ver Galería"
      },
      navidad: {
        label: "Concierto Navidad",
        title: "Especial de",
        subtitle: "Navidad",
        tag: "Especial Festivo",
        desc: "Vive la magia de las fiestas con villancicos atemporales y música sagrada. 'Adeste Fideles', 'Noche de Paz' y 'Ave María' interpretados en una armonía gloriosa.",
        features: ['Clásicos de Temporada', 'Repertorio Sagrado', 'Para toda la Familia'],
        cta: "Reserva de Temporada"
      }
    },
    tenors: {
      title: "Los Tenores",
      tagline: "Descubre a los artistas",
      profiles: {
        alessandro: { voice: "Tenor Dramático", bio: "Conocido por su imponente presencia escénica y una voz que lleva el peso de la tragedia y el triunfo." },
        matteo: { voice: "Tenor Lírico", bio: "Poseedor de un tono de puro terciopelo, Matteo aporta una sensibilidad poética al repertorio del bel canto." },
        luca: { voice: "Tenor Spinto", bio: "Con una voz que atraviesa la orquestación más densa, Luca es la encarnación de la pasión del verismo." },
        giovanni: { voice: "Contratenor", bio: "Raro y etéreo, el rango de Giovanni desafía las expectativas, uniendo la innovación barroca y contemporánea." }
      },
      viewProfile: "Ver Perfil"
    },
    contact: {
      title: "Consultas y Reservas",
      desc: "Para eventos distinguidos que requieran una atmósfera de elegancia inigualable.",
      copy: "Click para contactar"
    },
    footer: {
      rights: "© 2024 The Maravillosos Tenors. Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      shows: "Shows",
      artists: "Artists",
      repertoire: "Repertoire",
      contact: "Contact"
    },
    hero: {
      tagline: "Avant-Garde Operatic Experience",
      titleTop: "Voices of",
      titleBottom: "Elegance"
    },
    marquee: {
      soldOut: "SOLD OUT"
    },
    repertoire: {
      title: "Visual",
      titleAccent: "Symphony",
      desc: "A curated collection of our most breathtaking performances, capturing the raw emotion of the opera.",
      gala: "Live Gala",
      bts: "Behind the scenes",
      masterclass: "Masterclass"
    },
    shows: {
      title: "Our",
      titleAccent: "Shows",
      select: "Select an experience",
      sinfonico: {
        label: "Sinfónico",
        title: "Grand",
        subtitle: "Symphonic",
        tag: "Orchestral Masterpiece",
        desc: "An immersive journey through the greatest operatic arias, accompanied by a full 60-piece symphony orchestra. This show combines the raw power of 'The Maravillosos Tenors' with lush orchestral arrangements.",
        features: ['Full Orchestra Accompaniment', 'Classic Italian Repertoire', '90 Minute Performance'],
        cta: "Book This Show"
      },
      unaNoche: {
        label: "Una noche con",
        title: "A Night",
        subtitle: "With Us",
        tag: "Intimate Evening",
        desc: "An intimate, unplugged session designed for exclusive venues. Strip away the grandeur to reveal the pure, unadulterated beauty of the human voice. Accompanied only by a grand piano.",
        features: ['Grand Piano Accompaniment', 'Audience Interaction', 'Exclusive VIP Meet & Greet'],
        cta: "Inquire Availability"
      },
      pasionLatina: {
        label: "Pasión latina",
        title: "Pasión",
        subtitle: "Latina",
        tag: "Fiery Rhythms",
        desc: "A vibrant celebration of Latin American romantic ballads and tangos. From 'Besame Mucho' to 'Granada', this energetic performance fuses operatic technique with Latin fire.",
        features: ['Latin Ballads & Boleros', 'High Energy Performance', 'Optional Dancers'],
        cta: "View Gallery"
      },
      navidad: {
        label: "Concierto Navidad",
        title: "Christmas",
        subtitle: "Spectacular",
        tag: "Holiday Special",
        desc: "Experience the magic of the holidays with timeless carols and sacred music. 'Adeste Fideles', 'Silent Night', and 'Ave Maria' performed in glorious harmony.",
        features: ['Seasonal Classics', 'Sacred Repertoire', 'Family Friendly'],
        cta: "Seasonal Booking"
      }
    },
    tenors: {
      title: "The Tenors",
      tagline: "Discover the artists",
      profiles: {
        alessandro: { voice: "Dramatic Tenor", bio: "Known for his commanding stage presence and a voice that carries the weight of tragedy and triumph." },
        matteo: { voice: "Lyric Tenor", bio: "Possessing a tone of pure velvet, Matteo brings a poetic sensibility to the bel canto repertoire." },
        luca: { voice: "Spinto Tenor", bio: "With a voice that cuts through the thickest orchestration, Luca is the embodiment of verismo passion." },
        giovanni: { voice: "Countertenor", bio: "Rare and ethereal, Giovanni's range defies expectations, bridging baroque and contemporary innovation." }
      },
      viewProfile: "View Profile"
    },
    contact: {
      title: "Inquiries & Bookings",
      desc: "For distinguished events requiring an atmosphere of unparalleled elegance.",
      copy: "Click to contact"
    },
    footer: {
      rights: "© 2024 The Maravillosos Tenors. All Rights Reserved."
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Inicialización basada en el idioma del navegador. 
  // Si es inglés (en, en-US, en-GB, etc), se establece 'en'. De lo contrario 'es'.
  const [lang, setLang] = useState<Language>(() => {
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith('en') ? 'en' : 'es';
  });

  const t = (path: string) => {
    return path.split('.').reduce((obj: any, key) => obj?.[key], translations[lang]);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
