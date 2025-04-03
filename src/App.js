import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";
import Graphics from "./components/Graphics";
import SplashScreen from "./components/SplashScreen";


import { FaWhatsapp } from "react-icons/fa";
import "./styles.css";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  // Hide splash screen after 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  // Show WhatsApp button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsapp(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open WhatsApp chat
  const openWhatsapp = () => {
    window.open("https://wa.me/923213762964", "_blank");
  };

  // Prevent background scrolling when lightbox is open
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLightboxOpen]);

  return (
    <div className={`app-container ${isLightboxOpen ? 'lightbox-open' : ''}`}>
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <>
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

          {/* WhatsApp Floating Button - hidden when lightbox is open */}
          {!isLightboxOpen && (
            <button
              className={`whatsapp-icon ${showWhatsapp ? "show" : ""}`}
              onClick={openWhatsapp}
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;
