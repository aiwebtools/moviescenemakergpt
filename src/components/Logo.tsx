
import React from 'react';
import { Film } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Film className="text-cyberpunk-neon-blue animate-pulse-glow" size={size === 'sm' ? 20 : size === 'md' ? 24 : 32} />
      <div className="flex flex-col items-start">
        <span className={`font-bold ${sizeClasses[size]} text-white`}>
          Movie Scene Maker GPT
        </span>
        <span className="text-xs text-cyberpunk-neon-blue">
          Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="underline hover:text-cyberpunk-pink transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a>
        </span>
      </div>
    </div>
  );
};

export default Logo;
