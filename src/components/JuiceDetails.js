import React,{useEffect, useState} from "react";
import { useCart } from "./CartContext";
import { useParams, Link, useNavigate } from "react-router-dom";
import juicenotfound from '../images/juicenotfound.jpeg'
import "../style/Juice.css"
import "../style/Common.css"

const JuiceDetails = ({ fruitJuice, vegetableJuice, popularJuice }) => {
  const navigate = useNavigate();
  
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

  const { id } = useParams();

  const allJuices = [...fruitJuice, ...vegetableJuice, ...popularJuice];

  const juice = allJuices.find((item) => item.id.toString() === id);
  const { addToCart, cartItems } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    // Check if the item is already in the cart
    if (cartItems.find((item) => item.id === juice?.id)) {
      setAddedToCart(true);
    }
  }, [cartItems, juice]);

  const handleAddToCart = () => {
    if (juice) {
      addToCart(juice);
      setAddedToCart(true);
    }
  };

  if (!juice) {
    return (
      <div>
        <p className="juice-notfound font-family1">Juice not fuond</p>
        <img src={juicenotfound} width={490} alt="notfoundjuice"/>
      </div>
    )
  }

  const handleOrderClick = () => { 
    navigate("/orderform");
  }
  return (
    <div className="juice-details">
      <div className="juice-image">
        <img className="juice-details-img" src={juice.imageUrl} alt={juice.name} />
        <h3 className="font-family3">{juice.name}</h3>
      </div>
      <div className="juice-details-info">
        <p className="txt-responsive font-family1">{juice.description}</p>
        <p className="txt-responsive font-family1">Price: ₹{juice.price.toFixed(2)}</p>
        <div className="order-btn-main">
        {addedToCart ? (
          <Link to="/cart">
              <button className="juice-details-btn font-family4">View Cart</button>
            </Link>
          ) : (
            <button className="juice-details-btn font-family4" onClick={handleAddToCart}>
              Add to cart
            </button>
          )}
          <Link to="/orderform">
            <button className="juice-details-btn font-family4">Order now</button>
          </Link>
        </div>
        <JuiceBottleDetails juicename={juice.name} />
      </div>
    </div>
  );
};


const JuiceBottleDetails = (props) => {
  // Define the details of your juice bottle
  const juiceDetails = {
    juicename: props.juicename,
    calories: 350,
    protein: 5,
    carbs: 10,
    fat: 15,
    sugar: 0,
    ingredients: ['Bananas', 'Milk', 'Honey', 'Ice'],
    isHealthy: true,
  };

  return (
    <div className="juice-bottle-container">
      <div className="table-container">
        <table className="juice-details-table font-family3">
          <tbody>
            <tr>
              <td>Total Weight</td>
              <td>300 ML</td>
            </tr>
            <tr>
              <td>Calories</td>
              <td>{juiceDetails.calories} kcal</td>
            </tr>
            <tr>
              <td>sugar</td>
              <td>{juiceDetails.sugar} g</td>
            </tr>
            <tr>
              <td>Protein</td>
              <td>{juiceDetails.protein} g</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td>{juiceDetails.carbs} g</td>
            </tr>
            <tr>
              <td>Fat</td>
              <td>{juiceDetails.fat} g</td>
            </tr>
            <tr>
              <td>Ingredients</td>
              <td>{props.juicename}</td>
              {/* <td>{juiceDetails.ingredients.join(', ')}</td> */}
            </tr>
            <tr>
              <td>Is Healthy</td>
              <td>{juiceDetails.isHealthy ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="description-box font-family1">
        {/* <p>
          This delightful {juiceDetails.juicename} is a healthy and refreshing
          choice. With only {juiceDetails.calories} calories per serving, it's
          packed with {juiceDetails.protein}g of protein, {juiceDetails.carbs}g
          of carbohydrates, and just {juiceDetails.fat}g of fat. Made with
          natural ingredients like {juiceDetails.ingredients.join(', ')}, it
          promises a delicious and nutritious experience. Enjoy before{' '}
          {juiceDetails.expiry}.
        </p> */}
      </div>
    </div>
  );
};


export default JuiceDetails;
