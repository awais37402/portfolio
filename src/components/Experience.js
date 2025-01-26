import React from "react";
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

  return (
    <section className="experience" id="experience">
      <h2>My Expertise</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>{exp.title}</h3>
            <ul>
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
