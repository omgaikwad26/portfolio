import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import '../styles/projectDetails.css';


import cmcManifold from '../assets/images/cmc-manifold.png';
import cmcBracket from '../assets/images/cmc-bracket.png';  // Example image import


const CMCDetails = () => {
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
            <h2>Charter Machine Company | Mechanical Engineer Intern </h2> 
            <h2>Jan 2023 - Jul 2023</h2>

            <h3>What I did:</h3>
            <p>
              <ul>
                <li>Designed support frames, brackets, and pneumatic components and developed over 100 engineering drawings</li>
                <li>Mechanical redesign and optimization of hydraulic systems to reduce manufacturing costs</li>
              </ul>
            </p>

            <h3>How?</h3>
            <p>
              <ul>
                <li>Using <b>Autodesk Inventor</b>, I created designs and conducted <b>Finite Element Analysis (FEA)</b> study ensure the structural integrity of the components</li>
                <li>I also led mechanical redesign and optimization in the hydraulic manifold that allowed for simultaneous flow and pressure control</li>
              </ul>
            </p>

          </div>

          {/* Image section */}
          <div className="project-media">
            <img
              src={cmcManifold} // Replace with actual image path
              alt="Component design in Autodesk Inventor"
              className="project-image"
            />
          </div>
        </div>

        {/* Second section: Image on the left, text on the right */}
        <div className="project-details-grid reverse">
          {/* Image section */}
          <div className="project-media">
            <img
              src={cmcBracket} // Replace with actual image path
              alt="Hydraulic system optimization"
              className="project-image"
            />
          </div>

          {/* Text section */}
          <div className="project-text">

            <h3>Results:</h3>
            <p>
              <b>15% reduction in manufacturing costs</b> and improved system performance, enhancing the company’s overall operational efficiency.
            </p>
            <div className="skill-section">
              <h3>SKILLS</h3>
              <div className="skill-section-filter">
                <button className={`skill-filter-item`}>Finite Element Analysis (FEA)</button>
                <button className={`skill-filter-item`}>Autodesk INVENTOR</button>
                <button className={`skill-filter-item`}>AutoCAD</button>
                <button className={`skill-filter-item`}>Control Systems (Hydraulics)</button>
                <button className={`skill-filter-item`}>GD&T</button>

              </div>
            </div>
          </div>  
        
        </div>

      /*
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
      */

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

export default CMCDetails;
