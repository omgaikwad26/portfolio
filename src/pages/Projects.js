import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import projectsData from './projectsData'; 

import Footer from '../components/Footer';


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to filter projects based on the selected category
  const filterProjects = (category) => {
    if (category === 'All') {
      return projectsData;
    }
    return projectsData.filter((project) => project.category.includes(category)); // Corrected 'category'
  };

  const filteredProjects = filterProjects(selectedCategory);
  
  return (
    <div>
      <section className="name-section">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="navbar-item">
              <Link to="/resume">Resume</Link>
            </li>
            <li className="navbar-item">
              <Link to="/AboutMe">About Me</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="overlay"> 
          <div className="project-content">
            <h1>PROJECTS</h1>
          </div>
        </div>
      </section>
  
      <div className="elpt-portfolio">
        <div className="elpt-portfolio-filter">
          <button 
            className={`portfolio-filter-item ${selectedCategory === 'All' ? 'item-active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          <button 
            className={`portfolio-filter-item ${selectedCategory === 'Internships' ? 'item-active' : ''}`}
            onClick={() => setSelectedCategory('Internships')}
          >
            Internships
          </button>
          <button 
            className={`portfolio-filter-item ${selectedCategory === 'Student Teams' ? 'item-active' : ''}`}
            onClick={() => setSelectedCategory('Student Teams')}
          >
            Student Teams
          </button>
          <button 
            className={`portfolio-filter-item ${selectedCategory === 'Personal' ? 'item-active' : ''}`}
            onClick={() => setSelectedCategory('Personal')}
          >
            Personal
          </button>
        </div>

        <div className="elpt-portfolio-content elpt-portfolio-columns-3 hover1"> {/* Using hover effect */}
          {filteredProjects.map((project, index) => (
            <div className="portfolio-item-wrapper" key={index}>
              <a href={project.link} className="portfolio-item" target="_blank" rel="noopener noreferrer">
                {/* Image */}
                <img src={project.imageUrl} alt={project.title} />
                
                {/* Hover info */}
                <div className="portfolio-item-infos-wrapper">
                  <div className="portfolio-item-infos">
                    <h3 className="portfolio-item-title">{project.title}</h3>
                    <h3 className="portfolio-item-desc">{project.description}</h3>
                    <span className="portfolio-item-category">{project.category.join(', ')}</span> {/* Corrected category */}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />

  </div>
  );
};

export default Projects;
