
import React from 'react';
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
          <iframe 
            className="w-full aspect-video rounded-md"
            src="https://www.youtube.com/embed/XTDHx4Y4ftU?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&loop=1&playlist=XTDHx4Y4ftU"
            title="Movie Scene Maker GPT Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <ConsentPopup />
    </div>
  );
};

export default Index;
