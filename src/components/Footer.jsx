// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";

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
          <li><a href="login.html">Login / Register</a></li>
          <li><a href="cart.html">Cart</a></li>
          <li><a href="wishlist.html">Wishlist</a></li>
          <li><a href="index.html">Shop</a></li>
        </ul>
      </div>

      <div className="footer-section1">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="404.html">Privacy Policy</a></li>
          <li><a href="404.html">Terms of Service</a></li>
          <li><a href="404.html">FAQ</a></li>
          <li><a href="contactmain.html">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section1">
        <h3>Download Our App</h3>
        
        <p>(Not Yet Available, Mobile Application)</p>
        <p>Available on iOS and Android.</p>
        <a href="https://play.google.com/store/games?hl=en&pli=1">
          <img src="src/assets/appstore.jpeg" />
        </a>
        <a href="https://www.apple.com/in/app-store/">
          <img src="src/assets/googleplay.png" alt="Google Play" />
        </a>
      </div>

      <p>&copy; 2025 SmartBuy. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
