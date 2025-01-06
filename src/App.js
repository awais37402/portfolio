import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
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

  useEffect(() => {
    // Create the stars container only once
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars-container';
    document.body.appendChild(starsContainer);

    // Generate stars dynamically
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`; // Random vertical position
      star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      starsContainer.appendChild(star);
    }

    // Generate leaves dynamically
    const leafCount = 30;
    for (let i = 0; i < leafCount; i++) {
      const leaf = document.createElement('div');
      leaf.className = 'leaf';
      leaf.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      leaf.style.animationDelay = `${Math.random() * 5}s`; // Random delay for each leaf
      starsContainer.appendChild(leaf);
    }

    // Clean up the generated elements when the component unmounts
    return () => {
      document.body.removeChild(starsContainer);
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
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
