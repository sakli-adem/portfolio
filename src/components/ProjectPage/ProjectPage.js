import React  from 'react';
import './ProjectPage.css';
import mirrorImage from '../../assets/images/mirror.jpg';
import radioImage from '../../assets/images/radio.png';
import empresaImage from '../../assets/images/empresa.png';
import carImage from '../../assets/images/car.jpg';
import delevryImage from '../../assets/images/delevry.png';
import chamsImage from '../../assets/images/chams.jpg';
import ifmImage from '../../assets/images/ifm.jpg';
import jawharaImage from '../../assets/images/jawhara.jpg';
import knoozImage from '../../assets/images/knooz.png';
import mosaiqueImage from '../../assets/images/mosaique.png';
import zitounaImage from '../../assets/images/zitouna.png';
import wataniyaImage from '../../assets/images/wataniya.png';
import jeuneImage from '../../assets/images/jeune.png';
import everydaygro from '../../assets/images/everyday.jpg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const ProjectPage = () => {


    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
  return (
    <div>
<header className="updated-header">
<Link
  type="button"
  className="updated-ButtonAnimation"
  to="/#project" // Va à la page d'accueil ET scroll à l'ID #project
    style={{
      width: '200px',
      display: 'inline-block',
      textAlign: 'center',
      fontWeight: 700,
      fontSize: '1rem',
      borderRadius: '36px',
      textDecoration: 'none',
      marginTop:'20px',
    }}
  >
    Go back
  </Link>
</header>

      {/* Section 1 */}
      <section id="Mirror" className="updated-animated-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
        <img className="updated-photoP" src={mirrorImage} alt="Smart Mirror" />
          </div>

          <div className="updated-containerr">
            <p className="updated-title1" style={{ textDecoration: 'underline', textDecorationColor: 'red' }}>Smart Mirror</p>
            <br />
            <div className="updated-description">
              <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                Using Raspberry Pi4 I have created a smart mirror that offers several functionalities:
              </h4>
              <br />
              <p>
                {/* Project Details */}
                &bull; Development of several modules for the mirror (digital and analog clock, calendar, agenda, weather)<br />
                &bull; Development of a voice recognition system to control LEDs, YouTube, and Wikipedia using voice commands<br />
                &bull; Development of a health monitoring system that allows users to measure oxygen and heart rate<br />
                &bull; Development of a facial recognition system to enable the mirror to interact with each user<br />
                &bull; Development of a web application to control the mirror remotely<br />
                &bull; Development of a security, ventilation, and energy-saving system<br />
                &bull; Design and realization of a prototype<br />
                &bull; Integration of a USB hub for device charging and mirror configuration<br />
                &bull; Best university project of the year 2021/2022<br /><br />
                <span style={{ color: 'rgb(241, 44, 0)', fontWeight: 'bold' }}>Keywords:</span> <span style={{ fontSize: '15px', fontWeight: 'bold' }}>HTML | CSS | Bootstrap | PHP | SQL | Python | Flask | React.js | Node.js | Electron | Raspberry Pi 4</span>
              </p>
              <br />
              <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
              <div className="updated-ButtonAnimation">
                <Link to="/mirror" className="demo">View Project</Link>
            </div>
              </div>
            </div>
            <br /><br />
          </div>
        </div>
      </section>





{/* Section 6 */}
<section className="updated-animated-section1">
  <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
    <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
      <img className="updated-photoP" src={everydaygro} style={{ height: '100%', width: '100%', borderRadius:'0%' }} alt="E-Commerce Website" />
    </div>
    <div className="updated-containerr" style={{ backgroundColor: 'white' }}>
      <p className="updated-title">E-Commerce Website</p>
      <br /><br /><br />
      <div className="updated-description">
        <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
          Development of an E-commerce website for a client as a freelance project:
        </h4>
        <br />
        <p>
          {/* Project Details */}
          &bull; Development of an online sales platform with a dedicated admin interface.<br />
          &bull; Creation of a complete back-office for managing products, inventory, and orders.<br />
          &bull; Development of the store's front-office for product presentation and sales.<br />
          &bull; Implementation of a user-friendly product search and filtering system.<br />
          &bull; Integration of a customer review and rating system to enhance user trust.<br /><br />

          <span style={{ color: 'rgb(241, 44, 0)', fontWeight: 'bold' }}>Technical Environment:</span>
          <span style={{ fontSize: '15px', fontWeight: 'bold' }}>
            PHP | MySQL | JavaScript | Bootstrap | UnitTest | AJAX
          </span>
          <br /><br />
          &bull; Check the website directly by clicking on "View Project".
        </p>
        <br />
        <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
          <div className="updated-ButtonAnimation">
            <a className="demo" href="https://everydaygro.tn/" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  </div>
</section>






 {/* Section 5 */}
      <section className="updated-animated-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
            <img className="updated-photoP" src={delevryImage} alt="Delivery Website" />
          </div>

          <div className="updated-containerr">
            <p className="updated-title1" style={{ textDecoration: 'underline', textDecorationColor: 'rgb(197, 24, 139)' }}>International Delivery Platform</p>
            <br />
            <div className="updated-description">
              <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                A complete full-stack platform for organizing international package deliveries, connecting transporters with clients.
              </h4>
              <br />
              <p>
                &bull; Dual-User System: Designed a complete management system for two distinct user types: Transporters (who post their trips) and Clients (who post their packages).<br />
                &bull; Advanced Search: Implemented a powerful multi-criteria search engine, allowing users to filter trips/packages by destination, date, and size.<br />
                &bull; Real-time Messaging: Developed an integrated chat module using Socket.IO for instant, real-time communication between users.<br />
                &bull; Modern Frontend: Built a fast and responsive user interface using React.js (with Vite.js) and TypeScript for a type-safe, scalable codebase.<br />
                &bull; Robust Backend: Created a secure RESTful API using Node.js (Express) to manage all data, authentication, and user logic.<br />
                &bull; Data Management: Utilized PostgreSQL with the Sequelize ORM for efficient and reliable database operations and relationship management.<br />
                &bull; DevOps Ready: Fully containerized the entire application (frontend, backend, database) using Docker for consistent deployment and scalability.<br /><br />
                
                <span style={{ color: 'rgb(197, 24, 139)', fontWeight: 'bold' }}>Keywords:</span> <span style={{ fontSize: '15px', fontWeight: 'bold' }}> React.js, Node.js (Express), PostgreSQL, Vite.js, TypeScript, GitHub,PostgreSQL, Sequelize,
 Socket.IO, Docker</span>
              </p>
              <br />
              <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div className="updated-ButtonAnimation" onClick={() => alert('This project is not uploaded yet, check it soon')}>View Project</div>
              </div>
            </div>
            <br /><br />
          </div>
        </div>
      </section>








{/* Section 2 */}
      <section className="updated-animated-section1">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
          <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
            <img className="updated-photoP" src={radioImage} alt="Tunisian Radio" />
          </div>

          <div className="updated-containerr" style={{ backgroundColor: 'white' }}>
            <p className="updated-title">Tunisian Radio</p>
            <br />
            {/* === DESCRIPTION JDIDA HNA === */}
            <div className="updated-description">
              <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                A user-friendly web application built to stream over 20 of Tunisia's most popular national radio stations.
              </h4>
              <br />
              <p>
                &bull; Developed a clean, simple, and responsive user interface for easy station selection on any device.<br />
                &bull; Integrated live audio streams for 20+ major Tunisian stations, including Mosaique FM, Jawhara, and IFM.<br />
                &bull; Ensured a lightweight and fast-loading experience by building the player with vanilla HTML, CSS, and JavaScript.<br />
                &bull; Deployed the project on GitHub Pages for public access and demonstration of deployment skills.<br /><br />
                <span style={{ color: 'rgb(20, 151, 165)', fontWeight: 'bold' }}>Keywords:</span> <span style={{ fontSize: '15px', fontWeight: 'bold' }}>HTML | CSS | JavaScript | Audio Streaming | GitHub Pages</span>
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '10px' }}>
                <img src={chamsImage} alt="Chams" className="updated-canal" />
                <img src={ifmImage} alt="IFM" className="updated-canal" />
                <img src={jawharaImage} alt="Jawhara" className="updated-canal" />
                <img src={knoozImage} alt="Knooz" className="updated-canal" />
                <img src={mosaiqueImage} alt="Mosaique" className="updated-canal" />
                <img src={zitounaImage} alt="Zitouna" className="updated-canal" />
                <img src={wataniyaImage} alt="Wataniya" className="updated-canal" />
                <img src={jeuneImage} alt="Jeune" className="updated-canal" />
              </div>
              <br />
              <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div className="updated-ButtonAnimation"><a className="demo" href="https://sakli-adem.github.io/radio1/radio.html" target="_blank" rel="noopener noreferrer">View Project</a></div>
              </div>
            </div>
            {/* === FIN DESCRIPTION JDIDA === */}
            <br /><br />
          </div>
        </div>
      </section>

 {/* Section 3 */}
      <section className="updated-animated-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
            <img className="updated-photoP" src={empresaImage} alt="Company Management" />
          </div>

          <div className="updated-containerr">
            <p className="updated-title1" style={{ textDecoration: 'underline', textDecorationColor: 'rgb(85, 12, 93)' }}>Company Management</p>
            <br />
            {/* === DESCRIPTION JDIDA HNA === */}
            <div className="updated-description">
              <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                A comprehensive web application for internal company management, handling inventory, customers, and invoicing.
              </h4>
              <br />
              <p>
                &bull; <strong>Inventory Management:</strong> Full CRUD (Create, Read, Update, Delete) functionality for products. Automatically decrements stock levels when a new receipt is generated.<br />
                &bull; <strong>Customer Management:</strong> Manage customer profiles with granular permissions for a "super-admin" role. Track detailed payment history, including total paid and remaining balances.<br />
                &bull; <strong>Receipt & Invoicing:</strong> Dynamically generate receipts for each payment. All receipts are archived and searchable, simplifying bookkeeping.<br />
                &bull; <strong>Task Management:</strong> Includes a "To-Do List" module for managing daily operational tasks.<br /><br />
                <span style={{ color: 'rgb(197, 24, 139)', fontWeight: 'bold' }}>Keywords:</span> <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Angular | TypeScript | Node.js | Express.js | SQL/MySql | JavaScript | Bootstrap | HTML | CSS</span>
              </p>
              <br />
              <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div className="updated-ButtonAnimation" onClick={() => alert('This project is not uploaded yet, check it soon')}>View Project</div>
              </div>
            </div>
            {/* === FIN DESCRIPTION JDIDA === */}
            <br /><br />
          </div>
        </div>
      </section>

    {/* Section 4 */}
      <section className="updated-animated-section1">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
          <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
            <img className="updated-photoP" src={carImage} alt="MiniCar RPi4" />
          </div>

          <div className="updated-containerr" style={{ backgroundColor: 'white' }}>
            <p className="updated-title">MiniCar RPi4</p>
            {/* Na7it l-br zeydin, 5allit wa7ed barka */}
            <br />
            {/* === DESCRIPTION JDIDA HNA === */}
            <div className="updated-description">
              <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                A foundational robotics project using a Raspberry Pi 4 to build and control a Bluetooth-enabled mini-car.
              </h4>
              <br />
              <p>
                &bull; Developed Python scripts to interface with the Raspberry Pi's GPIO pins, managing motor drivers for vehicle movement.<br />
                &bull; Implemented remote control functionality via Bluetooth using the **BlueDot** Python library, enabling the car to be driven from a mobile device.<br />
                &bull; This project served as a practical introduction to hardware-software integration, Python for IoT, and basic robotics principles.<br /><br />
                <span style={{ color: 'rgb(9, 131, 48)', fontWeight: 'bold' }}>Keywords:</span> <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Python | Raspberry Pi 4 | Robotics | GPIO | BlueDot | 12V DC Hobby Motors</span>
              </p>
              <br />
              <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div className="updated-ButtonAnimation" onClick={() => alert('This project is not uploaded yet, check it soon')}>View Project</div>
              </div>
            </div>
            {/* === FIN DESCRIPTION JDIDA === */}
            <br /><br />
          </div>
        </div>
      </section>


      




    </div>
  );
};

export default ProjectPage;
