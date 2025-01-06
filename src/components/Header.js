import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close Mobile Menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle Scroll Behavior
  const handleScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      setIsHeaderVisible(false); // Hide header on scroll down
    } else {
      setIsHeaderVisible(true); // Show header on scroll up
    }
    setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <header className={`header ${isHeaderVisible ? "visible" : "hidden"}`}>
      {/* Logo */}
      <div className="logo">Awais' Portfolio</div>

      {/* Navigation */}
      <nav className={`nav-mobile ${isMobileMenuOpen ? "nav-open" : ""}`}>
        <span className="close-btn" onClick={closeMobileMenu}>
          &times;
        </span>
        <ul>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} onClick={closeMobileMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Desktop Navigation */}
      <ul className="nav">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
