import React from "react";
import "./Skills.css";

// Skill data
const skills = [
  { name: "HTML", icon: "🌐", color: "#e44d26" },
  { name: "CSS", icon: "🎨", color: "#264de4" },
  { name: "JavaScript", icon: "⚡", color: "#f7df1e" },
  { name: "PHP", icon: "🐘", color: "#777bb3" },
  { name: "MySQL", icon: "💾", color: "#00758f" },
  { name: "ReactJS", icon: "⚛️", color: "#61dbfb" },
  { name: "Photoshop", icon: "🖌️", color: "#001d34" },
  { name: "Illustrator", icon: "🎭", color: "#ff9a00" },
  { name: "Premiere Pro", icon: "🎞️", color: "#9999ff" },
  { name: "After Effects", icon: "🎬", color: "#cf53f9" },
  { name: "Figma", icon: "📐", color: "#f24e1e" },
  { name: "WordPress", icon: "📝", color: "#21759b" },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ backgroundColor: skill.color }}
          >
            <span className="skill-icon">{skill.icon}</span>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
