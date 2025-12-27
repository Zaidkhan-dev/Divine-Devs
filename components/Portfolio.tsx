import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const projects: PortfolioItem[] = [
    {
      id: 1,
      title: "FinTech Dashboard",
      category: "Web Application",
      image: "https://picsum.photos/800/600?random=1",
      description: "A comprehensive financial dashboard for tracking assets, displaying real-time stock data, and managing crypto portfolios with a sleek dark mode UI."
    },
    {
      id: 2,
      title: "Lumina Fashion",
      category: "E-Commerce",
      image: "https://picsum.photos/800/600?random=2",
      description: "High-end fashion e-commerce store with seamless checkout, minimal product displays, and immersive lookbooks."
    },
    {
      id: 3,
      title: "Architectura",
      category: "Corporate Site",
      image: "https://picsum.photos/800/600?random=3",
      description: "Portfolio website for an award-winning architectural firm, focusing on large imagery and subtle typography."
    },
    {
      id: 4,
      title: "Neon Nexus",
      category: "Brand Identity",
      image: "https://picsum.photos/800/600?random=4",
      description: "Complete rebranding including logo design, color palette, and digital assets for a cyberpunk-themed gaming startup."
    },
    {
      id: 5,
      title: "EcoStream",
      category: "Mobile App Design",
      image: "https://picsum.photos/800/600?random=5",
      description: "UI/UX design for a sustainability tracking app, encouraging users to reduce their carbon footprint through gamification."
    },
    {
      id: 6,
      title: "Zenith Health",
      category: "Medical Platform",
      image: "https://picsum.photos/800/600?random=6",
      description: "A patient portal and appointment scheduling system designed with accessibility and calmness in mind."
    }
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Selected Works</h2>
            <p className="text-slate-400">A curation of our finest digital experiences.</p>
          </div>
          <button className="hidden md:block text-violet-400 hover:text-white transition-colors cursor-hover mt-4 md:mt-0">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, rotateX: 2, rotateY: 2 }}
              className="group cursor-hover relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-violet-400 text-sm font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</span>
                <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              <motion.div 
                layoutId={`project-${selectedId}`}
                className="relative bg-surface w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <div className="relative aspect-video">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-white hover:text-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-violet-400 text-sm font-medium uppercase tracking-wider">{selectedProject.category}</span>
                        <h3 className="text-3xl font-bold text-white mt-1">{selectedProject.title}</h3>
                    </div>
                    <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        Visit Site <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg font-light">
                    {selectedProject.description}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;