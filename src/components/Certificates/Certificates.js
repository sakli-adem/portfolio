import React from 'react';
import { Link } from 'react-router-dom';
import './Certificates.css';

const Certificates = () => {
  return (
    <section className="certif" id="certif">
      <div className="max-width">
        <h1 className="sp5">MY CERTIFICATE SECTION</h1>
        <div className="dww">
          <div className="blasa">
            <p>By clicking on <span className="lawen"> "Move to certificat"</span> you will see some of my projects, you can select any one you want to visit</p>
          </div>
          <Link to="/certPage" className="bttn1">Move to certif</Link> {/* Use Link instead of a */}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
