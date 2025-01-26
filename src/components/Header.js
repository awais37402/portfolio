import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="logo">Awais</div>
      <div
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li><a href="/app">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Services</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#testimonial">Testimonials</a></li>
        </ul>
      </nav>
      <a href="#contact"><button className="contact-button">Contact</button></a>
    </header>
  );
};

export default Header;
