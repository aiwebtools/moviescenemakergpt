
import React from 'react';
import NavigationLink from './NavigationLink';

interface NavLinksProps {
  links: { name: string; href: string }[];
}

const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <NavigationLink 
          key={link.name} 
          name={link.name} 
          href={link.href}
          className="text-white hover:text-cyberpunk-neon-blue transition-colors text-sm relative group font-medium py-1 px-2"
        />
      ))}
    </>
  );
};

export default NavLinks;
