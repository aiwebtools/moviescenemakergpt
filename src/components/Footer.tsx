
import React from 'react';
import Logo from './Logo';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyberpunk-darker pt-16 pb-8 relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyberpunk-blue via-cyberpunk-purple to-cyberpunk-pink" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo size="md" className="mb-6 inline-block" />
            <p className="text-gray-400 mb-4">
              Transform yourself into the star of your own cinematic adventure with AI-powered scene creation.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://chatgpt.com/g/g-680ea46ceb708191b9dcb9a4d2983f4f-movie-scene-maker-gpt" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Movie Scene Maker GPT
                </a>
              </li>
              <li>
                <a href="https://moviescriptwritergpt.lovable.app/?via=aiwebtools" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Movie Script Writer GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://openai.com/policies/privacy-policy/" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:+14758008096" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors flex items-center gap-2">
                  <Phone size={16} />
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors flex items-center gap-2">
                  <Mail size={16} />
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <a
                href="https://www.aiwebtools.ai"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyberpunk-blue to-cyberpunk-purple text-white hover:from-cyberpunk-purple hover:to-cyberpunk-pink transition-all duration-300"
              >
                More AI Tools
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} <a href="https://www.aiwebtools.ai" className="hover:text-cyberpunk-neon-blue transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://www.aiwebtools.ai" className="text-gray-400 hover:text-cyberpunk-neon-blue transition-colors text-sm">
                Visit AiWebTools.Ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
