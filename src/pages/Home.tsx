import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CourseSlider from '../components/CourseSlider';
import Testimonials from '../components/Testimonials';
import Collaborate from '../components/Collaborate'; 


const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <CourseSlider />
      <Testimonials />
      <Collaborate/>
      
    </div>
  );
};

export default Home;

