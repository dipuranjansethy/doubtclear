import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Logo and Social Media Section */}
        <div className="footer-column logo-column">
          <div className="footer-logo">
            <div className="logo-square"></div>
            <span className="logo-text">LOGO</span>
          </div>
          <div className="social-icons">
            <a href="#" className="social-icon facebook">
              <span className="icon-circle">f</span>
            </a>
            <a href="#" className="social-icon twitter">
              <span className="icon-circle">t</span>
            </a>
          </div>
        </div>

        {/* Courses Column */}
        <div className="footer-column">
          <h3>Courses</h3>
          <ul className="footer-links">
            <li><a href="#">Classroom courses</a></li>
            <li><a href="#">Virtual classroom courses</a></li>
            <li><a href="#">E-learning courses</a></li>
            <li><a href="#">Video Courses</a></li>
            <li><a href="#">Online Courses</a></li>
          </ul>
        </div>

        {/* Community Column */}
        <div className="footer-column">
          <h3>Community</h3>
          <ul className="footer-links">
            <li><a href="#">Learners</a></li>
            <li><a href="#">Partners</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Transactions</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Teaching Center</a></li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="footer-column">
          <h3>Quick links</h3>
          <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Professional Education</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Admissions</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Programs</a></li>
          </ul>
        </div>

        {/* More Column */}
        <div className="footer-column">
          <h3>More</h3>
          <ul className="footer-links">
            <li><a href="#">Press</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;