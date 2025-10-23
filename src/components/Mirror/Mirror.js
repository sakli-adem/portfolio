import React, { useEffect } from 'react'; // ZEDT { useEffect }
import './Mirror.css'; 
import resume from '../../assets/Project/Miroir/resume.png';
import cablage from '../../assets/Project/Miroir/cablage.png';
import led from '../../assets/Project/Miroir/led.png';
import max from '../../assets/Project/Miroir/max.png';
import horlo from '../../assets/Project/Miroir/horlo.png';
import calend from '../../assets/Project/Miroir/calend.png';
import voice from '../../assets/Project/Miroir/voice.png';
import meteo from '../../assets/Project/Miroir/meteo.png';
import heal from '../../assets/Project/Miroir/heal.png';
import message from '../../assets/Project/Miroir/message.png';
import news from '../../assets/Project/Miroir/news.png';
import face from '../../assets/Project/Miroir/face.png';
import google from '../../assets/Project/Miroir/google.png';
import webapp from '../../assets/Project/Miroir/webapp.png';
import mf from '../../assets/Project/Miroir/mf.jpg';
import mf1 from '../../assets/Project/Miroir/mf1.jpg';
import usb from '../../assets/Project/Miroir/usb.jpg';
import contr from '../../assets/Project/Miroir/contr.jpg';
import helmi from '../../assets/Project/Miroir/helmi.png';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';    

const Mirror = () => {

  // ZEDT HEDHA: Yforci el page bech tebda mel fouq
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <header id="smartHead" className="smart-header">
        <Link className="header-btn" to="/ProjectPage">Go back</Link>
      </header>

      {/* NA7IT EL <br> MEN HNA */}
      
      <div className="container mirror-container">
        <p className="presentation-title">Presentation Video</p>

        {/* Zedt 'title' lel iframe (best practice) */}
        <iframe 
          src="https://drive.google.com/file/d/1hyUt16AOJft7zy1hzkxJdp1be43ltDwt/preview" 
          width="100%" 
          height="400" 
          allow="autoplay"
          title="Smart Mirror Presentation Video"
        ></iframe>

        <div className="photo-gallery">
          <img src={resume} alt="Resume" className="photo" />
          <img src={cablage} alt="Cablage" className="photo" />
          <img src={led} alt="LED" className="photo" />
          <img src={max} alt="Max" className="photo" />
          <img src={horlo} alt="Horloge" className="photo" />
          <img src={calend} alt="Calendrier" className="photo" />
          <img src={voice} alt="Voice" className="photo" />
          <img src={meteo} alt="Météo" className="photo" />
          <img src={heal} alt="Santé" className="photo" />
          <img src={message} alt="Message" className="photo" />
          <img src={news} alt="Nouvelles" className="photo" />
          <img src={face} alt="Reconnaissance Faciale" className="photo" />
          <img src={google} alt="Google" className="photo" />
          <img src={webapp} alt="Web App" className="photo" />
          <img src={mf} alt="Multi-Function" className="photo" />
          <img src={mf1} alt="Multi-Function 1" className="photo" />
          <img src={usb} alt="USB" className="photo" />
          <img src={contr} alt="Control" className="photo" />
        </div>

        {/* --- SECTION COLLABORATION (MRAKKA7A) --- */}
        <div className="collaboration-section">
          <img 
            src={helmi} 
            alt="Helmi Hassine" 
            className="collab-img"
          />
          <div className="collab-info">
            <p>Hassine Helmi</p>
            <a 
              className="collab-link" 
              target="_blank" 
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/helmi-hassine-6a1a38199/"
            >
              Visiter le profil LinkedIn
            </a>
          </div>
        </div>

        {/* --- LIEN PRESENTATION (MRAKKA7) --- */}
        <a 
          className="presentation-link" 
          target="_blank" 
          rel="noopener noreferrer"
          href="https://www.canva.com/design/DAFD9bmCIr4/x3lkq-uVZrsvTeiz8rkV_Q/edit?utm_content=DAFD9bmCIr4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        >
          Check this link to view the Presentation
        </a>
      </div>
    </div>
  );
};

export default Mirror;
