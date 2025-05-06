
import React from 'react';
import Logo from '../Logo';

const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col items-start">
      <Logo size="md" className="mb-6 inline-block" />
      <p className="text-gray-400 mb-4 text-left">
        Transform yourself into the star of your own cinematic adventure with AI-powered scene creation.
      </p>
    </div>
  );
};

export default AboutSection;
