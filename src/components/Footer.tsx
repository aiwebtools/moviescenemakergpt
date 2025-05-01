
import React from 'react';
import Logo from './Logo';
import { ArrowRight, Mail, Phone, Film, FileText, Info, Shield, Tool, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyberpunk-darker pt-16 pb-8 relative">
      {/* Top border - glowing effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-pink" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1 - About */}
          <div className="flex flex-col items-start">
            <Logo size="md" className="mb-6 inline-block" />
            <p className="text-gray-400 mb-4 text-left">
              Transform yourself into the star of your own cinematic adventure with AI-powered scene creation.
            </p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyberpunk-blue"></span>
            </h3>
            <ul className="space-y-3 w-full text-left">
              <li>
                <a href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt" 
                   className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors flex items-center gap-2 group">
                  <Film size={16} className="text-cyberpunk-blue group-hover:text-cyberpunk-neon-blue transition-colors" />
                  Movie Scene Maker GPT
                </a>
              </li>
              <li>
                <a href="https://moviescriptwritergpt.lovable.app/?via=aiwebtools" 
                   className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors flex items-center gap-2 group">
                  <FileText size={16} className="text-cyberpunk-blue group-hover:text-cyberpunk-neon-blue transition-colors" />
                  Movie Script Writer GPT
                </a>
              </li>
              <li>
                <a href="#faq" 
                   className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors flex items-center gap-2 group">
                  <Info size={16} className="text-cyberpunk-blue group-hover:text-cyberpunk-neon-blue transition-colors" />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" 
                   className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors flex items-center gap-2 group">
                  <Shield size={16} className="text-cyberpunk-blue group-hover:text-cyberpunk-neon-blue transition-colors" />
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Legal */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Legal
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyberpunk-blue"></span>
            </h3>
            <ul className="space-y-3 w-full text-left">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" 
                   className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors flex items-center gap-2 group">
                  <ExternalLink size={16} className="text-cyberpunk-blue group-hover:text-cyberpunk-neon-blue transition-colors" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" 
                   className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors flex items-center gap-2 group">
                  <ExternalLink size={16} className="text-cyberpunk-blue group-hover:text-cyberpunk-neon-blue transition-colors" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div className="flex flex-col items-start">
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-cyberpunk-blue"></span>
            </h3>
            <ul className="space-y-3 w-full text-left">
              <li>
                <a href="tel:+14758008096" 
                   className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors flex items-center gap-2 group">
                  <Phone size={16} className="text-cyberpunk-blue group-hover:text-cyberpunk-neon-blue transition-colors" />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" 
                   className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors flex items-center gap-2 group">
                  <Mail size={16} className="text-cyberpunk-blue group-hover:text-cyberpunk-neon-blue transition-colors" />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            {/* AI Tools Button */}
            <div className="mt-6 w-full">
              <a
                href="https://www.aiwebtools.ai"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white hover:from-cyberpunk-purple hover:to-cyberpunk-pink transition-all duration-300 shadow-glow"
              >
                <Tool size={16} />
                More AI Tools
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom footer - Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} <a href="https://www.aiwebtools.ai" className="hover:text-cyberpunk-neon-blue transition-colors font-medium">AI WEB TOOLS LLC</a> All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://www.aiwebtools.ai" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors text-sm flex items-center gap-1">
                Visit AiWebTools.Ai <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
