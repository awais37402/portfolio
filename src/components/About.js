import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import awaisImage from '../assets/awais.png';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { root: null, threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="about-container">
        {/* About Image */}
        <div className={`about-img ${isInView ? 'slide-in-left' : ''}`}>
          <div className="img-border-glow">
            <img src={awaisImage} alt="Awais" />
          </div>
        </div>

        {/* About Text */}
        <div className={`about-text ${isInView ? 'slide-in-right' : ''}`}>
          <div className="section-header">
            <h2>About <span className="highlight">Me</span></h2>
          </div>
          <p>
            I am a passionate <span className="highlight">Web Developer</span> and{' '}
            <span className="highlight">Graphic Designer</span> with several years of experience.
            I specialize in creating modern and interactive web experiences, using cutting-edge
            technologies and design principles to deliver visually stunning and user-friendly websites.
          </p>
         
        </div>
      </div>
    </section>
  );
};

export default About;