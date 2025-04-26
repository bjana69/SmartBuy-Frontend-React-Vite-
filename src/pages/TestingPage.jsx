import React from 'react';
import ProductCard from '../components/ProductCard';
// import './ProductCard.css';

// Sample data for 4 products
const products = [
  {
    id: 1,
    image: 'src/assets/product5.jpg',
    alt: 'ASUS FHD Gaming Laptop',
    title: 'ASUS FHD Gaming Laptop',
    price: 960,
    oldPrice: 1160,
    discount: 35,
    isNew: false,
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 2,
    image: 'src/assets/product6.jpg',
    alt: 'IPS LCD Gaming Monitor',
    title: 'IPS LCD Gaming Monitor',
    price: 1160,
    rating: 5,
    ratingCount: 42,
  },
  {
    id: 3,
    image: 'src/assets/product7.jpg',
    alt: 'HAVIT HV-G92 Gamepad',
    title: 'HAVIT HV-G92 Gamepad',
    price: 560,
    isNew: true,
    rating: 4,
    ratingCount: 18,
  },
  {
    id: 4,
    image: 'src/assets/product8.webp',
    alt: 'AK-900 Wired Keyboard',
    title: 'AK-900 Wired Keyboard',
    price: 200,
    rating: 5,
    ratingCount: 23,
  },
];

const TestingPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Product Showcase</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
        }}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            alt={product.alt}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
            isNew={product.isNew}
            rating={product.rating}
            ratingCount={product.ratingCount}
            onAddToCart={() => console.log(`Added ${product.title} to cart`)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestingPage;
