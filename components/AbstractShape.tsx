import React from 'react';
import { motion } from 'framer-motion';

// A sophisticated CSS 3D object to avoid heavy Three.js dependencies but look premium
const AbstractShape: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 perspective-1000">
      <motion.div
        className="relative w-full h-full transform-style-3d"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Creating a pseudo-sphere/cube structure with planes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent backdrop-blur-sm rounded-xl shadow-[0_0_30px_rgba(99,102,241,0.1)]"
            style={{
              transform: `rotateY(${i * 60}deg) translateZ(150px)`,
              backfaceVisibility: 'visible',
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`cross-${i}`}
            className="absolute inset-0 border border-blue-500/10"
            style={{
              transform: `rotateX(${i * 60}deg) translateZ(150px) scale(0.8)`,
              backfaceVisibility: 'visible',
            }}
          />
        ))}
        
        {/* Inner glowing core */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 -mt-16 -ml-16 bg-violet-500/20 rounded-full blur-xl animate-pulse transform-style-3d" />
      </motion.div>
    </div>
  );
};

export default AbstractShape;