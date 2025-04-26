import React, { useRef } from 'react';
import '../styles/Catagory.css';
import {
  FaMobileAlt,
  FaDesktop,
  FaClock,
  FaCamera,
  FaHeadphonesAlt,
  FaGamepad,
  FaFemale,
  FaTshirt,
  FaTv,
  FaCouch,
  FaFirstAid,
  FaFootballBall,
  FaBaby,
  FaAppleAlt,
  FaSpa
} from 'react-icons/fa';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const categories = [
  { icon: <FaMobileAlt className="category-icon"/>, label: "Phones" },
  { icon: <FaDesktop className="category-icon"/>, label: "Computers" },
  { icon: <FaClock className="category-icon"/>, label: "SmartWatch" },
  { icon: <FaCamera className="category-icon"/>, label: "Camera" },
  { icon: <FaHeadphonesAlt className="category-icon"/>, label: "Headphones" },
  { icon: <FaGamepad className="category-icon"/>, label: "Gaming" },
  { icon: <FaFemale className="category-icon"/>, label: "Woman’s Fashion" },
  { icon: <FaTshirt className="category-icon"/>, label: "Men’s Fashion" },
  { icon: <FaTv className="category-icon"/>, label: "Electronics" },
  { icon: <FaCouch className="category-icon"/>, label: "Home & Lifestyle" },
  { icon: <FaFirstAid className="category-icon"/>, label: "Medicine" },
  { icon: <FaFootballBall className="category-icon"/>, label: "Sports & Outdoor" },
  { icon: <FaBaby className="category-icon"/>, label: "Baby’s & Toys" },
  { icon: <FaAppleAlt className="category-icon"/>, label: "Groceries & Pets" },
  { icon: <FaSpa className="category-icon"/>, label: "Health & Beauty" }
];

const Category = () => {
  const listRef = useRef(null);
  const scrollAmount = 220; // pixels per click

  const handlePrev = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="container3">
      <div className="catagory">
        <div className="today-header">
          <div className="today-header1">
            <span className="red-box"></span>
            <h2><span>Categories</span></h2>
          </div>
          <div className="today-header2">
            <h2>Browse By Category</h2>
            <div className="nav-arrow-catagory">
              <button className="nav prev1" onClick={handlePrev}><FaArrowAltCircleLeft /></button>
              <button className="nav next1" onClick={handleNext}><FaArrowAltCircleRight /></button>
            </div>
          </div>
        </div>

        <div className="catagory-carousel">
          <div className="catagory-list-wrapper" ref={listRef}>
            <div className="catagory-list">
              {categories.map((cat, idx) => (
                <div className="category-card" key={idx}>
                  {cat.icon}
                  <p></p>
                  <p>{cat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
