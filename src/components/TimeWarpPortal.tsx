
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
    <div 
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 99999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      {/* Full screen overlay */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        phase === 'warping' ? 'bg-black/30' : 'bg-transparent'
      }`} />

      {/* Portal Ring */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
        phase === 'opening' ? 'scale-0 opacity-0' : 
        phase === 'warping' ? 'scale-100 opacity-100' : 
        'scale-150 opacity-0'
      }`}>
        <div className="relative">
          {/* Outer rotating ring */}
          <div 
            className={`w-96 h-96 rounded-full border-4 border-cyberpunk-neon-blue ${
              phase === 'warping' ? 'animate-spin' : ''
            }`}
            style={{
              background: `conic-gradient(from 0deg, 
                transparent, 
                rgba(0, 240, 255, 0.8), 
                rgba(217, 70, 239, 0.8), 
                rgba(255, 230, 0, 0.8), 
                transparent)`,
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.8), inset 0 0 50px rgba(0, 240, 255, 0.3)',
              animationDuration: phase === 'warping' ? '0.5s' : '2s'
            }} 
          />
          
          {/* Inner ring */}
          <div 
            className={`absolute inset-8 rounded-full border-2 border-cyberpunk-pink ${
              phase === 'warping' ? 'animate-spin' : ''
            }`}
            style={{
              background: `radial-gradient(circle, 
                rgba(0, 240, 255, 0.2), 
                rgba(217, 70, 239, 0.4), 
                transparent)`,
              boxShadow: '0 0 30px rgba(217, 70, 239, 0.8)',
              animationDirection: 'reverse',
              animationDuration: phase === 'warping' ? '0.3s' : '1.5s'
            }}
          />
          
          {/* Center vortex */}
          <div 
            className={`absolute inset-16 rounded-full ${
              phase === 'warping' ? 'animate-pulse' : ''
            }`}
            style={{
              background: `radial-gradient(circle, 
                rgba(0, 0, 0, 0.9), 
                rgba(0, 240, 255, 0.6), 
                rgba(217, 70, 239, 0.6))`,
              boxShadow: 'inset 0 0 50px rgba(0, 240, 255, 0.8)'
            }} 
          />
        </div>
      </div>

      {/* Energy particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-cyberpunk-neon-blue rounded-full ${
              phase === 'warping' ? 'animate-ping' : ''
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.5 + Math.random() * 1}s`,
              boxShadow: '0 0 10px rgba(0, 240, 255, 1)'
            }}
          />
        ))}
      </div>

      {/* Screen warp effect */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 ${
          phase === 'warping' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.1), rgba(217, 70, 239, 0.1), rgba(255, 230, 0, 0.1))',
          backdropFilter: phase === 'warping' ? 'blur(2px) hue-rotate(90deg) brightness(1.2)' : 'none'
        }} 
      />

      {/* Time warp text */}
      {phase === 'warping' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="text-4xl font-bold text-cyberpunk-neon-blue animate-pulse tracking-widest"
            style={{
              textShadow: '0 0 20px rgba(0, 240, 255, 1), 0 0 40px rgba(0, 240, 255, 0.8)',
              animation: 'glow 1s ease-in-out infinite alternate'
            }}
          >
            INITIATING TIME WARP...
          </div>
        </div>
      )}
    </div>
  );
};

export default TimeWarpPortal;
