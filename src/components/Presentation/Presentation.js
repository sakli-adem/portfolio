import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import './Presentation.css'; // Ensure this file contains relevant styles
import presentationImage from '../../assets/img/presentation.jpg'; // Adjust the path as needed
import helloImage from '../../assets/img/hello.png'; 

const Presentation = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const options = {
        strings: [
        "Software Engineer", 
        "Full-Stack Developer", 
        "AI Engineer", 
        "Tech Innovator", 
        "Problem Solver"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };

    // Initialize Typed.js for the element with the class "typing"
    const typed = new Typed(".typing", options);

    // Clean up the Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  const handleImageClick = () => {
    setAnimate(true);

    // Reset animation state after 0.6 seconds
    setTimeout(() => {
      setAnimate(false);
    }, 600); // Duration of the animation
  };

  return (
    <section className="home" id="home">
      <article>
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">
              <h3>Hello <img style={{ height: '32px', width: '32px' }} src={helloImage} alt="logo" /></h3>
              <br />
              My name is :
            </div>
            <div className="text-2">Sakli Adem</div>
            <div className="text-3">
              And I'm a : <br />
              <span className="typing"></span>
            </div>
            <a href="#about"><p>Let's take a round</p></a>
          </div>
        </div>
      </article>
      <aside className="taswira">
        <img 
          className="image" 
          src={presentationImage} 
          alt="portrait" 
        />
        <div className={`white-line ${animate ? 'animate-line' : ''}`} />
      </aside>
    </section>
  );
};

export default Presentation;
