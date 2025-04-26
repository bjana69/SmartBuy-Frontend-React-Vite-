import React, { useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ProductCarousel.css"; // minimal custom styles
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const products1 = [
  {
    id: 1,
    image: "src/assets/product5.jpg",
    alt: "ASUS FHD Gaming Laptop",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    isNew: false,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 2,
    image: "src/assets/product6.jpg",
    alt: "IPS LCD Gaming Monitor",
    title: "IPS LCD Gaming Monitor",
    price: 1160,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 3,
    image: "src/assets/product7.jpg",
    alt: "HAVIT HV-G92 Gamepad",
    title: "HAVIT HV-G92 Gamepad",
    price: 560,
    isNew: true,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 4,
    image: "src/assets/product8.webp",
    alt: "AK-900 Wired Keyboard",
    title: "AK-900 Wired Keyboard",
    price: 200,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 5,
    image: "src/assets/product1.webp",
    alt: "ASUS FHD Gaming Laptop",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 6,
    image: "src/assets/product2.jpeg",
    alt: "IPS LCD Gaming Monitor",
    title: "IPS LCD Gaming Monitor",
    price: 1160,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 7,
    image: "src/assets/product3.jpg",
    alt: "HAVIT HV-G92 Gamepad",
    title: "HAVIT HV-G92 Gamepad",
    price: 560,
    isNew: true,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 8,
    image: "src/assets/product4.jpg",
    alt: "AK-900 Wired Keyboard",
    title: "AK-900 Wired Keyboard",
    price: 200,
    rating: 5,
    ratingCount: 65,
  },
  // duplicate or additional items as required...
];

const products2 = [
  {
    id: 5,
    image: "src/assets/product1.webp",
    alt: "ASUS FHD Gaming Laptop",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 6,
    image: "src/assets/product2.jpeg",
    alt: "IPS LCD Gaming Monitor",
    title: "IPS LCD Gaming Monitor",
    price: 1160,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 7,
    image: "src/assets/product3.jpg",
    alt: "HAVIT HV-G92 Gamepad",
    title: "HAVIT HV-G92 Gamepad",
    price: 560,
    isNew: true,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 8,
    image: "src/assets/product4.jpg",
    alt: "AK-900 Wired Keyboard",
    title: "AK-900 Wired Keyboard",
    price: 200,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 1,
    image: "src/assets/product5.jpg",
    alt: "ASUS FHD Gaming Laptop",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    isNew: false,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 2,
    image: "src/assets/product6.jpg",
    alt: "IPS LCD Gaming Monitor",
    title: "IPS LCD Gaming Monitor",
    price: 1160,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 3,
    image: "src/assets/product7.jpg",
    alt: "HAVIT HV-G92 Gamepad",
    title: "HAVIT HV-G92 Gamepad",
    price: 560,
    isNew: true,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 4,
    image: "src/assets/product8.webp",
    alt: "AK-900 Wired Keyboard",
    title: "AK-900 Wired Keyboard",
    price: 200,
    rating: 5,
    ratingCount: 65,
  },
  // duplicate or additional items as required...
];

// Reusable product card component
const ProductCard = ({
  image,
  alt,
  title,
  price,
  oldPrice,
  discount,
  isNew,
  rating,
  ratingCount,
}) => (
  <div className="product">
    {discount && <span className="discount">-{discount}%</span>}
    {isNew && <span className="new">NEW</span>}
    <img src={image} alt={alt} />
    <button className="add-to-cart">🛒 Add To Cart</button>
    <p className="title">{title}</p>
    <p className="price">
      ${price}
      {oldPrice && <del>${oldPrice}</del>}
    </p>
    <div className="rating">
      {"⭐".repeat(rating)} ({ratingCount})
    </div>
  </div>
);

// Main Component
export const ProductCarousel = () => {
  const rec1Ref = useRef(null);
  const rec2Ref = useRef(null);
  const scrollAmount = 300;

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container6">
      <div className="section-header">
        <div className="inline">
          <span className="red-box"></span>
          <h2>
            <span>Our Products </span>
          </h2>
        </div>
        <div className="next-line">
          <h2>Explore Our Products</h2>
          <div className="nav-arrow-product">
            <button
              className="nav prev2"
              onClick={() => {
                handleScroll(rec1Ref, "left");
                handleScroll(rec2Ref, "left");
              }}
            >
              <FaArrowAltCircleLeft />
            </button>
            <button
              className="nav next2"
              onClick={() => {
                handleScroll(rec1Ref, "right");
                handleScroll(rec2Ref, "right");
              }}
            >
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>

      <div className="recommendations1" ref={rec1Ref}>
        {products1.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="recommendations2" ref={rec2Ref}>
        {products2.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="view-all">
        <button>View All Products</button>
      </div>
    </div>
  );
};

export default ProductCarousel;
