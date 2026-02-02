
import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MailIcon, TouchAppIcon, PhoneIcon, WhatsAppIcon } from './Icons';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/themaravillosostenors/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@theMaravillososTenors',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      )
    },
    {
      name: 'X',
      href: '#',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    }
  ];

  const phones = {
    primary: {
      number: "+34 659 990 693",
      clean: "+34659990693"
    },
    secondary: {
      number: "+34 696 034 143",
      clean: "+34696034143"
    }
  };

  return (
    <section className="relative py-32 bg-dark flex items-center justify-center overflow-hidden" id="contact">
      <div className="container max-w-[900px] mx-auto px-6 relative z-10">
        <div className="glass-card rounded-[2rem] p-12 md:p-24 text-center transform hover:scale-[1.01] transition-transform duration-700">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-8 text-neon shadow-[0_0_30px_rgba(75,92,160,0.2)]">
            <MailIcon className="w-8 h-8" />
          </div>

          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 engraved-text">{t('contact.title')}</h2>
            <p className="text-text-muted max-w-md mx-auto leading-relaxed text-sm md:text-base">
              {t('contact.desc')}
            </p>
          </div>

          <div className="flex flex-col gap-4 max-w-2xl mx-auto mb-16 w-full">

            {/* Primary Phone - Hero Action */}
            <div className="group relative flex items-center justify-between p-1 bg-gradient-to-r from-neon/20 to-neon/5 rounded-full border border-neon/50 hover:border-neon transition-all duration-300 shadow-[0_0_20px_rgba(75,92,160,0.15)] hover:shadow-[0_0_30px_rgba(75,92,160,0.3)] w-full overflow-hidden">
              <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Left: Call Action */}
              <motion.a
                href={`tel:${phones.primary.clean}`}
                className="flex-1 flex items-center gap-2 md:gap-4 pl-1 min-w-0 py-2 group-inner cursor-pointer"
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0 size-10 md:size-12 rounded-full bg-neon text-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="flex-1 text-center pr-2 md:pr-12 min-w-0">
                  <span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-neon font-bold mb-0.5 truncate">{t('contact.bookingLabel')}</span>
                  <span className="font-serif text-lg md:text-2xl text-white leading-none pb-0.5 whitespace-nowrap">{phones.primary.number}</span>
                </div>
              </motion.a>

              {/* Right: WhatsApp Action */}
              <motion.a
                href={`https://wa.me/${phones.primary.clean.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mr-1 size-8 md:size-10 rounded-full bg-white/10 hover:bg-[#25D366] text-white/50 hover:text-white flex items-center justify-center transition-all duration-300 z-10"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
              </motion.a>
            </div>

            <div className="flex flex-col gap-4">
              {/* Secondary Phone */}
              <div className="group flex items-center justify-between p-1 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-300">
                <motion.a
                  href={`tel:${phones.secondary.clean}`}
                  className="flex-1 flex items-center gap-3 p-2 md:p-3 min-w-0"
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-shrink-0 size-8 md:size-10 rounded-full bg-white/5 text-text-muted flex items-center justify-center group-hover:text-white transition-colors">
                    <PhoneIcon className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                  <div className="flex-1 text-center pr-2 md:pr-10">
                    <span className="font-serif text-base md:text-lg text-white/90 group-hover:text-white transition-colors whitespace-nowrap">{phones.secondary.number}</span>
                  </div>
                </motion.a>

                <motion.a
                  href={`https://wa.me/${phones.secondary.clean.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mr-1 size-8 md:size-10 rounded-full bg-white/10 hover:bg-[#25D366] text-white/50 hover:text-white flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Chat on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
                </motion.a>
              </div>

              {/* Email Button */}
              <motion.a
                href="mailto:info@themaravillosostenors.es"
                className="group flex items-center gap-3 p-3 md:p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0 size-8 md:size-10 rounded-full bg-white/5 text-text-muted flex items-center justify-center group-hover:text-white transition-colors">
                  <MailIcon className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <div className="flex-1 text-center pr-2 md:pr-10 overflow-hidden">

                  <span className="block text-[9px] uppercase tracking-wider text-text-muted group-hover:text-white/70 transition-colors">{t('contact.generalInquiriesLabel')}</span>
                  <span className="font-serif text-sm md:text-base text-white/90 group-hover:text-white transition-colors truncate block">info@themaravillosostenors.es</span>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Social Links Separator */}
          <div className="flex items-center gap-4 max-w-[200px] mx-auto mb-8 opacity-30">
            <div className="h-[1px] bg-white flex-1"></div>
            <span className="text-[10px] uppercase tracking-widest text-white">{t('contact.followUs')}</span>
            <div className="h-[1px] bg-white flex-1"></div>
          </div>

          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                className="size-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-neon/50 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(75,92,160,0.3)] transition-all duration-500 group"
                href={social.href}
                aria-label={social.name}
              >
                <div className="transition-transform duration-500 group-hover:scale-110">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
