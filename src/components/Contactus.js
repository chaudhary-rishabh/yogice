import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';
import '../Style/Contactus.css';
import { FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Helmet } from "react-helmet";
const Contactus = () => {

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const serviceID = 'service_39bu5qf';
  const templateID = 'template_f7a68kc';
  const userID = 'KLernBY4dnzwafrUx';

  emailjs.send(serviceID, templateID, formData, userID)
    .then((response) => {
      setFormData({ name: '', mobile: '', email: '', message: '' }); // Reset form fields
      setShowPopup(true);
      
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    })
    .catch((error) => {
      setShowPopup(true);
      console.error('Email send error:', error);
    });
};

  return (
    <>
      <Helmet>
        <title>Contact Us - Appance</title>
        <meta name="description" content="Contact us for inquiries and support. Elevate your brand with Appance's tailored solutions." />
        <meta name="keywords" content="contact us, appance inquiries, support, Appance, digital marketing, social media, web development" />
      </Helmet>
      <Header color={scrollY > 50 ? 'rgba(16, 76, 196, 0.9)' : ''} boxShadow={scrollY > 50 ? '0 4px 2px -2px rgba(0, 0, 0, 0.2)' : ''} backgroundColor={scrollY > 50 ? 'white' : ''}/>
      <div className='contactus-background'>
        <div className='contactus-box'>
          <div className='callbox'>
            <FaWhatsapp className="social-media-icon-contactus" />
            <FaPhone className="social-media-icon-faphone" />
            <FaInstagram className="social-media-icon-contactus" />
            <FaLinkedin className="social-media-icon-contactus" />
          </div>
          <div className='form-box'>
            {showPopup && (
              <div className="popup-contactus">
                <p>Message sent!</p>
              </div>
            )}
              <h2 className='contactus-txt3' style={{textAlign:"center",marginTop:"2%",color:"white"}}>Reach Us</h2>
            <form className='form-main' onSubmit={handleSubmit}>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                className='input-form contactus-txt1'
                required
              />
              <input
                type='tel'
                name='mobile'
                placeholder='Mobile Number'
                value={formData.mobile}
                onChange={handleChange}
                className='input-form contactus-txt1'
                required
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className='input-form contactus-txt1'
                required
              />
              <textarea
                name='message'
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                className='input-form textarea-form'
                required
              ></textarea>
              <button className='submit-form contactus-txt2' type='submit'>Submit</button>
            </form>
            
            <div className='mobile-view-icons'>
              <a href="https://www.instagram.com/appance.in/"><FaInstagram className="social-media-icon-contactus" /></a>
              <a href="https://www.linkedin.com/company/appance/"><FaLinkedin className="social-media-icon-contactus" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
