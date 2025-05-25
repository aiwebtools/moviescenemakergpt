
import React from 'react';
import { useTimeWarp } from '@/hooks/useTimeWarp';

interface TimeWarpLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const TimeWarpLink: React.FC<TimeWarpLinkProps> = ({ 
  href, 
  children, 
  className = "", 
  ...props 
}) => {
  const { initiateTimeWarp } = useTimeWarp();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    console.log('TimeWarpLink clicked with href:', href);
    event.preventDefault();
    initiateTimeWarp(href, event);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} transform transition-all duration-300 hover:scale-105 cursor-pointer`}
      {...props}
    >
      {children}
    </a>
  );
};

export default TimeWarpLink;
