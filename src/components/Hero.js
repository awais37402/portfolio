import React, { useEffect, useState } from "react";
import "./Hero.css";
import profileImage from "../assets/awais.png"; // Import profile image

const Hero = () => {
  const [projectsDone, setProjectsDone] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [fineArtworks, setFineArtworks] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      let projects = 0;
      const projectsInterval = setInterval(() => {
        if (projects < 650) {
          projects += 25;
          setProjectsDone(projects);
        } else {
          clearInterval(projectsInterval);
        }
      }, 25);

      let clients = 0;
      const clientsInterval = setInterval(() => {
        if (clients < 99) {
          clients += 3;
          setHappyClients(clients);
        } else {
          clearInterval(clientsInterval);
        }
      }, 25);

      let artworks = 0;
      const artworksInterval = setInterval(() => {
        if (artworks < 240) {
          artworks += 8;
          setFineArtworks(artworks);
        } else {
          clearInterval(artworksInterval);
        }
      }, 25);

      return () => {
        clearInterval(projectsInterval);
        clearInterval(clientsInterval);
        clearInterval(artworksInterval);
      };
    }
  }, [isVisible]);

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
            <span>{projectsDone}+</span>
            <p>Web Projects Delivered</p>
          </div>
          <div>
            <span>{happyClients}%</span>
            <p>Happy Clients</p>
          </div>
          <div>
            <span>{fineArtworks}+</span>
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
