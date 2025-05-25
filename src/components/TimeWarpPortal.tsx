
import React, { useState, useEffect } from 'react';

interface TimeWarpPortalProps {
  isActive: boolean;
  onComplete: () => void;
}

const TimeWarpPortal: React.FC<TimeWarpPortalProps> = ({ isActive, onComplete }) => {
  const [phase, setPhase] = useState<'idle' | 'opening' | 'warping' | 'closing'>('idle');

  useEffect(() => {
    if (isActive) {
      setPhase('opening');
      
      // Phase transitions
      const openingTimer = setTimeout(() => setPhase('warping'), 500);
      const warpingTimer = setTimeout(() => setPhase('closing'), 2000);
      const closingTimer = setTimeout(() => {
        setPhase('idle');
        onComplete();
      }, 3000);

      return () => {
        clearTimeout(openingTimer);
        clearTimeout(warpingTimer);
        clearTimeout(closingTimer);
      };
    }
  }, [isActive, onComplete]);

  if (phase === 'idle') return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Portal Ring */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
        phase === 'opening' ? 'scale-0 opacity-0' : 
        phase === 'warping' ? 'scale-100 opacity-100' : 
        'scale-150 opacity-0'
      }`}>
        <div className="relative">
          {/* Outer rotating ring */}
          <div className={`w-96 h-96 rounded-full border-4 border-cyberpunk-neon-blue animate-spin ${
            phase === 'warping' ? 'animate-[spin_0.5s_linear_infinite]' : ''
          }`} 
          style={{
            background: `conic-gradient(from 0deg, 
              transparent, 
              rgba(0, 240, 255, 0.3), 
              rgba(217, 70, 239, 0.3), 
              rgba(255, 230, 0, 0.3), 
              transparent)`
          }} />
          
          {/* Inner ring */}
          <div className={`absolute inset-8 rounded-full border-2 border-cyberpunk-pink animate-spin ${
            phase === 'warping' ? 'animate-[spin_0.3s_linear_infinite_reverse]' : ''
          }`}
          style={{
            background: `radial-gradient(circle, 
              rgba(0, 240, 255, 0.1), 
              rgba(217, 70, 239, 0.2), 
              transparent)`
          }} />
          
          {/* Center vortex */}
          <div className={`absolute inset-16 rounded-full bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-pink ${
            phase === 'warping' ? 'animate-pulse' : ''
          }`}
          style={{
            background: `radial-gradient(circle, 
              rgba(0, 0, 0, 0.8), 
              rgba(0, 240, 255, 0.3), 
              rgba(217, 70, 239, 0.3))`
          }} />
        </div>
      </div>

      {/* Energy particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-cyberpunk-neon-blue rounded-full ${
              phase === 'warping' ? 'animate-ping' : ''
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.5 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      {/* Screen warp effect */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        phase === 'warping' ? 'bg-gradient-to-r from-cyberpunk-blue/20 via-cyberpunk-purple/20 to-cyberpunk-pink/20' : 'bg-transparent'
      }`}
      style={{
        backdropFilter: phase === 'warping' ? 'blur(2px) hue-rotate(90deg)' : 'none'
      }} />

      {/* Time warp text */}
      {phase === 'warping' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl font-bold text-cyberpunk-neon-blue animate-pulse tracking-widest">
            INITIATING TIME WARP...
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeWarpPortal;
