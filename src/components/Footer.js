import { 
  FaFacebook, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp
} from "react-icons/fa";
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import "./Footer.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    setShowScroll(window.pageYOffset > 400);
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
  }, []);

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://web.facebook.com/awais.tahir.3762", label: "Facebook" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/awais-tahir-172299258/", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/awais37402", label: "GitHub" }
  ];

  const quickLinks = [
    { text: "Portfolio", url: "#projects" },
    { text: "About Me", url: "#about" },
    { text: "Services", url: "#experience" },
    { text: "Contact", url: "#contact" },
    { text: "Testimonials", url: "#testimonials" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Awais <span className="highlight">Tahir</span>
          </motion.h2>
          
          <p className="brand-tagline">
            Crafting digital experiences that inspire and engage
          </p>
          
          <div className="footer-contact-info">
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon-wrapper">
                <FaEnvelope className="contact-icon" />
              </div>
              <span>awaistahir01234@gmail.com</span>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon-wrapper">
                <FaPhoneAlt className="contact-icon" />
              </div>
              <span>+92 321 3762964</span>
            </motion.div>
            
            <motion.div 
              className="contact-item"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="contact-icon-wrapper">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <span>Islamabad, Pakistan</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href={link.url}>{link.text}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social & Newsletter */}
        <motion.div 
          className="footer-social"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Let's Connect</h3>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                aria-label={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="newsletter">
            <h4>Get Updates</h4>
            <form className="newsletter-form">
              <motion.input 
                type="email" 
                placeholder="Your email address" 
                required 
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <span>•</span>
          <a href="/terms">Terms</a>
          <span>•</span>
          <a href="/sitemap">Sitemap</a>
        </div>
        <p>© {new Date().getFullYear()} Awais Tahir. All rights reserved.</p>
      </motion.div>

      {/* Scroll to Top */}
     
    </footer>
  );
};

export default Footer;
