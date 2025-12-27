import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import AbstractShape from './AbstractShape';

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const element = document.getElementById('portfolio');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient & Particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0 pointer-events-none" />
      
      {/* Liquid Glass Blobs - Performance optimized morphing shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%] w-96 h-96 bg-violet-600/10 rounded-full blur-[80px] animate-liquid"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 60, 0],
            rotate: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-liquid"
        />
        {/* The "Liquid" surface layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/5 to-transparent backdrop-blur-[2px] opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl glass-card"
          >
            <span className="text-sm font-medium text-violet-300 tracking-wide uppercase relative z-10">Digital Excellence</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Divine <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Devs</span>
            <br />
            <span className="text-3xl md:text-5xl font-light text-slate-300">Modern Websites.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
            We design and build high-quality, fast, and visually appealing websites that help brands grow and leave a lasting impression.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors cursor-hover shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToWork}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:border-white transition-colors cursor-hover backdrop-blur-sm"
            >
              Our Work
            </motion.button>
          </div>
        </motion.div>

        {/* Right: 3D Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative h-[400px] lg:h-[600px] flex items-center justify-center perspective-1000"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent rounded-full filter blur-3xl opacity-30 animate-pulse" />
          <AbstractShape />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-slate-500 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;