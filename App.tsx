import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import BentoPortfolio from './components/BentoPortfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="font-sans text-slate-50 bg-black min-h-screen selection:bg-brand-500 selection:text-white cursor-none">
      <CustomCursor />
      <Header />
      <main role="main" aria-label="Contenu principal du portfolio">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <BentoPortfolio />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <AIChat />
    </div>
  );
}

export default App;