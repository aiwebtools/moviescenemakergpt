
import React from 'react';
import { Film, FileText, Shield, ExternalLink, Music } from 'lucide-react';

const QuickLinks: React.FC = () => {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
        Quick Links
        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyberpunk-blue"></span>
      </h3>
      <ul className="space-y-3 w-full text-left">
        <li>
          <a href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt" 
             className="interactive-link text-gray-400 flex items-center gap-2"
             target="_blank"
             rel="noopener noreferrer">
            <Film size={16} className="text-cyberpunk-blue" />
            Movie Scene Maker GPT
          </a>
        </li>
        <li>
          <a href="https://chatgpt.com/g/g-681a201fe69c8191b99e1636be90139e-commercial-scene-maker-gpt" 
             className="interactive-link text-gray-400 flex items-center gap-2"
             target="_blank"
             rel="noopener noreferrer">
            <Film size={16} className="text-cyberpunk-blue" />
            Commercial Scene Maker GPT
          </a>
        </li>
        <li>
          <a href="https://moviescriptwritergpt.lovable.app/?via=aiwebtools" 
             className="interactive-link text-gray-400 flex items-center gap-2"
             target="_blank"
             rel="noopener noreferrer">
            <FileText size={16} className="text-cyberpunk-blue" />
            Movie Script Writer GPT
          </a>
        </li>
        <li>
          <a href="https://chatgpt.com/g/g-6814ab172de081918023593ce10d791d-movie-trailer-poster-gpt" 
             className="interactive-link text-gray-400 flex items-center gap-2"
             target="_blank"
             rel="noopener noreferrer">
            <Film size={16} className="text-cyberpunk-blue" />
            Movie Trailer Poster Maker
          </a>
        </li>
        <li>
          <a href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" 
             className="interactive-link text-gray-400 flex items-center gap-2"
             target="_blank"
             rel="noopener noreferrer">
            <Music size={16} className="text-cyberpunk-blue" />
            Music Video Maker GPT
          </a>
        </li>
        <li>
          <a href="#disclaimer" 
             className="interactive-link text-gray-400 flex items-center gap-2">
            <Shield size={16} className="text-cyberpunk-blue" />
            Disclaimer
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
