import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import '../styles/projectDetails.css';

import Purple from '../assets/images/purple.png';  // Example image import

const SparDetails = () => {
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
        {/* First section: Text on the left, image on the right */}
        <div className="project-details-grid">
          {/* Text section */}
          <div className="project-text">
            <h2>Spartificial | AI Intern </h2>
            <h2>Jun 2022 - Aug 2022</h2>

            <h3>What I did:</h3>
            <p>
              <ul>
                <li>Led a team to develop an AI-based image processing algorithm to classify safe lunar landing surfaces.</li>
                <li>Categorized safe landing areas for an exploration rover based on topography data processing.</li>
              </ul>
            </p>

            <h3>How I did it:</h3>
            <p>
              <ul>
                <li>Using <b>TensorFlow</b>, <b>OpenCV</b>, and <b>Python</b>, we processed lunar surface datasets.</li>
                <li>Developed an algorithm capable of identifying safe landing areas with high accuracy.</li>
                <li>As team lead, delegated tasks, coordinated testing, and oversaw the final presentation.</li>
              </ul>
            </p>
          </div>

          {/* Image section */}
          <div className="project-media">
            <img
              src={Purple} // Replace with actual image path
              alt="Moon surface analysis for landing zones"
              className="project-image"
            />
          </div>
        </div>

        {/* Second section: Image on the left, text on the right */}
        <div className="project-details-grid reverse">
          {/* Image section */}
          <div className="project-media">
            <img
              src={Purple} // Replace with actual image path
              alt="Lunar rover exploration"
              className="project-image"
            />
          </div>

          {/* Text section */}
          <div className="project-text">
            <h3>The results:</h3>
            <p>
              Our algorithm achieved a <b>93% accuracy rating</b>, which was presented to a panel of astrophysicists and deemed highly successful for potential use in space missions.
            </p>
            <div className="skill-section">
              <h3>SKILLS</h3>
              <div className="skill-section-filter">
                <button className={`skill-filter-item`}>Python</button>
                <button className={`skill-filter-item`}>TensorFlow</button>
                <button className={`skill-filter-item`}>OpenCV</button>
                <button className={`skill-filter-item`}>AI Image Processing</button>
              </div>
            </div>
          </div>  
        </div>

      {/* Centered iframe at the bottom */}
      <section className="iframe-container">
        <iframe 
          src="https://www.youtube.com/watch?v=Vfsl8G8Fjmg" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </section>

      {/* Button to go back to Projects */}
      <section className="back-button-container">
        <Link to="/projects" className="back-button">
          Back to Projects
        </Link>
      </section>

    </div> 
  </div>
  );
};

export default SparDetails;
