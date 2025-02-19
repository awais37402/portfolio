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
  const [showWhatsapp, setShowWhatsapp] = useState(true); // Always show WhatsApp icon

  const openWhatsapp = () => {
    window.open("https://wa.me/923213762964", "_blank"); // Your WhatsApp number
  };

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

      {/* WhatsApp Icon - Positioned at the Top Right */}
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
