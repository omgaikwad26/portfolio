import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Projects.css'; // Assuming your CSS is in this path
import '../styles/projectDetails.css';

import Purple from '../assets/images/purple.png';
import Robot from '../assets/images/robopic.png';

import Navrobot from '../assets/videos/autorobot.mp4';



const AutoRobot = () => {
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
            <h2>Autonomous Navigation Robot | Spring 2022 </h2> 
            <p>
              As part of a university engineering design project, our team was tasked with designing and building an autonomous navigation robot. 
              The robot had to navigate through a simulated arena using LIDAR sensors and ultrasonic sensors to detect obstacles and reach designated targets without human intervention. 
            </p>

            <h3>What I did:</h3>
            <p>
            I developed the navigation logic and assist in the integration of sensors and circuits, ensuring that 
            the robot could reach all targets within the given time frame while avoiding obstacles.
            </p>

            <h3>How?</h3>
            <p>
              I used Arduino IDE to develop the code in C++ and integrated ultrasonic sensors for real-time obstacle detection, 
              allowing the robot to autonomously avoid obstacles. The robot's pathfinding was handled using 
              algorithms that calculated distances and angles to the target.
            </p>

            <h3>Results:</h3>
            <p>
            The robot successfully navigated the entire arena, reaching all four targets in <b>1 minute and 33 seconds</b>, 
            while avoiding all obstacles while efficiently moving toward its targets.
            </p>

            <div className="skill-section">
              <h3>SKILLS</h3>
              <div className="skill-section-filter">
                <button className={`skill-filter-item`}>SOLIDWORKS</button>
                <button className={`skill-filter-item`}>EMBEDDED SYSTEMS</button>
                <button className={`skill-filter-item`}>C++ PROGRAMMING</button>

              </div>
            </div>

          </div>

          {/* Image section */}
          <div className="project-media">
            <img
              src={Robot} // Replace with actual image path
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

export default AutoRobot;
