
import React from 'react';

const HollywoodSpotlights: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Spotlight beams */}
      <div className="absolute inset-0">
        {/* Spotlight 1 */}
        <div 
          className="absolute w-96 h-screen opacity-20"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.3) 40%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.3) 60%, transparent 100%)',
            transform: 'rotate(15deg)',
            animation: 'spotlight1 8s linear infinite',
            transformOrigin: 'top center'
          }}
        />
        
        {/* Spotlight 2 */}
        <div 
          className="absolute w-80 h-screen opacity-15"
          style={{
            background: 'linear-gradient(-30deg, transparent 0%, rgba(0, 240, 255, 0.2) 40%, rgba(0, 240, 255, 0.4) 50%, rgba(0, 240, 255, 0.2) 60%, transparent 100%)',
            transform: 'rotate(-20deg)',
            animation: 'spotlight2 12s linear infinite reverse',
            transformOrigin: 'top center',
            right: '20%'
          }}
        />
        
        {/* Spotlight 3 */}
        <div 
          className="absolute w-72 h-screen opacity-25"
          style={{
            background: 'linear-gradient(60deg, transparent 0%, rgba(217, 70, 239, 0.2) 40%, rgba(217, 70, 239, 0.4) 50%, rgba(217, 70, 239, 0.2) 60%, transparent 100%)',
            transform: 'rotate(35deg)',
            animation: 'spotlight3 10s linear infinite',
            transformOrigin: 'top center',
            left: '10%'
          }}
        />
        
        {/* Spotlight 4 */}
        <div 
          className="absolute w-64 h-screen opacity-18"
          style={{
            background: 'linear-gradient(-45deg, transparent 0%, rgba(255, 230, 0, 0.2) 40%, rgba(255, 230, 0, 0.3) 50%, rgba(255, 230, 0, 0.2) 60%, transparent 100%)',
            transform: 'rotate(-10deg)',
            animation: 'spotlight4 15s linear infinite reverse',
            transformOrigin: 'top center',
            right: '40%'
          }}
        />
        
        {/* Spotlight 5 */}
        <div 
          className="absolute w-88 h-screen opacity-22"
          style={{
            background: 'linear-gradient(25deg, transparent 0%, rgba(139, 92, 246, 0.2) 40%, rgba(139, 92, 246, 0.4) 50%, rgba(139, 92, 246, 0.2) 60%, transparent 100%)',
            transform: 'rotate(50deg)',
            animation: 'spotlight5 6s linear infinite',
            transformOrigin: 'top center',
            left: '60%'
          }}
        />
      </div>
      
      {/* CSS for spotlight animations */}
      <style jsx>{`
        @keyframes spotlight1 {
          0% { transform: translateX(-100vw) rotate(15deg); }
          100% { transform: translateX(100vw) rotate(15deg); }
        }
        
        @keyframes spotlight2 {
          0% { transform: translateX(-100vw) rotate(-20deg); }
          100% { transform: translateX(100vw) rotate(-20deg); }
        }
        
        @keyframes spotlight3 {
          0% { transform: translateX(-100vw) rotate(35deg); }
          100% { transform: translateX(100vw) rotate(35deg); }
        }
        
        @keyframes spotlight4 {
          0% { transform: translateX(-100vw) rotate(-10deg); }
          100% { transform: translateX(100vw) rotate(-10deg); }
        }
        
        @keyframes spotlight5 {
          0% { transform: translateX(-100vw) rotate(50deg); }
          100% { transform: translateX(100vw) rotate(50deg); }
        }
      `}</style>
    </div>
  );
};

export default HollywoodSpotlights;
