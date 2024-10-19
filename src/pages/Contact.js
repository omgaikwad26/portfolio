import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Contact.css'; // Ensure to include your CSS for styling


import Linkedin from '../assets/images/linkedin-logo.png';  // Example image import


const Contact = () => {
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
          {/* Optional overlay for better text visibility */}
          <div className="contact-content">
            <h1>GET IN TOUCH</h1>
          </div>
        </div>
      </section>

      <div className='contact'>
        <div className="contact-grid">
          {/* Contact Form Section */}
          <div className="contact-form">
            <h2>LET'S CHAT</h2>
            <form action="mailto:youremail@gmail.com" method="post" enctype="text/plain">
              <label htmlFor="name">Your Name *</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" required></textarea>

              <button type="submit">SEND MESSAGE</button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="contact-form">
            <h2>CONTACT INFO</h2>
            <div className="contact-icons">
              <a href="https://www.linkedin.com/in/omgaikwad/" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
            </div>

            <div className="email-info">
              <h1>EMAIL ME</h1>
              <p>Personal: {' '}
              <a href="mailto:omgaikwad222@gmail.com">omgaikwad222@gmail.com </a>
              </p>
              <p>School: {' '}
              <a href="mailto:ogaikwad@stevens.edu">ogaikwad@stevens.edu</a>
              </p>

            </div>
          </div>
        </div>

        {/* Back Home Button */}
        <section className="home-footer">
          <Link to="/" className="cta-button">Home</Link>
        </section>
      </div>

    </div>
  );
};

export default Contact;
