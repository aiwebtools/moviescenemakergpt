
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';

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

  const navLinks = [
    { name: 'Movie Scene Maker GPT', href: 'https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt' },
    { name: 'Movie Script Writer GPT', href: 'https://moviescriptwritergpt.lovable.app/?via=aiwebtools' },
    { name: 'Movie Trailer Poster Maker', href: 'https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt' },
    { name: 'Disclaimer', href: '#disclaimer' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white hover:text-cyberpunk-neon-blue transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
            <Button 
              asChild 
              className="neon-button"
            >
              <a href="https://www.aiwebtools.ai" className="flex items-center gap-2">
                More AI Tools
              </a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white hover:text-cyberpunk-neon-blue"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-white hover:text-cyberpunk-neon-blue transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              asChild 
              className="neon-button w-full"
            >
              <a 
                href="https://www.aiwebtools.ai"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                More AI Tools
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
