
import React, { useMemo } from 'react';
import { animationToolsData } from '@/data/animationTools';
import MobileAnimationTools from './animation/MobileAnimationTools';
import DesktopAnimationTools from './animation/DesktopAnimationTools';

interface AnimationToolsDropdownProps {
  variant?: 'desktop' | 'mobile';
}

const AnimationToolsDropdown: React.FC<AnimationToolsDropdownProps> = ({ variant = 'desktop' }) => {
  // Use useMemo to prevent unnecessary recalculation of the animation tools data
  const toolCategories = useMemo(() => animationToolsData, []);
  
  if (variant === 'mobile') {
    return <MobileAnimationTools toolCategories={toolCategories} />;
  }

  return <DesktopAnimationTools toolCategories={toolCategories} />;
};

export default React.memo(AnimationToolsDropdown);
