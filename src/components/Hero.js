import React, { useEffect, useState } from "react";
import "./Hero.css";
import profileImage from "../assets/awais.png"; // Import profile image

const Hero = () => {
  const [projectsDone, setProjectsDone] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const [fineArtworks, setFineArtworks] = useState(0);

  useEffect(() => {
    // Animate the numbers for projects done
    let projects = 0;
    const projectsInterval = setInterval(() => {
      if (projects < 650) {
        projects += 25; // Increase the increment for faster animation
        setProjectsDone(projects);
      } else {
        clearInterval(projectsInterval); // Stop when it reaches 650
      }
    }, 25); // Decrease the interval time for faster animation

    // Animate the numbers for happy clients
    let clients = 0;
    const clientsInterval = setInterval(() => {
      if (clients < 99) {
        clients += 3; // Increase the increment for faster animation
        setHappyClients(clients);
      } else {
        clearInterval(clientsInterval); // Stop when it reaches 99
      }
    }, 25); // Decrease the interval time for faster animation

    // Animate the numbers for fine artworks
    let artworks = 0;
    const artworksInterval = setInterval(() => {
      if (artworks < 240) {
        artworks += 8; // Increase the increment for faster animation
        setFineArtworks(artworks);
      } else {
        clearInterval(artworksInterval); // Stop when it reaches 240
      }
    }, 25); // Decrease the interval time for faster animation

    // Cleanup on unmount
    return () => {
      clearInterval(projectsInterval);
      clearInterval(clientsInterval);
      clearInterval(artworksInterval);
    };
  }, []);

  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero-text">
        <h1>
          Transforming Ideas Into <span className="gradient-text">Beautiful Websites</span> and <span className="gradient-text">Engaging Designs</span>
        </h1>
        <p>
          Hi, I’m Awais! As a web developer and graphic designer with more than 3 years of experience, I'm passionate about creating visually stunning websites and crafting designs that tell your brand’s story.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-gradient">Let's Work Together</a>
          <a href="#projects" className="btn-outline">Explore My Work →</a>
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

      {/* Right Image with Only 3 Icons */}
      <div className="hero-image">
        <img src={profileImage} alt="Profile" className="profile-pic" />
        <div className="icon">🌐</div>  {/* Web Development Icon (Globe) */}
        <div className="icon">🎨</div>  {/* Design Icon (Palette) */}
        <div className="icon">🖥️</div>  {/* Technology Icon (Computer) */}
      </div>
    </section>
  );
};

export default Hero;
