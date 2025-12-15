
import React, { useMemo } from 'react';
import { Star, Sparkles, Video, Volume2 } from 'lucide-react';

const TopRatedTools: React.FC = () => {
  // Get today's date formatted
  const todayDate = useMemo(() => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }, []);

  const tools = [
    {
      name: 'SORA 2',
      href: 'https://www.sora.com',
      description: 'OpenAI\'s revolutionary video generation model now with integrated audio. Create stunning cinematic videos with synchronized sound effects, dialogue, and ambient audio - all from a single prompt.',
      features: ['Video + Sound in One', 'Cinematic Quality', 'Natural Audio Sync']
    },
    {
      name: 'Google Veo 3',
      href: 'https://aistudio.google.com/generate-video',
      description: 'Google\'s most advanced video generation platform featuring native audio generation. Transform your ideas into professional-quality videos with perfectly matched soundscapes and voice.',
      features: ['Video + Sound in One', '4K Resolution', 'Multi-Modal AI']
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-full mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">
              Voted Best as of {todayDate}
            </span>
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Top Rated Video Generation Platforms
            </span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto">
            These AI platforms have conquered the multi-step creation process by combining <strong className="text-yellow-300">video generation AND sound</strong> in one seamless workflow. 
            Use our GPTs to create your scenes, then generate instantly!
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-2xl opacity-75 blur group-hover:opacity-100 transition duration-500 animate-pulse" />
              
              <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300">
                {/* Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full shadow-lg shadow-yellow-500/30">
                    <Sparkles className="w-4 h-4 text-black" />
                    <span className="text-black font-bold text-xs uppercase tracking-wide">#1 Recommended</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-xl border border-yellow-500/30">
                      <Video className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-xl border border-yellow-500/30">
                      <Volume2 className="w-6 h-6 text-yellow-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                      {tool.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {tool.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-300 text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 flex items-center gap-2 text-yellow-400 font-semibold group-hover:text-yellow-300 transition-colors">
                    <span>Try {tool.name} Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Note about editing */}
        <p className="text-center text-gray-400 text-sm mt-8 max-w-2xl mx-auto">
          <span className="text-yellow-400">Note:</span> While these platforms handle video + sound generation, manual editing may still be needed for final touches. Check our Editing Tools section for recommendations.
        </p>
      </div>
    </section>
  );
};

export default React.memo(TopRatedTools);
