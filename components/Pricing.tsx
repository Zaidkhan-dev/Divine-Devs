import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PricingPlan } from '../types';

const Pricing: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      id: 1,
      name: "Basic",
      price: "$150",
      features: ["Custom UI/UX Design", "Mobile Responsive", "5 Pages", "Basic SEO", "1 Month Support"],
      recommended: false
    },
    {
      id: 2,
      name: "Professional",
      price: "$250",
      features: ["Advanced UI/UX", "CMS Integration", "10 Pages", "Advanced SEO", "Performance Optimization", "3 Months Support"],
      recommended: true
    },
    {
      id: 3,
      name: "Premium",
      price: "$350",
      features: ["Enterprise Architecture", "E-commerce Functionality", "Unlimited Pages", "Custom Animations", "API Integrations", "6 Months Support"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transparent Pricing</h2>
          <p className="text-slate-400">Invest in a digital presence that pays for itself.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded-2xl border ${
                plan.recommended 
                  ? 'bg-white/5 border-violet-500 shadow-[0_0_30px_rgba(139,92,246,0.15)]' 
                  : 'bg-surface border-white/5'
              } flex flex-col hover:-translate-y-2 transition-transform duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-slate-300 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-500 text-sm">/project</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-400 text-sm">
                    <Check className="w-4 h-4 text-violet-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-all cursor-hover ${
                plan.recommended 
                  ? 'bg-white text-black hover:bg-slate-200' 
                  : 'border border-white/20 text-white hover:border-white hover:bg-white/5'
              }`}>
                Select Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;