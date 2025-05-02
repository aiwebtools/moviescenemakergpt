
import React from 'react';

interface NavigationLinkProps {
  name: string;
  href: string;
  className?: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  name,
  href,
  className = "text-white hover:text-cyberpunk-neon-blue transition-colors text-sm"
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {name}
    </a>
  );
};

export default NavigationLink;
