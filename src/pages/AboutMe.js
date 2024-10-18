import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/AboutMe.css'; // Ensure to include your CSS for styling

import Footer from '../components/Footer.js'

import Purple from '../assets/images/purple.png';  // Example image import

const Home = () => {
  return (
    <div>
      {/* Combined Name Section and Navbar */}
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
          {/* Optional overlay for better text visibility */}
          <div className="aboutme-content">
            <h1>ABOUT ME</h1>
          </div>
        </div>
      </section>



      <div className="summary-details">
        {/* First section: Text on the left, image on the right */}
        <div className="summary-details-grid">

            {/* Image section */}
          <div className="summary-media">
            <img
              src={Purple} // Replace with actual image path
              alt="Component design in Autodesk Inventor"
              className="summary-image"
            />
          </div>

          {/* Text section */}
          <div className="summary-text">
            <p>
            My passion for engineering started with my undying love for the universe. As a kid, I was obsessed with the stories of space exploration and space missions that fueled my interest in maths and physics. 
            That curiosity led me down the path of mechanical engineering and robotics.
            </p>
            <p>
            Besides academics, I love working out and running and traveling. I’ve always found that staying active helps keep my mind sharp and focused. 
            Running and working out helps me to stay disciplined, and challenge myself and carry these values that carry over to other aspects of my life. 
            </p>

            <p>You can learn more about my academic journey in my resume: </p>

            {/* Button to go back to Projects */}
            <section className="aboutme-button-container">
              <Link to="/Resume" className="aboutme-button">
                Resume
              </Link>
            </section>

          </div>
        </div>

      {/* Footer with Call-to-Action */}
      <section className="home-footer">
        <Link to="/" className="cta-button">Home</Link>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
