import React, { useEffect, useState } from "react";
import "./Hero.css";
import profileImage from "../assets/awais.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      {/* Left Content */}
      <div className={`hero-text ${isVisible ? "show-left" : ""}`}>
        <div className="intro-badge">
          <span className="badge-text">Full Stack Developer & Designer</span>
          <div className="badge-glow"></div>
        </div>
        <h1>
          Crafting <span className="gradient-text">Digital</span> Experiences
          <br />
          That <span className="gradient-text">Inspire</span>
        </h1>
        <p className="hero-description">
          Hi, I'm <span className="name-highlight">Awais</span>! I build immersive web applications and 
          pixel-perfect designs that drive engagement and business growth. 
          With over 3 years of experience transforming ideas into reality.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-gradient">
            <span>Let's Collaborate</span>
            <div className="hover-effect"></div>
          </a>
          <a href="#projects" className="btn-outline">
            <span>View Portfolio</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number" data-count="50">25</span>
            <p className="stat-label">Projects</p>
          </div>
          <div className="stat-item">
            <span className="stat-number" data-count="25">20</span>
            <p className="stat-label">Clients</p>
          </div>
          <div className="stat-item">
            <span className="stat-number" data-count="120">80</span>
            <p className="stat-label">Designs</p>
          </div>
        </div>
      </div>

      {/* Right Image with Icons */}
      <div className={`hero-image ${isVisible ? "show-right" : ""}`}>
        <div className="image-container">
          <img src={profileImage} alt="Profile" className="profile-pic" />
          <div className="image-glow"></div>
        </div>
        <div className="tech-bubble react">React</div>
        <div className="tech-bubble node">Node.js</div>
        <div className="tech-bubble ui">UI/UX</div>
      </div>
    </section>
  );
};

export default Hero;