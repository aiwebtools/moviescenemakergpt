
import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particles config
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    
    // Mouse position
    let mouse = {
      x: 0,
      y: 0,
      radius: 150
    };
    
    window.addEventListener('mousemove', function(event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.directionX = (Math.random() - 0.5) * 1.5;
        this.directionY = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 3 + 1;
        
        // Cyberpunk colors
        const colors = ['#00F0FF', '#D946EF', '#8B5CF6', '#1EAEDB'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        // Check if in bounds
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        
        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 3;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 3;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 3;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 3;
          }
        }
        
        // Move particles
        this.x += this.directionX;
        this.y += this.directionY;
        
        // Draw particles
        this.draw();
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
      }
    }
    
    // Create particles
    function init() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines
      connect();
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
    }
    
    // Connect nearby particles with lines
    function connect() {
      const opacityValue = 0.8;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const distance = 
            (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);
            
          if (distance < (canvas.width/7) * (canvas.height/7)) {
            if (!ctx) return;
            ctx.strokeStyle = `rgba(30, 174, 219, ${opacityValue - (distance/20000)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-10 bg-transparent"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default InteractiveBackground;
