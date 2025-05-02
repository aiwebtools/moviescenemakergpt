
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import DisclaimerSection from '@/components/DisclaimerSection';
import Footer from '@/components/Footer';
import ConsentPopup from '@/components/ConsentPopup';
import InteractiveBackground from '@/components/InteractiveBackground';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Index: React.FC = () => {
  const audioPlayerRef = useRef<HTMLDivElement>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const { toast } = useToast();

  // Auto-start audio when component mounts
  useEffect(() => {
    // Small delay to ensure browser is ready
    const timer = setTimeout(() => {
      createAudioPlayer();
      setAudioPlaying(true);
      
      // Show toast notification with new text
      toast({
        title: "You're the Star Now",
        description: "Anything you Dream! Welcome to AI Movie Creation Studio - AiWebTools.Ai",
        duration: 2000,
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleAudio = () => {
    if (audioPlayerRef.current) {
      const iframe = audioPlayerRef.current.querySelector('iframe');
      
      if (iframe) {
        // If iframe exists already, send a message to toggle play/pause
        try {
          const message = audioPlaying 
            ? '{"event":"command","func":"pauseVideo","args":""}' 
            : '{"event":"command","func":"playVideo","args":""}';
          
          iframe.contentWindow?.postMessage(message, '*');
          setAudioPlaying(!audioPlaying);
          
          // Updated toast notification text
          toast({
            title: audioPlaying ? "Audio paused" : "You're the Star Now",
            description: audioPlaying 
              ? "Background audio has been paused" 
              : "Anything you Dream! Welcome to AI Movie Creation Studio - AiWebTools.Ai",
            duration: 2000,
          });
        } catch (e) {
          console.log('Could not control audio:', e);
        }
      } else {
        // Create the iframe if it doesn't exist
        createAudioPlayer();
        setAudioPlaying(true);
        
        // Updated toast notification text
        toast({
          title: "You're the Star Now",
          description: "Anything you Dream! Welcome to AI Movie Creation Studio - AiWebTools.Ai",
          duration: 2000,
        });
      }
    }
  };

  // Function to create the YouTube iframe player
  const createAudioPlayer = () => {
    if (audioPlayerRef.current) {
      const iframe = document.createElement('iframe');
      // Make iframe visually hidden but still functional
      iframe.style.width = '1px';
      iframe.style.height = '1px';
      iframe.style.position = 'absolute';
      iframe.style.top = '-9999px';
      iframe.style.left = '-9999px';
      
      // Set YouTube parameters to maximize audio experience:
      iframe.src = "https://www.youtube.com/embed/-F1NJYjsQ6k?autoplay=1&mute=0&controls=0&rel=0&showinfo=0&loop=1&playlist=-F1NJYjsQ6k&enablejsapi=1&modestbranding=1&playsinline=1&origin=" + window.location.origin;
      iframe.title = "Background Audio";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      
      // Clear container and add iframe
      audioPlayerRef.current.innerHTML = '';
      audioPlayerRef.current.appendChild(iframe);
      
      // Attempt to maximize volume via JavaScript
      setTimeout(() => {
        try {
          if (iframe.contentWindow) {
            iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":[100]}', '*');
          }
        } catch (e) {
          console.log('Could not adjust volume via API:', e);
        }
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cyberpunk-dark">
      <InteractiveBackground />
      <Header />
      
      {/* Audio toggle button - fixed position */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleAudio}
          className="rounded-full h-12 w-12 flex items-center justify-center bg-cyberpunk-neon-blue hover:bg-cyberpunk-neon-purple transition-colors shadow-glow"
          aria-label={audioPlaying ? "Mute background audio" : "Play background audio"}
        >
          {audioPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </Button>
      </div>
      
      {/* Hidden audio player div */}
      <div ref={audioPlayerRef} className="hidden"></div>
      
      <main>
        <Hero />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <DisclaimerSection />
      </main>
      <Footer />
      <ConsentPopup />
    </div>
  );
};

export default Index;
