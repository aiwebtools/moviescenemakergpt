
import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DiscoverMoreTools: React.FC = () => {
  return (
    <div className="container mx-auto px-4 mb-12">
      <div className="bg-gradient-to-r from-cyberpunk-blue/20 to-cyberpunk-purple/20 backdrop-blur-sm rounded-lg p-6 border border-cyberpunk-blue/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Discover More AI Tools</h3>
            <p className="text-gray-300">Explore our complete collection of AI-powered creation tools.</p>
          </div>
          <Button 
            asChild 
            size="lg"
            className="neon-button font-bold tracking-wide"
          >
            <a 
              href="https://www.aiwebtools.ai" 
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              More AI Web Tools
              <ExternalLink size={18} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMoreTools;
