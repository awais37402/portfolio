import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
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
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Let's Connect</h3>
          <div className="social-icons">
            <a href="https://web.facebook.com/awais.tahir.3762"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/awais-tahir-172299258/"><FaLinkedin /></a>
            <a href="https://github.com/awais37402"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Awais Tahir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
