import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import "../styles/RelatedItems.css";

// Static list of related items
const items = [
  {
    id: 5,
    image: "/product5.jpg",
    alt: "ASUS FHD Gaming Laptop",
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    isNew: false,
    rating: 5,
    reviews: 65,
  },
  {
    id: 6,
    image: "/product6.jpg",
    alt: "IPS LCD Gaming Monitor",
    title: "IPS LCD Gaming Monitor",
    price: 1160,
    oldPrice: null,
    discount: null,
    isNew: false,
    rating: 5,
    reviews: 65,
  },
  {
    id: 7,
    image: "/product7.jpg",
    alt: "HAVIT HV-G92 Gamepad",
    title: "HAVIT HV-G92 Gamepad",
    price: 560,
    oldPrice: null,
    discount: null,
    isNew: true,
    rating: 5,
    reviews: 65,
  },
  {
    id: 8,
    image: "/product8.webp",
    alt: "AK-900 Wired Keyboard",
    title: "AK-900 Wired Keyboard",
    price: 200,
    oldPrice: null,
    discount: null,
    isNew: false,
    rating: 5,
    reviews: 65,
  },
];

const RelatedItems = () => {
  const navigate = useNavigate();
  // Track favorited item IDs
  const [favorites, setFavorites] = useState([]);

  const goTo404 = () => {
    navigate("/404");
  };

  const addToCart = (item) => {
    console.log("Add to cart:", item);
    alert(`Added "${item.title}" to cart`);
  };

  const toggleFavorite = (item) => {
    setFavorites((prev) => {
      const isFav = prev.includes(item.id);
      if (isFav) {
        // remove
        return prev.filter((id) => id !== item.id);
      } else {
        // add
        // TODO: integrate with wishlist API
        console.log("Added to wishlist:", item);
        return [...prev, item.id];
      }
    });
  };

  return (
    <div className="container-item">
      <div className="just-for-you">
        <div className="section-header">
          <span className="red-box" />
          <h2>Related Items</h2>
        </div>

        <div className="recommendations">
          {items.map((item) => {
            const isFavorited = favorites.includes(item.id);
            return (
              <div className="product" key={item.id}>
                {item.discount && <span className="discount">-{item.discount}%</span>}
                {item.isNew && <span className="new">NEW</span>}
                <img src={item.image} alt={item.alt} />

                <button
                  className="heart-btn"
                  onClick={() => toggleFavorite(item)}
                >
                  {isFavorited ? (
                    <FaHeart style={{ color: "red" }} />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>

                <button
                  className="add-to-cart"
                  onClick={() => addToCart(item)}
                >
                  <FaShoppingCart /> Add To Cart
                </button>

                <p className="title">{item.title}</p>
                <p className="price">
                  ${item.price}
                  {item.oldPrice && <del> ${item.oldPrice}</del>}
                </p>
                <div className="rating">
                  {"⭐".repeat(item.rating)} ({item.reviews})
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RelatedItems;
