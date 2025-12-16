import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.projects, href: '#portfolio' },
    { name: t.nav.ai, href: '#ai-consultant' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'si' : 'en');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-industrial-900/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-3xl font-display font-bold text-white tracking-wider flex flex-col md:flex-row md:items-center gap-0 md:gap-2">
          <span>MP</span>
          <span className="text-safety-500">WELDERS</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-gray-200 hover:text-safety-500 text-lg font-medium uppercase tracking-wide transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-gray-200 hover:text-safety-500 border border-industrial-700 px-3 py-1 rounded transition-colors"
          >
            <Globe size={18} />
            <span className="uppercase font-bold">{language === 'en' ? 'SI' : 'EN'}</span>
          </button>

          <a 
            href={`tel:${CONTACT_INFO.phone}`} 
            className="flex items-center gap-2 bg-safety-500 hover:bg-safety-600 text-industrial-900 px-6 py-3 rounded font-bold text-base transition-transform hover:scale-105 shadow-lg"
          >
            <Phone size={18} />
            {CONTACT_INFO.phoneDisplay}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-gray-200 border border-industrial-700 px-2 py-1 rounded"
            >
              <Globe size={18} />
              <span className="uppercase font-bold text-sm">{language === 'en' ? 'SI' : 'EN'}</span>
          </button>
          <button 
            className="text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-industrial-900/95 backdrop-blur-md border-t border-industrial-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-safety-500 font-medium text-lg py-3 border-b border-industrial-800"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center justify-center gap-2 bg-safety-500 text-industrial-900 py-4 rounded font-bold mt-4 text-lg"
          >
            <Phone size={20} /> {t.nav.call}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;