import React from 'react';
import { Hammer, Flame, Construction, Truck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { RevealOnScroll } from './RevealOnScroll';

const iconMap: Record<string, React.ReactNode> = {
  Hammer: <Hammer size={32} />,
  Flame: <Flame size={32} />,
  Construction: <Construction size={32} />,
  Truck: <Truck size={32} />
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-industrial-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <RevealOnScroll>
            <h2 className="text-4xl font-display font-bold text-white mb-4">{t.services.title}</h2>
            <div className="w-20 h-1 bg-safety-500 mx-auto rounded"></div>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => (
            <RevealOnScroll key={service.id} delay={index * 100} className="h-full">
              <div className="group bg-industrial-800 p-8 rounded-lg border border-industrial-700 hover:border-safety-500 transition-colors duration-300 h-full flex flex-col">
                <div className="text-safety-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[service.iconName]}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <a href="#contact" className="inline-flex items-center text-safety-500 font-medium hover:text-white transition-colors mt-auto">
                  {t.services.getQuote} <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;