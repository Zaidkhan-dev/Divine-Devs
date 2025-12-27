import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    "Clean & Modern Design Architecture",
    "Lightning Fast Performance Optimization",
    "Conversion-First User Experience",
    "Scalable & Maintainable Codebases"
  ];

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden glass-card p-2"
             >
                <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt="Minimalist Architecture" 
                  className="w-full h-full object-cover rounded-xl opacity-80 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-8">
                    <p className="text-4xl font-serif italic text-white/90">Simplicity is the<br/>ultimate sophistication.</p>
                </div>
             </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Redefining the <span className="text-violet-400">Digital Standard</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
                At Divine Devs, we believe that a website is more than just code—it's your digital handshake. We strip away the unnecessary, focusing on elegance, speed, and clarity.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-violet-400" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;