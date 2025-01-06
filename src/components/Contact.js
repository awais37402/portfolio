import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>
      <div className="contact-details">
        <motion.div
          className="contact-item"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Phone</h3>
          <p>
            <a href="tel:+923213762964">+92 321 3762964</a>
          </p>
        </motion.div>
        <motion.div
          className="contact-item"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Email</h3>
          <p>
            <a href="mailto:awaistahir01234@gmail.com">awaistahir01234@gmail.com</a>
          </p>
        </motion.div>
        <motion.div
          className="contact-item"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>Address</h3>
          <p>Rawalpindi, Islamabad, Pakistan</p>
        </motion.div>
        <motion.div
          className="contact-item"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3>Location</h3>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.154337685861!2d73.0551!3d33.6844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfc1167055a1%3A0x9e77b3ed73123b9!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691096322874!5m2!1sen!2s"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
