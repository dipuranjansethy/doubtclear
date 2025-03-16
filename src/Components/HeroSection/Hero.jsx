import React from 'react';
import './Hero.css';
import image from '../../assets/image15.png';
import { Search, ChevronDown, BookOpen, Lightbulb, Users, Calculator } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Left section */}
      <div className="hero-content">
        <div className="learning-badge">
          <p>Never Stop Learning</p>
        </div>
        
        <h1 className="hero-title">
          Get Best Teachers Of Your City<br />
          {/* With Endurso<br /> */}
          with <span className="text-gradient">Edurose</span>
        </h1>
        
        <p className="hero-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
          ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis
          consectetur adipiscing elit.
        </p>
        
        <div className="search-container">
          <div className="dropdown-container">
            <select className="dropdown-select">
              <option>Kindergarten</option>
              <option>Primary</option>
              <option>Secondary</option>
              <option>High School</option>
              <option>College</option>
            </select>
            <ChevronDown className="dropdown-icon" size={16} />
          </div>
          <input
            type="text"
            placeholder="Class/Course"
            className="search-input"
          />
          <button className="search-button">
            <Search size={20} className="search-icon" /> Search
          </button>
        </div>
      </div>
      
      {/* Right section - Image with floating icons */}
      <div className="hero-image-container">
        <div className="floating-icon icon-book">
          <BookOpen size={24} color="#8b5cf6" />
        </div>
        <div className="floating-icon icon-bulb">
          <Lightbulb size={24} color="#8b5cf6" />
        </div>
        <div className="floating-icon icon-teacher">
          <Users size={24} color="#8b5cf6" />
        </div>
        <div className="floating-icon icon-math">
          <Calculator size={24} color="#8b5cf6" />
        </div>
        <div className="student-image">
          <img
            src={image}
            alt="Student learning"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;