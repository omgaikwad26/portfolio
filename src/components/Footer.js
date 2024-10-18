import React from 'react';
import linkedinLogo from '../assets/images/linkedin-logo.png'; // Replace with your actual path
import '../styles/Footer.css'; // Make sure to include this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <a href="https://www.linkedin.com/in/omgaikwad" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="footer-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="footer-item">
          <a href="mailto:your-email@gmail.com">ogaikwad@stevens.edu</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
