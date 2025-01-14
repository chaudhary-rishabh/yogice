import React, { useEffect, useState, useRef } from "react";
import { useCart } from "./CartContext";
// import "@google-pay/button-react";
import "../style/Common.css";
import OrderForm from "./OrderForm"

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  const orderFormRef = useRef(null);
  // Define your Google Pay payment request
  // const paymentRequest = {
  //   apiVersion: 2,
  //   apiVersionMinor: 0,
  //   allowedPaymentMethods: [
  //     {
  //       type: "CARD",
  //       parameters: {
  //         allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
  //         allowedCardNetworks: ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"],
  //       },
  //       tokenizationSpecification: {
  //         type: "PAYMENT_GATEWAY",
  //         parameters: {
  //           gateway: "example", // Replace with your payment gateway name
  //           gatewayMerchantId: "BCR2DN4TW2ZKHZAT", // Replace with your gateway merchant ID
  //         },
  //       },
  //     },
  //   ],
  //   merchantInfo: {
  //     merchantId: "BCR2DN4TW2ZKHZAT", // Replace with your merchant ID
  //     merchantName: "yogice", // Replace with your merchant name
  //   },
  //   transactionInfo: {
  //     totalPriceStatus: "FINAL",
  //     totalPrice: (cartItems.reduce((total, item) => total + item.price, 0)).toFixed(2), // Calculate the total price of items in the cart
  //     currencyCode: "INR", // Change to "INR" for Indian Rupees or your desired currency code
  //   },
  // };

  // Function to handle Google Pay button click
//   const handleGooglePayClick = () => {
//     const googlePay = new window.google.payments.api.PaymentsClient({ environment: "TEST" });
//  // Use "TEST" or "PRODUCTION"

//     googlePay
//       .loadPaymentData(paymentRequest)
//       .then((paymentData) => {
//         // Handle the payment data here
//       })
//       .catch((error) => {
//         // Handle errors here
//         console.error(error);
//       });
//   };

  // Call the initialization function when your component mounts
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://pay.google.com/gp/p/js/pay.js";
  //   script.async = true;
  //   script.onload = () => {
  //     // Initialize Google Pay when the script is loaded
  //     initializeGooglePay();
  //   };
  //   document.head.appendChild(script);
  // }, []);

  // const initializeGooglePay = () => {
  //   // Check if the `google` object is defined
  //   if (window.google) {
  //     const googlePay = new window.google.payments.api.PaymentsClient({
  //       environment: "TEST", // Use "TEST" or "PRODUCTION"
  //     });

  //     googlePay
  //       .isReadyToPay({ ...paymentRequest }) // Check if Google Pay is ready
  //       .then((response) => {
  //         if (response.result) {
  //           // Google Pay is ready; you can use it here
  //         } else {
  //           // Google Pay is not available for the user's device or browser
  //         }
  //       })
  //       .catch((error) => {
  //         // Handle initialization errors here
  //         console.error(error);
  //       });
  //   }
  // };

    const [showOrderForm, setShowOrderForm] = useState(false);
  useEffect(() => {
    if (showOrderForm && orderFormRef.current) {
      orderFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showOrderForm]);
  // Function to show the OrderForm component
  const handleShowOrderForm = () => {
    setShowOrderForm(true);
  };

  // Function to hide the OrderForm component
  const handleHideOrderForm = () => {
    setShowOrderForm(false);
  };
  return (
    <div className="cart">
      <p className="cart-txt">Shopping Cart</p>
      {cartItems.length === 0 ? (
        <div className="cart-noitem-main">
          <p className="cart-txt">Cart is empty</p>
          <p className="cart-txt">Please add items to cart</p>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <div className="cart-main" key={item.id}>
                <div className="cart-box">
                  <img src={item.imageUrl} className="cart-img" width={150} alt={item.image} />
                  <p className="responsive-display-none font-family1">Get free YOGA session everyday!<a style={{color:"blue"}} href="tel:+9725031824">Call & order</a></p>
                  <li className="buttons-container-main">
                    <p className="txt-responsive-big">{item.name}  ₹{item.price.toFixed(2)}</p>
                    <button className="cart-btn font-family1" onClick={() => removeFromCart(item.id)}>Remove</button>
                    <button className="cart-btn font-family1" >Order Now</button> {/* yearly, monthly */}
                  </li>
                </div>
              </div>
            ))}
          </ul>
            <div className="cart-next-box">
            <p className="font-family1">Total Price: ₹{totalPrice}</p>
            <button className="cart-btn font-family3" onClick={handleShowOrderForm}>Next</button>
          </div>
        </div>
      )}
      {/* Render OrderForm as a modal if showOrderForm is true */}
      {showOrderForm && (
        <div className="order-form-modal">
          <div className="order-form-content" ref={orderFormRef}>
            <button className="cart-btn" onClick={handleHideOrderForm}>Close</button>
            <OrderForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
