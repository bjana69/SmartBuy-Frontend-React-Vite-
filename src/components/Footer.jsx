// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="footer-section1">
        <h3>SmartBuy</h3>
        <p>Subscribe to our newsletter for the latest updates.</p>
        <input type="email" placeholder="Enter your email" />
        <button type="button">Subscribe</button>
      </div>

      <div className="footer-section1">
        <h3>Support</h3>
        <p>GMIT Baruipur</p>
        <p>Email: biswanathjana.1280@gmail.com</p>
        <p>Phone: +91-823-1804-929</p>
      </div>

      <div className="footer-section1">
        <h3>Account</h3>
        <ul>
          <li>
            <Link to="/login">Login / Register</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>
      </div>

      <div className="footer-section1">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <Link to="/about">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/about">Terms of Service</Link>
          </li>
          <li>
            <Link to="/404">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="footer-section1">
        <h3>Download Our App</h3>

        <p>(Not Yet Available, Mobile Application)</p>
        <p>Available on iOS and Android.</p>
        <a
          href="https://play.google.com/store/games?hl=en&pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/appstore.jpeg" alt="Google Play" />
        </a>
        <a
          href="https://www.apple.com/in/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/googleplay.png" alt="App Store" />
        </a>
      </div>

      <p>&copy; 2025 SmartBuy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
