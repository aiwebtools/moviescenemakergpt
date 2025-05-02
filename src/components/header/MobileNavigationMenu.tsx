
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
    <div className="md:hidden bg-black/90 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        {navLinks.map((link) => (
          <NavigationLink 
            key={link.name} 
            name={link.name} 
            href={link.href}
            className="text-white hover:text-cyberpunk-neon-blue transition-colors py-2"
          />
        ))}

        {/* Mobile Animation Tools Accordion */}
        <AnimationToolsDropdown variant="mobile" />

        <Button 
          asChild 
          className="neon-button w-full"
        >
          <a 
            href="https://www.aiwebtools.ai"
            onClick={onClose}
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </Button>
      </nav>
    </div>
  );
};

export default MobileNavigationMenu;
