
import React from 'react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MailIcon, TouchAppIcon } from './Icons';

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

  return (
    <section className="relative py-32 bg-dark flex items-center justify-center overflow-hidden" id="contact">
      <div className="container max-w-[900px] mx-auto px-6 relative z-10">
        <div className="glass-card rounded-[2rem] p-12 md:p-24 text-center transform hover:scale-[1.01] transition-transform duration-700">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 border border-white/10 mb-10 text-neon shadow-[0_0_30px_rgba(75,92,160,0.2)]">
            <MailIcon className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 engraved-text">{t('contact.title')}</h2>
          <p className="text-text-muted mb-12 max-w-md mx-auto leading-relaxed">
            {t('contact.desc')}
          </p>

          <div className="group relative inline-block mb-16">
            <motion.a
              href="mailto:info@themaravillosostenors.es"
              className="relative block font-serif text-[clamp(12px,4vw,2rem)] sm:text-2xl md:text-3xl lg:text-4xl text-white/90 transition-colors duration-500 hover:text-white whitespace-nowrap"
              whileHover="hover"
            >
              <motion.span
                variants={{
                  hover: { y: -5, textShadow: "0 0 20px rgba(75, 92, 160, 0.8)" }
                }}
                className="inline-block"
              >
                info@themaravillosostenors.es
              </motion.span>

              <motion.div
                className="absolute -bottom-2 left-0 h-[1px] bg-neon"
                initial={{ width: 0 }}
                variants={{
                  hover: { width: '100%' }
                }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
            </motion.a>

            <motion.a
              href="mailto:info@themaravillosostenors.es"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="mt-6 flex items-center justify-center gap-2 text-text-muted text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase cursor-pointer hover:text-white transition-colors"
            >
              <TouchAppIcon className="w-4 h-4 animate-pulse" />
              <span>{t('contact.clickAction')}</span>
            </motion.a>

            {/* Old hover hint removed in favor of permanent subtitle */}
          </div>

          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                className="size-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-neon/50 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(75,92,160,0.3)] transition-all duration-500 group"
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
