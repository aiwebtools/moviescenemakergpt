
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

  const musicTools: AnimationTool[] = [
    { name: 'SUNO Music Generator', href: 'https://suno.com/invite/@aiwebtools' },
    { name: 'Eleven Labs Voice & Sound Generator', href: 'https://elevenlabs.io/?from=kennybastian5304' },
  ];

  if (variant === 'mobile') {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="animation-tools-mobile" className="border-none">
          <AccordionTrigger className="text-white hover:text-cyberpunk-neon-blue py-2 font-medium">
            Animate Your Scenes
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              {animationTools.map((tool) => (
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
        
        <AccordionItem value="music-fx-tools-mobile" className="border-none">
          <AccordionTrigger className="text-white hover:text-cyberpunk-neon-blue py-2 font-medium">
            Music & FX Generation
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              {musicTools.map((tool) => (
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
      </Accordion>
    );
  }

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
          <AccordionItem value="animation-tools" className="border-none">
            <AccordionTrigger className="py-2 px-2 hover:text-cyberpunk-neon-blue font-medium">
              Image to Video Generators
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-1">
                {animationTools.map((tool) => (
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
          
          <AccordionItem value="music-fx-tools" className="border-none">
            <AccordionTrigger className="py-2 px-2 hover:text-cyberpunk-neon-blue font-medium">
              Music & FX Generation
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-1">
                {musicTools.map((tool) => (
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
        </Accordion>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AnimationToolsDropdown;
