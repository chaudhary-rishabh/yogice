import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Aboutus.css';
import '../style/Common.css';

const Aboutus = () => {
  const navigate = useNavigate();

  // State to manage the currently open section
  const [openSection, setOpenSection] = useState('aboutUs');

  useEffect(() => {
    // Scroll to the top-left corner (0,0) of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Function to toggle the visibility of a section
  const toggleSection = (sectionName) => {
    if (openSection === sectionName) {
      // Clicking on an already open section should close it
      setOpenSection(null);
    } else {
      setOpenSection(sectionName);
    }
  };

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="horizontal-headers txt-responsive-big">
          <h2 className={openSection === 'aboutUs' ? 'active txt-responsive-big' : 'txt-responsive-big'} onClick={() => toggleSection('aboutUs')}>
            About us
          </h2>
          <h2 className={openSection === 'ourStory' ? 'active txt-responsive-big' : 'txt-responsive-big'} onClick={() => toggleSection('ourStory')}>
            Our Story
          </h2>
          <h2 className={openSection === 'birthOfYogice' ? 'active txt-responsive-big' : 'txt-responsive-big'} onClick={() => toggleSection('birthOfYogice')}>
            The Birth of Yogice
          </h2>
          <h2 className={openSection === 'sugarFreeJourney' ? 'active txt-responsive-big' : 'txt-responsive-big'} onClick={() => toggleSection('sugarFreeJourney')}>
            A Sugar-Free Journey
          </h2>
          <h2 className={openSection === 'ourVision' ? 'active txt-responsive-big' : 'txt-responsive-big'} onClick={() => toggleSection('ourVision')}>
            Our Vision
          </h2>
        </div>

        <div className="section-container">
          {openSection === 'aboutUs' && (
            <>
              <p className='txt-aboutus txt-first-aboutus'>
                Welcome to Yogice, where health and wellness meet deliciousness! At Yogice, we are more than just a healthy shake and juice company - we are a lifestyle choice, a commitment to your well-being, and a journey towards a healthier you.
              </p>
              <p className='txt-aboutus txt-first-aboutus'>
                Established in 2023 by a team of passionate health enthusiasts and experts, Yogice was born out of a shared vision to revolutionize the way people approach their health. With a firm belief in the transformative power of nutrition, we embarked on a mission to provide you with the finest and most nourishing options for your daily life.
              </p>
              <p className='txt-aboutus txt-first-aboutus'>
                Our journey began with a simple question: "Can healthy also be incredibly delicious?" The answer is a resounding "Yes!" We meticulously craft every Yogice juice and shake to not only promote your well-being but also tantalize your taste buds. Our recipes are a fusion of flavors, carefully balanced to deliver maximum nutrition without compromising on taste.
              </p>
              <p className='txt-aboutus txt-first-aboutus'>
                What sets Yogice apart is our unwavering commitment to using only the freshest and highest-quality ingredients. We believe that nature provides us with the best tools for good health, and we harness this natural goodness to create our products. No artificial additives, no preservatives – just pure, wholesome nutrition.
              </p>
              <p className='txt-aboutus txt-first-aboutus'>
                But Yogice is more than just a product; it's a holistic lifestyle choice. With every sip, you take a step towards a healthier you. We provide not only nourishment for your body but also inspiration for your well-being journey. Our dedication to your health extends beyond our products, as we aim to educate and empower you to make healthier choices every day.
              </p>
              <p className='txt-aboutus txt-first-aboutus'>
                Join us on this remarkable voyage towards health, vitality, and a more vibrant life. Discover the Yogice experience and be a part of our growing community of individuals who are committed to making health a priority.
              </p>
            </>
          )}

          {openSection === 'ourStory' && (
            <>
              <p className='txt-aboutus'>
                It all began with a simple realization. Like many of us, we at Yogice were caught in the whirlwind of modern life. Amidst the chaos of busy schedules and endless to-do lists, we noticed something alarming - the so-called "healthy" juices and shakes that were readily available in the market were nothing but a clever disguise for sugar-laden concoctions packaged in plastic bottles loaded with preservatives.
              </p>
              <p className='txt-aboutus'>
                We knew that these supposedly healthy options were far from it. They were a silent contributor to the growing health crisis, and it troubled us. We believed that people deserved better, that there was a need for a healthier alternative that genuinely cared about well-being.
              </p>
            </>
          )}

          {openSection === 'birthOfYogice' && (
            <>
              <p className='txt-aboutus'>
                Yogice was born out of the desire to break free from the shackles of unhealthy living that big corporations had perpetuated for far too long. We knew that we could do better, and we did.
              </p>
              <p className='txt-aboutus'> 
                Our commitment to your health is unwavering. Every glass bottle of Yogice juice and shake is a testament to our dedication to your well-being. We use only the freshest ingredients, ensuring that every sip you take is a step towards a healthier life. But it doesn't stop there. At Yogice, we go beyond just juices and shakes. We offer a holistic experience that includes a complimentary yoga session with every delivery. We believe that true health is not just about what you consume but also how you nurture your mind and body.
              </p>
            </>
          )}

          {openSection === 'sugarFreeJourney' && (
            <p className='txt-aboutus'>
              One of our core principles at Yogice is to eliminate refined sugar from your diet. We understand the harm it can cause, and we refuse to compromise your health. Instead, we sweeten our tea, coffee, and milk with natural alternatives like jaggery and honey. This ensures that you can enjoy your favorite beverages without guilt.
            </p>
          )}

          {openSection === 'ourVision' && (
            <>
              <p className='txt-aboutus'>
                Our goal at Yogice is simple yet profound - we want to liberate every individual from the trap of an unhealthy lifestyle perpetuated by big corporations. We envision a future where every Indian enjoys a brilliant and fulfilling life, powered by wellness and vitality.
              </p>
              <p className='txt-aboutus'>
                As the founder and CEO of Yogice, we are committed to making this vision a reality. We believe that by providing healthier choices, we can empower you to take control of your health and embrace a life that is not just good but truly exceptional.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
