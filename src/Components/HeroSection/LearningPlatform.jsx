import React from 'react';
import './LearningPlatform.css'; // Import the CSS file

const LearningPlatform = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>High quality video, audio & live classes</h2>
        <p>
          Learn from the best on any compatible device anywhere, with our superior-quality traditional or blended learning modules that span conventional sectors alike.
          Highly visual, free-spirit experiential activities plus flexible content-creation resources across all standard curriculum disciplines, etc.
        </p>
        <button className="btn-primary">VIEW CLASSES</button>
      </div>
      
      <div className="content-card">
        <div className="main-video">
          <img src="https://via.placeholder.com/800x450" alt="Teacher with digital interface" />
          
          <div className="video-overlay">
            <div className="interactive-elements">
              <div className="video-snippet snippet-1">
                <img src="https://via.placeholder.com/112x192" alt="Student video" />
              </div>
              
              <div className="video-snippet snippet-2">
                <img src="https://via.placeholder.com/112x96" alt="Learning material" />
              </div>
              
              <div className="video-snippet snippet-3">
                <img src="https://via.placeholder.com/112x96" alt="Student activity" />
              </div>
            </div>
          </div>
          
          <div className="video-controls">
            <button className="control-btn">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button className="control-btn">⟳</button>
          </div>
        </div>
      </div>
      
      <div className="class-options">
        <div className="class-option">
          <div className="icon-container">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          </div>
          <span className="option-label">Audio Classes</span>
        </div>
        
        <div className="class-option">
          <div className="icon-container">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <span className="option-label">Live Classes</span>
        </div>
        
        <div className="class-option">
          <div className="icon-container">
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <line x1="7" y1="2" x2="7" y2="22"></line>
              <line x1="17" y1="2" x2="17" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <line x1="2" y1="7" x2="7" y2="7"></line>
              <line x1="2" y1="17" x2="7" y2="17"></line>
              <line x1="17" y1="17" x2="22" y2="17"></line>
              <line x1="17" y1="7" x2="22" y2="7"></line>
            </svg>
          </div>
          <span className="option-label">Recorded Class</span>
        </div>
      </div>
      
      <div className="decoration"></div>
    </div>
  );
};

export default LearningPlatform;