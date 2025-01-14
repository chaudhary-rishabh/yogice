  import React,{useState} from 'react';
  import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaWhatsapp } from 'react-icons/fa';
  import '../style/Footer.css';
  import '../style/Common.css';
  import logo from '../images/yogicelogo.png'
  import { Link } from 'react-router-dom';

  const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-column">
          <div className="logo-container">
              <img src={logo} alt="Yogice Logo" className="logo-footer" />
          </div>
          <div className="social-media-container">
            <a href="https://www.facebook.com/marketplace/item/794354089062775/?mibextid=6ojiHh" className="social-media-link">
              <FaFacebook className="social-media-icon" />
            </a>
            <a href="https://www.instagram.com/yogice.in/" className="social-media-link">
              <FaInstagram className="social-media-icon" />
            </a>
            <a href="https://www.linkedin.com/company/yogice/" className="social-media-link">
              <FaLinkedin className="social-media-icon" />
            </a>
            <a href="https://twitter.com/yogice_in" className="social-media-link">
              <FaTwitter className="social-media-icon" />
            </a>
            <a href="https://pinterest.com/yogice" className="social-media-link">
              <FaPinterest className="social-media-icon" />
            </a>
            <a href="https://wa.me/+919725031824" className="social-media-link">
              <FaWhatsapp className="social-media-icon" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <div className="contact-container">
            <div className="contact-text"><FAQ/></div>
            <p className="contact-text font-family1">About Us: <Link to="/aboutus"><b>About Yogice</b></Link></p>
            <p className="contact-text font-family1">Gmail: <a href="mailto:rishabh@yogice.in"><b>rishabh@yogice.in</b></a></p>
            <p className="contact-text font-family1">Phone: <a href="tel:+9725031824"><b>9725031824</b></a></p>
            <p className="contact-text font-family1">Address: <b>Vadodara, Gujarat, India</b></p>
          </div>
        </div>
      </footer>
    );
  };

  const FAQ = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
    };

    return (
      <div className="faq-popup">
        <button className="open-popup-button font-family1" onClick={togglePopup}>
          Open FAQ
        </button>
        {isPopupOpen && (
          <div className="blur-background">
            <div className="popup-box">
              <div className='popup-inside-box'>
                <h2 className='faq-header-txt font-family1'><u>Frequently Asked Questions</u></h2>
                <br></br>
                <br></br>
                <span className='question-box font-family1'>
                  Q1: Can I customize my juice orders based on dietary preferences?
                </span>
                <span className='answer-box font-family1'>
                  A1: Absolutely! We understand the importance of catering to
                  individual dietary preferences. At Yogice, we offer a high level
                  of customization for your juice orders.
                </span>
                <br></br>
                <span className='question-box font-family1'>
                  Q2: Can I customize my juice orders based on dietary preferences?
                </span>
                <span className='answer-box font-family1'>
                  A2: Yes, we have a range of exciting discounts and loyalty
                  programs in place.
                </span>
                <br></br>
                <span className='question-box font-family1'>Q3: Are the online yoga classes suitable for beginners?</span>
                <span className='answer-box font-family1'>
                  A3: Yes, our online yoga classes are designed to be inclusive and
                  accessible to all, including beginners.
                </span>
                <br></br>
                <span className='question-box font-family1'>Q4: What payment methods do you accept?</span>
                <span className='answer-box font-family1'>
                  A4: We accept a variety of convenient payment methods to suit your
                  preferences.
                </span>
                <br></br>
                <span className='question-box font-family1'>Q5: How can I contact Yogice's customer support?</span>
                <span className='answer-box font-family1'>
                  A5: Feel free to email us at support@yogice.com, call our customer
                  service hotline at 7016938629, or fill out the contact form on
                  our website.
                </span>
                <br></br>
                {/* Add more FAQs here */}
                <button className="close-popup-button" onClick={togglePopup}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default Footer;
