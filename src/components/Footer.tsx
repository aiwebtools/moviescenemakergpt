
import React from 'react';
import DiscoverMoreTools from './footer/DiscoverMoreTools';
import AnimateYourScenes from './footer/AnimateYourScenes';
import AboutSection from './footer/AboutSection';
import QuickLinks from './footer/QuickLinks';
import LegalSection from './footer/LegalSection';
import ContactSection from './footer/ContactSection';
import CopyrightBar from './footer/CopyrightBar';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyberpunk-darker pt-16 pb-8 relative">
      {/* Top border - glowing effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-pink" />
      
      {/* More AI Web Tools banner */}
      <DiscoverMoreTools />
      
      {/* Animate Your Scenes Accordion */}
      <AnimateYourScenes />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - About */}
          <AboutSection />
          
          {/* Column 2 - Quick Links */}
          <QuickLinks />
          
          {/* Column 3 - Legal */}
          <LegalSection />
          
          {/* Column 4 - Contact */}
          <ContactSection />
        </div>
        
        {/* Bottom footer - Copyright */}
        <CopyrightBar />
      </div>
    </footer>
  );
};

export default Footer;
