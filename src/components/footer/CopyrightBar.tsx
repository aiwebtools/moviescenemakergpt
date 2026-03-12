
import React from 'react';
import { ExternalLink } from 'lucide-react';

const CopyrightBar: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-gray-800 pt-6 mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © {currentYear} <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-cyberpunk-neon-blue transition-colors font-medium" target="_blank" rel="noopener noreferrer">AI WEB TOOLS LLC</a> All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a href="https://www.aiwebtools.ai" className="interactive-link text-gray-400 text-sm flex items-center gap-1" target="_blank" rel="noopener noreferrer">
            Visit AiWebTools.Ai 
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CopyrightBar;
