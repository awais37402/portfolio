import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: "🌐", color: "#e44d26", category: "frontend" },
  { name: "CSS", icon: "🎨", color: "#264de4", category: "frontend" },
  { name: "JavaScript", icon: "⚡", color: "#f7df1e", category: "frontend" },
  { name: "PHP", icon: "🐘", color: "#777bb3", category: "backend" },
  { name: "MySQL", icon: "💾", color: "#00758f", category: "backend" },
  { name: "ReactJS", icon: "⚛️", color: "#61dbfb", category: "frontend" },
  { name: "Photoshop", icon: "🖌️", color: "#001d34", category: "design" },
  { name: "Illustrator", icon: "🎭", color: "#ff9a00", category: "design" },
  { name: "Premiere Pro", icon: "🎞️", color: "#9999ff", category: "video" },
  { name: "After Effects", icon: "🎬", color: "#cf53f9", category: "video" },
  { name: "Figma", icon: "📐", color: "#f24e1e", category: "design" },
  { name: "WordPress", icon: "📝", color: "#21759b", category: "cms" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState("all");
  
  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "design", name: "Design" },
    { id: "video", name: "Video" },
    { id: "cms", name: "CMS" },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">
          <span className="title-gradient">My Skills</span>
        </h2>
        
        <div className="category-tabs-container">
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon-container">
                <span className="skill-icon">{skill.icon}</span>
              </div>
              <div className="skill-details">
                <p className="skill-name">{skill.name}</p>
                <div className="skill-progress">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${Math.floor(Math.random() * 60) + 40}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;