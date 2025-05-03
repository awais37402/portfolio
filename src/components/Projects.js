import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const projects = [
    {
      id: 1,
      title: "Maximus Gear",
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

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const projectRefs = useRef([]);
  const headingRef = useRef(null);
  const scrollHintRef = useRef(null);
  const animationRefs = useRef({ tl: null, triggers: [] });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const addToRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.scrollBehavior = 'auto';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
    document.documentElement.style.scrollBehavior = 'smooth';
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !trackRef.current) return;

      // Initial setup
      gsap.set(trackRef.current, { x: 0 });
      gsap.set(projectRefs.current, { 
        opacity: 0, 
        y: 80,
        scale: 0.95
      });
      gsap.set(scrollHintRef.current, { opacity: 0, y: 20 });

      // Horizontal scroll animation
      animationRefs.current.tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${trackRef.current.scrollWidth - window.innerWidth + 400}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress > 0.05) {
              gsap.to(scrollHintRef.current, { 
                opacity: 0, 
                y: 10,
                duration: 0.5,
                ease: "power2.out"
              });
            }
          }
        }
      });

      animationRefs.current.tl.to(trackRef.current, {
        x: () => -(trackRef.current.scrollWidth - window.innerWidth),
        ease: "power2.inOut"
      });

      // Project cards animation
      projectRefs.current.forEach((project, i) => {
        const trigger = ScrollTrigger.create({
          trigger: project,
          start: "top 75%",
          onEnter: () => {
            gsap.to(project, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: i * 0.15,
              ease: "back.out(1.2)"
            });
          },
          once: true
        });
        animationRefs.current.triggers.push(trigger);
      });

      // Header animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });

      // Scroll hint animation
      const scrollHintTL = gsap.timeline({ delay: 1.8 });
      scrollHintTL.to(scrollHintRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)"
      });

      scrollHintTL.to(scrollHintRef.current, {
        y: -10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }, "+=0.5");

    }, sectionRef);

    return () => {
      ctx.revert();
      animationRefs.current.tl?.kill();
      animationRefs.current.triggers.forEach(trigger => trigger?.kill());
      animationRefs.current = { tl: null, triggers: [] };
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title" ref={headingRef}>
          <span className="highlight">Featured</span> Projects
        </h2>
      </div>

      <div className="projects-container" ref={containerRef}>
        <div className="projects-track" ref={trackRef}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              ref={addToRefs}
              onClick={() => openProject(project)}
            >
              <div className="project-image-container">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="project-thumbnail"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <span className="view-project">Explore Project</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-number">0{project.id}</span>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiGithub /> Source Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
                alt={`${selectedProject.title} screenshot`}
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
              <div className="modal-header">
                <span className="project-number">0{selectedProject.id}</span>
                <h3>{selectedProject.title}</h3>
              </div>
              <p className="modal-description">{selectedProject.description}</p>

              <div className="features-section">
                <h4>Key Features</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                <h4>Technology Stack</h4>
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
                    <FiGithub size={18} /> View Source Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    <FiExternalLink size={18} /> Visit Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="scroll-hint" ref={scrollHintRef}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Drag to explore</span>
        </div>
      )}
    </section>
  );
};

export default Projects;