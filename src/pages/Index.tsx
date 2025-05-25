
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import DisclaimerSection from '@/components/DisclaimerSection';
import Footer from '@/components/Footer';
// Temporarily removed ConsentPopup and InteractiveBackground to test video performance
// import ConsentPopup from '@/components/ConsentPopup';
// import InteractiveBackground from '@/components/InteractiveBackground';
// import FloatingToolsButton from '@/components/FloatingToolsButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cyberpunk-dark">
      {/* Temporarily disabled interactive background */}
      {/* <InteractiveBackground /> */}
      <Header />
      
      {/* Temporarily disabled floating tools button */}
      {/* <FloatingToolsButton /> */}
      
      <main>
        <Hero />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <DisclaimerSection />
      </main>
      <Footer />
      {/* Temporarily disabled consent popup */}
      {/* <ConsentPopup /> */}
    </div>
  );
};

export default Index;
