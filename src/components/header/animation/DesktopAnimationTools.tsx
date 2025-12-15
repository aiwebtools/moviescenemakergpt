
import React, { memo, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimationTool, ToolCategory } from '@/data/animationTools';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface DesktopAnimationToolsProps {
  toolCategories: ToolCategory[];
}

const DesktopAnimationTools: React.FC<DesktopAnimationToolsProps> = ({ toolCategories }) => {
  // Optimize rendering of tool links with useCallback
  const renderToolLink = useCallback((tool: AnimationTool) => (
    <DropdownMenuItem key={tool.name} asChild>
      <a 
        href={tool.href} 
        className={`cursor-pointer py-2 px-4 transition-all duration-300 hover:translate-x-1 ${
          tool.isTopRated 
            ? 'text-yellow-300 hover:text-yellow-200 hover:bg-yellow-500/10 font-semibold' 
            : 'hover:bg-cyberpunk-dark hover:text-cyberpunk-neon-blue'
        }`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {tool.isTopRated && <span className="mr-1">⭐</span>}
        {tool.name}
        {tool.isTopRated && <span className="ml-2 text-xs text-yellow-400/80">(Video + Sound)</span>}
      </a>
    </DropdownMenuItem>
  ), []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-white hover:text-cyberpunk-neon-blue flex items-center gap-1 py-2 font-medium transition-all duration-300 hover:scale-105"
        >
          Animate Your Scenes <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-56 bg-black/90 backdrop-blur-lg border-cyberpunk-neon-blue text-white shadow-lg shadow-cyberpunk-blue/20"
        sideOffset={5}
        align="center"
        style={{
          // Apply hardware acceleration
          transform: "translateZ(0)",
          willChange: "transform, opacity",
        }}
      >
        <Accordion type="single" collapsible className="w-full">
          {toolCategories.map((category, index) => (
            <AccordionItem 
              key={`${category.title}-${index}`} 
              value={category.title.toLowerCase().replace(/\s+/g, '-')} 
              className="border-none"
            >
              <AccordionTrigger className={`py-2 px-2 font-medium ${
                category.isTopRated 
                  ? 'text-yellow-300 hover:text-yellow-200' 
                  : 'hover:text-cyberpunk-neon-blue'
              }`}>
                {category.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className={`flex flex-col space-y-1 will-change-[height,transform] ${
                  category.isTopRated ? 'bg-yellow-500/5 rounded-lg p-2 border border-yellow-500/20' : ''
                }`}>
                  {category.tools.map(renderToolLink)}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(DesktopAnimationTools);
