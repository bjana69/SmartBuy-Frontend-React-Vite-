import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";
import FlashSales from "../components/FlashSales.jsx";
import Category from "../components/Catagory.jsx";
import BestSelling from "../components/BestSelling.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";
import FeaturedAds from "../components/FeaturedAds.jsx";
import Services from "../components/Services.jsx";
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowTurnUp } from "react-icons/fa6";
import "../styles/HomePage.css";

const HomePage = () => {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    const scrollHandler = () => {
      if (window.scrollY > 200) {
        scrollToTopBtn.style.display = "flex";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Banner />
      <FlashSales />
      <hr style={{ width: "90%", margin: "auto" }} />
      <Category />
      <br />
      <hr style={{ width: "90%", margin: "auto" }} />
      <br />
      <BestSelling />
      <ProductCarousel />
      <FeaturedAds />
      <br />
      <Services />
      <br />
      <br />
      <button id="scrollToTop" onClick={scrollToTop}>
        <FaArrowUp />
        {/* <FaArrowTurnUp /> */}
      </button>
      <Footer />      
    </>
  );
};

export default HomePage;
