import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Image imports
import ecommerce1 from '../assets/ecommerce1.png';
import ecommerce2 from '../assets/ecommerce2.png';
import ecommerce3 from '../assets/ecommerce3.png';
import taskapp1 from '../assets/taskapp1.png';
import taskapp2 from '../assets/taskapp2.png';
import portfolio1 from '../assets/portfolio1.png';
import portfolio2 from '../assets/portfolio2.jpg';
import portfolio3 from '../assets/portfolio3.jpg';
import magnetic1 from '../assets/img1.jpg';
import magnetic2 from '../assets/img2.png';
import magnetic3 from '../assets/img3.png';
import magnetic4 from '../assets/img4.png';
import magnetic5 from '../assets/img5.png';
import maximus1 from '../assets/g1.jpg';
import maximus2 from '../assets/g2.png';
import maximus3 from '../assets/g3.png';
import maximus4 from '../assets/g4.png';
import maximus5 from '../assets/g5.png';

import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projectRefs = useRef([]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Maximus Gear",
      category: "e-commerce",
      description: "A premium e-commerce platform for fitness apparel featuring advanced product filtering, seamless checkout, and immersive product showcases.",
      features: [
        "Dynamic product catalog with 10+ filter categories",
        "Optimized cart with local storage persistence",
        "Pixel-perfect responsive design across all devices",
        "Interactive product galleries with zoom functionality",
        "60fps animations powered by Framer Motion",
        "SEO-optimized product pages",
        "Instant search with debounced queries",
        "Accessible navigation compliant with WCAG 2.1"
      ],
      technologies: ["React 18", "React Router 6", "CSS Modules", "Context API", "Framer Motion"],
      images: [maximus1, maximus2, maximus3, maximus4, maximus5],
      githubUrl: "https://github.com/awais37402/Maximus-Gear",
      liveUrl: "https://maximus-gear.vercel.app/"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "e-commerce",
      description: "Enterprise-grade online store with complete payment integration, inventory management, and multi-tier user roles.",
      features: [
        "React frontend with Redux Toolkit state management",
        "Node.js/Express REST API with JWT authentication",
        "MongoDB with Mongoose ODM and Redis caching",
        "Stripe payment processing with webhook integration",
        "Role-based access control (Admin, Vendor, Customer)",
        "Automated email notifications",
        "Order tracking system",
        "Product review and rating system"
      ],
      technologies: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Stripe"],
      images: [ecommerce1, ecommerce2, ecommerce3],
      githubUrl: "https://github.com/awais37402/ecommerce"
    },
    {
      id: 3,
      title: "Magnetic Treatment System",
      category: "health-tech",
      description: "Medical-grade web application for controlling therapeutic devices with real-time biometric monitoring and reporting.",
      features: [
        "Interactive treatment control dashboard",
        "WebSocket-powered real-time data streaming",
        "Patient profile management with treatment history",
        "Customizable treatment protocols",
        "Data visualization with Chart.js",
        "Secure authentication with Firebase",
        "Responsive design optimized for medical tablets",
        "PDF report generation"
      ],
      technologies: ["React", "Chart.js", "WebSockets", "Tailwind CSS", "Firebase"],
      images: [magnetic1, magnetic2, magnetic3, magnetic4, magnetic5],
      githubUrl: "https://github.com/awais37402/Barak"
    },
    {
      id: 4,
      title: "Fitness Hub Pro",
      category: "health-tech",
      description: "Comprehensive gym management platform with class scheduling, member tracking, and integrated payment processing.",
      features: [
        "Interactive class booking calendar",
        "Member progress tracking with analytics",
        "Trainer management portal",
        "Custom workout plan generator",
        "Nutrition tracking with macro calculations",
        "Stripe subscription management",
        "Mobile-responsive member portal",
        "Admin analytics dashboard"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Chart.js"],
      images: [taskapp1, taskapp2],
      githubUrl: "https://github.com/awais37402/jym"
    },
    {
      id: 5,
      title: "Portfolio Platform",
      category: "portfolio",
      description: "Award-winning portfolio design featuring cinematic scroll animations and dark/light mode theming.",
      features: [
        "GSAP-powered scroll animations",
        "Fully responsive with mobile-first approach",
        "Dynamic theme switching (dark/light)",
        "Interactive project showcases",
        "Contact form with Formik validation",
        "Performance optimized (98+ Lighthouse score)",
        "Accessibility compliant (WCAG 2.1 AA)",
        "SEO-optimized metadata"
      ],
      technologies: ["React", "GSAP", "SCSS", "Formik", "Framer Motion"],
      images: [portfolio1, portfolio2, portfolio3],
      githubUrl: "https://github.com/awais37402/portfolio"
    }
  ];

  useEffect(() => {
    // Initialize filtered projects
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Ensure GSAP animations only run after projects are filtered
    if (filteredProjects.length > 0) {
      const projects = projectRefs.current;
      
      projects.forEach((project, i) => {
        if (project) {
          // Reset opacity and position before animation
          gsap.set(project, { opacity: 0, y: 50 });
          
          gsap.to(project, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });
        }
      });

      // Title animation
      if (titleRef.current) {
        gsap.set(titleRef.current, { opacity: 0, y: 30 });
        gsap.to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredProjects]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (!selectedProject) return;
    
    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowRight') {
      goToNextImage();
    } else if (e.key === 'ArrowLeft') {
      goToPrevImage();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, currentImageIndex]);

  const renderProjectModal = () => {
    if (!selectedProject) return null;

    return (
      <motion.div 
        className="project-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeProjectModal}
      >
        <motion.div 
          className="project-modal-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-modal-btn" onClick={closeProjectModal}>
            <FiX size={24} />
          </button>

          <div className="modal-image-wrapper">
            <div className="modal-image-container">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                className="modal-project-image"
                loading="lazy"
              />
            </div>
            
            {selectedProject.images.length > 1 && (
              <>
                <button 
                  className="image-nav-btn prev-btn" 
                  onClick={goToPrevImage}
                  aria-label="Previous image"
                >
                  <FiChevronLeft size={32} />
                </button>
                <button 
                  className="image-nav-btn next-btn" 
                  onClick={goToNextImage}
                  aria-label="Next image"
                >
                  <FiChevronRight size={32} />
                </button>
                
                <div className="image-counter">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
              </>
            )}
          </div>

          <div className="modal-project-details">
            <h3 className="modal-project-title">{selectedProject.title}</h3>
            <p className="project-description">{selectedProject.description}</p>
            
            <div className="details-section">
              <h4 className="details-heading">Key Features</h4>
              <ul className="features-list">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="details-section">
              <h4 className="details-heading">Technologies Used</h4>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="project-links">
              {selectedProject.githubUrl && (
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="View code on GitHub"
                >
                  <FiGithub /> View Code
                </a>
              )}
              {selectedProject.liveUrl && (
                <a 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link live-link"
                  aria-label="View live demo"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
           <h2 className="section-title">
       Featured  <span className="highlight">Projects</span>
        </h2>
          <p className="section-subtitle">
            Here are some of my recent works. Click on any project to view details.
          </p>
        </div>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'e-commerce' ? 'active' : ''}`}
            onClick={() => setActiveFilter('e-commerce')}
          >
            E-Commerce
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'health-tech' ? 'active' : ''}`}
            onClick={() => setActiveFilter('health-tech')}
          >
            Health Tech
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'portfolio' ? 'active' : ''}`}
            onClick={() => setActiveFilter('portfolio')}
          >
            Portfolio
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="project-card"
              onClick={() => openProjectModal(project)}
              aria-label={`View ${project.title} project`}
            >
              <div className="project-image-container">
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="project-thumbnail"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category.replace('-', ' ')}</p>
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {renderProjectModal()}
    </section>
  );
};

export default Projects;