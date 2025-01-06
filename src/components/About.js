import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import awaisImage from '../assets/awais.png'; // Importing the image

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="about-img"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={awaisImage} alt="Awais" /> {/* Using the imported image */}
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            I am a passionate <span className="highlight">Web Developer</span> and <span className="highlight">Graphic Designer</span> with several years of experience. I specialize in creating modern and interactive web experiences, using cutting-edge technologies and design principles to deliver visually stunning and user-friendly websites.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
