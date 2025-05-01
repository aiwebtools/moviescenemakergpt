
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I've always wanted to be in an action movie. Movie Scene Maker GPT made it happen with incredible realism!",
      author: "Michael R.",
      role: "Creative Director",
      rating: 5
    },
    {
      quote: "The continuity between scenes is amazing. Every image looks like it was professionally shot with me in the starring role.",
      author: "Sarah L.",
      role: "Digital Artist",
      rating: 5
    },
    {
      quote: "I created a sci-fi adventure for my portfolio that looks Hollywood quality. The detail in each scene is outstanding.",
      author: "David T.",
      role: "Film Student",
      rating: 4
    },
    {
      quote: "Used this for my daughter's birthday surprise - she was thrilled to see herself as the hero in her favorite fantasy story!",
      author: "Jennifer K.",
      role: "Parent & Educator",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-cyberpunk-purple/10 filter blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-cyberpunk-blue/10 filter blur-3xl" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyberpunk-heading inline-block">What People Are Saying</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands who've transformed their imagination into cinematic reality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="cyberpunk-card border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-lg italic text-gray-300 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyberpunk-blue to-cyberpunk-pink flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
