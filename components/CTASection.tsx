import React, { useState } from 'react';
import { ArrowRight, Phone, MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { RevealOnScroll } from './RevealOnScroll';
import { CONTACT_INFO } from '../constants';

const CTASection: React.FC = () => {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-safety-500 py-12 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '20px 20px' }}
      ></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="text-industrial-900 text-center md:text-left max-w-2xl">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3 uppercase tracking-wide">
              {t.cta.title}
            </h2>
            <p className="text-industrial-800 font-medium text-lg leading-relaxed">
              {t.cta.subtitle}
            </p>
          </RevealOnScroll>
        </div>
        <RevealOnScroll delay={200} direction="left">
          <button
            onClick={() => setShowModal(true)}
            className="bg-industrial-900 hover:bg-industrial-800 text-white font-bold py-4 px-10 rounded-sm transition-transform transform hover:scale-105 flex items-center gap-3 shadow-xl whitespace-nowrap text-lg group cursor-pointer"
          >
            {t.cta.button}
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </RevealOnScroll>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-industrial-900 border border-industrial-700 rounded-lg p-8 max-w-md w-full relative shadow-2xl transform transition-all scale-100">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
              {t.contact.contactTitle}
            </h3>

            <div className="space-y-4">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="flex items-center justify-center gap-3 bg-safety-500 hover:bg-safety-600 text-industrial-900 font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg text-lg w-full"
              >
                <Phone size={24} />
                {t.sticky.call}
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg text-lg w-full"
              >
                <MessageCircle size={24} />
                {t.sticky.whatsapp}
              </a>
            </div>

            <p className="text-gray-500 text-center mt-6 text-sm">
              We'll get back to you immediately!
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;