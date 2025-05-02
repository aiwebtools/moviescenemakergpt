
import React from 'react';
import { ChevronDown } from 'lucide-react';
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

interface AnimationTool {
  name: string;
  href: string;
}

interface AnimationToolsDropdownProps {
  variant?: 'desktop' | 'mobile';
}

const AnimationToolsDropdown: React.FC<AnimationToolsDropdownProps> = ({ variant = 'desktop' }) => {
  const animationTools: AnimationTool[] = [
    { name: 'SORA', href: 'https://www.sora.com' },
    { name: 'KLING', href: 'https://klingai.com' },
    { name: 'HAILUO', href: 'https://hailuoai.video/' },
    { name: 'HIGGSFIELD', href: 'https://higgsfield.ai/' },
    { name: 'RunwayML', href: 'https://runwayml.com/' },
    { name: 'PIKA LABS', href: 'https://pika.art/' },
    { name: 'Text To Video Prompt Generator GPT', href: 'https://texttovideoprompter.lovable.app/?via=aiwebtools' },
  ];

  if (variant === 'mobile') {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="animation-tools-mobile" className="border-none">
          <AccordionTrigger className="text-white hover:text-cyberpunk-neon-blue py-2">
            Animate Your Scenes
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              {animationTools.map((tool) => (
                <a 
                  key={tool.name}
                  href={tool.href}
                  className="text-white hover:text-cyberpunk-neon-blue py-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tool.name}
                </a>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="text-white hover:text-cyberpunk-neon-blue flex items-center gap-1 py-2"
        >
          Animate Your Scenes <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-black/90 backdrop-blur-lg border-cyberpunk-neon-blue text-white">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="animation-tools" className="border-none">
            <AccordionTrigger className="py-2 px-2 hover:text-cyberpunk-neon-blue">
              Image to Video Generators
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-1">
                {animationTools.map((tool) => (
                  <DropdownMenuItem key={tool.name} asChild>
                    <a 
                      href={tool.href} 
                      className="cursor-pointer py-2 px-4 hover:bg-cyberpunk-dark hover:text-cyberpunk-neon-blue"
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
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AnimationToolsDropdown;
