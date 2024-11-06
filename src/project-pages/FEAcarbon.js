import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import '../styles/projectDetails.css';

import plateFEA from '../assets/images/plate-FEA.png';  // Example image import



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
        {/* First section: Text on the left, image on the right */}
        <div className="project-details-grid">
          {/* Text section */}
          <div className="project-text">
            <h2>Steel Plate Optimization and Finite Element Analysis (FEA) | ME-345 Modeling and Simulation</h2> 
            <h2>| May 2024</h2>

            <h3>What I did:</h3>
            <p>
              <ul>
                <li>I modeled the plate in SolidWorks, conducted stress and displacement simulations, and optimized the design to reduce the weight. I also performed hand calculations to verify 
                  the maximum displacement and compared them with the simulation results.</li>              </ul>
            </p>

            <h3>How?</h3>
            <p>
              <ul>
                <li>I first created a detailed model of the plate in SolidWorks and ran a static analysis to determine the von Mises stress and displacement under a 1000 lbf load</li>
                <li>I optimized the design by adjusting the dimensions of the triangular cutouts, running multiple design studies to minimize the plate’s weight</li>
                <li>Additionally, I conducted hand calculations to validate the maximum displacement and performed comparative analysis using Creo Parametric for further verification.
                </li>
              </ul>
            </p>

            <h3>Results:</h3>
            <p>
             <ul>
                <li>The optimization process reduced the plate’s weight by 22.73%, while still maintaining a factor of safety above 2.</li>
                <li>Additional optimizations with two more cutouts further reduced the weight, and material optimization identified titanium as the best material for further weight reduction, achieving a weight of 9.61 lbs with a factor of safety of 10.12.</li>
              </ul>
            </p>

            <div className="skill-section">
              <h3>SKILLS</h3>
              <div className="skill-section-filter">
                <button className={`skill-filter-item`}>SolidWorks</button>
                <button className={`skill-filter-item`}>Finite Element Analysis (FEA)</button>
                <button className={`skill-filter-item`}>Creo</button>
              </div>
            </div>
          </div>  


          {/* Image section */}
          <div className="project-media">
            <img
              src={plateFEA} // Replace with actual image path
              alt="Component design in Autodesk Inventor"
              className="project-image"
            />
          </div>
        </div>
        

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

export default FEADetails;