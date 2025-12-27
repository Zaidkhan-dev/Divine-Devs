import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, RefreshCw, PenTool } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Website Development",
      description: "Custom-coded websites using React, Next.js, and modern frameworks for unmatched performance.",
      icon: <Code2 className="w-8 h-8" />
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Intuitive, accessible, and aesthetically pleasing interfaces designed for human interaction.",
      icon: <Palette className="w-8 h-8" />
    },
    {
      id: 3,
      title: "Website Redesign",
      description: "Transform your outdated site into a modern, responsive, and high-converting masterpiece.",
      icon: <RefreshCw className="w-8 h-8" />
    },
    {
      id: 4,
      title: "Branding & Logos",
      description: "Crafting unique visual identities that resonate with your target audience and tell your story.",
      icon: <PenTool className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />
        
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            We combine technical precision with creative flair to deliver exceptional results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -10, 
                transition: { type: "spring", stiffness: 300 } 
              }}
              className="group p-8 rounded-2xl glass-card relative overflow-hidden cursor-hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center text-violet-400 mb-6 group-hover:text-white group-hover:bg-violet-500 transition-colors duration-300 shadow-lg">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;