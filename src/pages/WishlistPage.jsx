import React, { useState } from "react";
import "../styles/WishlistPage.css";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WishlistPage = () => {
  // Initial data for wishlist items
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      title: "Gucci duffle bag",
      image: "/product1.webp",
      price: 960,
      oldPrice: 1160,
      discount: 35,
      rating: null,
      isNew: false,
    },
    {
      id: 2,
      title: "RGB Liquid CPU Cooler",
      image: "/product2.jpeg",
      price: 1960,
      oldPrice: null,
      discount: null,
      rating: null,
      isNew: false,
    },
    {
      id: 3,
      title: "GP11 Shooter USB Gamepad",
      image: "/product3.jpg",
      price: 550,
      oldPrice: null,
      discount: null,
      rating: null,
      isNew: false,
    },
    {
      id: 4,
      title: "Quilted Satin Jacket",
      image: "/product4.jpg",
      price: 750,
      oldPrice: null,
      discount: null,
      rating: null,
      isNew: false,
    },
  ]);

  // Static recommendations
  const recommendations = [
    {
      id: 5,
      title: "ASUS FHD Gaming Laptop",
      image: "/product5.jpg",
      price: 960,
      oldPrice: 1160,
      discount: 35,
      rating: 5,
      reviews: 65,
      isNew: false,
    },
    {
      id: 6,
      title: "IPS LCD Gaming Monitor",
      image: "/product6.jpg",
      price: 1160,
      oldPrice: null,
      discount: null,
      rating: 5,
      reviews: 65,
      isNew: false,
    },
    {
      id: 7,
      title: "HAVIT HV-G92 Gamepad",
      image: "/product7.jpg",
      price: 560,
      oldPrice: null,
      discount: null,
      rating: 5,
      reviews: 65,
      isNew: true,
    },
    {
      id: 8,
      title: "AK-900 Wired Keyboard",
      image: "/product8.webp",
      price: 200,
      oldPrice: null,
      discount: null,
      rating: 5,
      reviews: 65,
      isNew: false,
    },
  ];

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    // TODO: integrate with cart context / API
    console.log("Add to cart:", item);
    alert(`Added "${item.title}" to cart`);
  };

  const moveAllToCart = () => {
    // TODO: bulk-add all to cart
    console.log("Move all to cart:", wishlist);
    alert("Moved all wishlist items to cart");
    setWishlist([]); // clear wishlist
  };

  return (
    <>
    <Header />
    <div className="containerWishlist">
      {/* Wishlist Header */}
      <div className="wishlist-heading">
        <h2>Wishlist ({wishlist.length})</h2>
        <button className="move-all-btn" onClick={moveAllToCart}>
          Move All To Bag
        </button>
      </div>

      {/* Wishlist Items */}
      <div className="wishlist">
        {wishlist.map((p) => (
          <div className="product" key={p.id}>
            {p.discount && <span className="discount">-{p.discount}%</span>}
            <img src={p.image} alt={p.title} />
            <button
              className="remove-btn4"
              onClick={() => removeFromWishlist(p.id)}
            >
              <FaTrash />
            </button>
            <button
              className="add-to-cart"
              onClick={() => addToCart(p)}
            >
              <FaShoppingCart /> Add To Cart
            </button>
            <p className="title">{p.title}</p>
            <p className="price">
              ${p.price} {p.oldPrice && <del>${p.oldPrice}</del>}
            </p>
          </div>
        ))}
      </div>

      {/* Just For You */}
      <div className="just-for-you">
        <div className="section-header">
          <div className="inline">
            <span className="red-box" />
            <h2>Just For You</h2>
          </div>
          <div>
            <Link to="/products">
              <button className="see-all-btn">See All</button>
            </Link>
          </div>
        </div>

        <div className="recommendations">
          {recommendations.map((p) => (
            <div className="product" key={p.id}>
              {p.discount && <span className="discount">-{p.discount}%</span>}
              {p.isNew && <span className="new">NEW</span>}
              <img src={p.image} alt={p.title} />
              <button
                className="add-to-cart"
                onClick={() => addToCart(p)}
              >
                <FaShoppingCart /> Add To Cart
              </button>
              <p className="title">{p.title}</p>
              <p className="price">
                ${p.price} {p.oldPrice && <del>${p.oldPrice}</del>}
              </p>
              <div className="rating">
                {"⭐".repeat(p.rating)} ({p.reviews})
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default WishlistPage;
