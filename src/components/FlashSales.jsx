import React, { useState, useEffect } from "react";
import "../styles/FlashSales.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const products = [
  {
    id: 1,
    discount: "-45%",
    image: "src/assets/product1.webp",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 2,
    discount: "-55%",
    image: "src/assets/product2.jpeg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 3,
    discount: "-65%",
    image: "src/assets/product3.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 4,
    discount: "-75%",
    image: "src/assets/product4.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 5,
    discount: "-85%",
    image: "src/assets/product5.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 6,
    discount: "-95%",
    image: "src/assets/product6.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 7,
    discount: "-95%",
    image: "src/assets/product7.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 8,
    discount: "-95%",
    image: "src/assets/product8.webp",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 9,
    discount: "-45%",
    image: "src/assets/product1.webp",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 10,
    discount: "-55%",
    image: "src/assets/product2.jpeg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 11,
    discount: "-65%",
    image: "src/assets/product3.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 12,
    discount: "-75%",
    image: "src/assets/product4.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 13,
    discount: "-85%",
    image: "src/assets/product5.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 14,
    discount: "-95%",
    image: "src/assets/product6.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 15,
    discount: "-95%",
    image: "src/assets/product7.jpg",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  {
    id: 16,
    discount: "-95%",
    image: "src/assets/product8.webp",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    original: 1160,
    rating: 5,
    reviews: 65,
  },
  // add more as needed
];

const FlashSales = () => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Countdown Timer Effect
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = new Date();
      target.setHours(23, 59, 59, 999);
      const distance = target - now;
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdown({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      }
    };
    updateCountdown();
    const timerId = setInterval(updateCountdown, 1000);
    return () => clearInterval(timerId);
  }, []);

  // Carousel configuration
  const cardsToShow = 2.5;
  const slideCards = 1;
  const cardWidth = 200; // px
  const gap = 15; // px
  const slideAmount = cardWidth + gap;

  const next = () => {
    const maxIndex = products.length - cardsToShow;
    setCurrentIndex((prev) => Math.min(prev + slideCards, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - slideCards, 0));
  };

  return (
    <div className="flash-sales">
      {/* Section Header */}
      <div className="today-header">
        <div className="today-header1">
          <span className="red-box"></span>
          <h2>
            <span>Today's</span>
          </h2>
        </div>
        <div className="today-header2">
          <div>
            <h2>Flash Sales</h2>
          </div>
          <div className="countdown">
            <div>
              <span>{countdown.days}</span> Days
            </div>
            <div>
              <span>{countdown.hours}</span> Hours
            </div>
            <div>
              <span>{countdown.minutes}</span> Minutes
            </div>
            <div>
              <span>{countdown.seconds}</span> Seconds
            </div>
          </div>
          <div className="nav-arrow-sales">
            <button className="nav prev" onClick={prev}>
              <FaArrowAltCircleLeft />
            </button>
            <button className="nav next" onClick={next}>
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="product-carousel">
        <div className="product-list-wrapper">
          <div
            className="product-list"
            style={{
              transform: `translateX(-${currentIndex * slideAmount}px)`,
            }}
          >
            {products.map((p) => (
              <div key={p.id} className="product-card">
                <span className="discount">{p.discount}</span>
                <img src={p.image} alt={p.title} />
                <button type="button" className="heart-btn">
                  <i className="fa fa-heart"></i>
                </button>
                <button type="button" className="eye-btn">
                  <i className="fa fa-eye"></i>
                </button>
                <p className="title">{p.title}</p>
                <p className="price">
                  ${p.price} <del>${p.original}</del>
                </p>
                <div className="rating">
                  {"⭐".repeat(p.rating)} ({p.reviews})
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View All Button */}
      <div className="view-all">
        <button>View All Products</button>
      </div>
    </div>
  );
};

export default FlashSales;
