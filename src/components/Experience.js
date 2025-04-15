import React, { useEffect, useRef } from "react";
import "./Experience.css";
import { FaCode, FaPaintBrush, FaBriefcase, FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "1st jan, 2025",
    description: "Developing responsive web applications using React, Next.js, and modern CSS frameworks. Leading UI/UX improvements that increased user engagement by 40%.",
    icon: <FaLaptopCode className="experience-icon" />,
  },
  {
    title: "UI/UX Designer",
    company: "Creative Digital Agency",
    duration: "1st jan, 2025",
    description: "Designed intuitive user interfaces for 15+ clients across various industries. Conducted user research and testing to optimize conversion rates.",
    icon: <FaPaintBrush className="experience-icon" />,
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    duration: "1st jan, 2025",
    description: "Built custom web solutions for small businesses using MERN stack. Implemented RESTful APIs and database architectures for optimal performance.",
    icon: <FaServer className="experience-icon" />,
  }
];

const Experience = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-title">
        Professional <span className="highlight">Journey</span>
      </h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="experience-card"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="experience-icon-box">{exp.icon}</div>
            <h3 className="experience-role">{exp.title}</h3>
            <p className="experience-company">{exp.company}</p>
            <span className="experience-duration">{exp.duration}</span>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
