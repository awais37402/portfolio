import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = './Awais.pdf'; // Path to the PDF in the public folder
    link.download = 'Awais.pdf'; // The name for the downloaded file
    link.click();
  };
  

  return (
    <section className="hero">
      <div className="hero-content">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">Awais</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A Web Developer & Graphic Designer
        </motion.p>

        {/* Description */}
        <motion.p
          className="description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Crafting Stunning Websites and Designs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="#projects">
            <button className="btn-primary">View Projects</button>
          </a>

          {/* Download CV Button */}
          <button className="btn-secondary" onClick={downloadResume}>
            Download CV
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="social-icons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a href="#linkedin" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#github" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="#facebook" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#whatsapp" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        ↓ Scroll Down
      </motion.div>
    </section>
  );
};

export default Hero;
