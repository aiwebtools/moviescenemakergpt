
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import DisclaimerSection from '@/components/DisclaimerSection';
import Footer from '@/components/Footer';
import HollywoodSpotlights from '@/components/HollywoodSpotlights';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cyberpunk-dark relative">
      <HollywoodSpotlights />
      <Header />
      
      <main>
        <Hero />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
