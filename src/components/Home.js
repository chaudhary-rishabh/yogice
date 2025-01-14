import React, { useEffect, useRef, useState } from "react";
import "../Style/Home.css";
import Header from './Header';
import emailjs from 'emailjs-com';
import { FaArrowUp } from 'react-icons/fa';
import { ServiceTechnologies } from './Service';
import '../Style/Aboutus.css'
import 'react-awesome-slider/dist/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-awesome-slider/dist/styles.css';
import { Helmet } from "react-helmet";
// images import
import responsive from "../Images/appance22homepageweb.png";
import appancedigitalmarketing from "../Images/digital.png";
import appanceservice from "../Images/appance_webhome.png";
import homeservice1 from "../Images/serviceimg_home.png";
import homeservice11 from "../Images/appance_homeservice2.png";
import clientimg1 from "../Images/aackgymlogo.jpg";
import clientimg2 from "../Images/clientblazedelivery.png";
import clientimg3 from "../Images/frieduplogo.jpg";
import clientimg4 from "../Images/clientiflick.jpg";
import clientimg5 from "../Images/clientlaundry.png";
import appancemarketing from "../Images/digitalmarketing_home_appance-removebg-preview.png";
import billboard2 from "../Images/billboard10.png";
import billboard3 from "../Images/billboard7.jpg";
import webdesignhomeslider from "../Images/appancewithtextwebdesign.png"
import digitalmarketingslider from "../Images/appancewithtextdigitalmarketing.png"
import socialmediamanagementsliderhome from "../Images/appancewithtextsocialmediamanagement.png"
import appanceecommerce from "../Images/appancecarouselecommercehome.jpg"
import appanceeducation from "../Images/appancecarouseleducationhome.jpg"
import appancegymfitness from "../Images/appancecarouselgymfitnesshome.jpg"
import appancehomoedecor from "../Images/appancecarouselhomedecorhome.jpg"
import appanceonlinebooking from "../Images/appancecarouselonlinebookinghome.jpg"
import appanceportfolio from "../Images/appancecarouselportfoliohome.jpg"
import appancerealestate from "../Images/appancecarouselrealestatehome.jpg"

const Home = () => {

  // for blurred and clear onscroll
  



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


const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these values with your EmailJS template information
    const templateParams = {
      to_email: 'recipient@example.com', // Replace with the recipient's email address
      from_name: 'Your Name', // Replace with the sender's name
      message: email, // The message from the form
    };

    emailjs
      .send('service_39bu5qf', 'template_c7dknda', templateParams, 'KLernBY4dnzwafrUx')
      .then(
        (response) => {
          setEmail('');
          setShowPopup(true);

          // Hide the popup after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        },
        (error) => {
          console.error('Email send failed:', error);
        }
      );
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

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

  const texts = ["Web Development", "Social Media", "Digital Marketing", "Elevating Brands", "Propel Businesses"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change the interval as needed (currently set to 2 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>Appance - Digital Marketing, Web Development, Social Media Management</title>
        <meta name="description" content="Explore Appance, your hub for digital marketing, social media management, and web development solutions." />
        <meta name="keywords" content="appance, digitalmarketing, webdevelopment, social media management, building brands" />
      </Helmet>

      <Header color={scrollY > 100 ? 'rgba(16, 76, 196, 0.9)' : ''} boxShadow={scrollY > 100 ? '0 4px 2px -2px rgba(0, 0, 0, 0.2)' : ''} backgroundColor={scrollY > 100 ? 'white' : ''}/>
      <div className='home-background'>
        {showScrollToTop && (
          <div className="scroll-to-top" onClick={handleScrollToTop}>
            <FaArrowUp />
          </div>
        )}
        {showPopup && (
        <div className="popup-home">
          <p>Email sent!</p>
        </div>
        )}
        <div className="z-idx-mx">
      {texts.map((text, index) => (
        <h1
          key={index}
          className={`home-text-img ${index === currentIndex ? 'visible' : 'hidden'}`}
        >
          {text}
        </h1>
      ))}
    </div>
        <form className="form-home" onSubmit={handleSubmit}>
          <input
            type='email'
            id='emailInput'
            value={email}
            className="input-home"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="submit-home home-txt3" type='submit'>Submit</button>
        </form>
        <div className='home-top-box'>
          <AnimatedText/>
        </div>
      </div>
      <Carousel1/>
      <ImageSlider />
      <HomeServicesOne />
      <HomeServicesTwo />
      <HomeDigitalMarketing />
      <HomeClients />
      <ServiceTechnologies />
    </>
  );
}

const Carousel1 = () => {
  // Customize settings as per your requirements
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Adjust the speed of the automatic transition
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-first-main">
      <Slider {...settings}>
        <div className="home-first-carousel">
          <div className="home-first-carousel-sub">
            <h1 className="home-txt7 txt-center"><img className="carousel-img" src={appancerealestate} alt="appance real estate"/></h1>
          </div>
        </div>
        <div className="home-first-carousel">
          <div className="home-first-carousel-sub">
            <h1 className="home-txt7 txt-center"><img className="carousel-img" src={appanceonlinebooking} alt="appance online booking"/></h1>
          </div>
        </div>
        <div className="home-first-carousel">
          <div className="home-first-carousel-sub">
            <h1 className="home-txt7 txt-center"><img className="carousel-img" src={appancehomoedecor} alt="appance home decor"/></h1>
          </div>
        </div>
        <div className="home-first-carousel">
          <div className="home-first-carousel-sub">
            <h1 className="home-txt7 txt-center"><img className="carousel-img" src={appancegymfitness} alt="appance gym fitness"/></h1>
          </div>
        </div>
        <div className="home-first-carousel">
          <div className="home-first-carousel-sub">
            <h1 className="home-txt7 txt-center"><img className="carousel-img" src={appanceeducation} alt="appance education"/></h1>
          </div>
        </div>
        <div className="home-first-carousel">
          <div className="home-first-carousel-sub">
            <h1 className="home-txt7 txt-center"><img className="carousel-img" src={appanceecommerce} alt="appance ecommerce"/></h1>
          </div>
        </div>
        <div className="home-first-carousel">
          <div className="home-first-carousel-sub">
            <h1 className="home-txt7 txt-center"><img className="carousel-img" src={appanceportfolio} alt="appance portfolio"/></h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};



const ImageSlider = () => {

const sliderRef = useRef(null);
  const [isSliderExpanded, setIsSliderExpanded] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;

      // Check if the state needs to be updated
      if (entry.isIntersecting !== isSliderExpanded) {
        setIsSliderExpanded(entry.isIntersecting);
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Adjust threshold as needed (0 to 1)
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, [isSliderExpanded]);


  const images = [
    socialmediamanagementsliderhome,
    digitalmarketingslider,
    webdesignhomeslider,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div
      className={`slider-imges-main ${isSliderExpanded ? "expanded" : ""}`}
      ref={sliderRef}
    >
      <div className="slider-container">
        {images.map((image, index) => (
          <div
          key={index}
          className={`slider-item ${index === currentIndex ? 'active' : ''}`}
          >
            <div className={`image-wrapper ${index === currentIndex ? 'active' : ''}`}>
              <h1></h1>
              <img src={image} className={`slider-box-img ${isSliderExpanded ? "visible" : ""}`} alt={`Appance Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
  );
};


const HomeServicesOne = () => {
  const containerRef = useRef(null);
  const [isContainerExpanded, setIsContainerExpanded] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsContainerExpanded(entry.isIntersecting);
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust threshold as needed (0 to 1)
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`homeservices-main ${isContainerExpanded ? "expanded" : ""}`}
      ref={containerRef}
    >
      <div className='homeservices-container'>
        <div className='home-service-img'>
          <img src={homeservice11} className='size-mobile small-margin' alt="Appance Responsive web"/>
          <img src={homeservice1} className='animated margin-neg' alt="Appance Responsive website"/>
        </div>
      </div>
      <div className='homeservices-container'>
        <p className="home-txt1">
          At Appance, we specialize in crafting dynamic and user-centric mobile applications that propel your business forward. Our team of experts is dedicated to turning your concepts into sleek, intuitive, and feature-rich mobile experiences. Elevate your brand, engage your audience, and stay ahead in the mobile-first world.
        </p>
      </div>
    </div>
  );
};
const HomeServicesTwo = () => {
  const containerRef = useRef(null);
  const [isContainerExpanded, setIsContainerExpanded] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsContainerExpanded(entry.isIntersecting);
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust threshold as needed (0 to 1)
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  return (
    <div
      className={`homeservices-main ${isContainerExpanded ? "expanded" : ""}`}
      ref={containerRef}
    >
      <div className='homeservices-container'>
          <p className="home-txt1">Discover the potential of your business online with our top-notch web application development services. At Appance, we blend creativity and functionality to deliver web solutions that resonate with your audience. Whether it's an e-commerce platform, a corporate website, or a custom web application, we have the expertise to bring your vision to life.</p>
      </div>
      <div className='homeservices-container'>
        <div className='home-servicetwo-img'>
          <img src={responsive} className='animated size-web' alt="Appance Responsive design"/>
        </div>
      </div>
    </div>
  )
}

export const HomeBillboard = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [
    billboard2,
    billboard3,
  ];

  return (
    <div className='homebillboard-main'>
      <div className="billboard-img">
        {images.map((imageName, index) => (
          <img
            key={index}
            src={imageName}
            className={`size-billboard ${index === visibleIndex ? 'visible' : 'hidden'}`}
            alt={`appance billboard${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}; 

const HomeDigitalMarketing = () => {
  const images = [appancemarketing, appancedigitalmarketing, appanceservice];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className='digitalmarketing-home-main'>
      <div className="digitalmarketing-home-sub1">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={image}
          className={index === currentIndex ? 'visible' : 'hidden'} 
        />
      ))}
      </div>
      <div className="digitalmarketing-home-sub2">
        <p className="home-txt5"> 
          Step into the future of marketing with Appance—an innovation-driven digital powerhouse. Discover unparalleled digital marketing solutions designed to propel your brand to new heights. At Appance, we redefine industry standards by combining competitive prices with unmatched services.
        </p><br></br>
        <p className="home-txt6"> 
          The world of digital marketing, Appance stands as the epitome of excellence—where affordability meets unparalleled service. Elevate your brand, captivate your audience, and conquer the digital landscape with Appance.
        </p>
      </div>
    </div>
  );
};

const HomeClients = () => {
  return (
    <div className='homeclient-main'>
      <h2 className="home-txt2" style={{textAlign:"center",marginTop:"50px"}}>Our Clients</h2>
      <Carousel>
      <CarouselItem>
        <Slide className="home-client-img" number={clientimg1} />
      </CarouselItem>
      <CarouselItem>
        <Slide className="home-client-img"  number={clientimg2} />
      </CarouselItem>
      <CarouselItem>
        <Slide className="home-client-img"  number={clientimg3} />
      </CarouselItem>
      <CarouselItem>
        <Slide className="home-client-img"  number={clientimg4} />
      </CarouselItem>
      <CarouselItem>
        <Slide className="home-client-img"  number={clientimg5} />
      </CarouselItem>
    </Carousel>
    </div>
  )
}

const Slide = ({ number }) => (
  <div>
    <img style={{marginTop:"35%"}} src={number} className="slide-height-client" alt={`Appance ${number}`} />
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
    }, 2000);
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

const AnimatedText = () => {
  const sentences = [
    "Website Developed by experts",
    "Get free Digital Marketing with Website",
    "Make your business grow with Ecommerce website"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Display the current sentence letter by letter
      if (text.length < sentences[currentTextIndex].length) {
        setText((prevText) => prevText + sentences[currentTextIndex].charAt(text.length));
      } else {
        // Clear the interval and wait for 3 seconds before moving to the next sentence
        clearInterval(intervalId);
        setTimeout(() => {
          setText('');
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, 3000);
      }
    }, 50); // Adjusted interval to 50 milliseconds for faster appearance

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentTextIndex, text]);

  return (
    <div className="animated-text-container">
      <div className="animated-text home-txt4">{text}</div>
    </div>
  );
};




export default Home;
