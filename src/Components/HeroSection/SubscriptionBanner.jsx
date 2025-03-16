import React, { useState } from 'react';
import './SubscriptionBanner.css';

const SubscriptionBanner = () => {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribing with email:', email);
    // Reset email field after submission
    setEmail('');
  };
  
  return (
    <div className="subscription-banner">
      {/* User Avatars */}
      <div className="avatar avatar-1">
        <img src="/api/placeholder/40/40" alt="User avatar" />
      </div>
      <div className="avatar avatar-2">
        <img src="/api/placeholder/40/40" alt="User avatar" />
      </div>
      <div className="avatar avatar-3">
        <img src="/api/placeholder/40/40" alt="User avatar" />
      </div>
      <div className="avatar avatar-4">
        <img src="/api/placeholder/40/40" alt="User avatar" />
      </div>
      <div className="avatar avatar-5">
        <img src="/api/placeholder/40/40" alt="User avatar" />
      </div>
      <div className="avatar avatar-6">
        <img src="/api/placeholder/40/40" alt="User avatar" />
      </div>
      
      {/* Content */}
      <div className="subscription-content">
        <h2>Subscribe For Get Update<br/>Every New Courses</h2>
        <p>20K+ students daily learn. Subscribe for new courses.</p>
        
        <form className="subscription-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionBanner;