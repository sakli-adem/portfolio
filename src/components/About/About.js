import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import about from '../../assets/img/about.jpg';
import CVEN from '../../assets/documents/CV_Adem_SAKLI_english.pdf';
import CVFR from '../../assets/documents/CV_SAKLI_Adem_fr.pdf';
import CVESP from '../../assets/documents/CV_ADEM_SAKLI_esp.pdf';
const About = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const currentImageRef = imageRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          observer.disconnect(); // Stop observing once the image is visible
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h1 className="sp">About me</h1>
        <div className="about-content">
          <div>
            <img
              className={`taswira1 ${isImageVisible ? 'visible' : 'hidden'}`}
              src={about}
              alt="about"
              ref={imageRef}
            />
          </div>
          <div className="div3ordh">
            <p className="ktiba2">
              <span className="sp1">Who I AM?</span><br /><br/>
My name is Adem Sakli. I am a Full-Stack/IA Engineer with over two years of hands-on experience designing and deploying robust, scalable applications. 
<br/><br/>
I hold a Bachelor's degree in Embedded Systems and an Engineering degree in Computer Science, complemented by advanced studies and professional experience in Full-Stack development, Artificial Intelligence, and Robotics
<br/><br/> Driven by rigor, curiosity, and continuous learning, I am passionate about tackling innovative challenges and contributing to high-performing teams. My varied background extends from designing microservices architectures and developing REST APIs to delivering complete web platforms and integrating AI-driven solutions.
<br/><br/>
 I excel at translating complex business requirements into reliable, maintainable software, using modern technologies across the software stack. I have a strong interest in Web Development, Artificial Intelligence, and Robotics. <p style={{ color: 'rgb(255, 123, 0)' }}>You can check my CV by clicking on "Download CV"</p>
            </p>
            <div className="dropdown">
              <button className="bttn" onClick={() => document.getElementById('options').style.display = 'block'}>Download CV</button>
              <div id="options" className="dropdown-content">
                <a href={CVEN} download>English version</a>
                <a href={CVESP} download>Spanish version</a>
                <a href={CVFR} download>French version</a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
