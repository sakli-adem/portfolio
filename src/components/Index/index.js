import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';  // Import the required CSS

const Index = () => {
  return (
    <OwlCarousel
      className="owl-theme"
      items={1}
      loop
      margin={10}
      nav
    >
      <div className="item"><h4>1</h4></div>
      <div className="item"><h4>2</h4></div>
      <div className="item"><h4>3</h4></div>
    </OwlCarousel>
  );
};

export default Index;
