
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ConsentPopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted
    const hasAccepted = localStorage.getItem('consent-accepted');
    
    if (!hasAccepted) {
      // Show the dialog after a short delay
      const timer = setTimeout(() => {
        setOpen(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('consent-accepted', 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="cyberpunk-card border-0 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">Welcome to Movie Scene Maker GPT</DialogTitle>
          <DialogDescription>
            Before you begin your cinematic journey
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-gray-300 mb-4">
            By using Movie Scene Maker GPT, you agree to our:
          </p>
          
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Privacy terms - any images uploaded are used only during your session</li>
            <li>Content guidelines - created for entertainment purposes only</li>
            <li>Terms of service - as outlined in our legal disclaimer</li>
          </ul>
          
          <p className="mt-4 text-gray-300">
            Click "I Agree" to continue and start creating your cinematic adventure.
          </p>
        </div>
        
        <DialogFooter>
          <Button 
            onClick={handleAccept} 
            className="w-full neon-button"
          >
            I Agree
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentPopup;
