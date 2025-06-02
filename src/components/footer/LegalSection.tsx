
import React from 'react';
import { ExternalLink } from 'lucide-react';

const LegalSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
        Legal
        <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-divine-gold"></span>
      </h3>
      <ul className="space-y-3 w-full text-left">
        <li>
          <a href="https://openai.com/policies/privacy-policy/" 
             className="interactive-link text-divine-light flex items-center gap-2"
             target="_blank"
             rel="noopener noreferrer">
            <ExternalLink size={16} className="text-divine-gold" />
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="https://aiwebtools.lovable.app/disclaimers" 
             className="interactive-link text-divine-light flex items-center gap-2"
             target="_blank"
             rel="noopener noreferrer">
            <ExternalLink size={16} className="text-divine-gold" />
            Terms of Service
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LegalSection;
