import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const scrollUpBtn = document.querySelector('.scroll-up-btn');

      if (!navbar || !scrollUpBtn) return;
      if (window.scrollY > 5) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
      if (window.scrollY > 500) {
        scrollUpBtn.classList.add('show');
      } else {
        scrollUpBtn.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // --- FUNCTION TO SCROLL TO TOP ---
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Makes the scroll smooth
    });
  };

  return (
    <header>
      {/* --- CLICK EVENT ADDED HERE --- */}
      <div 
        className="scroll-up-btn" 
        onClick={scrollToTop} 
        style={{ cursor: 'pointer' }} // Adds the pointer hand on hover
      >
        <i className="fas fa-angle-up"></i> 
      </div>

      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="#">Sakli Adem</a>
          </div>
          <ul className={`menu ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#mi" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#project" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#certif" onClick={() => setMenuOpen(false)}>Certificates</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          
          <button 
            className={`menu-btn ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
