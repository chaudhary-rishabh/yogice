import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../style/Header.css";
import yogicelogo from "../images/yogicelogo.png";
import cart_img from "../images/cart_logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false); // Close the menu when a navigation link is clicked
  };

  // Get the current location
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" onClick={handleNavLinkClick}>
          <img
            height={65}
            src={yogicelogo}
            alt="Logo"
            className="logo-header"
          />
        </Link>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <Link
          to="/shake"
          onClick={handleNavLinkClick}
          className={`${location.pathname === "/shake" ? "active" : ""}header-txt1`}
        >
          Shake
        </Link>
        <Link
          to="/juice"
          onClick={handleNavLinkClick}
          className={`${location.pathname === "/juice" ? "active" : ""}header-txt1`}
        >
          Juice
        </Link>
        <Link
          to="/fitness"
          onClick={handleNavLinkClick}
          className={`${location.pathname === "/fitness" ? "active" : ""}header-txt1`}
        >
          Fitness
        </Link>
        <Link
          to="/contactus"
          onClick={handleNavLinkClick}
          className={`${location.pathname === "/contactus" ? "active" : ""}header-txt1`}
        >
          Help
        </Link>
        {/* <CartEmoji /> */}
      </div>
      <Link to="/cart"><img src={cart_img} height={50} alt="yogice_cart" /></Link>
      <div className="burger-icon" onClick={handleMenuToggle}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;
