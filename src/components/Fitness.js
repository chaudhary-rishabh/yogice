import React from 'react';
import yogiceyoga3 from "../images/yogiceyogagirl.png";
import  "../style/Common.css"
const Fitness = () => {
  

  return (
    <div className='fitness-main'>
      <img src={yogiceyoga3} className='fitness-img' alt="yogiceyogaimg" />
      <div className='fitness-sub'>
        <div className='fitness-box'>
          <ul>
            <ol className='txt-responsive2 font-family1'> <b>Enhanced Flexibility</b>: Yoga helps improve your flexibility, making it easier to perform everyday activities and reducing the risk of injuries.</ol><br></br>
            <ol className='txt-responsive2 font-family1'> <b>Stress Reduction</b>: Regular yoga practice promotes relaxation and reduces stress, allowing you to find balance and peace in your busy life.</ol><br></br>
            <ol className='txt-responsive2 font-family1'> <b>Increased Strength</b>: Yoga poses require the engagement of various muscle groups, leading to improved overall strength and endurance.</ol><br></br>
            <ol className='txt-responsive2 none-display'> <b>Mental Clarity</b>: Through mindfulness and meditation, yoga sharpens your focus, clears your mind, and boosts mental clarity.</ol><br className='none-display'></br>
          </ul>
        </div>
        <div className='fitness-box'>
          <ul>
            <ol className='txt-responsive2 font-family1'> <b>Increased Energy</b>: Regular exercise boosts your stamina and energy levels, helping you feel more vibrant throughout the day.</ol><br></br>
            <ol className='txt-responsive2 font-family1'> <b>Weight Management</b>: Fitness and exercise play a crucial role in maintaining a healthy weight and achieving your fitness goals.</ol><br></br>
            <ol className='txt-responsive2 none-display'> <b>Enhanced Cardiovascular Health</b>: Exercise strengthens your heart, lowers the risk of heart disease, and improves overall cardiovascular health.</ol><br className='none-display'></br>
            <ol className='txt-responsive2 font-family1'> <b>Better Sleep</b>: Regular workouts can improve the quality of your sleep, ensuring you wake up refreshed and rejuvenated.</ol><br></br>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
