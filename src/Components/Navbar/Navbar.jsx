import React, { useState } from 'react';
import Logo from '../../assets/icon.png';
import Account from '../../assets/Outline.png';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const dropdownItems = {
    kindergarten: [],
    primaryschool: [
      { display: 'Class I', value: '1' },
      { display: 'Class II', value: '2' },
      { display: 'Class III', value: '3' },
      { display: 'Class IV', value: '4' },
      { display: 'Class V', value: '5' }
    ],
    highschool: [
      { display: 'Class VI', value: '6' },
      { display: 'Class VII', value: '7' },
      { display: 'Class VIII', value: '8' },
      { display: 'Class IX', value: '9' },
      { display: 'Class X', value: '10' }
    ],
    college: [
      { display: 'Plus 2 1st year', value: '11' },
      { display: 'Plus 2 2nd year', value: '12' }
    ],
  };
  
  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleNavigation = (category, grade = null) => {
    let path = '/mentors';
    let queryParams = new URLSearchParams();

    const categoryMapping = {
      'kindergarten': 'kindergarten',
      'primaryschool': 'primaryschool',
      'highschool': 'highschool',
      'college': 'college'
    };

    if (category) {
      queryParams.append('category', categoryMapping[category]);
      if (grade) {
        queryParams.append('class', grade);
      }
    }

    path += `?${queryParams.toString()}`;
    window.location.href = path;
    closeMobileMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img src={Logo} alt="logo" />
          <h1 className="logo-text">LOGO</h1>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className={`navbar-center ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li>
            <a href="/" onClick={closeMobileMenu}>Home</a>
          </li>
          
          <li className="dropdown">
            <a 
              href="#"
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('kindergarten');
              }}
            >
              For Kindergarten
            </a>
          </li>
          <li className="dropdown">
            <a 
              href="#"
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                handleDropdownClick('primaryschool');
              }}
            >
              For Primary School
              <ChevronDown className="dropdown-arrow" size={16} />
            </a>
            {activeDropdown === 'primaryschool' && (
              <ul className="dropdown-menu active">
                {dropdownItems.primaryschool.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('primaryschool', item.value);
                      }}
                    >
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          
          <li className="dropdown">
            <a 
              href="#"
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                handleDropdownClick('highschool');
              }}
            >
              For High School
              <ChevronDown className="dropdown-arrow" size={16} />
            </a>
            {activeDropdown === 'highschool' && (
              <ul className="dropdown-menu active">
                {dropdownItems.highschool.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('highschool', item.value);
                      }}
                    >
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          
          <li className="dropdown">
            <a 
              href="#"
              className="dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                handleDropdownClick('college');
              }}
            >
              For College
              <ChevronDown className="dropdown-arrow" size={16} />
            </a>
            {activeDropdown === 'college' && (
              <ul className="dropdown-menu active">
                {dropdownItems.college.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('college', item.value);
                      }}
                    >
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          
          <li>
            <a href="/previous_questions" onClick={closeMobileMenu}>Shop</a>
          </li>
        </ul>
      </div>
      
      <div className="navbar-right">
        <a href="#" className="account-link">
          <span className="account-text">My Account</span>
          <img src={Account} alt="account" className="account-icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;