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
import Graphics from "./components/Graphics";
import './styles.css';
import './App.css';

import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

function App() {
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  // Show the WhatsApp icon when the user scrolls down
  const handleScroll = () => {
    setShowWhatsapp(window.scrollY > 300); // Change to true when scroll position is more than 300px
  };

  // Scroll to WhatsApp chat (you can change the link based on your WhatsApp number)
  const openWhatsapp = () => {
    window.open("https://wa.me/923213762964", "_blank"); // Your WhatsApp number
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
      <Graphics />
      <Skills />
      <Testimonial />
      <Contact />
      <Footer />

      {/* WhatsApp Icon with Animation */}
      <button
        className={`whatsapp-icon ${showWhatsapp ? 'show' : ''}`}
        onClick={openWhatsapp}
      >
        <FaWhatsapp />
      </button>
    </div>
  );
}

export default App;
