
import React from 'react';

interface NavigationLinkProps {
  name: string;
  href: string;
  className?: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  name,
  href,
  className = "text-white hover:text-cyberpunk-neon-blue transition-colors text-sm relative group"
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyberpunk-neon-blue transition-all duration-300 group-hover:w-full"></span>
    </a>
  );
};

export default NavigationLink;
