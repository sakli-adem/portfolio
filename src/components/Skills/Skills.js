import React, { useState, useRef, useEffect } from 'react';
import './Skills.css'; 
import nodejs from  '../../assets/skills/nodejs.png'; 
import html from  '../../assets/skills/html.png'; 
import bootstrap from  '../../assets/skills/css.png'; 
import css from  '../../assets/skills/bootstrap.png'; 
import js from  '../../assets/skills/js.png'; 
import react from  '../../assets/skills/react.png'; 
import java_from_script from  '../../assets/skills/java.png'; // Renamed variable
import angular from  '../../assets/skills/Angular.png'; 
import python from  '../../assets/skills/py.png'; 
import ia from  '../../assets/skills/ia.png'; 
import php from  '../../assets/skills/php.png'; 
import docker from  '../../assets/skills/docker.png'; 
import api from  '../../assets/skills/api.png'; 
import mysql from '../../assets/skills/mysql.png'; 
import gitlab from '../../assets/skills/gitlab.png'; 
import postgres from '../../assets/skills/post.png'; 
import sql from '../../assets/skills/sql.png'; 
import db2 from '../../assets/skills/db2.png';
import mongo from '../../assets/skills/mongo.png';
import windows from '../../assets/skills/windows.png'; 
import Linux from '../../assets/skills/linux.png'; 
import isis from '../../assets/skills/isis.png'; 
import lab from '../../assets/skills/labview.png';
import grafcet from '../../assets/skills/grafcet.png';
import arduino from '../../assets/skills/arduino.png'; 
import pi from '../../assets/skills/pi.png';
import vhdl from '../../assets/skills/vhdl.png';
import kubernetes from '../../assets/skills/kub.png'; // <-- ZEDT HEDHI
import typescript from '../../assets/skills/ts.png';
import spring from '../../assets/skills/spring.png';
import junit from '../../assets/skills/junit.png';
import jest from '../../assets/skills/jest.png';
import mock from '../../assets/skills/mock.png';
import tail from '../../assets/skills/tail.png';
// --- STRUCTURE EJJDIDA HNA ---
const skillsData = {
  "Frontend": [
    { name: "HTML", img: html },
    { name: "Bootstrap", img: css },
    { name: "CSS", img: bootstrap },
    { name: "JavaScript", img: js },
    { name: "React.js", img: react },
    { name: "Angular", img: angular },
    { name: "Tailwind CSS", img: tail },
    { name: "TypeScript", img: typescript }
  ],
  "Backend": [
    { name: "Node.js", img: nodejs },
    { name: "Java", img: java_from_script }, 
    { name: "Springboot", img: spring },
    { name: "Python", img: python },
    { name: "PHP", img: php },
    { name: "REST API", img: api }

  ],
  "Outils, DevOps & IA": [
    { name: "IA", img: ia },
    { name: "Docker", img: docker },
    { name: "Gitlab", img: gitlab },
    { name: "Kub", img: kubernetes } // <-- ZEDT HEDHI
  ],
  "Base des données": [
    { name: "MySQL", img: mysql },
    { name: "PostgreSQL", img: postgres },
    { name: "IBM DB2", img: db2 },
    { name: "MongoDB", img: mongo },
    { name: "SQL", img: sql } // <-- 7ATITHA HNA
  ],
  "Test Unitaire": [
{ name: "JUnit", img: junit },
{ name: "Jest", img: jest },
{ name: "Mockito", img: mock },

],
  "Systèmes d'exploitation": [
    { name: "Linux", img: Linux },
    { name: "Windows", img: windows }
  ],
  "Electronique": [
    { name: "ISIS", img: isis },
    { name: "Grafcet", img: grafcet },
    { name: "VHDL", img: vhdl },
    { name: "Raspberry Pi", img: pi },
    { name: "Arduino", img: arduino},
  ]
};

const Skills = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const contentRefs = useRef({});

  useEffect(() => {
    // Calculate heights for each active category
    Object.keys(contentRefs.current).forEach(category => {
      const element = contentRefs.current[category];
      if (element) {
        if (activeCategories.includes(category)) {
          element.style.maxHeight = `${element.scrollHeight}px`;
        } else {
          element.style.maxHeight = '0px';
        }
      }
    });
  }, [activeCategories, contentRefs]); // Dependency array updated

  const toggleCategory = (category) => {
    setActiveCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <section id="skills" className="skills">
      <div className="section-title">
        <h2>My Skills</h2>
      </div>
      <div className="container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <button 
              className={`collapsible ${activeCategories.includes(category) ? 'active' : ''}`} 
              onClick={() => toggleCategory(category)}
            >
              {category}
            </button>
            <div
              className="content"
              ref={el => {
                if (el) {
                  contentRefs.current[category] = el;
                }
              }}
            >
              <div className="skill-list">
                {skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <img src={skill.img} alt={skill.name} />
                      <p>{skill.name}</p>
                    </div>
                  ))
                ) : (
                  <p className="soon-text">Coming Soon...</p> // <-- Message lel categories l-fergha
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;