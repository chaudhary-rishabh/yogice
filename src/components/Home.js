import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import yogice_bottle1 from "../images/yogice_bottle1.jpeg";
import yogice_bottle2 from "../images/yogice_bottle2.jpeg";
import yogice_bottle4 from "../images/yogice_bottle3.jpeg";
import yogice_bottle3 from "../images/yogice_bottle8.jpeg";
import review_women from "../images/review-women_yogice.png";
import review_men from "../images/review-men_yogice.png";
import yogaImage from "../images/yogice_man.jpg";
import juiceImage from "../images/yogice_bottle7.jpeg";
import yogice_coconutwater from "../images/yogice_coconutwater.jpeg";
import yogice_vegjuice from "../images/yogice_vegjuice.jpeg";
import yogice_lemonade2 from "../images/yogice_lemonade2.jpeg";
import yogice_juice from "../images/yogice_juice.jpeg";
import yogice_shake from "../images/yogice_shake2.jpeg";
import yogice_shake1 from "../images/home_smoothie.jpeg";

// smoothie images import
import smoothie1 from "../images/yogice_home_smoothie1.jpeg"

import "../style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {


  const components = [HomeFirst, HomeSecond, HomeThird];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const CurrentComponent = components[currentIndex];
  useEffect(() => {
    // Scroll to the top-left corner (0,0) of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home-main-container">
      <TopBox />
      <CurrentComponent />
      <HomeLinkButton />
      <HomeJuice />
      <HomeSmoothie />
      <HomeShake />
      {/* <HomeFitness /> */}
      <HomeJuieceSlider />
      {/* <FAQ/> add faq to fitness or juice section on home page */}
      <Hr />
      <Reviews />
      <Hr />
      <Gif />
    </div>
  );
};

//top countainers box



const TopBox = () => {
  return (
    <div className="home-top-container">
      <div className="home-top-box box1">
        <Link to="/juice"><div className="box-content">
          <h3 className="txt-responsive font-family3">Fruit Juices</h3>
          <br></br>
          <button className="btn-top-box font-family3">Order Now</button>
        </div></Link>
        <img
          src={yogice_juice}
          className="home-top-box-img"
          alt="yogic_imgjuice"
          width={120}
          height={260}
        />
        <span className="image-bottom-box font-family4">Fruit Juice</span>
      </div>
      <div className="home-top-box box2">
        <Link to="/juice"><div className="box-content">
          <h3 className="txt-responsive font-family3">Vegetable Juices</h3>
          <br></br>
          <button className="btn-top-box font-family3">Order Now</button>
        </div></Link>
        <img
          src={yogice_vegjuice}
          className="home-top-box-img"
          alt="yogic_imgjuice"
          width={120}
          height={260}
        />
        <span className="image-bottom-box font-family4">Vegetbale Juice</span>
      </div>
      <div className="home-top-box box3">
        <Link to="/juice"><div className="box-content">
          <h3 className="txt-responsive font-family3">Customized Juice</h3>
          <br></br>
          <button className="btn-top-box font-family3">Order Now</button>
        </div></Link>
        <img
          src={yogice_bottle4}
          className="home-top-box-img"
          alt="yogic_imgjuice"
          width={120}
          height={260}
        />
        <span className="image-bottom-box font-family4">Customized Juice</span>
      </div>
      <div className="home-top-box box4">
        <Link to="/juice"><div className="box-content">
          <h3 className="txt-responsive font-family3">Lemonade</h3>
          <br></br>
          <button className="btn-top-box font-family3">Order Now</button>
        </div></Link>
        <img
          src={yogice_lemonade2}
          className="home-top-box-img"
          alt="yogic_imgjuice"
          width={120}
          height={260}
        />
        <span className="image-bottom-box font-family4">Lemonade</span>
      </div>
      <div className="home-top-box box5">
        <Link to="/juice"><div className="box-content">
          <h3 className="txt-responsive font-family3">Coconut Water</h3>
          <br></br>
          <button className="btn-top-box font-family3">Order Now</button>
        </div></Link>
        <img
          src={yogice_coconutwater}
          className="home-top-box-img"
          alt="yogic_imgjuice"
          width={120}
          height={260}
        />
        <span className="image-bottom-box font-family4">Coconut Water</span>
      </div>
      <div className="home-top-box box6">
        <Link to="/shake"><div className="box-content">
          <h3 className="txt-responsive font-family3">Shakes</h3>
          <br></br>
          <button className="btn-top-box font-family3">Order Now</button>
        </div></Link>
        <img
          src={yogice_shake}
          className="home-top-box-img"
          alt="yogic_imgjuice"
          width={120}
          height={260}
        />
        <span className="image-bottom-box font-family4">Shakes</span>
      </div>
      {/* ... (repeat for other boxes) */}
    </div>
  );
};

//home main first container first slide
const HomeFirst = () => {
  return <div className="home-first"></div>;
};

//home main first container second slide
const HomeSecond = () => {
  return (
    <div className="home-second">
      <div className="home-second-img-container">
        {/* <img src={yogice_man} alt='yogice_man' className='home-second-img'/> */}
      </div>
    </div>
  );
};

//home main first container third slide
const HomeThird = () => {
  return (
    <div className="home-third">
      <h1></h1>
    </div>
  );
};

//home buttons below main container
const HomeLinkButton = () => {

  const navigate = useNavigate();
  function handleShakeClick() {
    navigate("/shake");
  }
  
  function handleJuiceClick() {
    navigate("/juice");
  }
  function handleFitnessClick() {
    navigate("/fitness");
  }

  const [hovered, setHovered] = useState(null);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleHoverExit = () => {
    setHovered(null);
  };

  const buttonsData = [
    { text: "Juices", image: juiceImage, linkto: handleJuiceClick },
    { text: "Shakes", image: yogice_shake1, linkto: handleShakeClick },
    { text: "Smoothies", image: smoothie1, linkto: handleShakeClick },
    { text: "Yoga", image: yogaImage, linkto: handleFitnessClick },
  ];
  return (
    <div className="home-link-button-main">
      {buttonsData.map((button, index) => (
        <div
          onClick={button.linkto} 
          key={index}
          className={`home-link-button-box ${
            hovered === index ? "hovered" : ""
          }`}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleHoverExit}
        >
          {hovered === index ? (
            <img
              src={button.image}
              alt={button.text}
              className="button-image"
            />
          ) : (
              <p className="font-family5">{button.text}</p>
          )}
        </div>
      ))}
    </div>
  );
};

const HomeSmoothie = () => {
  const navigate = useNavigate();
  function handleSmoothieClick() {
    navigate("/shake");
  }
  return (
    <div className="home-smoothies-main daj">
      <div onClick={handleSmoothieClick} className="smoothie-box1 smoothie-box">
      </div>
      <div onClick={handleSmoothieClick} className="smoothie-box2 smoothie-box">
      </div>
      <div onClick={handleSmoothieClick} className="smoothie-box3 smoothie-box">
      </div>
      <div onClick={handleSmoothieClick} className="smoothie-box4 smoothie-box">
      </div>
    </div>
  );
};

const HomeJuice = () => {
  const navigate = useNavigate();
  function handleJuiceClick() {
    navigate("/juice");
  }
  return (
    <div className="home-juice-main daj">
      <div onClick={handleJuiceClick} className="juice-box juice-box1">
      </div>
      <div onClick={handleJuiceClick} className="juice-box juice-box2">
      </div>
      <div onClick={handleJuiceClick} className="juice-box juice-box3">
      </div>
      <div onClick={handleJuiceClick} className="juice-box juice-box4">
      </div>
    </div>
  );
};
const HomeShake = () => {
  const navigate = useNavigate();
  function handleShakeClick() {
    navigate("/shake");
  }
  return (
    <div className="home-shake-main daj">
      <div onClick={handleShakeClick} className="shake-box shake-box1">
        </div>
      <div onClick={handleShakeClick} className="shake-box shake-box2">
        </div> 
      <div onClick={handleShakeClick} className="shake-box shake-box3">
      </div> 
      <div onClick={handleShakeClick} className="shake-box shake-box4">
      </div> 
    </div>
  );
};

// home juiceslider with shake, vegetable juice, vegetable juice
const images = [yogice_bottle1, yogice_bottle2, yogice_bottle3, yogice_bottle4];

const HomeJuieceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically transition images
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container">
      <div className="green-design">
        <h3 className="txt-responsive font-family5">Subscribe and unlock a healthier you!</h3>
      </div>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};


const Reviews = () => {
  return (
    <>
      <h1 className="txt-responsive font-family5">What our Subscriber's say about yogice</h1>
    <div className="review-main">
      <div className="review-sub-main">
        <div className="review-child">
          <div className="review-header">
            <img src={review_men} height={50} alt="profile1" />
            <h3 className="txt-responsive-big"><u>Rishabh</u></h3>
          </div>
          <p>
            <b className="txt-responsive font-family1">Amazing juices and amazing service on time delivery.</b>
          </p>
        </div>
        <div className="review-child">
          <div className="review-header">
            <img src={review_women} height={50} alt="profile1" />
            <h3 className="txt-responsive-big"><u>Rose</u></h3>
          </div>
          <p>
            <b className="txt-responsive font-family1">Must try</b>
          </p>
        </div>
        <div className="review-child">
          <div className="review-header">
            <img src={review_women} height={50} alt="profile1" />
            <h3 className="txt-responsive-big"><u>Roshani</u></h3>
          </div>
          <p>
            <b className="txt-responsive font-family1">subscription offer is amazing</b>
          </p>
        </div>
        <div className="review-child last-review">
          <div className="review-header">
            <img src={review_men} height={50} alt="profile1" />
            <h3 className="txt-responsive-big"><u>Prathmesh</u></h3>
          </div>
          <p>
            <b className="txt-responsive font-family1">Nice taste must try it.</b>
          </p>
        </div>
        <div className="review-child last-review">
          <div className="review-header">
            <img src={review_women} height={50} alt="profile1" />
            <h3 className="txt-responsive-big"><u>Naina</u></h3>
          </div>
          <p>
            <b className="txt-responsive font-family1">Yoga classes are best.</b>
          </p>
        </div>
        <div className="review-child last-review">
          <div className="review-header">
            <img src={review_women} height={50} alt="profile1" />
            <h3 className="txt-responsive-big"><u>Arpita</u></h3>
          </div>
          <p>
            <b className="txt-responsive font-family1">Best guidance along with best juice.</b>
          </p>
        </div>
        <div className="review-child last-review">
          <div className="review-header">
            <img src={review_women} height={50} alt="profile1" />
            <h3 className="txt-responsive-big"><u>Krutika</u></h3>
          </div>
          <p>
            <b className="txt-responsive font-family1">Thanks yogice for this wonderfull Offer!</b>
          </p>
        </div>
        <div className="review-child last-review">
          <div className="review-header">
            <img src={review_men} height={50} alt="profile1" />
            <h3 className="txt-responsive-big"><u>Prem</u></h3>
          </div>
          <p>
            <b className="txt-responsive font-family1">Best weight gainer smoothies</b>
          </p>
        </div>
        <div className="review-child last-review">
          <div className="review-header">
            <img src={review_women} height={50} alt="profile1" />
            <h3 className="txt-responsive-big"><u>Suhana</u></h3>
          </div>
          <p>
            <b className="txt-responsive font-family1">Worth the price.</b>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

const Gif = () => {
  return <div className="gif"></div>;
};

// hr line
const Hr = () => {
  return <div className="hr-home" />;
};

export default Home;
