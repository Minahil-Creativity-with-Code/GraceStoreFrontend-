import React from 'react'
import Header  from '../components/Header'
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Cards from '../UI/Cards';
import Cards2 from '../UI/Cards2';
import Card3 from '../UI/Card3';
import Bedsheets from '../UI/Bedsheets';
import Reviews from '../UI/Reviews';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Cards />
      <Cards2 />
      <Card3 />
      <Bedsheets />
      <Reviews />
      <Footer /> 
    </>
  )
}

export default Home;