import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

  // Animation tools for the dropdown - added Text To Video Prompt Generator GPT
  const animationTools = [
    { name: 'SORA', href: 'https://www.sora.com' },
    { name: 'KLING', href: 'https://klingai.com' },
    { name: 'HAILUO', href: 'https://hailuoai.video/' },
    { name: 'HIGGSFIELD', href: 'https://higgsfield.ai/' },
    { name: 'RunwayML', href: 'https://runwayml.com/' },
    { name: 'PIKA LABS', href: 'https://pika.art/' },
    { name: 'Text To Video Prompt Generator GPT', href: 'https://texttovideoprompter.lovable.app/?via=aiwebtools' },
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

            {/* Dropdown for Animation Tools */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-cyberpunk-neon-blue flex items-center gap-1 py-2"
                >
                  Animate Your Scenes <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-lg border-cyberpunk-neon-blue text-white">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="animation-tools" className="border-none">
                    <AccordionTrigger className="py-2 px-2 hover:text-cyberpunk-neon-blue">
                      Image to Video Generators
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-1">
                        {animationTools.map((tool) => (
                          <DropdownMenuItem key={tool.name} asChild>
                            <a 
                              href={tool.href} 
                              className="cursor-pointer py-2 px-4 hover:bg-cyberpunk-dark hover:text-cyberpunk-neon-blue"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {tool.name}
                            </a>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </DropdownMenuContent>
            </DropdownMenu>

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

            {/* Mobile Animation Tools Accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="animation-tools-mobile" className="border-none">
                <AccordionTrigger className="text-white hover:text-cyberpunk-neon-blue py-2">
                  Animate Your Scenes
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2 pl-4">
                    {animationTools.map((tool) => (
                      <a 
                        key={tool.name}
                        href={tool.href}
                        className="text-white hover:text-cyberpunk-neon-blue py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tool.name}
                      </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

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
