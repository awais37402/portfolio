import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    
    <div id="contact" className="contact-container">
      {/* Header outside the contact card */}
      <h2 className="contact-header">Contact Me</h2>
      
      <div className="contact-card">
        <p className="contact-subheader">
          Reach out to me through any of the links below.
        </p>

        {/* Location */}
        <div className="contact-item">
          <span className="contact-label">Location:</span>
          <span className="contact-link">Rawalpindi, Pakistan</span>
        </div>

        {/* Phone */}
        <div className="contact-item">
          <span className="contact-label">Phone:</span>
          <a href="tel:+923213762964" className="contact-link">
            +92 321 3762964
          </a>
        </div>

        {/* Email */}
        <div className="contact-item">
          <span className="contact-label">Email:</span>
          <a href="mailto:awaistahir01234@gmail.com" className="contact-link">
            awaistahir01234@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact-item">
          <span className="contact-label">LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/awais-tahir-172299258/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            https://www.linkedin.com/in/awais-tahir-172299258/
          </a>
        </div>

        {/* Web Portfolio */}
        <div className="contact-item">
          <span className="contact-label">Web Portfolio:</span>
          <a
            href="https://portfolio1-olive-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            https://portfolio1-olive-three.vercel.app/
          </a>
        </div>

        {/* Graphics Portfolio */}
        <div className="contact-item">
          <span className="contact-label">Graphics Portfolio:</span>
          <a
            href="https://www.behance.net/awaistahir3808"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            https://www.behance.net/awaistahir3808
          </a>
        </div>

        {/* GitHub */}
        <div className="contact-item">
          <span className="contact-label">GitHub:</span>
          <a
            href="https://github.com/awais37402"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            https://github.com/awais37402
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
