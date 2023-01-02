import React from 'react'
import AboutUs from '../Components/About-Us/AboutUs';
import Browsing from '../Components/Browsing/Browsing';
import HeroSection from '../Components/Hero/HeroSection';


const Home = () => {
  return (
    <div>
      <div>
      <HeroSection/>
      <AboutUs/>
      <Browsing/>
      </div>
    </div>
    
  )
}

export default Home