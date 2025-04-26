// src/components/ServiceSection.jsx
import React, { useEffect } from 'react';
import '../styles/Services.css';
import { FaShippingFast, FaHeadset, FaShieldAlt, FaArrowUp } from 'react-icons/fa';
// import { FaArrowUp } from 'react-icons/fa';
import { FaArrowTurnUp } from "react-icons/fa6";

const ServiceSection = () => {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    const scrollHandler = () => {
      if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'flex';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container8">
      <section className="features">
        <div className="feature">
          <div className="icon">
            <a href="/404.html"><FaShippingFast className="icons"/></a>
          </div>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className="feature">
          <div className="icon">
            <a href="/404.html"><FaHeadset className="icons"/></a>
          </div>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className="feature">
          <div className="icon">
            <a href="/404.html"><FaShieldAlt className="icons"/></a>
          </div>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </div>
      </section>

      {/* <button id="scrollToTop2" onClick={scrollToTop}>
        <FaArrowUp />
      </button> */}
    </div>
  );
};

export default ServiceSection;
