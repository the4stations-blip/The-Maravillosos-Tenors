
import React from 'react';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-dark border-t border-white/5 py-12 text-center text-white/30 text-[10px] uppercase tracking-[0.2em]">
      <p className="notranslate" translate="no">{t('footer.rights')}</p>
    </footer>
  );
};

export default Footer;
