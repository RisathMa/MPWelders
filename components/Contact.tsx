import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useLanguage } from '../LanguageContext';
import { RevealOnScroll } from './RevealOnScroll';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-industrial-800 border-t border-industrial-700">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <RevealOnScroll>
            <div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                MP <span className="text-safety-500">WELDERS</span>
              </h3>
              <p className="text-gray-400 mb-6 text-base leading-relaxed">
                {t.contact.brandDesc}
              </p>
              <div className="flex gap-4">
                <a href={CONTACT_INFO.socials.facebook} target="_blank" rel="noreferrer" className="bg-industrial-900 p-3 rounded-full text-gray-400 hover:text-white hover:bg-[#1877F2] transition-all"><Facebook size={24} /></a>
                <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noreferrer" className="bg-industrial-900 p-3 rounded-full text-gray-400 hover:text-white hover:bg-[#E4405F] transition-all"><Instagram size={24} /></a>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="bg-industrial-900 p-3 rounded-full text-gray-400 hover:text-white hover:bg-[#25D366] transition-all"><MessageCircle size={24} /></a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Contact Direct Links */}
          <RevealOnScroll delay={100}>
            <div>
              <h4 className="text-white text-xl font-bold mb-6">{t.contact.contactTitle}</h4>
              <ul className="space-y-4">
                <li>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-safety-500 transition-colors group">
                    <div className="p-2 bg-industrial-900 rounded group-hover:bg-safety-500/10">
                      <Phone size={20} className="text-safety-500" />
                    </div>
                    <span className="text-lg">{CONTACT_INFO.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-gray-300 hover:text-safety-500 transition-colors group">
                    <div className="p-2 bg-industrial-900 rounded group-hover:bg-safety-500/10">
                      <Mail size={20} className="text-safety-500" />
                    </div>
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-safety-500 transition-colors group">
                    <div className="p-2 bg-industrial-900 rounded group-hover:bg-safety-500/10">
                      <MessageCircle size={20} className="text-safety-500" />
                    </div>
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <div className="p-2 bg-industrial-900 rounded mt-1">
                      <MapPin size={20} className="text-safety-500" />
                    </div>
                    <span className="leading-tight pt-2">{CONTACT_INFO.address}</span>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Quick Links */}
          <RevealOnScroll delay={200}>
            <div>
              <h4 className="text-white text-xl font-bold mb-6">{t.contact.quickLinksTitle}</h4>
              <ul className="space-y-3 text-gray-400 text-base">
                <li><a href="#home" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-safety-500">›</span> {t.nav.home}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-safety-500">›</span> {t.nav.services}</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-safety-500">›</span> {t.nav.projects}</a></li>
                <li><a href="#ai-consultant" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-safety-500">›</span> {t.nav.ai}</a></li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Hours */}
          <RevealOnScroll delay={300}>
            <div>
              <h4 className="text-white text-xl font-bold mb-6">{t.contact.hoursTitle}</h4>
              <ul className="space-y-3 text-gray-400 text-base">
                <li className="flex justify-between border-b border-industrial-700 pb-2"><span>{t.contact.monFri}</span> <span className="text-white">8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between border-b border-industrial-700 pb-2"><span>{t.contact.sat}</span> <span className="text-white">8:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between pt-2"><span>{t.contact.sun}</span> <span className="text-safety-500 font-bold">{t.contact.closed}</span></li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>

        <div className="border-t border-industrial-700 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} {t.contact.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Contact;