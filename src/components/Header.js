import React, { useState } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Scroll to top when "Home" is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  // Close menu when a link is clicked
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <a href="#" aria-label="Home" onClick={scrollToTop}>
          <span>Awais</span> <span className="highlight">Tahir</span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="#" onClick={scrollToTop}>
              Home
            </a>
          </li>
          {["About", "Experience", "Projects", "Testimonial"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Button (Visible on Desktop Only) */}
      <a href="#contact" className="contact-btn">
        Contact
      </a>

      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={toggleMobileMenu}
        aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${mobileMenuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#" onClick={scrollToTop}>
              Home
            </a>
          </li>
          {["About", "Experience", "Projects", "Testimonial"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
