import React from 'react'
import MentorBanner from '../Components/Mentors/MentorBanner'
import MentorGrid from '../Components/Mentors/MentorGrid'
import SubscriptionBanner from '../Components/HeroSection/SubscriptionBanner'
import './Home.css';

const Mentors = () => {
  return (
    <>
    <div className="home-container">
        <MentorBanner/>
        <MentorGrid/>
        <SubscriptionBanner/>
        </div>
    </>
  )
}

export default Mentors