
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Simplified static background - no animations */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(to right, #1EAEDB 1px, transparent 1px), linear-gradient(to bottom, #1EAEDB 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-pink bg-clip-text text-transparent">
              Transform Yourself Into
            </span>
            <br />
            <span className="text-white font-bold">A Movie Star</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Become the star of your own cinematic adventure with Movie Scene Maker GPT. Create stunning, personalized movie scenes featuring you in any genre, setting, or storyline.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button asChild className="neon-button group">
              <a 
                href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt" 
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                USE MOVIE SCENE MAKER GPT NOW
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="glass-button">
              <a href="#how-it-works">
                Learn How It Works
              </a>
            </Button>
          </div>

          {/* First YouTube Video */}
          <div className="mt-16 mb-8 relative">
            <div className="bg-black/20 p-2 rounded-lg inline-block">
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9fpWIE20z7s?autoplay=1&mute=0&rel=0&showinfo=0&modestbranding=1&playsinline=1&controls=1&loop=1&playlist=9fpWIE20z7s&origin=https://lovable.dev&widget_referrer=lovable"
                    title="Movie Scene Maker GPT Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                    loading="eager"
                    style={{
                      border: 'none',
                      backgroundColor: '#000'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Second YouTube Video - Duplicate */}
          <div className="mt-8 mb-8 relative">
            <div className="bg-black/20 p-2 rounded-lg inline-block">
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9fpWIE20z7s?autoplay=1&mute=0&rel=0&showinfo=0&modestbranding=1&playsinline=1&controls=1&loop=1&playlist=9fpWIE20z7s&origin=https://lovable.dev&widget_referrer=lovable"
                    title="Movie Scene Maker GPT Demo - Duplicate"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg"
                    loading="eager"
                    style={{
                      border: 'none',
                      backgroundColor: '#000'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Simplified movie frames - no animations */}
          <div className="mt-8 relative">
            <a 
              href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt"
              className="bg-black/20 p-1 rounded-lg inline-block hover:opacity-90 transition-opacity cursor-pointer"
              aria-label="Try Movie Scene Maker GPT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative aspect-video w-full sm:w-40 md:w-60">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyberpunk-blue/20 to-cyberpunk-pink/20 rounded">
                      <div className="w-full h-full flex items-center justify-center text-white/70 text-xs">
                        Scene {i}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </a>
            
            <a 
              href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt"
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-cyberpunk-dark px-6 py-2 rounded-full border border-cyberpunk-blue/30 hover:border-cyberpunk-blue/60 transition-all cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-cyberpunk-neon-blue text-sm font-medium">Your Story Awaits</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
