// src/pages/Resume.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/navBar.css';  // Ensure Resume-specific styles
import '../styles/Resume.css';  // Ensure Resume-specific styles
import Footer from '../components/Footer';

import CV from '../assets/reports/OMG.pdf';

const Resume = () => {
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
          <div className="resume-content">
            <h1>RESUME</h1>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <div className="resume-container">
        <embed src={CV} type="application/pdf" width="100%" height="100%" />
      </div>

      <Footer />
    </div>
  );
};

export default Resume;
