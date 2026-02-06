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
      masterclass: "Clase Magistral",
      instagramReel: "Instagram Reel",
      reel: "Reel",
      watchInstagram: "Ver en Instagram"
    },
    modal: {
      close: "Cerrar"
    },
    shows: {
      title: "Nuestros",
      titleAccent: "Shows",
      select: "Selecciona una experiencia",
      share: "Compartir",
      shared: "¡Copiado!",
      watchYouTube: "Ver en YouTube",
      sinfonico: {
        label: "Sinfónico",
        title: "",
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
        title: "Concierto de",
        subtitle: "Navidad",
        tag: "Especial Festivo",
        desc: "¡Vive la Navidad como nunca antes! Adeste Fideles, Noche de Paz, Oh Holy Night, Blanca Navidad, Hallelujah… y mucho más. Con voces impresionantes, presencia arrolladora y una puesta en escena única, te harán sentir la magia de los villancicos clásicos y grandes éxitos en un concierto elegante, emocionante y totalmente interactivo. Una experiencia memorable que transformará tus fiestas en momentos mágicos. ¡No te lo puedes perder!",
        features: ['Disponible para Encendidos de Navidad', 'Magia Navideña en Vivo', 'Un Show para Toda la Familia'],
        cta: "Reserva de Temporada"
      }
    },
    tenors: {
      title: "Los Tenores",
      tagline: "Descubre a los artistas",
      profiles: {
        ivan: {
          voice: "El Lírico",
          bio: "Su formación vocal comienza bajo la guía de la reconocida profesora de canto María Luisa Castellanos, con quien desarrolló las bases del canto lírico y musical. Posteriormente, continuó su perfeccionamiento técnico y estilístico junto al reconocido tenor Júan Lomba, con quién profundizó en el repertorio operístico, siendo éste una gran parte importante de su carrera profesional. Terminó su formación vocal ampliando su técnica orientada al teatro musical con el maestro José Masegosa.\n\nHa participado en numerosos montajes tanto líricos como musicales destacando su participación en óperas como La Traviata, El Barbero de Sevilla, La boheme, Carmen… Su paso por el género de la zarzuela nos deja títulos en el roll de protagonista como El Barberillos de Lavapiés, Caballero de Gracia, La Gran Vía, La Revoltosa, El Barbero de Sevilla, Bohemios, La Verbena de la Paloma…\n\nEntre sus trabajos figuran también su participación en montajes como Edipo Rey en el Festival de Teatro Clásico de Mérida o su participación en la obra de teatro de Algunos Hombres Buenos en el papel de Lauden Dawney, así como diferentes roles en el montaje teatral Noche de Guerra en el Museo del Prado, dirigida por Richard Salvat.\n\nEn el teatro musical ha participados en numerosos montajes entre los que destacan West Side Story, El Hombre de La Mancha, Peter Pan, La Magia de Broadway, Los Miserables… dirigidas por reconocidos directores como Gustavo Tambascio, Emilio Sagi, Jaime Chavarri o Cesar Belda.\n\nEn la actualidad forma parte del grupo The Maravillosos Tenors en el que ya ha realizado varias giras internacionales y del que forma parte por más de una década."
        },
        alberto: {
          voice: "Tenor Lírico Ligero",
          bio: "Director musical y cantante, con más de 15 años de experiencia en escenarios nacionales e internacionales. Formado en el Conservatorio Montserrat Caballé, cuenta con el Advanced Certificate in Singing (Trinity College London) y el Máster en Pedagogía Vocal del Método MEV. Ha estudiado con maestros como Vicente Encabo, Francisco Ortíz y José Masegosa, y se ha formado en interpretación.\n\nHa participado en numerosas producciones de ópera, zarzuela y teatro musical como La Viuda Alegre, La Flauta Mágica, Nabucco, La Traviata, Luisa Fernanda, La del Manojo de Rosas o La Verbena de la Paloma, trabajando con compañías como Ferro Teatro, Prestíssimo, Zafiro Producciones, Telón Producciones, Madridales, etc…\n\nEn el ámbito docente, ha sido profesor y director vocal en coros de diferentes estilos, además de impartir clases de técnica vocal, canto moderno y teatro musical en escuelas y centros educativos de Madrid.\n\nBajo su dirección elegante y precisa, The Maravillosos Tenors destaca por su sonoridad excepcional, fusionando cuatro voces únicas en una armonización impecable."
        },
        angel: {
          voice: "Tenor Ligero",
          bio: "Ángel ha estado desde pequeño metido en el mundo de la música y la actuación, pero no es hasta que acaba la carrera de psicología cuando comienza sus estudios superiores de teatro musical en la RESAD. Se ha formado en canto con grandes profesionales como María José Santos, Rafa Lara o José Masegosa. Siempre en constante formación, tras graduarse en la RESAD ha continuado perfeccionando su técnica en el Conservatorio de Canto y como vocal coach junto a Felipe Forastiere.\n\nSu carrera combina de forma natural el teatro musical con el repertorio lírico, destacando por su versatilidad y compromiso artístico.\n\nHa protagonizado numerosos musicales como Pinocho, Con la Boca Abierta, Orejas de Mariposa, Peter Pan y El Jorobado de Notre Dame, conectando con públicos de todas las edades. Al mismo tiempo, ha participado en importantes producciones de ópera y zarzuela, como Carmina Burana de La Fura dels Baus y dos ediciones del Proyecto Zarza en el Teatro de la Zarzuela.\n\nUn intérprete en plena proyección, capaz de transitar con soltura entre la emoción del teatro musical y la exigencia del canto lírico."
        },
        daniel: {
          voice: "Tenor Lírico Ligero",
          bio: "Ha estudiado Lenguaje Musical y Armonía para Cantantes en Sevilla, así como voz hablada y técnica de canto en Sevilla y Madrid. Además, cuenta con formación en técnica vocal SLS (Speech Level Singing) y ha profundizado en técnica vocal aplicada al teatro musical y el conocimiento profundo de la voz.\n\nEn el ámbito escénico, ha formado parte de reconocidas producciones musicales como Los Miserables, donde interpretó papeles principales demostrando una notable fuerza vocal y capacidad interpretativa. Su recorrido incluye también títulos como Jesucristo Superstar y Rent, en los que ha destacado por su versatilidad y entrega sobre el escenario.\n\nHa actuado como solista en importantes recitales y conciertos en los principales espacios escénicos como Teatro Maestro Padilla de Almería o el Juan Bravo de Segovia, teatros de la Gran Vía Madrileña y espacios de todo el mundo.\n\nSu repertorio abarca desde ópera y piezas de zarzuela hasta clásicos del teatro musical anglosajón, mostrando una sensibilidad interpretativa que conecta con el público.\n\nEn televisión, fue finalista del programa Contigo Aprendí de Europroducciones TV, donde cautivó a la audiencia con su voz, carisma y presencia escénica."
        }
      },
      viewProfile: "Ver Perfil"
    },
    contact: {
      title: "Consultas y Reservas",
      desc: "Para eventos distinguidos que requieran una atmósfera de elegancia inigualable.",
      copy: "Click para contactar",
      clickAction: "PULSA EL CORREO PARA CONTACTAR",
      bookingLabel: "Contratación y Representación",
      altPhoneLabel: "Línea Alternativa",
      generalInquiriesLabel: "Consultas Generales",
      followUs: "Síguenos"
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
      masterclass: "Masterclass",
      instagramReel: "Instagram Reel",
      reel: "Reel",
      watchInstagram: "Watch on Instagram"
    },
    modal: {
      close: "Close"
    },
    shows: {
      title: "Our",
      titleAccent: "Shows",
      select: "Select an experience",
      share: "Share",
      shared: "Copied!",
      watchYouTube: "Watch on YouTube",
      sinfonico: {
        label: "Sinfónico",
        title: "",
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
        label: "Christmas Concert",
        title: "Christmas",
        subtitle: "Concert",
        tag: "Holiday Special",
        desc: "Experience Christmas like never before! Adeste Fideles, Silent Night, Oh Holy Night, White Christmas, Hallelujah… and much more. With impressive voices, overwhelming presence and a unique staging, they will make you feel the magic of classic carols and greatest hits in an elegant, exciting and totally interactive concert. A memorable experience that will transform your holidays into magical moments. Don't miss it!",
        features: ['Available for Christmas Light-Up Events', 'Live Christmas Magic', 'A Show for the Whole Family'],
        cta: "Seasonal Booking"
      }
    },
    tenors: {
      title: "The Tenors",
      tagline: "Discover the artists",
      profiles: {
        ivan: {
          voice: "Lyric Tenor",
          bio: "His vocal training began under the guidance of the renowned singing teacher María Luisa Castellanos, with whom he developed the foundations of lyrical and musical singing. Later, he continued his technical and stylistic improvement with the renowned tenor Juan Lomba, with whom he delved into the operatic repertoire, this being an important part of his professional career. He finished his vocal training by expanding his technique oriented towards musical theater with maestro José Masegosa.\\n\\nHe has participated in numerous productions, both lyrical and musical, highlighting his participation in operas such as La Traviata, The Barber of Seville, La Boheme, Carmen... His time in the zarzuela genre leaves us titles in the leading role such as El Barberillo de Lavapiés, Caballero de Gracia, La Gran Vía, La Revoltosa, The Barber of Seville, Bohemios, La Verbena de la Paloma...\\n\\nHis works also include his participation in productions such as Oedipus Rex at the Mérida Classical Theater Festival or his participation in the play A Few Good Men in the role of Lauden Dawney, as well as different roles in the theatrical production Night of War in the Prado Museum, directed by Richard Salvat.\\n\\nIn musical theater he has participated in numerous productions, including West Side Story, Man of La Mancha, Peter Pan, The Magic of Broadway, Les Miserables... directed by renowned directors such as Gustavo Tambascio, Emilio Sagi, Jaime Chavarri or Cesar Belda.\\n\\nCurrently he is part of the group The Maravillosos Tenors with whom he has already made several international tours and of which he has been a part for more than a decade."
        },
        alberto: {
          voice: "Light Lyric Tenor",
          bio: "Musical director and singer, with over 15 years of experience on national and international stages. Trained at the Montserrat Caballé Conservatory, he holds the Advanced Certificate in Singing (Trinity College London) and the Master in Vocal Pedagogy of the MEV Method. He has studied with masters such as Vicente Encabo, Francisco Ortíz and José Masegosa, and has trained in acting.\\n\\nHe has participated in numerous opera, zarzuela and musical theater productions such as The Merry Widow, The Magic Flute, Nabucco, La Traviata, Luisa Fernanda, La del Manojo de Rosas or La Verbena de la Paloma, working with companies such as Ferro Teatro, Prestíssimo, Zafiro Producciones, Telón Producciones, Madridales, etc.\\n\\nIn the teaching field, he has been a teacher and vocal director in choirs of different styles, in addition to teaching vocal technique, modern singing and musical theater in schools and educational centers in Madrid.\\n\\nUnder his elegant and precise direction, The Maravillosos Tenors stands out for its exceptional sonority, fusing four unique voices into impeccable harmonization."
        },
        angel: {
          voice: "Light Tenor",
          bio: "Ángel has been immersed in the world of music and acting since childhood, but it wasn't until he finished his psychology degree that he began his advanced studies in musical theater at RESAD. He has trained in singing with great professionals such as María José Santos, Rafa Lara, and José Masegosa. Always in constant training, after graduating from RESAD he has continued perfecting his technique at the Conservatory of Singing and as a vocal coach with Felipe Forastiere.\n\nHis career naturally combines musical theater with the lyrical repertoire, standing out for his versatility and artistic commitment.\n\nHe has starred in numerous musicals such as Pinocchio, Con la Boca Abierta, Butterfly Ears, Peter Pan, and The Hunchback of Notre Dame, connecting with audiences of all ages. At the same time, he has participated in important opera and zarzuela productions, such as Carmina Burana by La Fura dels Baus and two editions of Proyecto Zarza at the Teatro de la Zarzuela.\n\nA performer in full projection, capable of moving with ease between the emotion of musical theater and the demands of lyrical singing."
        },
        daniel: {
          voice: "Light Lyric Tenor",
          bio: "He has studied Music Theory and Harmony for Singers in Seville, as well as spoken voice and singing technique in Seville and Madrid. He also has training in SLS (Speech Level Singing) vocal technique and has delved into vocal technique applied to musical theater and deep voice knowledge.\n\nOn stage, he has been part of renowned musical productions such as Les Miserables, where he played leading roles demonstrating remarkable vocal power and interpretive ability. His journey also includes titles such as Jesus Christ Superstar and Rent, where he has stood out for his versatility and dedication on stage.\n\nHe has performed as a soloist in important recitals and concerts in major venues such as Teatro Maestro Padilla in Almería and Juan Bravo in Segovia, theaters on Madrid's Gran Vía and venues around the world.\n\nHis repertoire ranges from opera and zarzuela pieces to Anglo-Saxon musical theater classics, showing an interpretive sensitivity that connects with audiences.\n\nOn television, he was a finalist on the program Contigo Aprendí by Europroducciones TV, where he captivated the audience with his voice, charisma and stage presence."
        }
      },
      viewProfile: "View Profile"
    },
    contact: {
      title: "Inquiries & Bookings",
      desc: "For distinguished events requiring an atmosphere of unparalleled elegance.",
      copy: "Click to contact",
      clickAction: "TAP EMAIL TO CONTACT",
      bookingLabel: "Booking & Management",
      altPhoneLabel: "Alternative Line",
      generalInquiriesLabel: "General Inquiries",
      followUs: "Follow Us"
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

  // Update HTML lang attribute and prevent browser auto-translation
  useEffect(() => {
    const htmlElement = document.documentElement;

    // Set the language attribute on the HTML element
    htmlElement.setAttribute('lang', lang);

    // Add notranslate class to prevent browser auto-translation
    // This tells Chrome/Edge/etc. not to translate the page content
    htmlElement.classList.add('notranslate');
    htmlElement.setAttribute('translate', 'no');
  }, [lang]);

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
