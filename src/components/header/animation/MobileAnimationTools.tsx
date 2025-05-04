
import React, { memo } from 'react';
import { AnimationTool, ToolCategory } from '@/data/animationTools';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface MobileAnimationToolsProps {
  toolCategories: ToolCategory[];
}

const MobileAnimationTools: React.FC<MobileAnimationToolsProps> = ({ toolCategories }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {toolCategories.map((category, index) => (
        <AccordionItem 
          key={`${category.title}-${index}`} 
          value={`${category.title.toLowerCase().replace(/\s+/g, '-')}-mobile`} 
          className="border-none"
        >
          <AccordionTrigger className="text-white hover:text-cyberpunk-neon-blue py-2 font-medium">
            {category.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              {category.tools.map((tool) => (
                <a 
                  key={tool.name}
                  href={tool.href}
                  className="text-white hover:text-cyberpunk-neon-blue py-2 transition-all duration-300 hover:translate-x-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default memo(MobileAnimationTools);
