import React, { useState, useEffect, useRef } from 'react';
import './About.css';
import awaisImage from '../assets/awais.png';

const About = () => {
  const [isInView, setIsInView] = useState(false); // Track if the section is in view
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-container">
        {/* About Image */}
        <div className="about-img">
          <img src={awaisImage} alt="Awais" />
        </div>

        {/* About Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate <span className="highlight">Web Developer</span> and{' '}
            <span className="highlight">Graphic Designer</span> with several years of experience. I specialize in creating modern
            and interactive web experiences, using cutting-edge technologies and design principles to deliver visually stunning and
            user-friendly websites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
