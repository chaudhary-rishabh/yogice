import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Shake.css";
import "../style/Common.css";
import shakenotfound from "../images/shakenotfound.jpeg";

const Shake = ({ shakes, smoothies, popular }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const getShakeData = () => {
    if (selectedCategory === "Popular") return popular;
    if (selectedCategory === "Shakes") return shakes;
    if (selectedCategory === "Smoothies") return smoothies;

    // If "All" is selected, combine all shakes arrays
    return [...popular, ...shakes, ...smoothies];
  };

  const filteredCards = getShakeData().filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Scroll to the top-left corner (0,0) of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shake-main">
      <div className="shake-header-main daj">
        <div className="shake-header daj">
          <div className="shake-filter daj">
            <label className="category-label">
              <input
                className="input-filter font-family1"
                type="radio"
                value="Popular"
                checked={selectedCategory === "Popular"}
                onChange={handleCategoryChange}
              />
              Popular Shake
            </label>
            <label className="category-label">
              <input
                className="input-filter font-family1"
                type="radio"
                value="Shakes"
                checked={selectedCategory === "Shakes"}
                onChange={handleCategoryChange}
              />
              Shakes
            </label>
            <label className="category-label">
              <input
                className="input-filter font-family1"
                type="radio"
                value="Smoothies"
                checked={selectedCategory === "Smoothies"}
                onChange={handleCategoryChange}
              />
              Smoothies
            </label>
            <label className="category-label">
              <input
                className="input-filter font-family1"
                type="radio"
                value="All"
                checked={selectedCategory === "All"}
                onChange={handleCategoryChange}
              />
              All Shakes
            </label>
          </div>
          <div className="shake-search-container daj">
            <div>
              <input
                type="text"
                className="shake-input font-family1"
                placeholder="Search Shakes"
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
      <div className="shake-card-main">
        {filteredCards.length === 0 ? (
          <div className="no-results">
            <img src={shakenotfound} className="noshakefound" alt="Shake not found" />
            <h1 className="not-found-txt">No shakes found. Try a different search.</h1>
          </div>
        ) : (
          filteredCards.map((item) => (
            <Link key={item.id} to={`/shake/${item.id}`} className="shake-link">
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

export default Shake;
