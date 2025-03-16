import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample data for question papers
  const papers = [
    { id: 1, title: 'Mathematics 2024', class: '10th', subject: 'Mathematics', year: 2024, link: '#' },
    { id: 2, title: 'Science 2024', class: '10th', subject: 'Science', year: 2024, link: '#' },
    { id: 3, title: 'English 2024', class: '10th', subject: 'English', year: 2024, link: '#' },
    { id: 4, title: 'Physics 2024', class: '12th', subject: 'Physics', year: 2024, link: '#' },
    { id: 5, title: 'Chemistry 2024', class: '12th', subject: 'Chemistry', year: 2024, link: '#' },
    { id: 6, title: 'Biology 2024', class: '12th', subject: 'Biology', year: 2024, link: '#' },
    { id: 7, title: 'Mathematics 2024', class: '12th', subject: 'Mathematics', year: 2024, link: '#' },
    { id: 8, title: 'Physics 2024', class: '+2 2nd', subject: 'Physics', year: 2024, link: '#' },
    { id: 9, title: 'Chemistry 2024', class: '+2 2nd', subject: 'Chemistry', year: 2024, link: '#' },
    { id: 10, title: 'Mathematics 2024', class: '+2 2nd', subject: 'Mathematics', year: 2024, link: '#' },
    { id: 11, title: 'Physics 2023', class: '12th', subject: 'Physics', year: 2023, link: '#' },
    { id: 12, title: 'English 2023', class: '10th', subject: 'English', year: 2023, link: '#' },
  ];
  
  // Function to get color based on class
  const getClassColor = (className) => {
    switch(className) {
      case '10th':
        return '#4ade80'; // Green
      case '12th':
        return '#f97316'; // Orange
      case '+2 2nd':
        return '#3b82f6'; // Blue
      default:
        return '#8b5cf6'; // Purple
    }
  };
  
  // Filter papers based on active tab
  const filteredPapers = activeTab === 'all'
    ? papers
    : papers.filter(paper => paper.class === activeTab);
  
  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>Previous Year Question Papers</h1>
        <p>Find and download previous year question papers for various classes and subjects</p>
      </div>
      
      {/* Tabs */}
      <div className="tabs-container">
        <div className="tabs">
          <button 
            onClick={() => setActiveTab('all')}
            className={activeTab === 'all' ? 'tab active' : 'tab'}
            style={activeTab === 'all' ? {backgroundColor: '#8b5cf6'} : {}}
          >
            All Papers
          </button>
          <button 
            onClick={() => setActiveTab('10th')}
            className={activeTab === '10th' ? 'tab active' : 'tab'}
            style={activeTab === '10th' ? {backgroundColor: '#4ade80'} : {}}
          >
            10th Class
          </button>
          <button 
            onClick={() => setActiveTab('12th')}
            className={activeTab === '12th' ? 'tab active' : 'tab'}
            style={activeTab === '12th' ? {backgroundColor: '#f97316'} : {}}
          >
            12th Class
          </button>
          <button 
            onClick={() => setActiveTab('+2 2nd')}
            className={activeTab === '+2 2nd' ? 'tab active' : 'tab'}
            style={activeTab === '+2 2nd' ? {backgroundColor: '#3b82f6'} : {}}
          >
            +2 2nd Year
          </button>
        </div>
      </div>
      
      {/* Paper Cards */}
      <div className="papers-grid">
        {filteredPapers.map((paper, index) => (
          <div 
            key={paper.id} 
            className="paper-card"
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            <div 
              className="paper-header"
              style={{
                background: `linear-gradient(135deg, ${getClassColor(paper.class)}22 0%, ${getClassColor(paper.class)}11 100%)`
              }}
            >
              <div className="paper-badges">
                <span 
                  className="badge class-badge"
                  style={{
                    backgroundColor: `${getClassColor(paper.class)}22`,
                    color: getClassColor(paper.class)
                  }}
                >
                  {paper.class}
                </span>
                <span className="badge year-badge">{paper.year}</span>
              </div>
              <h3 
                className="paper-title"
                style={{ color: getClassColor(paper.class) }}
              >
                {paper.title}
              </h3>
              <p className="paper-subject">Subject: {paper.subject}</p>
            </div>
            <div className="paper-footer">
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="download-button"
                style={{
                  backgroundColor: getClassColor(paper.class),
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = `${getClassColor(paper.class)}dd`;
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = getClassColor(paper.class);
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Download Paper
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Empty state */}
      {filteredPapers.length === 0 && (
        <div className="empty-state">
          <p>No question papers available for this selection.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;