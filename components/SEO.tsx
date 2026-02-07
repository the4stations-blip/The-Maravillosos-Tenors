
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from './LanguageContext';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    image = "/logo.png",
    url = "https://themaravillosostenors.es"
}) => {
    const { lang, t } = useLanguage();

    const siteTitle = "The Maravillosos Tenors | " + (lang === 'es' ? "Grupo Crossover de Referencia" : "Leading Crossover Group");
    const metaDescription = description || (lang === 'es'
        ? "The Maravillosos Tenors - Cuatro voces excepcionales fusionando ópera, música latina y clásicos atemporales. Una experiencia musical premium para eventos exclusivos."
        : "The Maravillosos Tenors - Four exceptional voices fusing opera, Latin music and timeless classics. A premium musical experience for exclusive events.");

    const fullTitle = title ? `${title} | The Maravillosos Tenors` : siteTitle;

    // JSON-LD Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "MusicGroup",
        "name": "The Maravillosos Tenors",
        "alternateName": "Los Maravillosos Tenores",
        "url": "https://themaravillosostenors.es",
        "logo": "https://themaravillosostenors.es/logo.png",
        "image": "https://themaravillosostenors.es/hero-image.jpg",
        "description": metaDescription,
        "sameAs": [
            "https://www.instagram.com/themaravillosostenors/",
            "https://www.youtube.com/@theMaravillososTenors"
        ],
        "member": [
            {
                "@type": "Person",
                "name": "Iván Nieto-Balboa",
                "jobTitle": lang === 'es' ? "Tenor Lírico" : "Lyric Tenor",
                "image": "https://themaravillosostenors.es/tenor-ivan.png"
            },
            {
                "@type": "Person",
                "name": "Alberto Echevarría",
                "jobTitle": lang === 'es' ? "Tenor Ligero" : "Light Lyric Tenor",
                "image": "https://themaravillosostenors.es/tenor-alberto.png"
            },
            {
                "@type": "Person",
                "name": "Daniel Menez",
                "jobTitle": lang === 'es' ? "Tenor Lírico Ligero" : "Light Lyric Tenor",
                "image": "https://themaravillosostenors.es/tenor-daniel.jpg"
            },
            {
                "@type": "Person",
                "name": "Ángel Martínez",
                "jobTitle": lang === 'es' ? "Tenor Ligero" : "Light Tenor",
                "image": "https://themaravillosostenors.es/tenor-angel.png"
            }
        ],
        "knowsAbout": [
            "Opera",
            "Musical Theatre",
            "Latin Music",
            "Classical Crossover"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+34-659-990-693",
            "contactType": "booking",
            "areaServed": "World",
            "availableLanguage": ["Spanish", "English"]
        }
    };

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <html lang={lang} />
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="robots" content="index, follow, max-image-preview:large" />
            <link rel="canonical" href={url} />

            {/* Hreflang Tags for International SEO */}
            <link rel="alternate" href="https://themaravillosostenors.es" hrefLang="x-default" />
            <link rel="alternate" href="https://themaravillosostenors.es" hrefLang="es" />
            {/* If there were a subfolder for English, we would point there. Since it's SPA, we keep canonical but signal content exists */}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="The Maravillosos Tenors" />
            <meta property="og:locale" content={lang === 'es' ? 'es_ES' : 'en_US'} />
            <meta property="og:locale:alternate" content={lang === 'es' ? 'en_US' : 'es_ES'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={image} />

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default SEO;
