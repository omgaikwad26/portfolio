import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import '../styles/projectDetails.css';


import cmcManifold from '../assets/images/cmc-manifold.png';
import cmcBracket from '../assets/images/cmc-bracket.png';  // Example image import


const VehicleDetails = () => {
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
            <h2>Modeling Vehicle Dynamics Using Matlab | Personal Project </h2> 
            <h2>Aug 2023 - Oct 2023</h2>

            <h3>What I did:</h3>
            <p>
              <ul>
                <li>I worked on modeling the car's dynamics and developing both nonlinear and linear state-space representations to simulate its lateral and longitudinal dynamics</li>
                <li>The model includes critical factors like tire forces, cornering stiffness, and the impact of steering angles</li>
              </ul>
            </p>

            <h3>How?</h3>
            <p>
              <ul>
                <li>Using the Euler-Lagrange equation, I formulated the car’s kinetic energy and derived the differential equations governing its movement. 
                  This approach led to the development of a nonlinear state-space model that accounted for lateral and longitudinal dynamics
                </li>
                <li>To simplify the analysis, I linearized the model around equilibrium points, enabling the simulation of the car’s behavior under small disturbances. 
                  I incorporated elements such as tire forces, propulsion, braking, and steering angle inputs into the model
                </li>
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
            The resulting model successfully simulated the car’s dynamic responses under various driving conditions. The state-space model allowed for analysis of the car's behavior, including stability during turning and the impact of steering angles on cornering. 
            The project provided a foundation for further control system design and real-time vehicle simulations.
            </p>
            <div className="skill-section">
              <h3>SKILLS</h3>
              <div className="skill-section-filter">
                <button className={`skill-filter-item`}>MATLAB</button>
                <button className={`skill-filter-item`}>SIMULINK</button>
              </div>
            </div>
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

export default VehicleDetails;