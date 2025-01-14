import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import '../Style/Footer.css';
import appancelogo from '../Images/appance_logo.png'

const Footer = () => {
  return (
    <div className='footer-main'>
    <footer className="footer">
      <div className="footer-column">
        <div className="logo-container">
            <img src={appancelogo} alt="appance logo footer" className="logo" />
        </div>
        <div className="social-media-container">
          <a href="https://www.facebook.com/appance" className="social-media-link">
            <FaFacebook className="social-media-icon" />
          </a>
          <a href="https://www.instagram.com/appance.in/" className="social-media-link">
            <FaInstagram className="social-media-icon" />
          </a>
          <a href="https://www.linkedin.com/company/appance/" className="social-media-link">
            <FaLinkedin className="social-media-icon" />
          </a>
          <a href="https://twitter.com/appance_" className="social-media-link">
            <FaTwitter className="social-media-icon" />
          </a>
          <a href="https://pinterest.com/appance.in" className="social-media-link">
            <FaPinterest className="social-media-icon" />
          </a>
        </div>
      </div>
      <div className="footer-column">
        <div className="contact-container">
          <p className="contact-text footer-txt1">Gmail: <a href="mailto:contact@appance.in"><b className='footer-txt2'>contact@appance.in</b></a></p>
          <p className="contact-text footer-txt1">Address: <b className='footer-txt2'>Vadodara, Gujarat, India</b></p>
        </div>
      </div>
      </footer>
      <h3 className='footer-txt3'>Copyright © 2023 Appance Tehcnology</h3>
    </div>
  );
};

export default Footer;
