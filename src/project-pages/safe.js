import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import '../styles/projectDetails.css';

import Purple from '../assets/images/purple.png';

import Navrobot from '../assets/videos/autorobot.mp4';



const SafeDetails = () => {
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
            <h2>Stevens Ankle-Foot Electromechanical (SAFE) Orthosis | Research Assistant</h2>
            <h2>May 2024 - Present</h2> 
            <p>
              As part of the Stevens ProOF Lab team, I am contributing to the development of a 
              powered ankle-foot orthosis (AFO) designed to assist patients with mobility issues.
            </p>

            <h3>What I did:</h3>
            <p>
            Develop detailed 3D CAD models from leg scans and contributed to the manufacturing of the AFO prototype. 
            I was also involved in torque testing and structural analysis to ensure the prototype’s durability and functionality.
            </p>

            <h3>How?</h3>
            <p>
            Using Artec 3D software, I processed leg scans into precise 3D models, 
            which were then used for 3D printing the components of the prototype. 
            I collaborated on performing torque testing and conducting structural analysis 
            to confirm the robustness and efficiency of the design.
            </p>

            <h3>Results:</h3>
            <p>
              Our prototype demonstrated improved durability and operational efficiency in preliminary tests. 
              We are currently refining the design to further optimize performance for upcoming clinical trials.
            </p>

            <div className="skill-section">
              <h3>SKILLS</h3>
              <div className="skill-section-filter">
                <button className={`skill-filter-item`}>Artec 3D</button>
                <button className={`skill-filter-item`}>ADDITTIVE MANUFACTURING</button>
                <button className={`skill-filter-item`}>3D MODELING</button>

              </div>
            </div>

          </div>

          {/* Image section */}
          <div className="project-media">
            <img
              src={Purple} // Replace with actual image path
              alt="Component design in Autodesk Inventor"
              className="project-image"
            />
          </div>
        </div>

      {/* Centered iframe at the bottom */}
      <section className="iframe-container">
        <iframe 
          src={Navrobot} 
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

export default SafeDetails;
