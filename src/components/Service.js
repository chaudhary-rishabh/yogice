import React, { useEffect, useRef, useState } from "react";
import Header from './Header'
import "../Style/Service.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowUp } from 'react-icons/fa';
import { Helmet } from "react-helmet";
// import icons
import { FaPython, FaJava, FaJs, FaReact, FaAngular, FaNodeJs, FaDev } from 'react-icons/fa';
import { SiMongodb, SiPhp, SiMysql, SiPostgresql, SiTensorflow, SiWordpress, SiWix } from 'react-icons/si';
import { IoLogoDocker } from 'react-icons/io5';
import { FiSlack } from 'react-icons/fi';
// import { DiNextjs } from 'react-icons/di';

//images import
import appancewebdesign from "../Images/appance_webdesign.png";
import appancewebsite from "../Images/appancewebservice2.png";
import appancemobileservice from "../Images/appancemobileservice.png";
import appancedesktopservice from "../Images/appancedesktopservice1.png";
import appanceaiservice from "../Images/appanceaiservice.png";
import appanceecommerce from "../Images/appanceecommerceservice.png";
import appanceecommerce2 from "../Images/appanceecommerce24.png";
import appanceecommerce3 from "../Images/appanceservice22.png";
import appanceserviceqr from "../Images/appanceserviceqr.png";
import appanceservice1 from "../Images/services-container-hostingbox.jpg"
import appanceservice2 from "../Images/services-container-webdesignbox.jpg"
import appanceservice3 from "../Images/services-container-securitybox.jpg"
import appanceservice4 from "../Images/services-container-seobox.jpg"
import appanceservice5 from "../Images/serivces-container-socialmediabox.jpg"
import appanceservice6 from "../Images/services-container-digitalmarketingbox.jpg"

const Service = (props) => {

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


  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
    setShowScrollToTop(window.scrollY > 100);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  return (
    <div>
      <Helmet>
        <title>Services - Appance</title>
        <meta name="description" content="Appance services digital solution, web design and development, ecommerce. Elevate your brand with Appance's tailored solutions." />
        <meta name="keywords" content="web design, ecommerce, webdevelopment, building brands, digital solution, social media management" />
      </Helmet>

      <Header color={scrollY > 50 ? 'rgba(16, 76, 196, 0.9)' : ''} boxShadow={scrollY > 50 ? '0 4px 2px -2px rgba(0, 0, 0, 0.2)' : ''} backgroundColor={scrollY > 50 ? 'white' : ''}/>

      <div>
        {showScrollToTop && (
        <div className="scroll-to-top" onClick={handleScrollToTop}>
          <FaArrowUp />
        </div>
      )}
        <ServiceMain />
        <ServicesCarousel />
        <ServicesContainer message1={"1 year free hosting with domain name and business email"} message2={"SEO friendly with SSL security web application"} img1={appanceservice1} bc1="rgba(216,222,246,255)" img2={appanceservice4} bc2="rgba(53,53,53,255)" bgmain="#fff" />
        <ServicesContainer message1={"Responsive Modern Web Application unlock your online business"} message2={"24/7 free Maintenance and Support "} img1={appanceservice2} bc1="rgba(254,254,254,255)" img2={appanceservice3} bc2="rgba(90,115,156,255)" bgmain="#fff"/>
        <ServicesContainer message1={"Social Media Management with Advanced tools"} message2={"Digital Marketing for Product/Service/Person/Brand"} img1={appanceservice5} bc1="rgba(242,108,107,255)" img2={appanceservice6} bc2="rgba(174,182,218,255)" bgmain="#fff"/>
        <Servicesbox/>
        {/* <AllServices1/>
        <AllServices2/> */}
        <ServiceTechnologies/>
      </div>
    </div>
  )
}

const ServiceMain = () => {
  return (
    <div className='servicemain'>
      <div className='servicemain-info'>
        <p className="txt-service1">Appance, where cutting-edge IT solutions meet affordability. Elevate your digital presence with our comprehensive services, spanning website development, mobile applications, e-commerce solutions, and more, all tailored to meet your business needs without breaking the bank</p>
      </div>
    </div>
  )
}


// carousel
const Slide = ({ number }) => (
  <div>
    <img style={{marginTop:"35%"}} src={number} className="img-slide" alt={`Appance ${number}`} />
  </div>
);

const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipe = useRef({});

  const updateIndex = (newIndex) => {
    if (newIndex >= React.Children.count(children) || newIndex < 0) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex]);

  const onTouchStart = (e) => {
    const touch = e.touches[0];
    swipe.current = { x: touch.clientX };
  };

  const onTouchMove = (e) => {
    if (e.changedTouches && e.changedTouches.length) {
      swipe.current.swiping = true;
    }
  };

  const onTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const swipedLeft = touch.clientX - swipe.current.x > 0 ? true : false;
    const swipedRight = touch.clientX - swipe.current.x > 0 ? false : true;
    const absX = Math.abs(touch.clientX - swipe.current.x);
    if (swipe.current.swiping && absX > 50) {
      if (swipedLeft) {
        updateIndex(activeIndex - 1);
      } else if (swipedRight) {
        updateIndex(activeIndex + 1);
      }
    }
    swipe.current = {};
  };

  return (
    <div
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};


// carousel
const ServicesCarousel = () => {

  const [sliderSettings, setSliderSettings] = useState({
      speed: 2000,
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true
   });
  
  useEffect(() => {
    const handleResize = () => {
      // Adjust settings for screens less than 768px
      setSliderSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: window.innerWidth < 768 ? 2 : 3,
        slidesToScroll: window.innerWidth < 768 ? 1 : 2,
      }));
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to set the initial state based on window width
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{overflow:"hidden"}} className="servicecarousel-main">
      <Slider {...sliderSettings}>
        <div className="servicescarousel-box">
          <img src={appancewebsite} className="img-servicecarousel" alt="Appance Web Service"/>
          <h2 className="service-txt1"> Website</h2>
        </div>
        <div className="servicescarousel-box">
          <img src={appancemobileservice} className="img-servicecarousel" alt="Appance Android Service"/>
          <h2 className="service-txt1">Android App</h2>
        </div>
        <div className="servicescarousel-box">
          <img src={appancedesktopservice} className="img-servicecarousel" alt="Appance Ecommerce Service"/>
          <h2 className="service-txt1">Ecommerce</h2>
        </div>
        <div className="servicescarousel-box">
          <img src={appanceaiservice} className="img-servicecarousel" alt="Appance AI Service"/>
          <h2 className="service-txt1">AI</h2>
        </div>
        <div className="servicescarousel-box">
          <img src={appancewebdesign} className="img-servicecarousel" alt="Appance Desktop Service"/>
          <h2 className="service-txt1">Desktop</h2>
        </div>
        <div className="servicescarousel-box">
          <img src={appanceecommerce} className="img-servicecarousel" alt="Appance Design Service"/>
          <h2 className="service-txt1">Designing</h2>
        </div>
      </Slider>
    </div>
  );
}





const AllServices2 = () => {

  const texts = ["Responsive Web Applications", "Mobile Application", "Desktop Application"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="allservices2-main">
      <div className="allservices2-sub1">
        <Carousel>
          <CarouselItem>
            <Slide number={appanceecommerce2} />
          </CarouselItem>
          <CarouselItem>
            <Slide number={appanceecommerce3} />
          </CarouselItem>
          <CarouselItem>
            <Slide number={appanceserviceqr} />
          </CarouselItem>
        </Carousel>
      </div>
      <div className="allservices2-sub2">
        <p className="service-txt1 service-txt1-hide">Efficiency redefined - experience seamless processes and increased productivity through our innovative automation solutions tailored for your business needs</p>
        <p className="service-txt1 service-txt1-hide">Transform your vision into captivating visuals with our cutting-edge design services, where creativity meets precision for a lasting impression</p>
        <p className="service-txt1">Empower your business with the future - explore the limitless possibilities of artificial intelligence, driving innovation and smart decision-making</p>
        <p className="service-txt1">Unlock the power of online visibility with our strategic digital marketing solutions that elevate your brand, captivate audiences, and drive results</p>
      </div>
    </div>
  )
}

const ComponentOne = () => (
  <div className="component-one">
    <h1 className="service-tx3">Business Growth with Appance</h1><br></br>
    <h1 className="service-tx1">.....................................................</h1>
    <h1 className="service-tx1">...........Web Development...........</h1><br></br>
    <h1 className="service-tx1">............Digital Marketing............</h1><br></br>
    <h1 className="service-tx1">.....Social Media Management.....</h1>
    <h1 className="service-tx1">.....................................................</h1>
  </div>
);

const ComponentTwo = () => (
  <div className="component-two">
    <h1 className="service-tx2">.........................</h1>
    <h1 className="service-tx2">.........................</h1>
    <h1 className="service-tx2">.........................</h1>
    <h1 className="service-tx2"></h1><br></br>
    <h1 className="service-tx2">yash@appance.in</h1>
    <h1 className="service-tx2">.........................</h1>
    <h1 className="service-tx2">.........................</h1>
  </div>
);

const Servicesbox = () => {
  const clothRef = useRef(null);
  const [isComponentOneVisible, setComponentOneVisible] = useState(true);

  useEffect(() => {
    const clothElement = clothRef.current;

    if (!clothElement) {
      return; // Exit early if clothElement is null
    }

    const ballElement = clothElement.querySelector('.services-container-ball');

    if (!ballElement) {
      return; // Exit early if ballElement is null
    }

    let ballPositionX = 0;
    let ballPositionY = 0;
    let ballSpeedX = 2;
    let ballSpeedY = 2;

    const updateBallPosition = () => {
      ballPositionX += ballSpeedX;
      ballPositionY += ballSpeedY;

      const maxX = clothElement.offsetWidth - ballElement.offsetWidth;
      const maxY = clothElement.offsetHeight - ballElement.offsetHeight;

      if (ballPositionX <= 0 || ballPositionX >= maxX) {
        ballSpeedX *= -1;
      }

      if (ballPositionY <= 0 || ballPositionY >= maxY) {
        ballSpeedY *= -1;
        setComponentOneVisible((prev) => !prev); // Toggle between components
      }

      ballElement.style.left = `${ballPositionX}px`;
      ballElement.style.top = `${ballPositionY}px`;
    };

    const animationId = setInterval(updateBallPosition, 16);

    return () => {
      clearInterval(animationId);
    };
  }, []);


  return (
    <div className="services-container-main">
      <div className="services-container" ref={clothRef}>
      {isComponentOneVisible ? <ComponentOne /> : <ComponentTwo />}
      <div className="services-container-ball" />
    </div>
    </div>
  );
};


const ServicesContainer = ({message1, message2, img1, img2, bc1, bc2, bgmain}) => {
  return (
    <div style={{backgroundColor: bgmain}} className="servicescontainer">
      <div  style={{backgroundColor: bc1}}  className="servicescontainer-innerbox">
        <h3>{message1}</h3>
        <img src={img1} className="servicebox-img" alt={`${img1}  appance service`}/>
      </div>
      <div  style={{backgroundColor: bc2}}  className="servicescontainer-innerbox">
        <h3>{message2}</h3>
        <img src={img2} className="servicebox-img" alt={`${img2} appance service`}/>
      </div>
    </div>
  )
}


const ServiceTechnologies = () => { 
  return (
    <div>
      <div className="servicetechnologies-main">
        <FaPython className="logo-technology" /> {/* Python */}
        <FaJava className="logo-technology" /> {/* Java */}
        <FaJs className="logo-technology" /> {/* JavaScript */}
        {/* <FaKotlin /> Kotlin */}
        <FaReact className="logo-technology" /> {/* React.js */}
        <SiMongodb className="logo-technology" /> {/* MongoDB */}
        <FaAngular className="logo-technology" /> {/* Angular */}
        {/* <DiNextjs /> Next.js */}
        <SiPhp className="logo-technology" /> {/* PHP */}
        <SiMysql className="logo-technology" /> {/* MySQL */}
      </div>
      <div className="servicetechnologies-main2">
        <SiPostgresql className="logo-technology" /> {/* PostgreSQL */}
        <IoLogoDocker className="logo-technology" /> {/* Docker */}
        <FaNodeJs className="logo-technology" /> {/* Node.js */}
        <SiWordpress className="logo-technology" /> 
        <FiSlack className="logo-technology" /> {/* Node.js */}
        <SiTensorflow className="logo-technology" /> {/* Node.js */}
        <SiWix className="logo-technology" /> {/* Node.js */}
        <FaDev className="logo-technology" /> {/* Node.js */}
      </div>
    </div>
  )
}

export { Service, ServiceTechnologies };