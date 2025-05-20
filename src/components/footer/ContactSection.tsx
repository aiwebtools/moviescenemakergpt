
import React from 'react';
import { Mail, Phone, ArrowRight, Film, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
        Contact
        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyberpunk-blue"></span>
      </h3>
      <ul className="space-y-3 w-full text-left">
        <li>
          <a href="tel:+14758008096" 
             className="interactive-link text-gray-400 flex items-center gap-2"
             target="_blank"
             rel="noopener noreferrer">
            <Phone size={16} className="text-cyberpunk-blue" />
            (475) 800-8096
            <ExternalLink size={14} className="ml-auto" />
          </a>
        </li>
        <li>
          <a href="mailto:Contact@ai-webtools.com" 
             className="interactive-link text-gray-400 flex items-center gap-2"
             target="_blank"
             rel="noopener noreferrer">
            <Mail size={16} className="text-cyberpunk-blue" />
            Contact@ai-webtools.com
            <ExternalLink size={14} className="ml-auto" />
          </a>
        </li>
      </ul>
      
      {/* AI Tools Button */}
      <div className="mt-6 w-full">
        <a
          href="https://www.aiwebtools.ai"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white hover:from-cyberpunk-purple hover:to-cyberpunk-pink transition-all duration-300 shadow-glow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Film size={16} />
          More AI Tools
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
