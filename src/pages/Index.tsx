
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
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use Intersection Observer to load the video when it's visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Create the YouTube iframe dynamically when in view
          if (videoContainerRef.current) {
            const iframe = document.createElement('iframe');
            iframe.className = "w-full aspect-video rounded-md";
            iframe.src = "https://www.youtube.com/embed/XTDHx4Y4ftU?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&loop=1&playlist=XTDHx4Y4ftU&enablejsapi=1";
            iframe.title = "Movie Scene Maker GPT Demo";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullScreen = true;
            
            // Clear container and add iframe
            videoContainerRef.current.innerHTML = '';
            videoContainerRef.current.appendChild(iframe);
            
            // Stop observing after video is inserted
            observer.disconnect();
          }
        }
      });
    }, { threshold: 0.1 });
    
    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cyberpunk-dark">
      <InteractiveBackground />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <DisclaimerSection />
      </main>
      <Footer />
      
      {/* YouTube Video - Moved to bottom of page */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="cyberpunk-card shadow-glow p-1">
          <div 
            ref={videoContainerRef}
            className="w-full aspect-video rounded-md bg-black flex items-center justify-center"
          >
            <div className="text-gray-400">Loading video...</div>
          </div>
        </div>
      </div>
      
      <ConsentPopup />
    </div>
  );
};

export default Index;
