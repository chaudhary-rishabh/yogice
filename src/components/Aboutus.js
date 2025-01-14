import React,{useEffect, useState} from 'react'
import Header from './Header'
import '../Style/Aboutus.css'
import 'react-awesome-slider/dist/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Helmet } from "react-helmet";
import aboutusgif from "../Images/appance-aboutusgif.gif"
import employee1 from "../Images/profile-icon-appance1.jpg"
import employee2 from "../Images/profile-icon-appance1.jpg"
import employee3 from "../Images/profile-icon-appance1.jpg"

const Aboutus = () => {

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

  const aboutustxt1 = "aboutus-txt1";
  const btnaboutus = "btn-aboutus";
  const btnaboutusclicked = "btn-aboutus-clicked";


  const [btnClicked, setBtnClicked] = useState(true);
  const headerClicked = () => { 
    setBtnClicked(true);
    setBtnClicked2(false);
    setBtnClicked3(false);
    setBtnClicked4(false);
  }
  const [btnClicked2, setBtnClicked2] = useState(false);
  const headerClicked2 = () => { 
    setBtnClicked2(true);
    setBtnClicked(false);
    setBtnClicked3(false);
    setBtnClicked4(false);
  }
  const [btnClicked3, setBtnClicked3] = useState(false);
  const headerClicked3 = () => { 
    setBtnClicked3(true);
    setBtnClicked(false);
    setBtnClicked2(false);
    setBtnClicked4(false);
  }
  const [btnClicked4, setBtnClicked4] = useState(false);
  const headerClicked4 = () => { 
    setBtnClicked4(true);
    setBtnClicked(false);
    setBtnClicked3(false);
    setBtnClicked2(false);
  }
  return (
    <div>
      <Helmet>
        <title>Aboutus - Appance</title>
        <meta name="description" content="Aboutus summary of appance. Elevate your brand with Appance's tailored solutions." />
        <meta name="keywords" content="about us, about appance, appance vadodara, appance gujarat, india, Brands" />
      </Helmet>
      <Header color={scrollY > 50 ? 'rgba(16, 76, 196, 0.9)' : ''} boxShadow={scrollY > 50 ? '0 4px 2px -2px rgba(0, 0, 0, 0.2)' : ''} backgroundColor={scrollY > 50 ? 'white' : ''}/>
      <div className='aboutus-main'>
        <div className='aboutus-main-box'>
          <div className='aboutus-img-container'>
            <img src={aboutusgif} className='aboutus-gif' alt='appacne aboutus'/>
          </div>
          <div className='aboutus-main-box-sub'>
            <div className='aboutus-btn-container'>
              <button onClick={headerClicked}  className={`${btnaboutus} ${btnClicked ? btnaboutusclicked : ""}`}>About us</button>
              <button onClick={headerClicked2} className={`${btnaboutus} ${btnClicked2 ? btnaboutusclicked : ""}`}>Why us</button>
              <button onClick={headerClicked3} className={`${btnaboutus} ${btnClicked3 ? btnaboutusclicked : ""}`}>Our Vision</button>
              <button onClick={headerClicked4} className={`${btnaboutus} ${btnClicked4 ? btnaboutusclicked : ""}`}>Start Journey</button>
            </div>
            <div className='aboutus-content'>
              <p className={`${aboutustxt1} ${btnClicked ? "txtdisplay" : ""}`}>We are <b>Appance</b>, a leading IT solution company that provides application development services for mobile, website, and desktop platforms. We are a team of passionate, creative, and experienced developers who are committed to delivering high-quality and innovative solutions for our clients.</p>
              <p className={`${aboutustxt1} ${btnClicked2 ? "txtdisplay" : ""}`}>We offer a full range of application development services, from ideation and design, to development and testing, to deployment and maintenance. We work with various technologies and frameworks, such as Java, Python, React, Deployment, Hosting, and more. We also provide consulting and support services to help our clients achieve their goals and optimize their performance.</p>
              <p className={`${aboutustxt1} ${btnClicked3 ? "txtdisplay" : ""}`}>We believe that technology can transform the world for the better. We are driven by the vision of creating applications that solve real problems, enhance user experience, and generate value for our clients. We are not just developers, we are partners who care about your success and satisfaction.</p>
              <p className={`${aboutustxt1} ${btnClicked4 ? "txtdisplay" : ""}`}>If you're interested in working with us or learning more about our services, please feel free to contact us. We'd love to hear from you and discuss how we can help you with your application development needs. You can also sign up for our newsletter to get the latest updates and news from us. Or, you can check out our portfolio to see some of our previous projects and achievements.</p>
            </div>
          </div>
        </div>
        <div className='aboutus-sub1'>
          {/* Your content for .aboutus-sub1 */}
        </div>
        
      </div>
        <Employes/>
    </div>
  )
}


const Employes = () => {
  return (
    <div className='employee-main'>
      <div className='employee-box'>
        <img src={employee1} className='employee-img' alt='appance-employee' />
        <p>Software Developer</p>
        <h3>Amit Gupta</h3>
      </div>
      <div className='employee-box'>
        <img src={employee2} className='employee-img' alt='appance-employee' />
        <p>Full Stack Developer</p>
        <h3>Rishabh Chaudhary</h3>
      </div>
      <div className='employee-box'>
        <img src={employee3} className='employee-img' alt='appance-employee' />
        <p>Wordpress Developer</p>
        <h3>Aman Sharma</h3>
      </div>
    </div>
  )
}


export default Aboutus