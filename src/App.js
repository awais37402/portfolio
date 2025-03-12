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
import "./styles.css";
import "./App.css";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showWhatsapp, setShowWhatsapp] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false); // Hide splash screen after 5 seconds
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleScroll = () => {
    setShowWhatsapp(window.scrollY > 300);
  };

  const openWhatsapp = () => {
    window.open("https://wa.me/923213762964", "_blank");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
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

          <button
            className={`whatsapp-icon ${showWhatsapp ? "show" : ""}`}
            onClick={openWhatsapp}
          >
            <FaWhatsapp />
          </button>
        </>
      )}
    </div>
  );
}

export default App;
