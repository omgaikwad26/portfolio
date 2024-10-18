import React from 'react';
import { Link } from 'react-router-dom';
import linkedinLogo from '../assets/images/linkedin-logo.png'; // Replace with your actual path
import '../styles/Footer.css'; // Make sure to include this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <Link href="https://www.linkedin.com/in/omgaikwad" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="footer-icon" />
            <span>LinkedIn</span>
          </Link>
        </div>
        <div className="footer-item">
          <Link href="mailto:your-email@gmail.com">ogaikwad@stevens.edu</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
