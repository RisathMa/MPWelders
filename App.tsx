import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import StickyCall from './components/StickyCall';
import { LanguageProvider } from './LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-industrial-900 min-h-screen text-gray-100 pb-12 md:pb-0">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <AIConsultant />
        <Contact />
        <StickyCall />
      </div>
    </LanguageProvider>
  );
};

export default App;