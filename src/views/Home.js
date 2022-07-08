import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import bkgrd from './../assets/images/background.jpg'

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" style={{backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'cover'}}/>
      <FeaturesTiles style={{backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'cover'}} />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" style={{backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'cover'}} />
      <Testimonial topDivider style={{backgroundImage: `url( ${bkgrd} )`,
      backgroundSize: 'cover'}} />
    </>
  );
}

export default Home;