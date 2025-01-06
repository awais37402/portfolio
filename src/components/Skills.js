import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "ReactJS", level: "75%" },
    { name: "Photoshop", level: "90%" },
    { name: "Illustrator", level: "85%" },
    { name: "Premiere Pro", level: "80%" },
    { name: "After Effects", level: "75%" },
    { name: "Figma", level: "85%" },
    { name: "WordPress", level: "70%" },
  ];

  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-item"
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p>{skill.name}</p>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: skill.level }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
