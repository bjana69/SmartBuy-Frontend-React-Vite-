import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RelatedItems from "../components/RelatedItems";
import "../styles/ProductPage.css";

const ProductPage = () => {
  const navigate = useNavigate();

  // Thumbnail images
  const thumbnails = [
    "/gaming2.png",
    "/gaming3.png",
    "/gaming4.png",
    "/gaming5.png",
  ];

  // Component state
  const [mainImage, setMainImage] = useState("/gaming1.png");
  const [selectedColor, setSelectedColor] = useState("red");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  // Handlers
  const handleWishlist = () => navigate("/404");
  const handleDeliveryLink = () => navigate("/404");
  const handlePlus = () => setQuantity((q) => q + 1);
  const handleMinus = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <>
      <Header />
      <div className="container-product">
        {/* Breadcrumb */}
        {/* <nav className="breadcrumb">
          <Link to="/">Home</Link> / <Link to="/404">Gaming</Link> /{" "}
          <span>Havic HV G-92 Gamepad</span>
        </nav> */}

        <div className="product-page">
          {/* Thumbnails */}
          <div className="thumbnail-list">
            {thumbnails.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setMainImage(src)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="main-image">
            <img src={mainImage} alt="Main Product" />
          </div>

          {/* ---------- Details ----------- */}
          <div className="product-details">
            <h1>Havic HV G-92 Gamepad</h1>

            <div className="rating-stock">
              <span className="stars">★★★★☆</span>
              <span className="reviews">(150 Reviews)</span>
              <span className="stock-status">In Stock</span>
            </div>

            <p className="price">$192.00</p>

            <p className="description">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install &amp; mess free removal.
              Pressure sensitive.
            </p>

            <hr />

            {/* Color & Size Options */}
            <div className="options-product">
              <div className="colours">
                <label>Colours:</label>
                <button
                  className={`color-option red ${
                    selectedColor === "red" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedColor("red")}
                />
                <button
                  className={`color-option blue ${
                    selectedColor === "blue" ? "selected" : ""
                  }`}
                  onClick={() => setSelectedColor("blue")}
                />
              </div>

              <div className="sizes">
                <label>Size:</label>
                {["XS", "S", "M", "L", "XL"].map((sz) => (
                  <button
                    key={sz}
                    className={`size-btn ${
                      selectedSize === sz ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="quantity-buy">
              <div className="quantity">
                <button className="minus" onClick={handleMinus}>
                  -
                </button>
                <input type="number" value={quantity} readOnly />
                <button className="plus" onClick={handlePlus}>
                  +
                </button>
              </div>

              <button className="buy-now">Buy Now</button>
              <button
                className="wishlist"
                onClick={handleWishlist}
                aria-label="Add to wishlist"
              >
                &#9825;
              </button>
            </div>

            {/* Delivery Info */}
            <div className="delivery-info">
              <div className="info-box">
                <div className="delivery-img">
                  <img src="/delivery1.jpg" alt="Free Delivery" />
                </div>
                <div className="del-info">
                  <h3>Free Delivery</h3>
                  <p>
                    <a onClick={handleDeliveryLink}>
                      Enter your postal code for Delivery Availability
                    </a>
                  </p>
                </div>
              </div>

              <hr />

              <div className="info-box">
                <div className="delivery-img">
                  <img
                    src="/return delivery.jpg"
                    alt="Return Delivery"
                  />
                </div>
                <div className="del-info">
                  <h3>Return Delivery</h3>
                  <p>
                    Free 30 Days Delivery Returns.{" "}
                    <a onClick={handleDeliveryLink}>Details</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedItems />
      <Footer />
    </>
  );
};

export default ProductPage;
