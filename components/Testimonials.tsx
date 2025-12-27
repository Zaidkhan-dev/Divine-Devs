import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "CEO, TechFlow",
      content: "Divine Devs transformed our outdated platform into a cutting-edge experience. The attention to detail is simply unmatched.",
      image: "https://picsum.photos/100/100?random=10"
    },
    {
      id: 2,
      name: "Michael Ross",
      role: "Founder, Artistry",
      content: "Elegant, fast, and incredibly professional. They understood our vision perfectly and executed it better than we imagined.",
      image: "https://picsum.photos/100/100?random=11"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Marketing Director, Solace",
      content: "Working with them was a breeze. The new site has increased our conversion rate by 150% in just two months.",
      image: "https://picsum.photos/100/100?random=12"
    }
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Client Stories</h2>
          <p className="text-slate-400">Trusted by innovative companies worldwide.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-background/50 border border-white/5 p-8 rounded-2xl relative shadow-xl backdrop-blur-sm"
            >
              <Quote className="w-10 h-10 text-violet-500/20 absolute top-6 right-6" />
              <p className="text-slate-300 mb-8 leading-relaxed relative z-10">"{item.content}"</p>
              
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-slate-500 text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;