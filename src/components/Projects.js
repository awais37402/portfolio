import React from 'react';
import './Projects.css';
import ecommerceImage from '../assets/ecommerce.png';  // Replace with actual image paths
import portfolioImage from '../assets/portfolio.png';
import recipeImage from '../assets/recipe.jpeg';
import blogImage from '../assets/blog.png'; 

const Projects = () => {
  const projects = [
    { 
      title: 'E-commerce Website', 
      description: 'An interactive clothing store built with React and Firebase.',
      img: ecommerceImage
    },
    { 
      title: 'Portfolio Website', 
      description: 'A personal portfolio to showcase projects and skills.',
      img: portfolioImage
    },
    { 
      title: 'Recipe Website', 
      description: 'Delicious Recipes for Every Taste and Occasion.',
      img: recipeImage
    },
    { 
      title: 'Blog Website',
      description: 'A blog site to share articles and posts on various topics.',
      img: blogImage
    }
  ];

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
