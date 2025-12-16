import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const StickyCall: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 md:hidden flex shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
      <a 
        href={`tel:${CONTACT_INFO.phone}`} 
        className="flex-1 flex items-center justify-center gap-2 bg-safety-500 text-industrial-900 py-4 font-bold text-lg active:bg-safety-600"
      >
        <Phone size={24} />
        {t.sticky.call}
      </a>
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 font-bold text-lg active:bg-[#20bd5a]"
      >
        <MessageCircle size={24} />
        {t.sticky.whatsapp}
      </a>
    </div>
  );
};

export default StickyCall;