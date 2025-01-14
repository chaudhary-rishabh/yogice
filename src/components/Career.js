import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Style/Career.css';
import joinus from '../Images/joinusnobackground.png';

const Career = () => {
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

  const handleApplyClick = () => {
    // Assuming you're checking for openings here, if no openings, then show toast
    toast.error('No openings available at the moment.');
    };

    return (
    <div>
        <Helmet>
            <title>Career - Appance</title>
            <meta name="description" content="Career summary of appance. Elevate your brand with Appance's tailored solutions." />
            <meta name="keywords" content="about us, about appance, appance vadodara, appance gujarat, india, Brands" />
        </Helmet>
        <Header color={scrollY > 50 ? 'rgba(16, 76, 196, 0.9)' : ''} boxShadow={scrollY > 50 ? '0 4px 2px -2px rgba(0, 0, 0, 0.2)' : ''} backgroundColor={scrollY > 50 ? 'white' : ''} />
        <div className='career-main'>
            <div className='career-main-sub'>
                <div className='career-sub-txt'>
                    <h1 className='joinus-txt1'>Join us at Appance </h1>
                    <h1 className='joinus-txt1'>Explore new opportunities now </h1>
                    <button className='joinus-btn1' onClick={handleApplyClick}>openings</button>
                </div>
                <div className='career-sub-img'><img className="img-joinus" src={joinus} alt='joinus appance' /></div>
            </div>
            {/* <Box /> */}
        </div>
        <ToastContainer position="bottom-right" />
        </div>
    );
}

const Box = () => {
  return (
    <div className='job-boxes-container'>
      <div className='box-job flex-box-vertical'>
        <h3 className='joinus-txt1'>Senior Software Developer</h3>
        <h3 className='joinus-txt1'>JavaScript, Nodejs, AWS</h3>
        <h3 className='joinus-txt1'>+5 years experience</h3>
        <div className='flex-box'>
          <button className='joinus-btn1'>Details</button>
          <button className='joinus-btn1'>Apply Now</button>
        </div>
      </div>
      <div className='box-job flex-box-vertical'>
        <h3 className='joinus-txt1'>Business Developer</h3>
        <h3 className='joinus-txt1'>MBA/Graduation</h3>
        <h3 className='joinus-txt1'>0-2 years experience</h3>
        <div className='flex-box'>
          <button className='joinus-btn1'>Details</button>
          <button className='joinus-btn1'>Apply Now</button>
        </div>
      </div>
      <div className='box-job flex-box-vertical'>
        <h3 className='joinus-txt1'>Full Stack Developer</h3>
        <h3 className='joinus-txt1'>MERN Stack, Nextjs</h3>
        <h3 className='joinus-txt1'>+2 years experience</h3>
        <div className='flex-box'>
          <button className='joinus-btn1'>Details</button>
          <button className='joinus-btn1'>Apply Now</button>
        </div>
      </div>
      <div className='box-job flex-box-vertical'>
        <h3 className='joinus-txt1'>Video Editor</h3>
        <h3 className='joinus-txt1'>Advanced animation/ Creative</h3>
        <h3 className='joinus-txt1'>0-1 years experience</h3>
        <div className='flex-box'>
          <button className='joinus-btn1'>Details</button>
          <button className='joinus-btn1'>Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default Career;
