
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background pattern overlay */}
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
          {/* SEO optimized heading with target keywords */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight">
            <span className="text-white block mb-4">
              Free AI Web Tools for
            </span>
            <span className="text-purple-400 font-bold block">
              Content Creation
            </span>
          </h1>
          
          {/* SEO optimized description with target keywords */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover the best free AI tools for content creation. Transform yourself into a movie star with Movie Scene Maker GPT, write professional scripts, create stunning posters, and more with our powerful artificial intelligence web tools.
          </p>
          
          {/* Enhanced keywords in hidden text for SEO */}
          <div className="sr-only">
            AI Web Tools, Free AI Tools, Artificial Intelligence Tools, Movie Scene Maker GPT, AI Content Creation, Script Writer AI, Poster Maker AI, Video AI Tools, AIWEBTOOLS.AI, Free Artificial Intelligence, Content Creator Tools, Movie Making Tools, AI Generators, Best AI Tools, Free Movie Maker, AI Video Tools
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white font-bold text-lg py-6 px-10 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg">
              <a 
                href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt" 
                className="flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
                title="Start Creating Movie Scenes with AI - Free AI Tool"
              >
                START CREATING MOVIE SCENES
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </a>
            </Button>
            
            <Button asChild variant="outline" className="bg-black/20 backdrop-blur-xl border border-purple-400/30 rounded-2xl px-8 py-6 text-lg transition-all duration-300 hover:bg-purple-400/10 hover:border-purple-400/50 text-gray-300 font-medium hover:scale-105">
              <a href="#how-it-works" title="Learn How Our Free AI Tools Work">
                Learn How It Works
              </a>
            </Button>
          </div>

          {/* Video Section with SEO optimization */}
          <div className="mt-20 mb-12 relative">
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Enhanced border effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-2xl blur-lg opacity-80 animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 rounded-xl blur-sm opacity-60" style={{ backgroundSize: '200% 100%' }}></div>
              
              {/* Video container */}
              <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl border border-purple-400/20 overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/9fpWIE20z7s?autoplay=1&mute=0&rel=0&showinfo=0&modestbranding=1&playsinline=1&controls=1&start=0&origin=https://lovable.dev&enablejsapi=1&iv_load_policy=3&fs=1&cc_load_policy=0&disablekb=0&widget_referrer=https://lovable.dev&vq=hd1080&loop=0&color=white&hl=en&cc_lang_pref=en&fmt=22&html5=1&buffer=3&preload=auto"
                    title="Movie Scene Maker GPT Demo - Free AI Tool for Creating Movie Scenes"
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
          
          {/* Movie frames preview with SEO optimization */}
          <div className="mt-12 relative">
            <a 
              href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt"
              className="bg-black/90 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-2 inline-block hover:scale-105 transition-all duration-500 cursor-pointer"
              aria-label="Start Creating Movie Scenes with Free AI Tools"
              title="Free AI Movie Scene Maker - Create Your Movie Scenes Now"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative aspect-video w-full sm:w-48 md:w-72">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg backdrop-blur-sm">
                      <div className="w-full h-full flex items-center justify-center text-white text-sm font-semibold">
                        AI Movie Scene {i}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </a>
            
            <a 
              href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt"
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-xl rounded-2xl border border-purple-400/20 px-8 py-3 hover:scale-105 transition-all duration-500 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              title="Start Your Free AI Movie Journey"
            >
              <span className="text-purple-400 text-lg font-bold">Start Your Movie Journey</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
