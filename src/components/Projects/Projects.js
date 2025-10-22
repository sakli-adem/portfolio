import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // Assuming you have a separate CSS file for Projects

const Projects = () => {
  return (
    <section className="certif" id="project">
      <div className="max-width">
        <h1 className="sp">MY PROJECT SECTION</h1>
        <div className="dww">
          <div className="blasa">
            <p>By clicking on <span className="lawen">"Move to project"</span> you will see some of my projects, you can select any one you want to visit</p>
          </div>
          <Link to="/ProjectPage" className="bttn1">Move to project</Link> {/* Adjusted the link target */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
