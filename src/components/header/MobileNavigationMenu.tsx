
import React from 'react';
import { Button } from '@/components/ui/button';
import NavigationLink from './NavigationLink';
import AnimationToolsDropdown from './AnimationToolsDropdown';

interface MobileNavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string; }[];
}

const MobileNavigationMenu: React.FC<MobileNavigationMenuProps> = ({
  isOpen,
  onClose,
  navLinks
}) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-black/90 backdrop-blur-lg shadow-lg animate-fade-in">
      <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        {navLinks.map((link) => (
          <NavigationLink 
            key={link.name} 
            name={link.name} 
            href={link.href}
            className="text-white hover:text-cyberpunk-neon-blue transition-all duration-300 py-2 font-medium hover:translate-x-1"
          />
        ))}

        {/* Mobile Animation Tools Accordion */}
        <AnimationToolsDropdown variant="mobile" />

        <Button 
          asChild 
          className="neon-button w-full font-bold tracking-wide mt-4"
          size="lg"
        >
          <a 
            href="https://www.aiwebtools.ai"
            onClick={onClose}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300"
          >
            More AI Tools
          </a>
        </Button>
      </nav>
    </div>
  );
};

export default MobileNavigationMenu;
