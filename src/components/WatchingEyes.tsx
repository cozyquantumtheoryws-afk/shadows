'use client';

import { useEffect, useState } from 'react';

export default function WatchingEyes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate pupil position based on mouse (subtle tracking)
  const calculatePupilPosition = (eyeX: number, eyeY: number) => {
    const maxOffset = 4; // Maximum pixels the pupil can move (smaller for smaller eyes)
    const dx = mousePosition.x - eyeX;
    const dy = mousePosition.y - eyeY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance === 0) return { x: 0, y: 0 };
    
    const x = (dx / distance) * Math.min(maxOffset, distance / 100);
    const y = (dy / distance) * Math.min(maxOffset, distance / 100);
    
    return { x, y };
  };

  const leftEyePos = calculatePupilPosition(200, 400);
  const rightEyePos = calculatePupilPosition(280, 400);

  return (
    <>
      {/* Left Eye */}
      <div 
        className="fixed right-[200px] top-[160px] pointer-events-none z-0 opacity-50"
        style={{
          animation: 'eyeFloat 6s ease-in-out infinite, eyeFade 8s ease-in-out infinite'
        }}
      >
        {/* Mist effect */}
        <div className="absolute -inset-8 bg-red-950/10 rounded-full blur-2xl animate-pulse" />
        
        {/* Eye white/sclera */}
        <div className="relative w-8 h-5 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 rounded-[50%] border border-red-950/30">
          {/* Pupil */}
          <div 
            className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-red-600 to-red-900 shadow-[0_0_15px_rgba(139,0,0,0.8)]"
            style={{
              transform: `translate(calc(-50% + ${leftEyePos.x}px), calc(-50% + ${leftEyePos.y}px))`
            }}
          >
            {/* Highlight */}
            <div className="absolute top-1 left-1 w-1 h-1 bg-red-300 rounded-full opacity-60" />
          </div>
        </div>
      </div>

      {/* Right Eye */}
      <div 
        className="fixed right-[160px] top-[160px] pointer-events-none z-0 opacity-50"
        style={{
          animation: 'eyeFloat 6s ease-in-out infinite 0.5s, eyeFade 8s ease-in-out infinite 0.5s'
        }}
      >
        {/* Mist effect */}
        <div className="absolute -inset-8 bg-red-950/10 rounded-full blur-2xl animate-pulse" />
        
        {/* Eye white/sclera */}
        <div className="relative w-8 h-5 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 rounded-[50%] border border-red-950/30">
          {/* Pupil */}
          <div 
            className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-red-600 to-red-900 shadow-[0_0_15px_rgba(139,0,0,0.8)]"
            style={{
              transform: `translate(calc(-50% + ${rightEyePos.x}px), calc(-50% + ${rightEyePos.y}px))`
            }}
          >
            {/* Highlight */}
            <div className="absolute top-1 left-1 w-1 h-1 bg-red-300 rounded-full opacity-60" />
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes eyeFloat {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(3px) translateY(2px);
          }
        }
        
        @keyframes eyeFade {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </>
  );
}
