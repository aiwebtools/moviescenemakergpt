
import React, { memo } from 'react';
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
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-lg border-cyberpunk-neon-blue text-white shadow-lg shadow-cyberpunk-blue/20">
        <Accordion type="single" collapsible className="w-full">
          {toolCategories.map((category, index) => (
            <AccordionItem 
              key={`${category.title}-${index}`} 
              value={category.title.toLowerCase().replace(/\s+/g, '-')} 
              className="border-none"
            >
              <AccordionTrigger className="py-2 px-2 hover:text-cyberpunk-neon-blue font-medium">
                {category.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-1">
                  {category.tools.map((tool) => (
                    <DropdownMenuItem key={tool.name} asChild>
                      <a 
                        href={tool.href} 
                        className="cursor-pointer py-2 px-4 hover:bg-cyberpunk-dark hover:text-cyberpunk-neon-blue transition-all duration-300 hover:translate-x-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {tool.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
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
