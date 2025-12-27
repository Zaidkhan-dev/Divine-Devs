import React from 'react';
import { motion } from 'framer-motion';
import { StatItem } from '../types';

const WhyChooseUs: React.FC = () => {
  const stats: StatItem[] = [
    { id: 1, label: "Projects Delivered", value: "100", suffix: "+" },
    { id: 2, label: "Client Satisfaction", value: "98", suffix: "%" },
    { id: 3, label: "Years Experience", value: "8", suffix: "+" },
    { id: 4, label: "Ongoing Support", value: "24", suffix: "/7" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-background border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 lg:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-4"
            >
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-2 font-serif">
                {stat.value}<span className="text-violet-500 text-3xl">{stat.suffix}</span>
              </h3>
              <p className="text-sm tracking-widest text-slate-500 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;