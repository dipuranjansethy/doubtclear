import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubscriptionBanner from '../Components/HeroSection/SubscriptionBanner';
import './Home.css';
import img from '../assets/BG.png';
import Teachers from '../Teachers';

const TeacherProfile = () => {
  const [activeTab, setActiveTab] = useState('about');
  const { teacherId } = useParams();
  
  // Find the teacher with the matching ID from the Teachers data
  const teacher = Teachers.find(t => t.id === teacherId);
  
  // If teacher not found, show not found message
  if (!teacher) {
    return (
      <div style={{ 
        maxWidth: '1180px', 
        margin: '0 auto', 
        padding: '16px', 
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1>Teacher Not Found</h1>
        <p>The teacher you're looking for doesn't exist.</p>
      </div>
    );
  }

  // Calculate years of experience (assuming teaching since PhD or highest degree)
  const highestDegree = teacher.qualifications.reduce((highest, current) => {
    return (highest.year > current.year) ? highest : current;
  }, { year: 0 });
  
  const yearsExperience = new Date().getFullYear() - highestDegree.year;
  
  return (
    <div style={{ backgroundColor: "#f8f0ff", padding: "20px 0" }}>
      <div style={{
        maxWidth: '1180px',
        margin: '0 auto',
        padding: '16px',
        borderRadius: '8px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: "#f8f0ff"
      }}>
        {/* Header Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '14px',
          color: '#777',
          marginBottom: '16px'
        }}>
          <span>Home</span>
          <span style={{ margin: '0 4px' }}>/</span>
          <span>Mentor</span>
          <span style={{ margin: '0 4px' }}>/</span>
          <span style={{ color: '#6b46c1' }}>{teacher.name}</span>
        </div>

        {/* Profile Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '24px',
          marginBottom: '24px',
          alignItems: 'center'
        }}>
          {/* Profile Image */}
          <div style={{
            width: '96px',
            height: '96px'
          }}>
            <img 
              src={teacher.image || img}
              alt={`${teacher.name}'s profile`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </div>

          {/* Profile Info and CTA */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}>
            <div style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}>
              <div>
                <h1 style={{
                  margin: 0,
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#4a235a'
                }}>{teacher.name}</h1>
                <p style={{
                  margin: '4px 0 0 0',
                  fontSize: '14px',
                  color: '#666'
                }}>{teacher.subjects.join(', ')}</p>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '4px',
                  fontSize: '14px',
                  color: '#666'
                }}>
                  <span style={{ color: '#f9ca24', marginRight: '4px' }}>★</span>
                  <span>{teacher.rating}</span>
                  <span style={{ margin: '0 4px' }}>•</span>
                  <span>{teacher.reviews.length} reviews</span>
                  <span style={{ margin: '0 4px' }}>•</span>
                  <span>{teacher.proficiency} level</span>
                </div>
              </div>
              <button style={{
                backgroundColor: '#6b46c1',
                color: 'white',
                border: 'none',
                padding: '8px 24px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#5a37a8'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#6b46c1'}>
                Contact Now
              </button>
            </div>
            
            {/* Locality Information */}
            {teacher.locality && (
              <div style={{
                marginTop: '8px',
                fontSize: '14px',
                color: '#666',
                display: 'flex',
                alignItems: 'center'
              }}>
                <span style={{ marginRight: '4px' }}>📍</span>
                <span>{teacher.locality}</span>
              </div>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #ddd',
          marginBottom: '24px'
        }}>
          <button 
            onClick={() => setActiveTab('about')}
            style={{
              padding: '8px 24px',
              fontWeight: '500',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: activeTab === 'about' ? 'white' : '#666',
              backgroundColor: activeTab === 'about' ? '#6b46c1' : 'transparent',
              borderRadius: '8px 8px 0 0'
            }}
          >
            About
          </button>
          <button 
            onClick={() => setActiveTab('courses')}
            style={{
              padding: '8px 24px',
              fontWeight: '500',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: activeTab === 'courses' ? 'white' : '#666',
              backgroundColor: activeTab === 'courses' ? '#6b46c1' : 'transparent',
              borderRadius: '8px 8px 0 0'
            }}
          >
            Courses
          </button>
          <button 
            onClick={() => setActiveTab('qualifications')}
            style={{
              padding: '8px 24px',
              fontWeight: '500',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: activeTab === 'qualifications' ? 'white' : '#666',
              backgroundColor: activeTab === 'qualifications' ? '#6b46c1' : 'transparent',
              borderRadius: '8px 8px 0 0'
            }}
          >
            Qualifications
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            style={{
              padding: '8px 24px',
              fontWeight: '500',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              color: activeTab === 'reviews' ? 'white' : '#666',
              backgroundColor: activeTab === 'reviews' ? '#6b46c1' : 'transparent',
              borderRadius: '8px 8px 0 0'
            }}
          >
            Reviews
          </button>
        </div>

        {/* Content Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '24px'
        }}>
          {/* Main Content */}
          <div style={{
            flex: '1',
          }}>
            {activeTab === 'about' && (
              <div>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#4a235a',
                  marginBottom: '16px'
                }}>About {teacher.name}</h2>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6',
                  marginBottom: '16px'
                }}>
                  {teacher.about}
                </p>
                
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#4a235a',
                  marginTop: '24px',
                  marginBottom: '12px'
                }}>Academic Performance</h3>
                <div style={{
                  backgroundColor: 'white',
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '16px'
                }}>
                  {teacher.tenthPercentage && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                      borderBottom: '1px solid #eee'
                    }}>
                      <span style={{ color: '#666' }}>Class 10th Percentage</span>
                      <span style={{ fontWeight: '500', color: '#4a235a' }}>{teacher.tenthPercentage}%</span>
                    </div>
                  )}
                  
                  {teacher.twelfthPercentage && (
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '8px 0'
                    }}>
                      <span style={{ color: '#666' }}>Class 12th Percentage</span>
                      <span style={{ fontWeight: '500', color: '#4a235a' }}>{teacher.twelfthPercentage}%</span>
                    </div>
                  )}
                </div>
                
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#4a235a',
                  marginTop: '24px',
                  marginBottom: '12px'
                }}>Subjects</h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  {teacher.subjects.map((subject, index) => (
                    <span key={index} style={{
                      backgroundColor: '#f3e5ff',
                      color: '#6b46c1',
                      padding: '4px 12px',
                      borderRadius: '16px',
                      fontSize: '14px'
                    }}>
                      {subject}
                    </span>
                  ))}
                </div>
                
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#4a235a',
                  marginTop: '24px',
                  marginBottom: '12px'
                }}>Age</h3>
                <p style={{
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {teacher.age} years old
                </p>
              </div>
            )}
            
            {activeTab === 'courses' && (
              <div>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#4a235a',
                  marginBottom: '16px'
                }}>Courses Offered</h2>
                <div>
                  {teacher.classesOffered.map((course, index) => (
                    <div key={index} style={{
                      padding: '16px',
                      marginBottom: '16px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      <h3 style={{ fontSize: '18px', color: '#4a235a', marginBottom: '8px' }}>
                        {course.subject}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <p style={{ fontSize: '14px', color: '#666' }}>
                          <strong>Grade Levels:</strong> {course.standard.join(', ')}
                        </p>
                        <p style={{ fontSize: '14px', color: '#666' }}>
                          <strong>Format:</strong> {course.format}
                        </p>
                        <p style={{ fontSize: '14px', color: '#666' }}>
                          <strong>Course ID:</strong> {course.id}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'qualifications' && (
              <div>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#4a235a',
                  marginBottom: '16px'
                }}>Qualifications</h2>
                <div>
                  {teacher.qualifications.map((qual, index) => (
                    <div key={index} style={{
                      padding: '16px',
                      marginBottom: '16px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      <h3 style={{ fontSize: '18px', color: '#4a235a', marginBottom: '8px' }}>
                        {qual.degree || qual.certification || qual.exhibition}
                        {qual.field && ` in ${qual.field}`}
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <p style={{ fontSize: '14px', color: '#666' }}>
                          <strong>Institution:</strong> {qual.institution}
                        </p>
                        <p style={{ fontSize: '14px', color: '#666' }}>
                          <strong>Year:</strong> {qual.year}
                        </p>
                        {qual.detail && (
                          <p style={{ fontSize: '14px', color: '#666' }}>
                            <strong>Details:</strong> {qual.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <h2 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#4a235a',
                  marginBottom: '16px'
                }}>Reviews</h2>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '24px',
                  backgroundColor: 'white',
                  padding: '16px',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    marginRight: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '48px', fontWeight: 'bold', color: '#4a235a' }}>
                      {teacher.rating}
                    </span>
                    <div style={{ color: '#f9ca24', fontSize: '24px' }}>
                      {'★'.repeat(Math.round(teacher.rating))}
                    </div>
                    <span style={{ color: '#666', fontSize: '14px' }}>
                      {teacher.reviews.length} ratings
                    </span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                      5★ ({teacher.reviews.filter(r => r.rating === 5).length})
                    </div>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                      4★ ({teacher.reviews.filter(r => r.rating === 4).length})
                    </div>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                      3★ ({teacher.reviews.filter(r => r.rating === 3).length})
                    </div>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
                      2★ ({teacher.reviews.filter(r => r.rating === 2).length})
                    </div>
                    <div style={{ fontSize: '14px', color: '#666' }}>
                      1★ ({teacher.reviews.filter(r => r.rating === 1).length})
                    </div>
                  </div>
                </div>
                <div>
                  {teacher.reviews.map((review, index) => (
                    <div key={index} style={{
                      padding: '16px',
                      marginBottom: '16px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontWeight: 'bold', marginRight: '8px' }}>
                          Student {review.studentId}
                        </span>
                        <span style={{ color: '#f9ca24' }}>{'★'.repeat(review.rating)}</span>
                      </div>
                      <p style={{ fontSize: '14px', color: '#666' }}>
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Stats Sidebar */}
          <div style={{
            width: '250px',
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '8px',
            height: 'fit-content'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}>
              <span style={{ color: '#666' }}>Classes Offered</span>
              <span style={{ fontWeight: '500', color: '#4a235a' }}>{teacher.classesOffered.length}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}>
              <span style={{ color: '#666' }}>Ratings</span>
              <span style={{ fontWeight: '500', color: '#4a235a' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#f9ca24', marginRight: '4px' }}>★</span>
                  {teacher.rating} ({teacher.reviews.length})
                </div>
              </span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}>
              <span style={{ color: '#666' }}>Experience</span>
              <span style={{ fontWeight: '500', color: '#4a235a' }}>{yearsExperience}+ years</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}>
              <span style={{ color: '#666' }}>Distance</span>
              <span style={{ fontWeight: '500', color: '#4a235a' }}>{teacher.distance}km</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}>
              <span style={{ color: '#666' }}>Subjects</span>
              <span style={{ fontWeight: '500', color: '#4a235a' }}>{teacher.subjects.length}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}>
              <span style={{ color: '#666' }}>Highest Degree</span>
              <span style={{ fontWeight: '500', color: '#4a235a' }}>
                {teacher.qualifications[0].degree || 'N/A'}
              </span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}>
              <span style={{ color: '#666' }}>Age</span>
              <span style={{ fontWeight: '500', color: '#4a235a' }}>{teacher.age}</span>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee'
            }}>
              <span style={{ color: '#666' }}>Proficiency</span>
              <span style={{ fontWeight: '500', color: '#4a235a' }}>{teacher.proficiency}</span>
            </div>
            <div style={{ padding: '8px 0' }}>
              <span style={{ color: '#666', display: 'block', marginBottom: '8px' }}>Social</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((platform, index) => (
                  <a 
                    key={index}
                    href="#" 
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#f3e5ff',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#6b46c1',
                      textDecoration: 'none',
                      transition: 'background-color 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#e6d3fc'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#f3e5ff'}
                  >
                    {platform === 'twitter' && 'T'}
                    {platform === 'facebook' && 'F'}
                    {platform === 'instagram' && 'I'}
                    {platform === 'linkedin' && 'L'}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubscriptionBanner />
    </div>
  );
};

export default TeacherProfile;