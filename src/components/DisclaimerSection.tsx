
import React from 'react';

const DisclaimerSection: React.FC = () => {
  return (
    <section id="disclaimer" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyberpunk-heading inline-block">Legal Disclaimer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Important information about using our service
          </p>
        </div>
        
        <div className="cyberpunk-card p-8 max-w-4xl mx-auto">
          <div className="space-y-6 text-left">
            <h3 className="text-xl font-bold text-cyberpunk-neon-blue">Usage Terms</h3>
            <p className="text-gray-300">
              Movie Scene Maker GPT ("the Service") is provided for entertainment and creative purposes only. By using the Service, you agree to these terms and conditions.
            </p>
            
            <h3 className="text-xl font-bold text-cyberpunk-neon-blue">Image Rights & Privacy</h3>
            <p className="text-gray-300">
              When you upload images to the Service, you retain all rights to your original content. Images uploaded are used solely for the purpose of creating personalized movie scenes during your session and are not stored permanently. Your privacy is important to us, and we do not share your images with third parties.
            </p>
            
            <h3 className="text-xl font-bold text-cyberpunk-neon-blue">Content Ownership</h3>
            <p className="text-gray-300">
              The AI-generated content created through the Service is provided for personal use. You are granted a non-exclusive license to use, share, and modify the generated content for personal, non-commercial purposes. For commercial use, additional licensing may be required.
            </p>
            
            <h3 className="text-xl font-bold text-cyberpunk-neon-blue">Prohibited Uses</h3>
            <p className="text-gray-300">
              You agree not to use the Service to create content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable. The Service may not be used to generate content that infringes on copyrights, trademarks, or other intellectual property rights.
            </p>
            
            <h3 className="text-xl font-bold text-cyberpunk-neon-blue">Limitation of Liability</h3>
            <p className="text-gray-300">
              AI WEB TOOLS LLC and its affiliates are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Service. The Service is provided "as is" without warranties of any kind, either express or implied.
            </p>
            
            <h3 className="text-xl font-bold text-cyberpunk-neon-blue">Third-Party Integration</h3>
            <p className="text-gray-300">
              The Service may suggest third-party tools such as Sora for animation purposes. We are not affiliated with these third-party services and bear no responsibility for your interactions with them. Use of such services is subject to their respective terms and conditions.
            </p>
            
            <h3 className="text-xl font-bold text-cyberpunk-neon-blue">Changes to Terms</h3>
            <p className="text-gray-300">
              We reserve the right to update or modify these terms at any time without prior notice. Continued use of the Service after any changes indicates your acceptance of the new terms.
            </p>
            
            <p className="text-gray-400 italic text-sm mt-8">
              Last updated: May 1, 2025. By using Movie Scene Maker GPT, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
