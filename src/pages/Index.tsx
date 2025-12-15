
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import TopRatedTools from '@/components/TopRatedTools';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import DisclaimerSection from '@/components/DisclaimerSection';
import Footer from '@/components/Footer';
import DivineBackground from '@/components/DivineBackground';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-divine-deep relative overflow-hidden">
      <DivineBackground />
      <Header />
      
      <main className="relative z-10">
        <div className="sacred-spacing">
          <Hero />
        </div>
        <div className="sacred-spacing">
          <HowItWorks />
        </div>
        <div className="sacred-spacing">
          <TopRatedTools />
        </div>
        <div className="sacred-spacing">
          <Testimonials />
        </div>
        <div className="sacred-spacing">
          <FAQ />
        </div>
        <div className="sacred-spacing">
          <DisclaimerSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
