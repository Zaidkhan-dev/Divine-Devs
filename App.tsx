import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-slate-300 relative selection:bg-violet-500/30">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;