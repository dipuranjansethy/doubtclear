import React from 'react';
import './MentorRecruitmentBanner.css'; // Import the CSS file

const MentorRecruitmentBanner = () => {
  return (
    <div className="mentor-banner">
      {/* Left content section */}
      <div className="content-section">
        <div className="career-level">Career Level</div>
        <h2 className="heading">Want to share your knowledge? Join us a Mentor</h2>
        <p className="description">
          Looking for a way to give back to your professional community, build your leadership skills, and make a difference? Join our mentorship program and help shape the future of our industry.
        </p>
        <button className="register-button">Register Now</button>
      </div>
      
      {/* Right image section */}
      <div className="image-section">
        {/* Background dot pattern */}
        <div className="dot-pattern">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="dot"></div>
          ))}
        </div>
        
        {/* Mentor illustration */}
        <div className="illustration">
          {/* Desk */}
          <div className="desk"></div>
          
          {/* Person at desk */}
          <div className="person">
            {/* Laptop */}
            <div className="laptop"></div>
            
            {/* Person parts */}
            <div className="hard-hat"></div>
            <div className="head"></div>
            <div className="body"></div>
            <div className="legs"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorRecruitmentBanner;