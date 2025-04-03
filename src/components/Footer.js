import { 
  FaFacebook, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
 
} from "react-icons/fa";
import { useState, useEffect } from 'react';

import "./Footer.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-brand">
          <h2>Awais Tahir</h2>
          <p>
            Web Developer & Graphic Designer passionate about crafting digital
            experiences that inspire and engage.
          </p>
          
          {/* Contact Info */}
          <div className="footer-contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>awaistahir01234@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+92 321 3762964</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Let's Connect</h3>
          <div className="social-icons">
            <a href="https://web.facebook.com/awais.tahir.3762" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/awais-tahir-172299258/" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://github.com/awais37402" aria-label="GitHub"><FaGithub /></a>
          </div>
          
          {/* Newsletter Subscription */}
          <div className="newsletter">
            <h4>Subscribe to Newsletter</h4>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <span> | </span>
          <a href="/terms">Terms of Service</a>
          <span> | </span>
          <a href="/sitemap">Sitemap</a>
        </div>
        <p>© {new Date().getFullYear()} Awais Tahir. All rights reserved.</p>
      </div>

      
    </footer>
  );
};

export default Footer;
