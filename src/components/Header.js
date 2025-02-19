import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Overlay Background */}
      <div className={`overlay ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}></div>

      {/* Header */}
      <header className="header">
        <div className="logo">
          Awais <span className="highlight">Tahir</span>
        </div>

        {/* Trendy Hamburger Menu */}
        <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li><a href="/app" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Services</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Portfolio</a></li>
            <li><a href="#testimonial" onClick={toggleMenu}>Testimonials</a></li>
          </ul>
        </nav>

        {/* Contact Button (Visible on Desktop) */}
        <a href="#contact">
          <button className="contact-button">Contact</button>
        </a>
      </header>
    </>
  );
};

export default Header;
