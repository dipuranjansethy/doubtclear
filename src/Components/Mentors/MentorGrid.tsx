import React, { useState, useEffect } from 'react';
import './MentorGrid.css'; // Make sure to update with the new CSS
import Teachers from '../../Teachers';
import { Link, useSearchParams } from 'react-router-dom';


const MentorGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of teachers to display per page
  
  // States for different filters
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedDistance, setSelectedDistance] = useState('all'); // New distance filter
  const [sortBy, setSortBy] = useState('recommended'); // Added sorting state
  
  // Extract unique subjects from Teachers data
  const allSubjects = ['all', ...new Set(Teachers.flatMap(teacher => teacher.subjects))];
  
  // Extract unique classes (standards) from Teachers data
  const allClasses = ['all', ...new Set(Teachers.flatMap(teacher => 
    teacher.classesOffered.flatMap(classItem => classItem.standard)
  ))].sort((a, b) => a - b);
  
  // Distance options for filtering
  const distanceOptions = [
    { value: 'all', label: 'Any Distance' },
    { value: '5', label: 'Within 5 km' },
    { value: '10', label: 'Within 10 km' },
    { value: '20', label: 'Within 20 km' },
    { value: '50', label: 'Within 50 km' }
  ];
  
  // Categories remain the same as before
  const categories = [
    { id: 'all', name: 'All Mentors' },
    { id: 'kindergarten', name: 'For Kindergarten' },
    { id: 'primaryschool', name: 'For Primary School' },
    { id: 'highschool', name: 'For High School' },
    { id: 'college', name: 'For College' },
    { id: 'technology', name: 'For Technology' }
  ];

  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Read URL parameters and set filters
    const categoryParam = searchParams.get('category');
    const classParam = searchParams.get('class');
    const distanceParam = searchParams.get('distance');

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }

    if (classParam) {
      setSelectedClass(classParam);
      // Scroll to filter section
      setTimeout(() => {
        const filterSection = document.querySelector('.filter-section');
        if (filterSection) {
          filterSection.scrollIntoView({ behavior: 'smooth' });
          // Select the appropriate class in the dropdown
          const classFilter = document.getElementById('class-filter');
          if (classFilter) {
            (classFilter as HTMLSelectElement).value = classParam;
          }
        }
      }, 100);
    }
    
    if (distanceParam) {
      setSelectedDistance(distanceParam);
    }
  }, [searchParams]);

  // Function to get filtered class options based on selected category
  const getFilteredClasses = () => {
    // Start with the "all" option
    let filteredClasses = ['all'];
    
    // Add appropriate grade levels based on category
    switch(selectedCategory) {
      case 'kindergarten':
        // Only show kindergarten grades (-2, -1, 0)
        filteredClasses = [...filteredClasses, ...allClasses.filter(c => c !== 'all' && parseInt(c) <= 0)];
        break;
      case 'primaryschool':
        // Only show primary school grades (1-5)
        filteredClasses = [...filteredClasses, ...allClasses.filter(c => c !== 'all' && parseInt(c) >= 1 && parseInt(c) <= 5)];
        break;
      case 'highschool':
        // Only show high school grades (6-10)
        filteredClasses = [...filteredClasses, ...allClasses.filter(c => c !== 'all' && parseInt(c) >= 6 && parseInt(c) <= 10)];
        break;
      case 'college':
        // Only show college grades (11-12)
        filteredClasses = [...filteredClasses, ...allClasses.filter(c => c !== 'all' && parseInt(c) >= 11 && parseInt(c) <= 12)];
        // If no college grades are found, add them manually
        if (filteredClasses.length === 1) { // Only 'all' is present
          filteredClasses.push('11', '12');
        }
        break;
      default:
        // For 'all' and 'technology' categories, show all grades
        filteredClasses = allClasses;
        break;
    }
    
    return filteredClasses;
  };

  // Reset class selection if the current selection is not valid for the new category
  useEffect(() => {
    const validClasses = getFilteredClasses();
    if (selectedClass !== 'all' && !validClasses.includes(selectedClass)) {
      setSelectedClass('all');
    }
  }, [selectedCategory]);

  // Filter teachers based on selected filters
  const filteredTeachers = Teachers.filter(teacher => {
    // Filter by category
    const categoryMatch = selectedCategory === 'all' || 
                         (selectedCategory === 'kindergarten' && teacher.classesOffered.some(c => c.standard.some(s => s <= 0))) ||
                         (selectedCategory === 'primaryschool' && teacher.classesOffered.some(c => c.standard.some(s => s >= 1 && s <= 5))) ||
                         (selectedCategory === 'highschool' && teacher.classesOffered.some(c => c.standard.some(s => s >= 6 && s <= 10))) ||
                         // Fix college filter to use classesOffered instead of qualifications
                         (selectedCategory === 'college' && teacher.classesOffered.some(c => c.standard.some(s => s >= 11 && s <= 12))) ||
                         (selectedCategory === 'technology' && teacher.subjects.some(s => ['Computer Science', 'Web Development', 'Programming', 'Technology'].includes(s)));
    
    // Filter by subject
    const subjectMatch = selectedSubject === 'all' || teacher.subjects.includes(selectedSubject);
    
    // Filter by class/standard
    const classMatch = selectedClass === 'all' || teacher.classesOffered.some(c => c.standard.includes(parseInt(selectedClass)));
    
    // Filter by distance (convert miles to km if needed)
    const distanceMatch = selectedDistance === 'all' || 
                          (teacher.distance !== undefined && 
                           teacher.distance * 1.60934 <= parseFloat(selectedDistance)); // Convert miles to km
    
    return categoryMatch && subjectMatch && classMatch && distanceMatch;
  });
  
  // Sort teachers based on selected sort option
  const sortedTeachers = [...filteredTeachers].sort((a, b) => {
    switch(sortBy) {
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'reviews':
        return (b.reviews?.length || 0) - (a.reviews?.length || 0);
      case 'nameAsc':
        return a.name.localeCompare(b.name);
      case 'nameDesc':
        return b.name.localeCompare(a.name);
      case 'distance':
        return (a.distance || Infinity) - (b.distance || Infinity);
      case 'recommended':
      default:
        // Sort by a combination of rating and reviews
        const aScore = (a.rating || 0) * (a.reviews?.length || 0);
        const bScore = (b.rating || 0) * (b.reviews?.length || 0);
        return bScore - aScore;
    }
  });
  
  // Calculate total pages
  const totalPages = Math.ceil(sortedTeachers.length / itemsPerPage);
  
  // Get current page teachers
  const indexOfLastTeacher = currentPage * itemsPerPage;
  const indexOfFirstTeacher = indexOfLastTeacher - itemsPerPage;
  const currentTeachers = sortedTeachers.slice(indexOfFirstTeacher, indexOfLastTeacher);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Scroll to top of grid when changing page
    document.querySelector('.results-summary').scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };
  
  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setCurrentPage(1);
  };
  
  const handleClassChange = (classStandard) => {
    setSelectedClass(classStandard);
    setCurrentPage(1);
  };
  
  const handleDistanceChange = (distance) => {
    setSelectedDistance(distance);
    setCurrentPage(1);
  };
  
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1);
  };
  
  // Clear specific filter
  const clearFilter = (filterType) => {
    switch (filterType) {
      case 'category':
        setSelectedCategory('all');
        break;
      case 'subject':
        setSelectedSubject('all');
        break;
      case 'class':
        setSelectedClass('all');
        break;
      case 'distance':
        setSelectedDistance('all');
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };
  
  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSubject('all');
    setSelectedClass('all');
    setSelectedDistance('all');
    setCurrentPage(1);
  };
  
  // Check if any filters are active
  const hasActiveFilters = selectedCategory !== 'all' || selectedSubject !== 'all' || selectedClass !== 'all' || selectedDistance !== 'all';

  // Get the filtered class options based on selected category
  const filteredClassOptions = getFilteredClasses();

  return (
    <div className="mentor-container">
      <div className="filter-section">
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${selectedCategory === category.id ? 
                (category.id === 'all' ? 'category-all-selected' : 'category-selected') : ''}`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Subject, Class, and Distance Filters */}
        <div className="additional-filters">
          <div className="filters-heading">Refine Your Search</div>
          
          <div className="filters-row">
            <div className="filter-group">
              <label htmlFor="subject-filter">Subject</label>
              <select 
                id="subject-filter" 
                value={selectedSubject} 
                onChange={(e) => handleSubjectChange(e.target.value)}
                className="filter-select"
              >
                {allSubjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject === 'all' ? 'All Subjects' : subject}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <label htmlFor="class-filter">Grade Level</label>
              <select 
                id="class-filter" 
                value={selectedClass} 
                onChange={(e) => handleClassChange(e.target.value)}
                className="filter-select"
              >
                {filteredClassOptions.map(classItem => (
                  <option key={classItem} value={classItem}>
                    {classItem === 'all' ? 'All Grades' : 
                     parseInt(classItem) < 0 ? `Kindergarten ${Math.abs(parseInt(classItem))}` :
                     parseInt(classItem) === 0 ? 'Kindergarten' :
                     parseInt(classItem) >= 11 && parseInt(classItem) <= 12 ? `College Year ${parseInt(classItem) - 10}` :
                     `Grade ${classItem}`}
                  </option>
                ))}
              </select>
            </div>
            
            {/* New Distance Filter */}
            <div className="filter-group">
              <label htmlFor="distance-filter">Distance</label>
              <select 
                id="distance-filter" 
                value={selectedDistance} 
                onChange={(e) => handleDistanceChange(e.target.value)}
                className="filter-select"
              >
                {distanceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            {hasActiveFilters && (
              <div className="filter-group">
                <label>&nbsp;</label>
                <button 
                  onClick={clearAllFilters}
                  className="clear-filters-button"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
          
          {/* Active filters display */}
          {hasActiveFilters && (
            <div className="active-filters">
              {selectedCategory !== 'all' && (
                <div className="filter-pill">
                  Category: {categories.find(c => c.id === selectedCategory)?.name}
                  <span className="filter-pill-clear" onClick={() => clearFilter('category')}>
                    ✕
                  </span>
                </div>
              )}
              
              {selectedSubject !== 'all' && (
                <div className="filter-pill">
                  Subject: {selectedSubject}
                  <span className="filter-pill-clear" onClick={() => clearFilter('subject')}>
                    ✕
                  </span>
                </div>
              )}
              
              {selectedClass !== 'all' && (
                <div className="filter-pill">
                  Grade: {
                    parseInt(selectedClass) < 0 ? `Kindergarten ${Math.abs(parseInt(selectedClass))}` :
                    parseInt(selectedClass) === 0 ? 'Kindergarten' :
                    parseInt(selectedClass) >= 11 && parseInt(selectedClass) <= 12 ? `College Year ${parseInt(selectedClass) - 10}` :
                    `Grade ${selectedClass}`
                  }
                  <span className="filter-pill-clear" onClick={() => clearFilter('class')}>
                    ✕
                  </span>
                </div>
              )}
              
              {/* Distance filter pill */}
              {selectedDistance !== 'all' && (
                <div className="filter-pill">
                  Distance: Within {selectedDistance} km
                  <span className="filter-pill-clear" onClick={() => clearFilter('distance')}>
                    ✕
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Results summary with sorting */}
      <div className="results-summary">
        <p>Showing {sortedTeachers.length} {sortedTeachers.length === 1 ? 'mentor' : 'mentors'}</p>
        
        <div className="sort-control">
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select" 
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="sort-select"
          >
            <option value="recommended">Recommended</option>
            <option value="rating">Highest Rating</option>
            <option value="reviews">Most Reviews</option>
            <option value="distance">Nearest First</option>
            <option value="nameAsc">Name (A-Z)</option>
            <option value="nameDesc">Name (Z-A)</option>
          </select>
        </div>
      </div>

      <div className="mentor-grid">
        {currentTeachers.map(teacher => (
          <Link 
            to={`/mentors/profile/${teacher.id}`} 
            key={teacher.id} 
            className="mentor-card"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className="mentor-image-container">
              <img 
                src={teacher.image || `src/assets/BG.png`} 
                alt={teacher.name} 
                className="mentor-image"
              />
              <button className="dropdown-button" onClick={(e) => e.preventDefault()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Display distance badge if available */}
              {teacher.distance !== undefined && (
                <div className="distance-badge">
                  {(teacher.distance * 1.60934).toFixed(1)} km
                </div>
              )}
            </div>
            <div className="mentor-info">
              <h3 className="mentor-name">{teacher.name}</h3>
              <p className="mentor-title">{teacher.subjects.slice(0, 2).join(', ')}{teacher.subjects.length > 2 ? '...' : ''}</p>
              {teacher.rating && (
                <div className="mentor-rating">
                  <span className="rating-star">★</span>
                  <span className="rating-value">{teacher.rating}</span>
                  <span className="rating-reviews">({teacher.reviews?.length || 0} reviews)</span>
                </div>
              )}
              <div className="mentor-subjects">
                <p className="small-text">
                  Teaches: {teacher.classesOffered.slice(0, 2).map(c => c.subject).join(', ')}
                  {teacher.classesOffered.length > 2 ? '...' : ''}
                </p>
              </div>
            </div>
          </Link>
        ))}
        
        {currentTeachers.length === 0 && (
          <div className="no-results">
            <p>No mentors found matching your filters.</p>
            <button onClick={clearAllFilters} className="clear-filters-button">Clear All Filters</button>
          </div>
        )}
      </div>

      {/* Pagination - only show if there are filtered teachers */}
      {sortedTeachers.length > 0 && totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-arrow"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="pagination-numbers">
            {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = index + 1;
              } else if (currentPage <= 3) {
                pageNum = index + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + index;
              } else {
                pageNum = currentPage - 2 + index;
              }
              
              return (
                <button
                  key={pageNum}
                  className={`pagination-number ${currentPage === pageNum ? 'pagination-number-active' : ''}`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>
          
          <button 
            className="pagination-arrow"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default MentorGrid;