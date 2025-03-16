import React from 'react';
import './MentorBanner.css';
import image from '../../assets/image.png'

const MentorBanner = () => {
  return (
    <div className="mentor-banner">
      <div className="mentor-illustration">
        {/* Replace the CSS illustration with an image */}
        <img
          src={image}
          alt="Teacher illustration with educational elements"
          className="mentor-image"
        />
      </div>
      
      <div className="mentor-content">
        <h2>Want to share your knowledge? Join us a Mentor</h2>
        <p>
          High definition video is video of higher resolution and quality 
          than standard-definition. While there is no standardized meaning 
          for high-definition, generally any video.
        </p>
        <button className="career-button">Career Information</button>
      </div>
    </div>
  );
};

export default MentorBanner;