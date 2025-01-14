import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import "../style/Contactus.css";
import "../style/Common.css";

const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        houseno: '',
        streetarea: '',
        city: '',
        pincode: '',
        juice: '',
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
                houseno: '',
                streetarea: '',
                city: '',
                pincode: '',
                juice: '',
                quantity: '',
                juice: '',
            });
        }
    }, [isSuccess]);

    return (
        <div className='form-container'>
            {isSuccess && (
            <div className='success-container font-family1'>
            Order placed Successfully!<br></br>
            </div>
            )}
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
            <input
                type="text"
                className='contactus-inpt font-family1'
                name="houseno"
                placeholder="Your house number"
                value={formData.houseno}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                className='contactus-inpt font-family1'
                name="streetarea"
                placeholder="Your street area"
                value={formData.streetarea}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                className='contactus-inpt font-family1'
                name="city"
                placeholder="Your city"
                value={formData.city}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                className='contactus-inpt font-family1'
                name="pincode"
                placeholder="Your pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
            />
            <input
                type="hidden"
                className='contactus-inpt font-family1'
                name="quantity"
                placeholder="Your quantity"
                value={"formData.quantity"}
                onChange={handleChange}
                required
            />
            <input
                type="hidden"
                className='contactus-inpt font-family1'
                name="juice"
                placeholder="Your juice"
                value={"formData.juice"}
                onChange={handleChange}
                required
            />

            <button className='form-button font-family3' type="submit">Order</button>
        </form>
        
        </div>
    );
};

export default OrderForm;
