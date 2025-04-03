import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp, FaArrowDown } from "react-icons/fa";
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
import VideoPortfolio from "./components/VideoPortfolio";
import "./styles.css";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [showScrollArrows, setShowScrollArrows] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
      setShowScrollArrows(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open WhatsApp chat
  const openWhatsapp = () => {
    window.open("https://wa.me/923213762964", "_blank");
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Scroll to bottom function
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  };

  // Prevent background scrolling when lightbox is open
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
          <VideoPortfolio onLightboxToggle={setIsLightboxOpen} />
          <Graphics />
          <Skills />
          <Testimonial />
          <Contact />
          <Footer />

          {/* WhatsApp Floating Button */}
          {!isLightboxOpen && (
            <button
              className={`whatsapp-icon ${showWhatsapp ? "show" : ""}`}
              onClick={openWhatsapp}
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp />
            </button>
          )}

          {/* Scroll Arrows */}
          {!isLightboxOpen && (
            <div className={`scroll-arrows ${showScrollArrows ? "visible" : ""}`}>
              <button 
                className="scroll-arrow up" 
                onClick={scrollToTop}
                aria-label="Scroll to top"
              >
                <FaArrowUp />
              </button>
              <button 
                className="scroll-arrow down" 
                onClick={scrollToBottom}
                aria-label="Scroll to bottom"
              >
                <FaArrowDown />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
