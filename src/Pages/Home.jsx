import React from 'react';
// import Navbar from './Navbar';
// import Hero from './Hero';
import './Home.css';
import Hero from '../Components/HeroSection/Hero';
import StandardsComponent from '../Components/HeroSection/StandardsComponent';
import SubscriptionBanner from '../Components/HeroSection/SubscriptionBanner';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <StandardsComponent/>
      <SubscriptionBanner/>
    </div>
  );
};

export default Home;
