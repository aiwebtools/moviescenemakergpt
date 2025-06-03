
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Photo",
      description: "Start by uploading a high-quality image of yourself. This will be used to insert you into each movie scene with perfect continuity using our free AI tools.",
      icon: "🖼️"
    },
    {
      number: "02", 
      title: "Choose Your Story",
      description: "Select from genres like Action, Sci-Fi, Fantasy, or create a custom storyline where you're the star using our AI content creation tools.",
      icon: "📝"
    },
    {
      number: "03",
      title: "Review Scene Outline", 
      description: "Get a detailed storyboard outline with scene descriptions, settings, and actions for your approval from our AI web tools.",
      icon: "📋"
    },
    {
      number: "04",
      title: "Generate Movie Scenes",
      description: "Watch as our free AI tools create cinematic-grade images featuring you in each scene with perfect continuity.",
      icon: "🎬"
    },
    {
      number: "05",
      title: "Customize & Perfect",
      description: "Fine-tune any scene, outfit, or setting until your movie story is exactly how you envisioned it with our AI generators.",
      icon: "✨"
    },
    {
      number: "06",
      title: "Get Your Movie Package",
      description: "Download your complete storyboard as images, PDF, or animated GIF slideshow featuring you as the star, all created with free AI tools.",
      icon: "📦"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent inline-block">
            How Our Free AI Tools Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform yourself into the star of your own cinematic adventure in six simple steps using our powerful AI web tools
          </p>
          
          {/* SEO content for AI tools keywords */}
          <div className="sr-only">
            Free AI Tools, AI Web Tools, How to use AI tools, AI content creation process, Movie making with AI, Artificial intelligence tools guide, Best free AI generators
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-black/90 backdrop-blur-xl rounded-2xl border border-purple-400/20 p-6 relative group hover:bg-gradient-to-b hover:from-black/50 hover:to-black/60 transition-all duration-300"
            >
              <div className="absolute -top-3 -left-3 w-12 h-12 rounded-full bg-black border border-blue-500 flex items-center justify-center">
                <span className="text-blue-400 font-mono font-bold">{step.number}</span>
              </div>
              
              <div className="mb-4 text-4xl">{step.icon}</div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {step.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {step.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-blue-400 font-medium">
            Ready to star in your own movie with our free AI tools? Try Movie Scene Maker GPT today!
          </p>
          <div className="mt-4">
            <a
              href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 inline-block shadow-lg"
              title="Get Started with Free AI Movie Scene Maker"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
