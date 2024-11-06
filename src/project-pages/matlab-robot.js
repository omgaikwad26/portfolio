import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import '../styles/projectDetails.css';

import Simulink from '../assets/images/simulink.png';
import roboMat from '../assets/images/Robo-Matlab.png';  // Example image import  // Example image import

import Navrobot from '../assets/videos/autorobot.mp4';

const MatlabRobot = () => {
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
            <h2>Autonomous Object Sorting using a Mobile Robot | Spring 2024</h2> 
            <p>
              As part of a university engineering design project, our team was tasked to navigate a mobile robot through simulated square arena, 
              identify colored pucks using computer vision, and sort them into their corresponding zones based on color. 
              The project required integrating several robotic subsystems, including path planning, object detection, and localization. 
              The robot also had to avoid obstacles and walls while executing its tasks
            </p>

            <h3>What I did:</h3>
            <p>
              Developed algorithms for an autonomous robot capable of sorting colored objects in a simulated arena using MATLAB and Simulink.
            </p>

            <h3>How?</h3>
            <p>
            I developed the algorithms in MATLAB, breaking the system down into four key subsystems: 
            returning to the center of the arena, detecting the colored pucks, moving the puck to the correct zone, and wall avoidance. 
            I also developed stateflow-based logic in Simulink.
            </p>

          </div>

          {/* Image section */}
          <div className="project-media">
            <img
              src={roboMat} // Replace with actual image path
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
              src={Simulink} // Replace with actual image path
              alt="Hydraulic system optimization"
              className="project-image"
            />
          </div>

          {/* Text section */}
          <div className="project-text">

          <h3>Results:</h3>
            <p>
              The robot was able to successfully detect and sort red and green pucks, achieving consistent accuracy in placing each puck in its correct zone.
            </p>

            <div className="skill-section">
              <h3>SKILLS</h3>
              <div className="skill-section-filter">
                <button className={`skill-filter-item`}>MATLAB</button>
                <button className={`skill-filter-item`}>Python Programming</button>
                <button className={`skill-filter-item`}>SIMULINK</button>

              </div>
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

  );
};

export default MatlabRobot;
