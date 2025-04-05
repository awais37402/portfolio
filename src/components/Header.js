import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;
      const totalScroll = docHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      setScrollProgress(progress);
      setScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  const navItems = ["About", "Experience", "Projects", "Testimonials"];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      {/* Progress Line */}
      <motion.div 
        className="progress-line"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ type: "spring", stiffness: 100 }}
      />

      <div className="header-container">
        {/* Logo */}
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" onClick={scrollToTop} className="logo-link">
            <span className="logo-name">Awais</span>
            <span className="logo-highlight">Tahir</span>
            <span className="logo-dot">.</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="nav">
          <ul className="nav-links">
            {navItems.map((item) => (
              <motion.li 
                key={item}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="nav-link"
                >
                  <span className="nav-link-number">0{navItems.indexOf(item)+1}.</span>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <motion.a
          href="#contact"
          className="contact-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Contact</span>
          <div className="contact-btn-hover"></div>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="menu-btn"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        className={`mobile-nav ${mobileMenuOpen ? "show" : ""}`}
        initial={{ y: "100%" }}
        animate={{ y: mobileMenuOpen ? "0%" : "100%" }}
        transition={{ type: "spring", damping: 25 }}
      >
        <div className="mobile-nav-container">
          <ul>
            {navItems.map((item) => (
              <motion.li 
                key={item}
                initial={{ x: 20, opacity: 0 }}
                animate={{ 
                  x: mobileMenuOpen ? 0 : 20,
                  opacity: mobileMenuOpen ? 1 : 0
                }}
                transition={{ 
                  delay: mobileMenuOpen ? 0.1 * navItems.indexOf(item) : 0,
                  type: "spring"
                }}
              >
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={closeMenu}
                  className="mobile-nav-link"
                >
                  <span className="mobile-nav-number">0{navItems.indexOf(item)+1}.</span>
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;