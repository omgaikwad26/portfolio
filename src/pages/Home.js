import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import '../styles/Home.css'; // Ensure to include your CSS for styling
import WorkData from './WorkExperience.js'; 
import Footer from '../components/Footer.js'


import DoosanOm from '../assets/images/om-doosan.png';  // Example image import


function Home() {
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
          <div className="name-content">
            <h1>Mechanical Engineering Portfolio</h1>
            <h2>Om Gaikwad</h2>
          </div>
        </div>
      </section>



      <div className="summary-details">
        {/* First section: Text on the left, image on the right */}
        <div className="summary-details-grid">
          {/* Text section */}
          <div className="summary-text">

            <h2>Hi! I'm Om</h2>
            <p>
            My current status at <b>Stevens Institute of Technology</b>: 
            </p>
            <button className="summary-button">Bachelor of Engineering - Mechanical Engineering (Expected May 2025)</button>
            <button className="summary-button">Master of Engineering - Applied Artificial Intelligence (Expected Dec 2025)</button>
            <p>
            My academic focus spans the design and prototyping of robotic systems, with a solid foundation in manufacturing, mechanical design, 
            and use AI-driven optimization to find solutions to the problems in the automation industry.
            I’ve always been drawn to environments where I can tackle complex problems with real-world applications. 
            </p>
            <p>
            My experiences over the last few years allowed me to work on every stage of design, optimization and project development - in both mechanical and software systems.
            </p>
            <p><b>Email:</b> <a href="mailto:ogaikwad@stevens.edu">ogaikwad@stevens.edu</a></p>
            <p><b>Location:</b> Hoboken, NJ (Willing to Relocate)</p>

            {/* Button to go back to Projects */}
            <section className="aboutme-button-container">
              <Link to="/AboutMe" className="aboutme-button">
                More About Me
              </Link>
            </section>

          </div>

          {/* Image section */}
          <div className="summary-media">
            <img
              src={DoosanOm} // Replace with actual image path
              alt="Component design in Autodesk Inventor"
              className="summary-image"
            />
          </div>
        </div>

        <div className="name-content">
          <h1>Work Experience</h1>
        </div>

        <div className="elpt-work">
          <div className="elpt-work-content hover">
            {WorkData.map((project, index) => (
              <div className="work-item-wrapper" key={index}>
                <Link to={project.link} className="work-item" target="_blank" rel="noopener noreferrer">
                  {/* Image */}
                  <img src={project.imageUrl} alt={project.title} />
  
                  {/* Hover info */}
                  <div className="work-item-infos-wrapper">
                    <h3 className=".work-item-infos-wrapper">{project.title}</h3>
                    <h3 className=".work-item-infos-wrapper">{project.description}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      {/* Footer with Call-to-Action */}
      <section className="home-footer">
        <Link to="/projects" className="cta-button">Explore My Projects</Link>
      </section>
      </div>

      <Footer />

    </div>
  );
};

export default Home;
