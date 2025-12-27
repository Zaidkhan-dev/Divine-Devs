import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    // Check if device is touch
    const checkTouch = () => {
        setIsHidden(window.matchMedia("(pointer: coarse)").matches);
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    const handleLinkHoverEvents = () => {
      const hoverables = document.querySelectorAll('a, button, input, textarea, select, .cursor-hover');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    handleLinkHoverEvents();
    
    // Re-bind on DOM changes (simple observer for SPA navigation changes)
    const observer = new MutationObserver(handleLinkHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener("resize", checkTouch);
      observer.disconnect();
    };
  }, []);

  if (isHidden) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: x - 16,
          y: y - 16,
          scale: linkHovered ? 1.5 : clicked ? 0.9 : 1,
          opacity: 1
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: x - 4,
          y: y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50, // Faster follow for the dot
          mass: 0.1
        }}
      />
    </>
  );
};

export default CustomCursor;