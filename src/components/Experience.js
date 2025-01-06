import React, { useState, useEffect } from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Web Development",
      description: [
        "Designed and built websites for offline clients.",
        "Created functional and visually appealing solutions.",
        "Collaborated with clients to bring their ideas to life.",
        "Ensured modern, responsive, and user-friendly designs.",
        "Implemented clean code and best practices.",
      ],
    },
    {
      title: "Graphic Design",
      description: [
        "Worked with local clients to craft logos, banners, and posters.",
        "Specialized in visually compelling brand designs.",
        "Delivered designs tailored to marketing campaigns.",
        "Ensured creativity and alignment with client branding.",
        "Enhanced engagement with innovative visual solutions.",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPointIndex, setCurrentPointIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < experiences.length) {
      const currentExperience = experiences[currentIndex];
      const currentPoint = currentExperience.description[currentPointIndex];

      let typingInterval;

      if (isTyping) {
        typingInterval = setInterval(() => {
          if (currentText.length < currentPoint.length) {
            setCurrentText(currentPoint.slice(0, currentText.length + 1));
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
          }
        }, 20); // Typing speed
      } else {
        const pauseTimeout = setTimeout(() => {
          if (currentPointIndex < currentExperience.description.length - 1) {
            setCurrentText("");
            setCurrentPointIndex((prev) => prev + 1);
            setIsTyping(true);
          } else {
            setTimeout(() => {
              setCurrentText("");
              setCurrentPointIndex(0);
              setCurrentIndex((prev) => prev + 1);
              setIsTyping(true);
            }, 1000); // Pause between experiences
          }
        }, 800);
        return () => clearTimeout(pauseTimeout);
      }

      return () => clearInterval(typingInterval);
    }
  }, [currentText, currentPointIndex, currentIndex, isTyping, experiences]);

  return (
    <section className="experience" id="experience">
      <h2>My Expertise</h2>
      <div className="experience-list">
        {experiences.slice(0, currentIndex + 1).map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>{exp.title}</h3>
            <ul>
              {exp.description.slice(0, index === currentIndex ? currentPointIndex + 1 : exp.description.length).map((point, idx) => (
                <li key={idx} className={index === currentIndex && idx === currentPointIndex ? "typing" : ""}>
                  {index === currentIndex && idx === currentPointIndex ? currentText : point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
