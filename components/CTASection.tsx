import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { RevealOnScroll } from './RevealOnScroll';

const CTASection: React.FC = () => {
  const { t } = useLanguage();

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
          <a 
            href="#contact" 
            className="bg-industrial-900 hover:bg-industrial-800 text-white font-bold py-4 px-10 rounded-sm transition-transform transform hover:scale-105 flex items-center gap-3 shadow-xl whitespace-nowrap text-lg group"
          >
            {t.cta.button}
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CTASection;