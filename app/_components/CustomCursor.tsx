'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  
  const innerCursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(null);
  
  const mouse = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const outer = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    // Only enable custom cursor if the device has a fine pointer (mouse/trackpad, not touch)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsTouchDevice(!mediaQuery.matches);

    if (!mediaQuery.matches) return;

    // Hide default cursor across the entire site
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Check if the user is hovering over any interactive element
      const target = e.target as HTMLElement;
      isHovering.current = !!target.closest('a, button, [role="button"], input, select, textarea');
    };

    const render = () => {
      // Inner cursor: instantly snaps to exact mouse coordinates
      if (innerCursorRef.current) {
        innerCursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      // Outer cursor: smoothly interpolates (chases) the mouse
      const speed = 0.15;
      outer.current.x += (mouse.current.x - outer.current.x) * speed;
      outer.current.y += (mouse.current.y - outer.current.y) * speed;

      if (outerCursorRef.current) {
        // Dynamic 3D Tilt based on velocity (difference between current mouse and outer ring)
        const vX = mouse.current.x - outer.current.x;
        const vY = mouse.current.y - outer.current.y;
        
        // Calculate physics values
        const scale = isHovering.current ? 1.8 : 1;
        const opacity = isHovering.current ? 0.9 : 0.6;
        const rotateY = vX * 1.5; // Tilt horizontally
        const rotateX = -vY * 1.5; // Tilt vertically

        // Apply 3D Transforms
        outerCursorRef.current.style.transform = 
          `translate3d(${outer.current.x}px, ${outer.current.y}px, 0) scale(${scale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        outerCursorRef.current.style.opacity = opacity.toString();
        
        // Dynamic Styling on Hover
        if (isHovering.current) {
           outerCursorRef.current.style.borderColor = '#06b6d4'; // Cyan
           outerCursorRef.current.style.background = 'rgba(6, 182, 212, 0.15)';
           outerCursorRef.current.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.6), inset 0 0 20px rgba(6, 182, 212, 0.4)';
        } else {
           outerCursorRef.current.style.borderColor = '#3b82f6'; // Blue
           outerCursorRef.current.style.background = 'transparent';
           outerCursorRef.current.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(59, 130, 246, 0.2)';
        }
      }

      requestRef.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      document.body.style.cursor = 'auto'; // Reset cursor on unmount
    };
  }, []);

  if (isTouchDevice) return null; // Fallback to totally normal behavior on mobile/touch

  return (
    <div style={{ pointerEvents: 'none', zIndex: 99999, position: 'fixed', inset: 0, overflow: 'hidden' }}>
      {/* 3D Container to enable perspective */}
      <div style={{ perspective: '800px', width: '100%', height: '100%' }}>
        {/* Outer physics ring */}
        <div 
          ref={outerCursorRef}
          style={{
            position: 'absolute',
            top: -24,
            left: -24,
            width: 48,
            height: 48,
            borderRadius: '50%',
            border: '2px solid #3b82f6',
            transition: 'border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease',
            backdropFilter: 'blur(2px)', // Adds a glassmorphism feel
            transformStyle: 'preserve-3d',
            willChange: 'transform',
          }}
        />
        
        {/* Inner precision dot */}
        <div 
          ref={innerCursorRef}
          style={{
            position: 'absolute',
            top: -4,
            left: -4,
            width: 8,
            height: 8,
            backgroundColor: '#06b6d4',
            borderRadius: '50%',
            boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4',
            willChange: 'transform',
            zIndex: 10,
          }}
        />
      </div>

      {/* Force hide default cursor on all interactive elements so they don't pop back in */}
      <style>{`
        body, a, button, [role="button"], input, select, textarea {
          cursor: none !important;
        }
      `}</style>
    </div>
  );
}
