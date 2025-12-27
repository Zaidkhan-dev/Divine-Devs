import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-1">Divine Devs</h3>
            <p className="text-slate-500 text-sm">Crafted with Quality.</p>
        </div>

        <div className="flex gap-6">
            {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors cursor-hover">
                    <Icon className="w-5 h-5" />
                </a>
            ))}
        </div>

        <div className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Divine Devs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;