import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import '../styles/projectDetails.css';

import sesmaProto from '../assets/images/sesma-proto.png';  // Example image import
import sesmaGearbox from '../assets/images/sesmagearbox.png';  // Example image import

const SESMAProject = () => {
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
            <h2>Soft Exosuit for Spinal Muscular Atrophy (SESMA 3.0) | Mechanical Engineering Capstone Project</h2>
            <h2>July 2024 - Present</h2>
            <p>
            As a senior year capstone project, my team is working on the third iteration of the Soft Exosuit for Spinal Muscular Atrophy (SESMA 3.0). 
            The exosuit is designed to assist individuals with SMA Type III in performing sit-to-stand movements. 
            Previous versions of the exosuit (SESMA 1.0 and 2.0) had limitations, including cable slack, limited motor power, and overall bulkiness. 
            Our mission is to improve upon these past iterations and deliver a lightweight, effective, and user-friendly 
            exosuit that can alleviate muscle strain during the STS motion.
            </p>

            <h3>My role:</h3>
            <p>
              <li>Develop algorithms to integrate sensors (force-sensing resistors, accelerometer, rotary encoder) for real-time monitoring of the user's position, 
              optimizing motor control and power usage</li> 
              <li>Develop control algorithms in C/C++ that interpret sensor data and dynamically adjust motor assistance during the sit-to-stand motion</li>
            </p>
          </div>

          {/* Image section */}
          <div className="project-media">
            <img
              src={sesmaGearbox} // Replace with actual image path
              alt="SESMA 3.0 design diagram"
              className="project-image"
            />
          </div>
        </div>

        {/* Second section: Image on the left, text on the right */}
        <div className="project-details-grid reverse">
          {/* Image section */}
          <div className="project-media">
            <img
              src={sesmaProto} // Replace with actual image path
              alt="SESMA 3.0 prototype"
              className="project-image"
            />
          </div>

          {/* Text section */}
          <div className="project-text">
            <h3>The results:</h3>
            <p>
              TBD
            </p>
            <div className="skill-section">
              <h3>SKILLS</h3>
              <div className="skill-section-filter">
                <button className={`skill-filter-item`}>Mechanical Design</button>
                <button className={`skill-filter-item`}>Seeeduino 4.3</button>
                <button className={`skill-filter-item`}>Microcontroller Programming</button>
                <button className={`skill-filter-item`}>Barometric Sensors</button>
                <button className={`skill-filter-item`}>Force Sensing Resistors</button>
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

export default SESMAProject;
