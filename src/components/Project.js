import React,{useEffect, useState} from 'react'
import Header from './Header'
import "../Style/Project.css"
import 'react-awesome-slider/dist/styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowUp } from 'react-icons/fa';
import { HomeBillboard } from './Home.js';
import { Helmet } from "react-helmet";
import appanceportfolio1 from '../Images/mportfolioappance.png'
import appanceportfolio2 from '../Images/mportfolioappance2.png'


const Project = () => {
  
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  
  const projectss = [
  {
    title: "FriedUp",
    description: "Ecommerce for food and beverages",
    url: '#',
    className: "img-change-first img-change"
  },
  {
    title: "Electronic",
    description: "Ecommerce web application",
    url: '#',
    className: "img-change-second img-change"
  },
  {
    title: "Bookarize",
    description: "Transport and vehicle booking Mobile Application",
    url: '#',
    className: "img-change-third img-change"
  },
  {
    title: "AACK",
    description: "personalized GYM website for booking membership and more",
    url: '#',
    className: "img-change-first img-change"
  },
  {
    title: "Laundry",
    description: "Responsive Laundry management website",
    url: '#',
    className: "img-change-third img-change"
  },
  {
    title: "Travelser",
    description: "Travelling web application",
    url: '#',
    className: "img-change-first img-change"
  }
  ];
  
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
        <title>Our Work - Appance</title>
        <meta name="description" content="Projects of appance. Elevate your brand with Appance's tailored solutions, of digital marketing, web development, social media management at minimal cost" />
        <meta name="keywords" content="web development vadodara, digital marketing vadodara, social media management vadodara, web design vadodara, video editing vadodara" />
      </Helmet>

      <Header
        color={scrollY > 50 ? 'rgba(16, 76, 196, 0.9)' : ''}
        boxShadow={scrollY > 50 ? '0 4px 2px -2px rgba(0, 0, 0, 0.2)' : ''}
        backgroundColor={scrollY > 50 ? 'white' : ''}
      />
      <div>
        {showScrollToTop && (
          <div className="scroll-to-top" onClick={handleScrollToTop}>
            <FaArrowUp />
          </div>
        )}
        <ProjectCardMain projects={projectss} />
        <EmptyComponent/>
        <EmptyComponent/>
        <EmptyComponent/>
        <PortfolioProject/>
        <EmptyComponent />
        <HomeBillboard/>
        <EmptyComponent/>
      </div>
    </div>
  );
}

const ProjectCardMain = ({ projects }) => {
  const classNames = ["first", "second", "third", "fourth", "fifth", "sixth"];
  return (
    <div className='project-card-main'>
      {projects.map((project, index) => (
        <div className='card-main' key={index}>
          <a href={project.url}>
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className={`img-change img-change-${classNames[index]}`}></div>
                <div className="flip-box-back">
                  <h2 className='project-txt1'>{project.title}</h2>
                  <h2 className='project-txt2'>{project.description}</h2>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))} 
    </div>
  );
};

const PortfolioProject = () => {
  return (
    <div className='portfolio-main'>
      <h1 className='projects-txt3' style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>Portofolio Work</h1>
      <div className='portofolio-sub-main'>
        <div className='portfolio-sub'>
          <img src={appanceportfolio1} className='portfolio-video1' alt='Appance Portfolio Project1' style={{
              borderRadius: '100px', // Adjust the border-radius as needed
              boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.9)' 
            }}>
          </img>
        </div>
        <div className='portfolio-sub'>
          <img src={appanceportfolio2} className='portfolio-video1' alt='Appance Portfolio Project2' style={{
              borderRadius: '100px', // Adjust the border-radius as needed
              boxShadow: '5px 10px 20px rgba(0, 0, 0, 0.9)' 
            }}>
          </img>
        </div>
      </div>
    </div>
  )
}


const EmptyComponent = () => {
  return (
    <div className='empty-main'>

    </div>
  )
}
export default Project