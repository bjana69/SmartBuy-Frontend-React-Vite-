import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Banner.css";

const slides = [
  {
    id: 1,
    image: "/ad1.jpg",
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    link: "/404",
  },
  {
    id: 2,
    image: "/ad2.jpg",
    title: "Stapuft Souce",
    subtitle: "Up to 10% off Voucher",
    link: "/404",
  },
  {
    id: 3,
    image: "/ad3.jpg",
    title: "Energy Powder",
    subtitle: "Up to 10% off Voucher",
    link: "/404",
  },
  {
    id: 4,
    image: "/ad4.jpg",
    title: "scent",
    subtitle: "Up to 15% off Voucher",
    link: "/404",
  },
  {
    id: 5,
    image: "/ad5.jpg",
    title: "Guava Juce",
    subtitle: "Up to 30% off Voucher",
    link: "/404",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container1">
      {/* Sidebar */}
      <aside className="sidebar">
        <nav className="menu">
          <Link to="/404" className="menu-link">
            Woman's Fashion <span>›</span>
          </Link>
          <Link to="/404" className="menu-link">
            Men's Fashion <span>›</span>
          </Link>
          <Link to="/404" className="menu-link">
            Electronics
          </Link>
          <Link to="/404" className="menu-link">
            Home & Lifestyle
          </Link>
          <Link to="/404" className="menu-link">
            Medicine
          </Link>
          <Link to="/404" className="menu-link">
            Sports & Outdoor
          </Link>
          <Link to="/404" className="menu-link">
            Baby's & Toys
          </Link>
          <Link to="/404" className="menu-link">
            Groceries & Pets
          </Link>
          <Link to="/404" className="menu-link">
            Health & Beauty
          </Link>
        </nav>
      </aside>

      {/* Carousel */}
      <main className="main-content">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentIndex ? "active" : ""}`}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="content">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <a href={slide.link} className="btn">
                  Shop Now →
                </a>
              </div>
            </div>
          ))}
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Banner;
