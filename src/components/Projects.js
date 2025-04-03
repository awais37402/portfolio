import React, { useState } from 'react';
import { FiGithub, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Projects.css';

// Import all project images
import ecommerce1 from '../assets/ecommerce1.png';
import ecommerce2 from '../assets/ecommerce2.png';
import ecommerce3 from '../assets/ecommerce3.png';
import taskapp1 from '../assets/taskapp1.png';
import taskapp2 from '../assets/taskapp2.png';
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, product management, and user authentication.",
      features: [
        "React.js frontend with Redux state management",
        "Node.js/Express backend",
        "MongoDB database",
        "Stripe payment integration",
        "JWT authentication"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      images: [ecommerce1, ecommerce2, ecommerce3],
      githubUrl: "https://github.com/awais37402/ecommerce"
    },
    {
      id: 4,
      title: "Fitness Hub - Gym Website",
      description: "A modern gym website with class scheduling, membership plans, and trainer profiles to help users achieve their fitness goals.",
      features: [
        "Class schedule with online booking system",
        "Membership plan comparison and signup",
        "Trainer profiles with specialties",
        "Workout tracking and progress visualization",
        "Nutrition planning section",
        "Responsive design for all devices"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Firebase Auth"],
      images: [taskapp1, taskapp2],
      githubUrl: "https://github.com/awais37402/jym"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing my work and skills with smooth animations.",
      features: [
        "GSAP animations",
        "Responsive design",
        "Dark/light mode toggle",
        "Project showcase",
        "Contact form"
      ],
      technologies: ["React", "GSAP", "SCSS", "Formik"],
      images: [portfolio1, portfolio2, portfolio3],
      githubUrl: "https://github.com/awais37402/portfolio"
    }
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <p className="section-subtitle">Here are some of my recent works</p>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="project-thumbnail"
              />
              <button 
                className="preview-button"
                onClick={() => openProject(project)}
              >
                Quick Preview
              </button>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FiGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeProject}>
              <FiX />
            </button>
            
            <div className="modal-image-container">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                className="modal-image"
              />
              
              {selectedProject.images.length > 1 && (
                <>
                  <button className="nav-button prev" onClick={prevImage}>
                    <FiChevronLeft />
                  </button>
                  <button className="nav-button next" onClick={nextImage}>
                    <FiChevronRight />
                  </button>
                  <div className="image-counter">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </>
              )}
            </div>

            <div className="modal-details">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              
              <div className="features-section">
                <h4>Key Features:</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="modal-links">
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    <FiGithub /> View Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
