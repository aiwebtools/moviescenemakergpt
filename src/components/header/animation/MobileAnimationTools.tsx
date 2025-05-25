
import React, { memo, useCallback } from 'react';
import { AnimationTool, ToolCategory } from '@/data/animationTools';
import TimeWarpLink from '../../TimeWarpLink';
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
  // Optimize rendering of tool links with useCallback
  const renderToolLink = useCallback((tool: AnimationTool) => (
    <TimeWarpLink 
      key={tool.name}
      href={tool.href}
      className="text-white hover:text-cyberpunk-neon-blue py-2 transition-all duration-300 hover:translate-x-1 block"
    >
      {tool.name}
    </TimeWarpLink>
  ), []);

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
            <div className="flex flex-col space-y-2 pl-4 will-change-[height,transform]">
              {category.tools.map(renderToolLink)}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default memo(MobileAnimationTools);
