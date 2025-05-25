
import React from 'react';
import TimeWarpLink from '../TimeWarpLink';

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
  // Determine if link is external by checking for http/https
  const isExternal = href.startsWith('http') || href.startsWith('//');
  
  if (isExternal) {
    return (
      <TimeWarpLink href={href} className={className}>
        {name}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyberpunk-neon-blue transition-all duration-300 group-hover:w-full"></span>
      </TimeWarpLink>
    );
  }
  
  // For internal links (like #how-it-works), also use TimeWarpLink for consistency
  return (
    <TimeWarpLink href={href} className={className}>
      {name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyberpunk-neon-blue transition-all duration-300 group-hover:w-full"></span>
    </TimeWarpLink>
  );
};

export default NavigationLink;
