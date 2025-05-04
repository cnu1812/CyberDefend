import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CourseSlider from '../components/CourseSlider';
import Testimonials from '../components/Testimonials';
import Collaborate from '../components/Collaborate'; 
import VideoGallery from '../components/VideoGallery';
import TrialOfferCard from '../components/TrialOfferCard';



const Home = () => {
  return (
    <div>
      
      <Hero />
      <TrialOfferCard />
      <Features />
      <CourseSlider />
      <VideoGallery />
      <Testimonials />
      <Collaborate/>
      
    </div>
  );
};

export default Home;

