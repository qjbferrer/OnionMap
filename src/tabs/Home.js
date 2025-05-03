import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Youtube, Facebook, GitHub } from 'react-feather';  // React-feather icons
import '../styles/Home.css';
import logo from '../assets/logo.png';
import Border1 from '../assets/topborder.png';
import Border2 from '../assets/botborder.png'; 
import Armyworm from '../assets/armyworm.png';
import Cutworm from '../assets/cutworm.png';
import RedSpiderMites from '../assets/redspidermites.png';
import Others from '../assets/others.png';

function HomePage() {
  const [menuOpen] = useState(false);
  const navigate = useNavigate();  

  const handleStartMonitoring = () => {
    navigate('/main');
  };

  return (
    <div className="home-page">
      <header className="header-bar">
        <img src={logo} className="header-logo" alt="OnionMap" />
        <nav className={`menu ${menuOpen ? 'active' : ''}`}>
          <ul className="menu-list">
            <li><Link to="/about-us">ABOUT US</Link></li>
            <li><Link to="/">LOGOUT</Link></li>
          </ul>
        </nav>
      </header>

      <div className="picture-container">
        <img src={Border1} alt="Onion Design" className="onion-design" />
        <div className="overlay-text">
          <h2>Mapping System</h2>
          <h2>for Onion Pest</h2>
          <h2>Reports</h2>
          <button className="start-button" onClick={handleStartMonitoring}>
            Start Monitoring
          </button>
        </div>
      </div>

      <div className="info-container">
        <h2>ONION PESTS</h2>
        <div className="pests-cards">
          <div className="pest-card">
            <img src={Armyworm} alt="Armyworm" />
            <h3>ARMYWORM</h3>
            <p>Armyworm is a bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
          <div className="pest-card">
            <img src={Cutworm} alt="Cutworm" />
            <h3>CUTWORM</h3>
            <p>Armyworm is a bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
          <div className="pest-card">
            <img src={RedSpiderMites} alt="Red Spider Mites" />
            <h3>RED SPIDER MITES</h3>
            <p>Armyworm is a bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
          <div className="pest-card">
            <img src={Others} alt="Others" />
            <h3>OTHERS</h3>
            <p>Armyworm is a bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
        </div>

        <div className="contact-us">
          <h2>CONTACT US</h2>
          <div className="contact-icons">
            <a href="mailto:qjbferrer@tip.edu.ph" target="_blank" rel="noopener noreferrer">
              <Mail title="Email" className="contact-icon email" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube title="YouTube" className="contact-icon youtube" />
            </a>
            <a href="https://facebook.com/josephbryanferrer" target="_blank" rel="noopener noreferrer">
              <Facebook title="Facebook" className="contact-icon facebook" />
            </a>
            <a href="https://github.com/qjbferrer" target="_blank" rel="noopener noreferrer">
              <GitHub title="GitHub" className="contact-icon github" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <footer className="footer">
        <img src={Border2} alt="Bottom Border" className="footer-image" />
      </footer>
    </div>
  );
}

export default HomePage;
