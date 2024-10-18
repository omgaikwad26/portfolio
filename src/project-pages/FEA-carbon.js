import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import '../styles/projectDetails.css';

const FEADetails = () => {
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
    
    <div className="project-details">
      {/* Grid content */}
      <div className="project-details-content">
        {/* Text section */}
        <div className="project-text">
          <p>
            At Charter Machine Company, I designed key components for heavy industrial machines and optimized systems to improve performance and reduce costs. My work revolved around hydraulic systems and mechanical structures, allowing me to gain deep insights into manufacturing processes.          </p>
          <p>
            The project was fabricated using CNC machined parts, and validation testing confirmed the device's functionality across various use cases.
          </p>
        </div>

        {/* Image section */}
        <div>
          <img
            src="/path-to-safe-image.png"
            alt="SAFE Orthosis render"
            className="project-image"
          />
          <img
            src="/path-to-safe-diagram.png"
            alt="SAFE Orthosis diagram"
            className="project-diagram"
          />
        </div>
      </div>

      {/* Full-width image */}
      <img
        src="/path-to-safe-full-width-image.png"
        alt="Testing setup"
        className="project-full-width-image"
      />
    </div>
  </div>
  );
};

export default FEADetails;
