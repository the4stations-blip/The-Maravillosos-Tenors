
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
      // Keys for marquee are now mostly static or years
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
      share: "Compartir",
      shared: "¡Copiado!",
      sinfonico: {
        label: "Sinfónico",
        title: "Gran",
        subtitle: "Sinfónico",
        tag: "Obra Maestra Orquestal",
        desc: "Este concierto reúne a cuatro voces excepcionales en un espectáculo poderoso y emocionante que combina los grandes clásicos con temas populares y contemporáneos. Acompañados por banda u orquesta sinfónica, los tenores crean una velada de enorme fuerza sonora, sensibilidad y belleza, capaz de emocionar desde el primer acorde. Un viaje musical que une tradición y modernidad, diseñado para impactar, conmover y dejar huella en el público. Un espectáculo diseñado para emocionar al público y convertir cada función en un éxito.",
        features: ['Cuatro Tenores en un Concierto Excepcional', 'Repertorio Versátil con Orquesta Sinfónica', 'Una Experiencia Premium para el Público'],
        cta: "Reservar este Show"
      },
      unaNoche: {
        label: "Inolvidable",
        title: "",
        subtitle: "Inolvidable",
        tag: "Experiencia Única",
        desc: "Vive un viaje musical único donde la lírica se encuentra con los grandes éxitos de todos los tiempos: pop, tango, bolero, teatro musical, música latina y más. Un show elegante, emocionante y participativo que convierte al público en parte del espectáculo, creando recuerdos que duran para siempre. Haz que tu evento sea inolvidable.",
        features: ['90 Minutos de Espectáculo Lleno de Emoción', 'Interacción con la Audiencia', 'Disponible con Tracks o Músicos en Directo'],
        cta: "Consultar Disponibilidad"
      },
      pasionLatina: {
        label: "Pasión Latina",
        title: "Pasión",
        subtitle: "Latina",
        tag: "Ritmos Ardientes",
        desc: "Un espectáculo único que recorre más de un siglo de las canciones más icónicas de la música latina: Bésame Mucho, Quizás Quizás, Contigo en la Distancia, Volver… y muchos más. Cada tema cobra vida con coreografías impactantes y la energía de dos grandes bailarines que fusionan canto y danza en números llenos de emoción y ritmo. Prepárate para bailar, emocionarte y disfrutar.",
        features: ['Clásicos Latinos que Enamoran', 'Baile y Pasión en Escena', 'Adaptable a Todo Tipo de Eventos'],
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
      copy: "Click para contactar",
      clickAction: "PULSA EL CORREO PARA CONTACTAR"
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
      // Keys for marquee are now mostly static or years
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
      share: "Share",
      shared: "Copied!",
      sinfonico: {
        label: "Sinfónico",
        title: "Grand",
        subtitle: "Symphonic",
        tag: "Orchestral Masterpiece",
        desc: "This concert brings together four exceptional voices in a powerful and moving show that blends great classics with popular and contemporary themes. Accompanied by a band or symphony orchestra, the tenors create an evening of immense sonic power, sensitivity and beauty, capable of moving audiences from the very first chord. A musical journey that unites tradition and modernity, designed to impact, move and leave a lasting impression. A show designed to thrill audiences and turn every performance into a success.",
        features: ['Four Tenors in an Exceptional Concert', 'Versatile Repertoire with Symphony Orchestra', 'A Premium Experience for the Audience'],
        cta: "Book This Show"
      },
      unaNoche: {
        label: "Unforgettable",
        title: "",
        subtitle: "Unforgettable",
        tag: "Unique Experience",
        desc: "Experience a unique musical journey where lyrical artistry meets the greatest hits of all time: pop, tango, bolero, musical theater, Latin music and more. An elegant, exciting and participatory show that makes the audience part of the spectacle, creating memories that last forever. Make your event unforgettable.",
        features: ['90 Minutes of Emotion-Filled Show', 'Audience Interaction', 'Available with Tracks or Live Musicians'],
        cta: "Inquire Availability"
      },
      pasionLatina: {
        label: "Pasión Latina",
        title: "Pasión",
        subtitle: "Latina",
        tag: "Fiery Rhythms",
        desc: "A unique show that spans over a century of the most iconic Latin music songs: Bésame Mucho, Quizás Quizás, Contigo en la Distancia, Volver… and many more. Each song comes to life with stunning choreography and the energy of two amazing dancers who blend singing and dancing in numbers full of emotion and rhythm. Get ready to dance, feel moved, and enjoy.",
        features: ['Latin Classics that Captivate', 'Dance and Passion on Stage', 'Adaptable to All Types of Events'],
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
      copy: "Click to contact",
      clickAction: "TAP EMAIL TO CONTACT"
    },
    footer: {
      rights: "© 2024 The Maravillosos Tenors. All Rights Reserved."
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
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
