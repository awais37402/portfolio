import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "PHP", level: "80%" },
    { name: "mySql", level: "80%" },
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
      <h2>My Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <p>{skill.name}</p>
            <div className="skill-bar">
              <div
                className="skill-level"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
