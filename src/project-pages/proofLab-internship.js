import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import '../styles/projectDetails.css';
import DoosanOm from '../assets/images/om-doosan.png';  // Example image import


import Purple from '../assets/images/purple.png';  // Example image import
import Camera from '../assets/images/cameracalibration.png';  // Example image import

function ProofLabDetails() {
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
            <h2>SIT Prototype Object Fabrication (ProOF) Lab | Robotics Engineer Intern </h2>
            <h2>May 2024 - Present</h2>

            <h3>What I did:</h3>
            <p>
              <ul>
                <li>Developed a path planning algorithm and isoparametric mapping for DOOSAN H2515 robot workspace.</li>
                <li>Programmed the path planning algorithm in <b>Python</b> for automatic fiber placement on a 2D surface.</li>
                <li>Built a virtual testing environment to test the robot's functionality before deployment.</li>
              </ul>
            </p>

            <h3>How I did it:</h3>
            <p>
              <ul>
                <li>Used <b>OpenCV</b> and <b>Computer Vision</b> to map the robot's workspace.</li>
                <li>Created a virtual testing environment for the DOOSAN H2515 collaborative robot using MATLAB and ROS 2.0.</li>
              </ul>
            </p>
          </div>

          {/* Image section */}
          <div className="project-media">
            <img
              src={DoosanOm}  // Example image import} // Replace with actual image path
              alt="DOOSAN H2125 collaborative robot"
              className="project-image"
            />
          </div>
        </div>

        {/* Second section: Image on the left, text on the right */}
        <div className="project-details-grid reverse">
          {/* Image section */}
          <div className="project-media">
            <img
              src={Camera} // Replace with actual image path
              alt="MATLAB simulation environment"
              className="project-image"
            />
          </div>

          {/* Text section */}
          <div className="project-text">
            <h3>The results:</h3>
            <p>
              <ul>
                <li>Successfully developed a Path Planning Algorithm for Automatic Fiber Placement</li>
                <li>The improved algorithms made lab operations more efficient and reliable, while the virtual environment reduced the time and cost associated with physical testing</li>
              </ul>
              The improved algorithms made lab operations more efficient and reliable, while the virtual environment reduced the time and cost associated with physical testing.
            </p>
            <div className="skill-section">
              <h3>SKILLS</h3>
              <div className="skill-section-filter">
              <button className="skill-filter-item">Python</button>
              <button className="skill-filter-item">OpenCV</button>
              <button className="skill-filter-item">Computer Vision</button>
              <button className="skill-filter-item">Doosan H2515 Cobot</button>
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

export default ProofLabDetails;
