
import React, { memo, useCallback } from 'react';
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
  // Optimize rendering of tool links with useCallback
  const renderToolLink = useCallback((tool: AnimationTool) => (
    <a 
      key={tool.name}
      href={tool.href}
      className={`py-2 transition-all duration-300 hover:translate-x-1 ${
        tool.isTopRated 
          ? 'text-yellow-300 hover:text-yellow-200 font-semibold' 
          : 'text-white hover:text-cyberpunk-neon-blue'
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {tool.isTopRated && <span className="mr-1">⭐</span>}
      {tool.name}
      {tool.isTopRated && <span className="ml-2 text-xs text-yellow-400/80">(Video + Sound)</span>}
    </a>
  ), []);

  return (
    <Accordion type="single" collapsible className="w-full">
      {toolCategories.map((category, index) => (
        <AccordionItem 
          key={`${category.title}-${index}`} 
          value={`${category.title.toLowerCase().replace(/\s+/g, '-')}-mobile`} 
          className="border-none"
        >
          <AccordionTrigger className={`py-2 font-medium ${
            category.isTopRated 
              ? 'text-yellow-300 hover:text-yellow-200' 
              : 'text-white hover:text-cyberpunk-neon-blue'
          }`}>
            {category.title}
          </AccordionTrigger>
          <AccordionContent>
            <div className={`flex flex-col space-y-2 pl-4 will-change-[height,transform] ${
              category.isTopRated ? 'bg-yellow-500/5 rounded-lg p-2 border border-yellow-500/20' : ''
            }`}>
              {category.tools.map(renderToolLink)}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default memo(MobileAnimationTools);
