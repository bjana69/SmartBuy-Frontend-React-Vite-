// src/components/BestSelling.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx'
import '../styles/BestSelling.css';

const bestSellingProducts = [
  {
    id: 1,
    image: 'src/assets/product5.jpg',
    alt: 'ASUS FHD Gaming Laptop',
    title: 'ASUS FHD Gaming Laptop',
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 5,
    ratingCount: 65,
    isNew: false
  },
  {
    id: 2,
    image: 'src/assets/product6.jpg',
    alt: 'IPS LCD Gaming Monitor',
    title: 'IPS LCD Gaming Monitor',
    price: 1160,
    oldPrice: null,
    discount: null,
    rating: 5,
    ratingCount: 65,
    isNew: false
  },
  {
    id: 3,
    image: 'src/assets/product7.jpg',
    alt: 'HAVIT HV-G92 Gamepad',
    title: 'HAVIT HV-G92 Gamepad',
    price: 560,
    oldPrice: null,
    discount: null,
    rating: 5,
    ratingCount: 65,
    isNew: true
  },
  {
    id: 4,
    image: 'src/assets/product8.webp',
    alt: 'AK-900 Wired Keyboard',
    title: 'AK-900 Wired Keyboard',
    price: 200,
    oldPrice: null,
    discount: null,
    rating: 5,
    ratingCount: 65,
    isNew: false
  }
];

const BestSelling = () => {
  // Advertise countdown state
  const [countdown, setCountdown] = useState({
    days1: '00',
    hours1: '00',
    minutes1: '00',
    seconds1: '00'
  });

  useEffect(() => {
    const targetDate = Date.now() + 5 * 24 * 60 * 60 * 1000; // 5 days from now

    const updateCountdown = () => {
      const now = Date.now();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        clearInterval(timer);
        setCountdown({ days1: '00', hours1: '00', minutes1: '00', seconds1: '00' });
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setCountdown({
        days1: String(days).padStart(2, '0'),
        hours1: String(hours).padStart(2, '0'),
        minutes1: String(minutes).padStart(2, '0'),
        seconds1: String(seconds).padStart(2, '0')
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* This Month's Best Selling Section */}
      <div className="container4">
        <div className="section-header">
          <div className="inline">
            <span className="red-box"></span>
            <h2><span>This Month's </span></h2>
          </div>
          <div className="next-line">
            <h2>Best Selling Product</h2>
            <button className="see-all-btn" style={{ marginRight: '50px' }}>
              View All
            </button>
          </div>
        </div>

        <div className="recommendations">
          {bestSellingProducts.map(p => (
            <ProductCard
              key={p.id}
              image={p.image}
              alt={p.alt}
              title={p.title}
              price={p.price}
              oldPrice={p.oldPrice}
              discount={p.discount}
              isNew={p.isNew}
              rating={p.rating}
              ratingCount={p.ratingCount}
              onAddToCart={() => console.log(`Added ${p.title} to cart`)}
            />
          ))}
        </div>
      </div>

      {/* Advertise Section */}
      <div className="container5">
        <div className="text-content">
          <p className="category">Categories</p>
          <h2>Enhance Your Music Experience</h2>
          <div className="countdown">
            <div className="countdown-item">
              <span>{countdown.days1}</span>
              Days
            </div>
            <div className="countdown-item">
              <span>{countdown.hours1}</span>
              Hours
            </div>
            <div className="countdown-item">
              <span>{countdown.minutes1}</span>
              Minutes
            </div>
            <div className="countdown-item">
              <span>{countdown.seconds1}</span>
              Seconds
            </div>
          </div>
          <a href="/404.html" className="buy-btn">
            Buy Now!
          </a>
        </div>
        <div className="product-image">
          <img src="src/assets/product9.png" alt="Product Image" />
        </div>
      </div>
    </>
  );
};

export default BestSelling;

