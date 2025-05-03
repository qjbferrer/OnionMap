import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Youtube, Facebook, GitHub } from 'react-feather';
import '../styles/About.css';
import logo from '../assets/logo.png';
import AboutDesign from '../assets/about-design.png';
import Border2 from '../assets/botborder.png';
import JC from '../assets/t7-jc.png';
import Joseph from '../assets/t7-joseph.png';
import Rachel from '../assets/t7-rachel.png';
import Vincent from '../assets/t7-vincent.png';
import Thirdy from '../assets/t7-thirdy.png';

function AboutPage() {
  const [menuOpen] = useState(false);

  return (
    <div className="about-page">
      <header className="header-bar">
        <img src={logo} className="header-logo" alt="OnionMap" />
        <nav className={`menu ${menuOpen ? 'active' : ''}`}>
          <ul className="menu-list">
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/about-us">ABOUT US</Link></li>
            <li><Link to="/">LOGOUT</Link></li>
          </ul>
        </nav>
      </header>

      <div className="picture-container">
        <img src={AboutDesign} alt="OnionMap" className="onion-design" />
      </div>

      <div className="info-container">
        <h2>TEAM 7</h2>
        <div className="pests-cards">
          <div className="pest-card">
            <img src={JC} alt="JC" />
            <h3>ARMYWORM</h3>
            <p>Armyworm is a bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
          <div className="pest-card">
            <img src={Joseph} alt="Joseph" />
            <h3>CUTWORM</h3>
            <p>Armyworm is a bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
          <div className="pest-card">
            <img src={Rachel} alt="Rachel" />
            <h3>RED SPIDER MITES</h3>
            <p>Armyworm is a bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
          <div className="pest-card">
            <img src={Vincent} alt="Vincent" />
            <h3>OTHERS</h3>
            <p>Armyworm is a bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
          <div className="pest-card">
            <img src={Thirdy} alt="Thirdy" />
            <h3>OTHERS</h3>
            <p>Armyworm is a bla bla bla bla bla bla bla bla bla bla bla bla</p>
          </div>
        </div>

        <div className="contact-us">
          <h2>CONTACT US</h2>
          <div className="contact-icons">
            <a href="mailto:qjbferrer@tip.edu.ph" target="_blank" rel="noopener noreferrer">
              <Mail className="contact-icon email" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="contact-icon youtube" />
            </a>
            <a href="https://facebook.com/josephbryanferrer" target="_blank" rel="noopener noreferrer">
              <Facebook className="contact-icon facebook" />
            </a>
            <a href="https://github.com/qjbferrer" target="_blank" rel="noopener noreferrer">
              <GitHub className="contact-icon github" />
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <img src={Border2} alt="Bottom Border" className="footer-image" />
      </footer>
    </div>
  );
}

export default AboutPage;
