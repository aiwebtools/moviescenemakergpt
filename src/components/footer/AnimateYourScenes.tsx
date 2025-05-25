
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { animationToolsData } from '@/data/animationTools';
import TimeWarpLink from '../TimeWarpLink';

const AnimateYourScenes: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mb-10">
      <div className="bg-gradient-to-r from-cyberpunk-blue/10 to-cyberpunk-purple/10 backdrop-blur-sm rounded-lg p-6 border border-cyberpunk-blue/20">
        <h2 className="text-2xl font-bold text-white mb-4">Animate Your Scenes</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {animationToolsData.map((category, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-cyberpunk-blue/30">
              <AccordionTrigger className="text-white hover:text-cyberpunk-neon-blue py-2">
                {category.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2">
                  {category.tools.map((tool, toolIdx) => (
                    <TimeWarpLink 
                      key={toolIdx}
                      href={tool.href}
                      className="py-2 px-4 bg-cyberpunk-blue/20 hover:bg-cyberpunk-blue/30 rounded-md text-white hover:text-cyberpunk-neon-blue transition-colors flex items-center justify-between gap-2"
                    >
                      {tool.name}
                      <ExternalLink size={14} />
                    </TimeWarpLink>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default AnimateYourScenes;
