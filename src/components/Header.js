import React, { useState, useEffect } from 'react';
  import '../Style/Header.css';
  import appancelogotxt from '../Images/appancelogotext.png';
  import { NavLink } from 'react-router-dom';

  const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    const [headerBackground, setHeaderBackground] = useState(props.backgroundColor);

    
    const handleLinkClick = (link) => {
      setActiveLink(link);
      setMenuOpen(false);
    };
    const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    setHeaderBackground(menuOpen ? props.backgroundColor : 'white');
  };

  useEffect(() => {
    // Update header background color based on scroll position
    const handleScroll = () => {
      const newBackground = window.scrollY > 100 ? 'white' : props.backgroundColor;
      setHeaderBackground(newBackground);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.backgroundColor]);

    return (
      <header style={{ backgroundColor: headerBackground, boxShadow: props.boxShadow }} className="header">
        <div className="logo-container">
          <NavLink to="/">
            <img
              src={appancelogotxt}
              alt="appance logo header"
              className="logo-header"
            ></img>
          </NavLink>
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/service" onClick={() => handleLinkClick('service')} className={`menu-item ${activeLink === 'service' ? 'active' : ''}`}>Services</NavLink>
          <NavLink to="/project" onClick={() => handleLinkClick('project')} className={`menu-item ${activeLink === 'project' ? 'active' : ''}`}>Our Work</NavLink>
          <NavLink to="/aboutus" onClick={() => handleLinkClick('aboutus')} className={`menu-item ${activeLink === 'aboutus' ? 'active' : ''}`}>About Us</NavLink>
          <NavLink to="/contactus" onClick={() => handleLinkClick('contactus')} className={`menu-item ${activeLink === 'contactus' ? 'active' : ''}`}>Contact Us</NavLink>
          <NavLink to="/career" onClick={() => handleLinkClick('career')} className={`menu-item ${activeLink === 'career' ? 'active' : ''}`}>Career</NavLink>
        </div>
        <div className="burger-icon" onClick={handleMenuToggle}>
          <span>&#9776;</span>
        </div>
      </header>
    );
  };

  export default Header;
