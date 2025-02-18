import React from "react";
import "./Projects.css";

// Project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A full-featured online store with payment integration.",
    image: "https://cdn.shopify.com/s/files/1/0070/7032/files/best-web-design-3.png?v=1691010811",
    link: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A stunning portfolio website with animations and dark mode.",
    image: "https://repository-images.githubusercontent.com/384091706/a1614500-e03f-11eb-986a-30f6f0d4f1cc",
    link: "#",
  },
  {
    id: 3,
    title: "Business Landing Page",
    description: "A sleek landing page optimized for conversions.",
    image: "https://cdn.prod.website-files.com/58cbec12bff1e813281c2d6e/601098d3fe7e06017dce793b_shopify-hero.png",
    link: "#",
  },
  {
    id: 4,
    title: "Photography Website",
    description: "A gallery-based website showcasing high-quality photos.",
    image: "https://img.freepik.com/free-vector/flat-landing-page-template-photographer-career_23-2150252489.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Blog Website",
    description: "A modern blog website with categories and search functionality.",
    image: "https://agentestudio.com/uploads/ckeditor/pictures/1687/blog-design-19.png",
    link: "#",
  },
  {
    id: 6,
    title: "Real Estate Website",
    description: "A real estate website with interactive property listings.",
    image: "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/617fffdcfa159082ea3ef6a3_t5Gb3iMLNTSQEl07jUIJNHT6qCUftSKhE5JzlQMiCjtiYqxu-QXbLjxErDAKkU-VunGzx-pOkOhdAv5o2hRPNO4KTmdXHALYvzJSUGGPFca0RckUNbINFpBrbUlNm-Y-cBpIt7AB.jpeg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
