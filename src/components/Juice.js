import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Juice.css";
import juicenotfound from "../images/shakenotfound.jpeg";

const Juice = ({ fruitJuice, vegetableJuice, popularJuice }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const getJuiceData = () => {
    if (selectedCategory === "Popular") return popularJuice;
    if (selectedCategory === "Fruit") return fruitJuice;
    if (selectedCategory === "Vegetable") return vegetableJuice;

    // If "All" is selected, combine all juice arrays
    return [...fruitJuice, ...vegetableJuice, ...popularJuice];
  };

  const filteredCards = getJuiceData().filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Scroll to the top-left corner (0,0) of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="juice-main">
      <div className="juice-header-main daj">
        <div className="juice-header daj">
          <div className="juice-filter daj">
            <label className="category-label">
              <input
                className="input-filter"
                type="radio"
                value="Popular"
                checked={selectedCategory === "Popular"}
                onChange={handleCategoryChange}
              />
              Popular Juice
            </label>
            <label className="category-label">
              <input
                className="input-filter"
                type="radio"
                value="Fruit"
                checked={selectedCategory === "Fruit"}
                onChange={handleCategoryChange}
              />
              Fruit Juices
            </label>
            <label className="category-label">
              <input
                className="input-filter"
                type="radio"
                value="Vegetable"
                checked={selectedCategory === "Vegetable"}
                onChange={handleCategoryChange}
              />
              Vegetable Juices
            </label>
            <label className="category-label">
              <input
                className="input-filter"
                type="radio"
                value="All"
                checked={selectedCategory === "All"}
                onChange={handleCategoryChange}
              />
              All Juices
            </label>
          </div>
          <div className="juice-search-container daj">
            <div>
              <input
                type="text"
                className="juice-input font-family1"
                placeholder="Search juices"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <div className="search-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
                width="20"
                height="20"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="juice-card-main">
        {filteredCards.length === 0 ? (
          <div className="no-results">
            <img src={juicenotfound} className="juicenotfound" alt="Juice not found" />
            <h1 className="juicenot-founc-txt">No juices found. Try a different search.</h1>
          </div>
        ) : (
          filteredCards.map((item) => (
            <Link key={item.id} to={`/juice/${item.id}`} className="juice-link">
              <div className="card" style={{ backgroundImage: `url(${item.imageUrl})` }}>
                <div className="card-details">
                  <div className="card-title font-family1">{item.name}</div>
                  <div className="card-description font-family1">{item.description}</div>
                </div>
                <div className="card-item-name font-family1">
                  {item.name} <span className="card-price font-family1">₹{item.price.toFixed(2)}</span>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Juice;
