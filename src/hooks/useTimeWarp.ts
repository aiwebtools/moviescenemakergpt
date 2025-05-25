
import { useState, useCallback } from 'react';

export const useTimeWarp = () => {
  const [isWarping, setIsWarping] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);

  const playWarpSound = useCallback(() => {
    // Create audio context for the warp sound effect
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a more complex warp sound
    const createWarpTone = (frequency: number, duration: number, delay: number = 0) => {
      setTimeout(() => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.1, audioContext.currentTime + duration);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
      }, delay);
    };

    // Create layered warp sound effect
    createWarpTone(800, 0.5, 0);      // Initial whoosh
    createWarpTone(400, 1.0, 200);    // Deep rumble
    createWarpTone(1200, 0.3, 500);   // High energy spike
    createWarpTone(200, 1.5, 800);    // Portal stabilization
  }, []);

  const initiateTimeWarp = useCallback((url: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
    
    console.log('Initiating time warp to:', url);
    setIsWarping(true);
    setPendingUrl(url);
    playWarpSound();
  }, [playWarpSound]);

  const completeTimeWarp = useCallback(() => {
    console.log('Completing time warp to:', pendingUrl);
    if (pendingUrl) {
      // Check if it's an internal link (starts with # or /)
      if (pendingUrl.startsWith('#')) {
        // For hash links, scroll to the element
        const element = document.querySelector(pendingUrl);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (pendingUrl.startsWith('/')) {
        // For internal routes, navigate normally
        window.location.href = pendingUrl;
      } else {
        // For external links, open in new window
        window.open(pendingUrl, '_blank', 'noopener,noreferrer');
      }
    }
    setIsWarping(false);
    setPendingUrl(null);
  }, [pendingUrl]);

  return {
    isWarping,
    initiateTimeWarp,
    completeTimeWarp
  };
};
