import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Create Something <span className="text-violet-400">Extraordinary</span></h2>
            <p className="text-slate-400 text-lg mb-12 font-light">
              Ready to elevate your brand? Schedule a consultation with us and let's discuss how we can bring your vision to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-violet-400">
                    <Mail className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-white font-medium mb-1">Email Us</h4>
                    <p className="text-slate-400">opzaid4@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-violet-400">
                    <Phone className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-white font-medium mb-1">Call Us</h4>
                    <p className="text-slate-400">+91 9335652804</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg text-violet-400">
                    <MapPin className="w-6 h-6" />
                </div>
                <div>
                    <h4 className="text-white font-medium mb-1">Visit Us</h4>
                    <p className="text-slate-400">123 Innovation Dr,<br/>San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-1">Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors cursor-hover" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-slate-400 ml-1">Email</label>
                  <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors cursor-hover" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-1">Subject</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors cursor-hover appearance-none">
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Brand Identity</option>
                    <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-400 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors cursor-hover" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-violet-500/25 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-hover">
                Book Free Consultation
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;