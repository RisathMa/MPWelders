import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="home" className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1920" 
          alt="Welding Sparks in Workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-900 via-industrial-900/85 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <div 
            className="inline-block px-4 py-2 mb-6 bg-safety-500 text-industrial-900 font-bold text-sm md:text-base tracking-wide uppercase rounded-sm shadow-md animate-fade-in-up"
            style={{ animationDelay: '0ms' }}
          >
            {t.hero.badge}
          </div>
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight mb-6 drop-shadow-lg opacity-0 animate-fade-in-up"
            style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
          >
            {t.hero.title} <span className="text-safety-500">{t.hero.titleSuffix}</span>
          </h1>
          <h2 
            className="text-2xl md:text-4xl font-light text-gray-200 mb-8 border-l-4 border-safety-500 pl-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            {t.hero.subtitle}
          </h2>
          <p 
            className="text-lg md:text-xl text-gray-300 mb-10 font-normal max-w-lg leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          >
            {t.hero.desc}
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          >
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="flex items-center justify-center gap-3 bg-safety-500 hover:bg-safety-600 text-industrial-900 font-bold py-4 px-8 rounded transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              <Phone size={24} />
              <span>{t.hero.ctaCall}</span>
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              <MessageCircle size={24} />
              <span>{t.hero.ctaWhatsapp}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;