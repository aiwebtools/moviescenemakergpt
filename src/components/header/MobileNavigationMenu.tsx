
import React from 'react';
import { Home } from 'lucide-react';
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
        {/* Mobile Studio Home Button */}
        <Button 
          asChild 
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-cyberpunk-neon-blue text-cyberpunk-neon-blue hover:bg-cyberpunk-neon-blue hover:text-black transition-all duration-300 w-full justify-center"
        >
          <a 
            href="https://moviescenemakergpt.lovable.app/?via=aiwebtools"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center gap-2"
          >
            <Home size={16} />
            <span className="text-sm font-medium">Back to Studio Home</span>
          </a>
        </Button>

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
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
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
