import React, { useState, useEffect } from 'react'; // Import useEffect
import './CertPage.css';

// Import images
import htImg from '../../assets/certif/ht.png';
import cssImg from '../../assets/certif/css.png';
import btImg from '../../assets/certif/bt.png';
import jssImg from '../../assets/certif/jss.png';
import begImg from '../../assets/certif/beg.png';
import python1Img from '../../assets/certif/python.jpg';
import python2Img from '../../assets/certif/pi.jpg';
import dataScienceImg from '../../assets/certif/pyy.png';
import html2Img from '../../assets/certif/html2.png';
import js2Img from '../../assets/certif/js2.png';
import phpImg from '../../assets/certif/pp.png';
import sqlImg from '../../assets/certif/sql.png';
import englishImg from '../../assets/certif/english.png';
import { Link } from 'react-router-dom';
const CertPage = () => {
  const certificates = [
    { src: htImg, title: 'HTML5', link: htImg },
    { src: cssImg, title: 'CSS', link: cssImg },
    { src: btImg, title: 'Bootstrap', link: btImg },
    { src: jssImg, title: 'JavaScript', link: jssImg },
    { src: begImg, title: 'Python for Beginner', link: begImg },
    { src: python1Img, title: 'Python 1', link: python1Img },
    { src: python2Img, title: 'Python 2', link: python2Img },
    { src: dataScienceImg, title: 'Python For Data Science', link: dataScienceImg },
    { src: html2Img, title: 'HTML5 - Certif2', link: html2Img },
    { src: js2Img, title: 'JavaScript - Certif2', link: js2Img },
    { src: phpImg, title: 'PHP', link: phpImg },
    { src: sqlImg, title: 'SQL', link: sqlImg },
    { src: englishImg, title: 'English B2', link: 'certif/Anglais_B2_Certif.pdf' }
  ];

  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');


  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 


  // Function to open modal
  const openModal = (imgSrc) => {
    setSelectedImg(imgSrc);
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    setSelectedImg('');
  };

  return (
    <div className="cert-page">
      <nav className="nav-bar">
        <header id="fixedHeader">
          <Link className="btn btn-light" to="/">Go back</Link>
        </header>
      </nav>

      <article id="down">
        <div className="card-deck">
          {certificates.map((cert, index) => {
            const isPdf = cert.link.endsWith('.pdf');
            
            return (
              <div key={index} className="card mb-4">
                <div className="view overlay">
                  {isPdf ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <img className="card-img-top" src={cert.src} alt={cert.title} />
                    </a>
                  ) : (
                    <img 
                      className="card-img-top" 
                      src={cert.src} 
                      alt={cert.title} 
                      onClick={() => openModal(cert.src)}
                      style={{ cursor: 'pointer' }} 
                    />
                  )}
                </div>
                <div className="card-body">
                  <header className="card-title">
                    <h6>{cert.title}</h6>
                  </header>
                  <article className="card-button">
                    {isPdf ? (
                      <a href={cert.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        View certificate
                      </a>
                    ) : (
                      <button onClick={() => openModal(cert.src)} className="btn btn-primary">
                        View certificate
                      </button>
                    )}
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </article>

      {/* Modal JSX */}
      {modalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <span className="modal-close" onClick={closeModal}>&times;</span>
          <img 
            src={selectedImg} 
            alt="Certificate" 
            className="modal-image"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  );
};

export default CertPage;