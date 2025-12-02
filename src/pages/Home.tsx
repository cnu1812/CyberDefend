import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CourseSlider from '../components/CourseSlider';
import Testimonials from '../components/Testimonials';
import Collaborate from '../components/Collaborate'; 
import VideoGallery from '../components/VideoGallery';
import TrialOfferCard from '../components/TrialOfferCard';
import Socials from '../components/Socials';
// import AcademyHero from '../components/AcademyHero'; // <--- New Import
import PriceHack from '../components/PriceHack';
import CurriculumTree from '../components/CurriculumTree';
import TheGatekeeper from '../components/TheGatekeeper';
import GlobalThreatMap from '../components/GlobalThreatMap';
import ROICalculator from '../components/ROICalculator';



const Home = () => {
  return (
    <div>
      
      
      <Hero />
      <TrialOfferCard />
      <Features />
      <PriceHack />
      <ROICalculator />
      <CurriculumTree />
      <CourseSlider />
      <GlobalThreatMap />
      <VideoGallery />
      <Socials />
      <Testimonials />
      <TheGatekeeper />
      <Collaborate/>
      
    </div>
  );
};

export default Home;

