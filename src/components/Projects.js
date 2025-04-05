import React, { useState, useEffect } from 'react';
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
      title: "Fitness Hub",
      description: "Modern gym website with booking system, membership plans, and trainer profiles.",
      features: [
        "Online class booking",
        "Membership management",
        "Trainer profiles",
        "Workout tracking",
        "Nutrition planning",
        "Mobile-responsive"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
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

  // Background animation effect
  useEffect(() => {
    const canvas = document.getElementById('projectCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = Math.floor(window.innerWidth / 10);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.strokeStyle = `rgba(100, 255, 218, ${1 - distance/100})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw particles
      particles.forEach(particle => {
        ctx.fillStyle = '#64ffda';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="projects" className="projects-section">
      {/* Animated Background Canvas */}
      <canvas id="projectCanvas" className="animated-bg"></canvas>
      
      <div className="content-wrapper">
        <div className="section-header">
        <h2 className="section-title">
  Featured <span className="highlight">Projects</span>
</h2><br></br>
          
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="project-thumbnail"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <button 
                    className="preview-button"
                    onClick={() => openProject(project)}
                  >
                    View Project
                  </button>
                </div>
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
                      <FiGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-overlay" onClick={closeProject}></div>
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
              <p className="modal-description">{selectedProject.description}</p>
              
              <div className="features-section">
                <h4>Key Features:</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-icon">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                <h4>Tech Stack:</h4>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
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