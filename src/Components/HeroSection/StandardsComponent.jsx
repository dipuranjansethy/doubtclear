import React, { useState } from 'react';
import './StandardsComponent.css';

const StandardsComponent = () => {
  const [activeTab, setActiveTab] = useState('primary');

  // Education level data
  const educationLevels = {
    kindergarten: {
      title: "Kindergarten Standards",
      description: "Early childhood education standards focusing on foundational skills and development.",
      classes: ["Pre-KG", "LKG", "UKG"]
    },
    primary: {
      title: "Primary School Standards",
      description: "Standards for primary education developing core academic and social skills.",
      classes: ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"]
    },
    highSchool: {
      title: "High School Standards",
      description: "Advanced standards preparing students for higher education and career readiness.",
      classes: ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"]
    },
    college: {
      title: "College Standards",
      description: "Higher education standards focusing on specialized knowledge and skills.",
      classes: ["Plus 2 First Year", "Plus 2 Second Year" ]
    }
  };

  // Generate standards based on active tab
  const generateStandards = () => {
    const colors = ['#FF8C42', '#347B98', '#56C596', '#277DA1', '#4CC9F0', '#FF7D00', '#E63946', '#F9C74F'];
    
    // Get classes for the active tab
    const classes = educationLevels[activeTab].classes;
    
    return classes.map((className, index) => ({
      id: index + 1,
      color: colors[index % colors.length],
      title: `Standard for ${className}`,
      description: `This standard outlines the key learning outcomes and quality metrics for ${className} education, ensuring comprehensive development and skill acquisition appropriate for this level.`
    }));
  };

  const standards = generateStandards();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="standards-container">
      <div className="standards-header">
        <h1>{educationLevels[activeTab].title} Teachers for Students</h1>
        <p className="header-text">
          {educationLevels[activeTab].description} Our standards ensure quality education delivery and measurable outcomes for all students.
        </p>
        
        <div className="education-tabs">
          <button 
            className={`tab-button ${activeTab === 'kindergarten' ? 'active' : ''}`}
            onClick={() => handleTabClick('kindergarten')}
          >
            Kindergarten
          </button>
          <button 
            className={`tab-button ${activeTab === 'primary' ? 'active' : ''}`}
            onClick={() => handleTabClick('primary')}
          >
            Primary School
          </button>
          <button 
            className={`tab-button ${activeTab === 'highSchool' ? 'active' : ''}`}
            onClick={() => handleTabClick('highSchool')}
          >
            High School
          </button>
          <button 
            className={`tab-button ${activeTab === 'college' ? 'active' : ''}`}
            onClick={() => handleTabClick('college')}
          >
            College
          </button>
        </div>
      </div>
      
      <div className="standards-grid">
        {standards.map((standard) => (
          <div className="standard-card" key={standard.id}>
            <div className="standard-number" style={{ backgroundColor: standard.color }}>
              {standard.id}
            </div>
            <h3>{standard.title}</h3>
            <p>{standard.description}</p>
            <button className="details-button">Class Details</button>
          </div>
        ))}
      </div>
      
      {/* <div className="visit-more-container">
        <button className="visit-more-button">View All Standards</button>
      </div> */}
    </div>
  );
};

export default StandardsComponent;