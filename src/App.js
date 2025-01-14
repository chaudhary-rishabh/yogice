import './App.css';
import './font/fonts.css';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
import Header from './components/Header';
import Error from './components/Error';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Fitness from './components/Fitness';
import Juice from './components/Juice';
import Shake from './components/Shake';
import Cart from './components/Cart';
import ShakeDetails from './components/ShakeDetails';
import JuiceDetails from './components/JuiceDetails';
import { CartContextProvider } from "./components/CartContext";

//fruit juice import
import mixedfruit from "./images/mixedfruityogice.jpeg";
import orange from "./images/yogice_orange.jpeg";
import pineapple from "./images/yogicepineapple.jpeg";
import apple from "./images/yogiceapple.jpeg";
import grape from "./images/yogicegrape.jpeg";
import Watermelon from "./images/yogice_watermelon.jpeg";
import berryblend from "./images/yogiceberryblend.jpeg";
import muskmelon from "./images/yogice_muskmelon.jpeg";
import pomegranate from "./images/yogice_pomegranate.jpeg";
import sweetlime from "./images/yogice_sweetlime.jpeg";
import guava from "./images/guavayogice.jpeg";

//vegetable juice images import
import kale from "./images/kaleyogice.jpeg";
import cucumber from "./images/cucumberyogice.jpeg";
import carrot from "./images/yogicecarrot.jpeg";
import brocali from "./images/yogice_brocali.jpeg";
import celery from "./images/celeryyogice.jpeg";
import green from "./images/yogicespniach.jpeg";
import avocado from "./images/yogiceavocado.jpeg";
import bellpeper from "./images/bellpeperyogice.jpeg";
import beetroot from "./images/beetrootyogice.jpeg";
import ashgaurd from "./images/ashgaurdyogice.jpeg";

//popular juices images import
import coconutwater from "./images/yogice_coconutwater1.jpeg";
import lemonade from "./images/yogice_lemonade1.jpeg";
import mixveg from "./images/yogice_mixveg.jpeg";


// shake images import
import tropicalparadise from "./images/topicalparadiseyogice.jpeg";
import shakeimg from "./images/yogice_shake2.jpeg";
import banana from "./images/yogice_banana2.jpeg";
import strawberry from "./images/yogice_strawberry2.jpeg";
import sapodilla from "./images/yogice_sapodilla1.jpeg";
import blueberry from "./images/yogice_blueberry1.jpeg";
import almondbliss from "./images/yogice_almondbliss2.jpeg";
import dryfruit from "./images/yogice_dryfruit1.jpeg";
import greenpower from "./images/yogice_greenshake1.jpeg";
import yogicespecial from "./images/yogice_specialshake.jpeg";
import berries from "./images/yogice_berry1.jpeg";

//smoothies images import
import fruitnut from "./images/yogice_fruitnut.jpeg";
import chocolateprotein from "./images/yogice_chocolateprotein.jpeg";
import kiwismoothie from "./images/strawberrykiwiyogice.jpeg";
import proteinsmoothie from "./images/yogice_proteinsmoothie.jpeg";
import greenprotein from "./images/yogice_greenprotein.jpeg";
import cocoberry from "./images/yogicespecialshake.jpeg";
import berrybrust from "./images/yogice_berrybrust.jpeg";
import pineapplesmoothie from "./images/yogicepineapple2.jpeg";
import watermelonsmoothie from "./images/mixedfruityogice.jpeg";
import bananaoats from "./images/yogice_bananaoats.jpeg";
import cucumbersmoothie from "./images/cucumberyogice.jpeg";
import peanutsmoothie from "./images/yogice_peanutsmoothie.jpeg";
import mangosmoothie from "./images/yogicemango2.jpeg";
import greengodess from "./images/godessyogice.jpeg";
import creamyavocado from "./images/yogiceavocado.jpeg";
import strawberrykiwi from "./images/strawberrykiwiyogice.jpeg";
import OrderForm from './components/OrderForm';


//popular images import
function App() {

  const fruitJuice = [
    {
      id: 1,
      name: "Orange",
      price: 89,
      description:
        "Savor the tangy and sweet taste of freshly squeezed oranges in every sip.",
      imageUrl: orange,
    },
    {
      id: 2,
      name: "Apple",
      price: 89,
      description:
        "A classic choice, our apple juice offers crispness and a touch of sweetness.",
      imageUrl: apple,
    },
    {
      id: 3,
      name: "Grape",
      price: 89,
      description:
        "Indulge in the rich and refreshing essence of plump and juicy grapes.",
      imageUrl: grape,
    },
    {
      id: 4,
      name: "Pineapple",
      price: 89,
      description:
        "Experience the tropical paradise with the zesty and tropical pineapple juice.",
      imageUrl: pineapple,
    },
    {
      id: 5,
      name: "Watermelon",
      price: 79,
      description:
        "Quench your thirst with the hydrating and subtly sweet watermelon juice.",
      imageUrl: Watermelon,
    },
    {
      id: 6,
      name: "Berry Blend",
      price: 89,
      description:
        "A medley of assorted berries, bursting with antioxidants and vibrant flavors.",
      imageUrl: berryblend,
    },
    {
      id: 7,
      name: "Musk Melon",
      price: 79,
      description:
        "Transport yourself to the tropics with the luscious and sunny musk melon shake.",
      imageUrl: muskmelon,
    },
    {
      id: 8,
      name: "Pomegranate",
      price: 90,
      description:
        "Experience the bold and tangy profile of pomegranate packed with antioxidants.",
      imageUrl: pomegranate,
    },
    {
      id: 9,
      name: "Sweet Lime",
      price: 89,
      description:
        "Zest up your day with the bright and invigorating flavor of sweet lime juice.",
      imageUrl: sweetlime,
    },
    {
      id: 10,
      name: "Guava",
      price: 89,
      description:
        "Enjoy the tropical richness of guava, a flavorful and nutrient-packed juice.",
      imageUrl: guava,
    },
  ];

  // vegetable juice
  const vegetableJuice = [
    {
      id: 11,
      name: "Carrot",
      price: 69,
      description:
        "Juice made from carrots, rich in vitamins and beta-carotene.",
      imageUrl: carrot,
    },
    {
      id: 12,
      name: "Spinach",
      price: 59,
      description: "Juice made from nutrient-packed spinach leaves.",
      imageUrl: green,
    },
    {
      id: 13,
      name: "Kale",
      price: 69,
      description:
        "Juice made from kale, a superfood high in vitamins and antioxidants.",
      imageUrl: kale,
    },
    {
      id: 14,
      name: "Cucumber",
      price: 69,
      description:
        "Juice made from refreshing cucumbers, known for their hydrating properties.",
      imageUrl: cucumber,
    },
    {
      id: 15,
      name: "Beet",
      price: 69,
      description:
        "Juice made from beets, offering a vibrant color and potential health benefits.",
      imageUrl: beetroot,
    },
    {
      id: 16,
      name: "Celery",
      price: 69,
      description:
        "Juice made from celery, known for its crispness and potential digestive benefits.",
      imageUrl: celery,
    },
    {
      id: 17,
      name: "Broccoli",
      price: 79,
      description:
        "Juice made from broccoli, rich in vitamins and a unique flavor profile.",
      imageUrl: brocali,
    },
    {
      id: 18,
      name: "Bottle Gourd",
      price: 59,
      description:
        "Juice made from bottle gourd, offering a mild and refreshing taste.",
      imageUrl: green,
    },
    {
      id: 19,
      name: "Bell Pepper",
      price: 79,
      description:
        "Juice made from bell peppers, known for their vibrant colors and potential health benefits.",
      imageUrl: bellpeper,
    },
    {
      id: 20,
      name: "Avocado",
      price: 99,
      description:
        "Creamy and nutritious, avocado adds a rich texture to your vegetable juice.",
      imageUrl: avocado,
    },
  ];

  //popular juices
  const popularJuice = [
    {
      id: 21,
      name: "Mixed Fruits",
      price: 89,
      description:
        "A delightful blend of various fresh fruits, bursting with natural flavors.",
      imageUrl: mixedfruit,
    },
    {
      id: 22,
      name: "Coconut Water",
      price: 60,
      description:
        "Pure and refreshing coconut water straight from the tropical palms.",
      imageUrl: coconutwater,
    },
    {
      id: 23,
      name: "Lemonade",
      price: 49,
      description:
        "A classic and refreshing lemon-based drink that's perfect for any occasion.",
      imageUrl: lemonade,
    },
    {
      id: 24,
      name: "Ash Gourd",
      price: 69,
      description:
        "Enjoy the hydrating and cooling benefits of ash gourd juice, a rejuvenating choice.",
      imageUrl: ashgaurd,
    },
    {
      id: 25,
      name: "Mixed Vegetables",
      price: 70,
      description:
        "A nutritious medley of assorted vegetables for a wholesome juice experience.",
      imageUrl: mixveg,
    },
  ];

//shakes
  const shakes = [
    {
      id: 25,
      name: "Banana Shake",
      price: 69,
      description: "Creamy shake with the natural sweetness of ripe bananas.",
      imageUrl: banana,
    },
    {
      id: 27,
      name: "Chikoo Shake",
      price: 79,
      description:
        "Velvety shake featuring the unique flavor of chikoo (sapodilla).",
      imageUrl: sapodilla,
    },
    {
      id: 28,
      name: "Blueberry Shake",
      price: 89,
      description:
        "Antioxidant-rich shake bursting with the flavors of blueberries.",
      imageUrl: blueberry,
    },
    {
      id: 29,
      name: "Strawberry Shake",
      price: 89,
      description:
        "Classic shake made with fresh strawberries for a fruity delight.",
      imageUrl: strawberry,
    },
    {
      id: 30,
      name: "Dry Fruits Shake",
      price: 99,
      description:
        "Nutrient-packed shake featuring a mix of assorted dry fruits.",
      imageUrl: dryfruit,
    },
    {
      id: 31,
      name: "Almond Bliss Shake",
      price: 99,
      description: "Rich and creamy shake with the goodness of almonds.",
      imageUrl: almondbliss,
    },
    {
      id: 32,
      name: "Green Power Shake",
      price: 99,
      description:
        "A healthy blend of greens and fruits for a nourishing boost.",
      imageUrl: greenpower,
    },
    {
      id: 33,
      name: "Yogice Special Shake",
      price: 99,
      description:
        "A special creation featuring a blend of milk, honey,peanut butter, fresh fruits, and nuts.",
      imageUrl: yogicespecial,
    },
    {
      id: 34,
      name: "Berries Shake",
      price: 89,
      description:
        "A delightful blend of assorted berries for a burst of vibrant flavors.",
      imageUrl: berries,
    },
  ];

  const smoothies = [
    {
      id: 35,
      name: "Tropical Paradise Smoothie",
      price: 99,
      description:
        "Escape to a tropical paradise with a blend of exotic fruits and coconut.",
      imageUrl: tropicalparadise,
    },
    {
      id: 36,
      name: "Berry Burst Smoothie",
      price: 99,
      description:
        "A burst of berry flavors with antioxidants and a hint of sweetness.",
      imageUrl: berrybrust,
    },
    {
      id: 37,
      name: "Green Goddess Smoothie",
      price: 89,
      description:
        "A refreshing and nutrient-packed blend of greens and tropical fruits.",
      imageUrl: greengodess,
    },
    {
      id: 38,
      name: "Mango Tango Smoothie",
      price: 99,
      description:
        "Dance to the rhythm of ripe mangoes with a touch of citrus zing.",
      imageUrl: mangosmoothie,
    },
    {
      id: 39,
      name: "Peanut Butter Power Smoothie",
      price: 109,
      description:
        "Fuel up with protein-rich peanut butter, banana, and chocolate.",
      imageUrl: peanutsmoothie,
    },
    {
      id: 40,
      name: "Creamy Avocado Delight",
      price: 99,
      description:
        "Indulge in the rich creaminess of avocado blended with honey and lime.",
      imageUrl: creamyavocado,
    },
    {
      id: 41,
      name: "Pineapple Coconut Dream",
      price: 99,
      description:
        "A dreamy blend of pineapple and coconut milk for a tropical escape.",
      imageUrl: pineapplesmoothie,
    },
    {
      id: 42,
      name: "Choco-Berry Bliss",
      price: 99,
      description:
        "Chocolate meets berries in a blissful combination of flavors.",
      imageUrl: cocoberry,
    },
    {
      id: 43,
      name: "Refreshing Cucumber Mint",
      price: 89,
      description:
        "Stay refreshed with cucumber, mint, and a touch of tangy lime.",
      imageUrl: cucumbersmoothie,
    },
    {
      id: 44,
      name: "Banana Oat Powerhouse",
      price: 99,
      description:
        "A filling and nutritious blend of banana, oats, and almond milk.",
      imageUrl: bananaoats,
    },
    {
      id: 45,
      name: "Strawberry Kiwi Fusion",
      price: 89,
      description:
        "Experience the sweet and tangy fusion of ripe strawberries and kiwi.",
      imageUrl: strawberrykiwi,
    },
    {
      id: 46,
      name: "Minty Watermelon Refresher",
      price: 89,
      description:
        "Stay cool and refreshed with a blend of watermelon and fresh mint.",
      imageUrl: watermelonsmoothie,
    },
  ];

  const popular = [
    {
      id: 47,
      name: "Yogice Special Shake",
      price: 99,
      description:
        "A special creation featuring a blend of milk, honey,peanut butter, fresh fruits, and nuts.",
      imageUrl: shakeimg,
    },
    {
      id: 48,
      name: "Protein Power Shake",
      price: 119,
      description:
        "Fuel your muscles with a protein-packed shake designed for fitness enthusiasts.",
      imageUrl: proteinsmoothie,
    },
    {
      id: 49,
      name: "Nutty Chocolate Protein Shake",
      price: 129,
      description:
        "A decadent blend of chocolate, nuts, and protein for a delicious treat.",
      imageUrl: chocolateprotein,
    },
    {
      id: 50,
      name: "Mixed Fruit & Nut Smoothie",
      price: 109,
      description:
        "A wholesome blend of mixed fruits and nuts for a burst of flavors and energy.",
      imageUrl: fruitnut,
    },
    {
      id: 51,
      name: "Kiwi Delight Smoothie",
      price: 99,
      description:
        "Savor the refreshing taste of kiwi in a delightful and nutritious smoothie.",
      imageUrl: kiwismoothie,
    },
    {
      id: 52,
      name: "Green Protein Smoothie",
      price: 119,
      description:
        "A power-packed smoothie with greens, protein, and natural sweetness.",
      imageUrl: greenprotein,
    },
  ];

  return (
    <div className="App">
      <Header />
        <CartContextProvider>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route
                path="/juice"
                element={<Juice fruitJuice={fruitJuice} vegetableJuice={vegetableJuice} popularJuice={popularJuice} />}
              />
              <Route path="/juice/:id" element={<JuiceDetails fruitJuice={fruitJuice} vegetableJuice={vegetableJuice} popularJuice={popularJuice} />} />
              <Route
                path="/shake"
                element={<Shake shakes={shakes} smoothies={smoothies} popular={popular} />}
              />
              <Route path="/shake/:id" element={<ShakeDetails shakes={shakes} smoothies={smoothies} popular={popular} />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/aboutus" element={<Aboutus/>} />
              <Route path="/orderform" element={<OrderForm/>} />
              <Route path="*" element={<Error />} />
          </Routes>
        </CartContextProvider>
      <Footer/>
    </div>
  );
}

export default App;
  