
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
import FloatingToolsButton from '@/components/FloatingToolsButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cyberpunk-dark">
      <InteractiveBackground />
      <Header />
      
      {/* Floating More AI Web Tools button */}
      <FloatingToolsButton />
      
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
