import React from 'react';
import '../styles/ProductCard.css';

/**
 * Single product card component.
 * Props:
 *  - image: string URL to product image
 *  - alt: string alt text for image
 *  - title: string product name
 *  - price: number current price
 *  - oldPrice?: number original price (optional)
 *  - discount?: number percent discount (optional)
 *  - isNew?: boolean flag for new badge (optional)
 *  - rating: number of stars (1–5)
 *  - ratingCount: number number of reviews
 *  - onAddToCart?: () => void optional click handler
 */ 

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
  onAddToCart,
}) => {
  return (
    <div className="product">
      {discount && <span className="discount">-{discount}%</span>}
      {isNew && <span className="new">NEW</span>}
      <img src={image} alt={alt} />
      <button className="add-to-cart" onClick={onAddToCart}>
        🛒 Add To Cart
      </button>
      <p className="title">{title}</p>
      <p className="price">
        ${price}
        {oldPrice && <del>${oldPrice}</del>}
      </p>
      <div className="rating">{'⭐'.repeat(rating)} ({ratingCount})</div>
    </div>
  );
};

export default ProductCard;
