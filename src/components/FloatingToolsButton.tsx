
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingToolsButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-24 right-6 z-40 animate-fade-in">
      <Button
        asChild
        className="rounded-full bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple hover:from-cyberpunk-purple hover:to-cyberpunk-blue shadow-glow px-4 py-2 text-white font-medium transition-all duration-300 hover:scale-105"
      >
        <a 
          href="https://aiwebtools.lovable.app/?via=aiwebtools"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          More AI Web Tools
          <ExternalLink size={18} />
        </a>
      </Button>
    </div>
  );
};

export default FloatingToolsButton;
