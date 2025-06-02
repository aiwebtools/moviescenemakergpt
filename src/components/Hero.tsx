import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Divine pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #FFD700 1px, transparent 1px), linear-gradient(to bottom, #DDA0DD 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          backgroundPosition: 'center',
          animation: 'sacred-shimmer 6s linear infinite'
        }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight animate-divine-glow">
            <span className="divine-text block mb-4">
              Transform Yourself Into
            </span>
            <span className="text-divine-pearl font-bold block animate-heavenly-float">
              A Movie Star
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-divine-light mb-12 max-w-3xl mx-auto leading-relaxed animate-ethereal-wave">
            Create stunning, personalized movie scenes with Movie Scene Maker GPT. Transform yourself into the star of any movie genre, setting, or storyline with professional-quality results.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
            <Button asChild className="bg-gradient-to-r from-divine-gold to-divine-sacred hover:from-divine-sacred hover:to-divine-gold text-divine-deep font-bold text-lg py-6 px-10 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
              <a 
                href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt" 
                className="flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                START CREATING MOVIE SCENES
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="glass-button text-lg py-6 px-10">
              <a href="#how-it-works">
                Learn How It Works
              </a>
            </Button>
          </div>

          {/* Enhanced Divine Video Section */}
          <div className="mt-20 mb-12 relative">
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Enhanced divine border effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-divine-gold via-divine-ethereal to-divine-sacred rounded-2xl blur-lg opacity-80 animate-divine-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-divine-pearl via-divine-gold to-divine-luminous rounded-xl blur-sm opacity-60 animate-sacred-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
              
              {/* Video container with divine styling */}
              <div className="relative divine-card overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9fpWIE20z7s?autoplay=1&mute=0&rel=0&showinfo=0&modestbranding=1&playsinline=1&controls=1&start=0&origin=https://lovable.dev&enablejsapi=1&iv_load_policy=3&fs=1&cc_load_policy=0&disablekb=0&widget_referrer=https://lovable.dev&vq=hd1080&loop=0&color=white&hl=en&cc_lang_pref=en&fmt=22&html5=1&buffer=3&preload=auto"
                    title="Movie Scene Maker GPT Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    className="rounded-xl"
                    loading="eager"
                    style={{
                      border: 'none',
                      backgroundColor: '#000',
                      willChange: 'transform',
                      backfaceVisibility: 'hidden',
                      transform: 'translateZ(0)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Movie frames preview */}
          <div className="mt-12 relative">
            <a 
              href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt"
              className="divine-card p-2 inline-block hover:scale-105 transition-all duration-500 cursor-pointer"
              aria-label="Start Creating Movie Scenes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative aspect-video w-full sm:w-48 md:w-72">
                    <div className="absolute inset-0 bg-gradient-to-br from-divine-gold/30 to-divine-sacred/30 rounded-lg backdrop-blur-sm">
                      <div className="w-full h-full flex items-center justify-center text-divine-pearl text-sm font-semibold">
                        Movie Scene {i}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </a>
            
            <a 
              href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt"
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 divine-card px-8 py-3 hover:scale-105 transition-all duration-500 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="divine-text text-lg font-bold">Start Your Movie Journey</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
