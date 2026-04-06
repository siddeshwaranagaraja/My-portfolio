import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isPointer ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#fff',
          pointerEvents: 'none',
          zIndex: 10001,
          mixBlendMode: 'difference',
        }}
      />

      {/* Outer ring */}
      <motion.div
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          scale: isPointer ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: `1.5px solid ${isPointer ? 'rgba(108,92,231,0.6)' : 'rgba(255,255,255,0.3)'}`,
          background: isPointer ? 'rgba(108,92,231,0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 10000,
          mixBlendMode: 'difference',
          transition: 'border-color 0.3s, background 0.3s',
        }}
      />

      <style jsx global>{`
        @media (min-width: 769px) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
