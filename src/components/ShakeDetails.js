import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import shakenotfound from "../images/shakenotfound.jpeg";
import { useCart } from "./CartContext";
import "../style/Shake.css"
import "../style/Common.css"

const ShakeDetails = ({ shakes, smoothies, popular }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const { id } = useParams();
  const allShakes = [...popular, ...shakes, ...smoothies];
  const shake = allShakes.find((item) => item.id.toString() === id);
  const { addToCart, cartItems } = useCart();

  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    // Check if the item is already in the cart
    if (cartItems.find((item) => item.id === shake?.id)) {
      setAddedToCart(true);
    }
  }, [cartItems, shake]);

  const handleAddToCart = () => {
    if (shake) {
      addToCart(shake);
      setAddedToCart(true);
    }
  };

  if (!shake) {
    return (
      <div>
        <p className="shake-notfound font-family3">Shake not found</p>
        <img src={shakenotfound} width={590} alt="notfoundshake" />
      </div>
    );
  }

  return (
    <div className="shake-details">
      <div className="shake-image-cell">
        <img
          className="shake-details-img"
          src={shake.imageUrl}
          alt={shake.name}
        />
        <h3 className="font-family3">{shake.name}</h3>
      </div>
      <div className="shake-details-info">
        <p className="txt-responsive font-family1">{shake.description}</p>
        <p className="txt-responsive font-family1">Price: ₹{shake.price.toFixed(2)}</p>
        <div className="order-btn-main font-family1">
          {addedToCart ? (
            <Link to="/cart">
              <button className="shake-details-btn font-family4">View Cart</button>
            </Link>
          ) : (
            <button className="shake-details-btn font-family4" onClick={handleAddToCart}>
              Add to cart
            </button>
          )}
          <Link to="/orderform">
            <button className="shake-details-btn font-family4">Order now</button>
          </Link>
        </div>
        <ShakeBottle shakename={shake.name} />
      </div>
    </div>
  );
};


const ShakeBottle = (props) => {
  // Define the details of your Shake bottle
  const ShakeDetails = {
    shakename: props.shakename,
    calories: 550,
    protein: 8,
    carbs: 60,
    fat: 10,
    sugar: 0,
    ingredients: ['Bananas', 'Milk', 'Honey', 'Ice'],
    isHealthy: true,
  };

  return (
    <div className="shake-bottle-container">
      <div className="table-container">
        <table className="shake-details-table font-family3">
          <tbody>
            <tr>
              <td>Total Weight</td>
              <td>300 ML</td>
            </tr>
            <tr>
              <td>Calories</td>
              <td>{ShakeDetails.calories} kcal</td>
            </tr>
            <tr>
              <td>sugar</td>
              <td>{ShakeDetails.sugar} g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>{ShakeDetails.protein} g</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>{ShakeDetails.carbs} g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{ShakeDetails.fat} g</td>
            </tr>
            <tr>
              <td>Ingredients</td>
              {/* <td>{ShakeDetails.ingredients.join(', ')}</td> */}
              <td>{props.shakename}</td>
            </tr>
            <tr>
              <td>Is Healthy</td>
              <td>{ShakeDetails.isHealthy ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="description-box font-family1">
        {/* <p>
          This delightful {ShakeDetails.shakename} is a healthy and refreshing
          choice. With only {ShakeDetails.calories} calories per serving, it's
          packed with {ShakeDetails.protein}g of protein, {ShakeDetails.carbs}g
          of carbohydrates, and just {ShakeDetails.fat}g of fat. Made with
          natural ingredients like {ShakeDetails.ingredients.join(', ')}, it
          promises a delicious and nutritious experience. Enjoy before{' '}
          {ShakeDetails.expiry}.
        </p> */}
      </div>
    </div>
  );
};




export default ShakeDetails;
