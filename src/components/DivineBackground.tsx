
import React, { useEffect, useRef } from 'react';

const DivineBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Divine particles
    const particles: Particle[] = [];
    const numberOfParticles = 150;
    
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      alpha: number;
      pulse: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.directionX = (Math.random() - 0.5) * 0.8;
        this.directionY = (Math.random() - 0.5) * 0.8;
        this.size = Math.random() * 4 + 1;
        this.alpha = Math.random() * 0.8 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
        
        // Divine colors - golds, whites, celestial blues
        const colors = ['#FFD700', '#FFF8DC', '#F0F8FF', '#E6E6FA', '#FFFACD', '#F5F5DC'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        // Floating movement
        this.x += this.directionX;
        this.y += this.directionY;
        this.pulse += 0.02;
        
        // Wrap around screen
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.y > canvas.height + 50) this.y = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        
        this.draw();
      }
      
      draw() {
        if (!ctx) return;
        
        const pulseAlpha = this.alpha + Math.sin(this.pulse) * 0.3;
        
        ctx.save();
        ctx.globalAlpha = pulseAlpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Divine glow
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.fill();
        
        ctx.restore();
      }
    }
    
    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      
      // Create divine gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(25, 25, 112, 0.1)');
      gradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.05)');
      gradient.addColorStop(1, 'rgba(147, 112, 219, 0.1)');
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      particles.forEach(particle => particle.update());
      
      // Draw connecting divine rays
      drawDivineConnections();
    }
    
    function drawDivineConnections() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const distance = Math.sqrt(
            Math.pow(particles[a].x - particles[b].x, 2) +
            Math.pow(particles[a].y - particles[b].y, 2)
          );
          
          if (distance < 120) {
            const opacity = 1 - (distance / 120);
            ctx.strokeStyle = `rgba(255, 215, 0, ${opacity * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10 bg-transparent opacity-80"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default DivineBackground;
