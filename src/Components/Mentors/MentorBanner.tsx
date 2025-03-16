import React from 'react';

const MentorBanner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="navigation">
          <a href="/" className="nav-link inactive">Home</a> | <a href="/our-mentors" className="nav-link active">Our Mentors</a>
        </div>
        <div className="banner-text">
          <h1>Qualified mentor</h1>
        </div>
      </div>
      <style jsx>{`
        .banner-container {
          width: 68%;
          background-color: white;
          background-image: url('src/assets/bannermento.png');
          background-repeat: no-repeat;
          background-position: right center;
          background-size: contain;
          border-radius: 8px;
          padding: 20px;
          font-family: 'Arial', sans-serif;
          position: relative;
          margin-left:250px;
          min-height: 180px; /* Adjust based on your image height */
        }
        .banner-content {
          display: flex;
          flex-direction: column;
          position: relative;
          height: 100%;
          width: 50%; /* Adjust to leave space for the background image */
        }
        .navigation {
          font-size: 14px;
          margin-bottom: 20px;
        }
        .nav-link {
          text-decoration: none;
        }
        .inactive {
          color: #888888;
        }
        .active {
          color: #4a90e2;
        }
        .nav-link.active:hover {
          text-decoration: underline;
        }
        .banner-text {
          flex: 1;
        }
        h1 {
          font-size: 32px;
          color: #333;
          margin: 0;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default MentorBanner;