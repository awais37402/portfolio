import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import './styles.css';
import './App.css';

import { FaArrowUp } from 'react-icons/fa'; // Professional arrow icon

function App() {
  const [showScroll, setShowScroll] = useState(false);

  // Show the scroll button when the user scrolls down
  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />

      {/* Scroll to Top Button */}
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;
