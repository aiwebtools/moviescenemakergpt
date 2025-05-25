
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import NavLinks from './header/NavLinks';
import AnimationToolsDropdown from './header/AnimationToolsDropdown';
import MobileNavigationMenu from './header/MobileNavigationMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Updated navLinks - replaced "Disclaimer" with animation tools dropdown
  const navLinks = [
    { name: 'Movie Scene Maker GPT', href: 'https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt' },
    { name: 'Movie Script Writer GPT', href: 'https://moviescriptwritergpt.lovable.app/?via=aiwebtools' },
    { name: 'Movie Trailer Poster Maker', href: 'https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt' },
    // Disclaimer is now available in the footer or its dedicated section
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black shadow-md shadow-cyberpunk-blue/20' 
          : 'bg-black/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks links={navLinks} />

            {/* Dropdown for Animation Tools */}
            <AnimationToolsDropdown />

            <Button 
              asChild 
              className="neon-button font-bold tracking-wide"
              size="lg"
            >
              <a 
                href="https://www.aiwebtools.ai" 
                className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                More AI Tools
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-cyberpunk-neon-blue transition-all duration-300 hover:scale-110 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} className="animate-fade-in" /> : <Menu size={24} className="animate-fade-in" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <MobileNavigationMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        navLinks={navLinks}
      />
    </header>
  );
};

export default Header;
