import React, { useEffect, useState } from "react";
import "./Hero.css";
import profileImage from "../assets/awais.png"; // Import profile image

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
    handleScroll(); // Check immediately if in view
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      {/* Left Content */}
      <div className={`hero-text ${isVisible ? "show-left" : ""}`}>
        <h1>
          Transforming Ideas Into{" "}
          <span className="gradient-text">Beautiful Websites</span> and{" "}
          <span className="gradient-text">Engaging Designs</span>
        </h1>
        <p>
          Hi, I’m Awais! As a web developer and graphic designer with more than
          3 years of experience, I'm passionate about creating visually
          stunning websites and crafting designs that tell your brand’s story.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-gradient">
            Let's Work Together
          </a>
          <a href="#projects" className="btn-outline">
            Explore My Work →
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <span>50+</span>
            <p>Web Projects Delivered</p>
          </div>
          <div>
            <span>25+</span>
            <p>Clients</p>
          </div>
          <div>
            <span>120+</span>
            <p>Creative Designs</p>
          </div>
        </div>
      </div>

      {/* Right Image with Icons */}
      <div className={`hero-image ${isVisible ? "show-right" : ""}`}>
        <img src={profileImage} alt="Profile" className="profile-pic" />
        <div className="icon">🌐</div> {/* Web Development Icon */}
        <div className="icon">🎨</div> {/* Design Icon */}
        <div className="icon">🖥️</div> {/* Technology Icon */}
      </div>
    </section>
  );
};

export default Hero;
