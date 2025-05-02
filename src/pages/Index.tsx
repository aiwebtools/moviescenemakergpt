import React, { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import DisclaimerSection from '@/components/DisclaimerSection';
import Footer from '@/components/Footer';
import ConsentPopup from '@/components/ConsentPopup';
import InteractiveBackground from '@/components/InteractiveBackground';

const Index: React.FC = () => {
  const audioPlayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the YouTube iframe immediately but make it hidden
    // This will allow audio to play right when the user visits the site
    if (audioPlayerRef.current) {
      const iframe = document.createElement('iframe');
      // Make iframe visually hidden but still functional
      iframe.style.width = '1px';
      iframe.style.height = '1px';
      iframe.style.position = 'absolute';
      iframe.style.top = '-9999px';
      iframe.style.left = '-9999px';
      
      // Set YouTube parameters to maximize audio experience:
      // - autoplay=1: Start playing automatically
      // - mute=0: Ensure audio is unmuted
      // - volume=100: Set volume to maximum (though this is controlled by user device)
      // - loop=1 & playlist: Keep playing the audio in a loop
      iframe.src = "https://www.youtube.com/embed/-F1NJYjsQ6k?autoplay=1&mute=0&controls=0&rel=0&showinfo=0&loop=1&playlist=-F1NJYjsQ6k&enablejsapi=1&modestbranding=1&playsinline=1&origin=" + window.location.origin;
      iframe.title = "Background Audio";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      
      // Clear container and add iframe
      audioPlayerRef.current.innerHTML = '';
      audioPlayerRef.current.appendChild(iframe);
      
      // Attempt to maximize volume via JavaScript
      // Note: Browser security may prevent this from working as expected
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cyberpunk-dark">
      <InteractiveBackground />
      <Header />
      
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
