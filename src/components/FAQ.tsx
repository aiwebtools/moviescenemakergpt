
import React, { useMemo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  // Use useMemo to prevent recreating the faqs array on each render
  const faqs = useMemo(() => [
    {
      question: "What is Movie Scene Maker GPT?",
      answer: "Movie Scene Maker GPT is an advanced AI tool that transforms users into the stars of their own cinematic adventures. Upload your photo, choose a movie genre, and get realistic scenes featuring you in the leading role with professional cinematic quality."
    },
    {
      question: "How do I use Movie Scene Maker GPT?",
      answer: "First, upload a clear photo of yourself. Then choose a movie genre (action, sci-fi, fantasy, etc.). Review the scene outline created for you, make any adjustments, and watch as the AI generates each scene with you as the star. You can download the final results as images, PDF, or an animated slideshow."
    },
    {
      question: "Is my photo stored or shared?",
      answer: "No. Your privacy is our priority. Images uploaded are used only during your session to create your custom movie scenes and are not stored permanently or shared with third parties."
    },
    {
      question: "What image quality should I upload?",
      answer: "For best results, upload a clear, high-resolution photo with good lighting and a neutral background. Front-facing portraits work best, though the AI can work with various angles and poses."
    },
    {
      question: "How many scenes can I create?",
      answer: "A typical movie story includes 10-50 scenes, but this is adjustable based on your preferences. You can create as many scenes as you like within a single story concept."
    },
    {
      question: "Can I customize the characters, outfits, or settings?",
      answer: "Absolutely! You have full creative control. After the initial scene outline is created, you can request changes to any aspect including locations, outfits, accessories, time periods, and more."
    },
    {
      question: "What's the difference between Movie Scene Maker GPT and Movie Script Writer GPT?",
      answer: "Movie Scene Maker GPT focuses on creating visual scenes with you as the star, generating images for each scene. Movie Script Writer GPT helps you write professional screenplay scripts but doesn't create visual content."
    },
    {
      question: "How can I animate the scenes into a real movie?",
      answer: "After creating your scenes, you can use them with animation tools like Sora (www.sora.com) to transform your still images into animated movie scenes."
    }
  ], []);

  return (
    <section id="faq" className="py-20 bg-cyberpunk-darker/80 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-cyberpunk-dark to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-cyberpunk-dark to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyberpunk-heading inline-block">Frequently Asked Questions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Movie Scene Maker GPT
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion 
            type="single" 
            collapsible 
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="cyberpunk-card border-0 overflow-hidden backdrop-blur-sm will-change-contents"
              >
                <AccordionTrigger 
                  className="px-6 py-4 text-left hover:no-underline will-change-transform"
                >
                  <span className="text-white hover:text-cyberpunk-neon-blue transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent 
                  className="px-6 pb-4 text-gray-300 will-change-[height,opacity]"
                  style={{ transform: "translateZ(0)" }} // Hardware acceleration
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default React.memo(FAQ);
