import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import "../style/Contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    message: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
  event.preventDefault();
  setIsSuccess(true);
  emailjs
    .send(
      'service_3w8e1bo', // Replace with your service ID from EmailJS
      'template_9m86mwv', // Replace with your template ID from EmailJS
      formData,
      'V2r7z0J6-28XP3TXA' // Replace with your user ID from EmailJS
    )
    .then(response => {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000); // Delay of 3000 milliseconds (3 seconds)
    })
    .catch(error => {
      // console.error('Error sending email:', error);
    });
};

  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: '',
        number: '',
        message: '',
      });
    }
  }, [isSuccess]);

  return (
    <div className="contactus-container">
      <div className='form-container'>
         {isSuccess && (
          <div className='success-container font-family3'>
          Message sent Successfully<br></br>
          Our team will contact you shortly!
          </div>
        )}
      <h2 style={{marginBottom:"30px"}} className='font-family2'>Have Query!</h2>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className='contactus-inpt font-family1'
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          className='contactus-inpt font-family1'
          name="number"
          placeholder="Your number"
          value={formData.number}
          onChange={handleChange}
          required
        />
          <textarea
            className='txt-area font-family1'
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button className='form-button font-family2' type="submit">Submit</button>
        </form>
     
      </div>
    </div>
  );
};

export default ContactUs;
