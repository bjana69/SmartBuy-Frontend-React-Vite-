import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/CartPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Initial cart items
const initialCart = [
  { id: 1, name: "LCD Monitor", image: "/cart1.jpeg", price: 650, quantity: 1 },
  { id: 2, name: "H1 Gamepad", image: "/cart2.webp", price: 550, quantity: 2 },
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);
  const [coupon, setCoupon] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const navigate = useNavigate();

  // Increment quantity
  const incrementQty = (id) => {
    setCart((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrement quantity or remove if below 1
  const decrementQty = (id) => {
    setCart((items) =>
      items
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate subtotal
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Apply coupon
  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === "SAVE10") {
      setDiscountPercent(10);
      //   alert("Coupon applied: 10% off!");
    } else {
      setDiscountPercent(0);
      alert("Invalid coupon code");
    }
  };

  // Update cart (placeholder)
  const handleUpdateCart = () => {
    console.log("Cart updated:", cart);
    alert("Cart updated!");
  };

  // Proceed to checkout (placeholder)
  const handleCheckout = () => {
    const finalTotal = discountPercent
      ? subtotal * (1 - discountPercent / 100)
      : subtotal;
    console.log("Proceeding to checkout, total:", finalTotal);
    alert("Proceeding to checkout (demo)");
    navigate("/checkout");
  };

  // Calculate discount amount and final total
  const discountAmount = (subtotal * discountPercent) / 100;
  const totalAfterDiscount = subtotal - discountAmount;

  return (
    <>
      <Header />

      <div className="cart-container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="product">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </td>
                <td>${item.price}</td>
                <td>
                  <button
                    className="quantity-btn"
                    onClick={() => decrementQty(item.id)}
                  >
                    -
                  </button>
                  <span className="qty-display">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => incrementQty(item.id)}
                  >
                    +
                  </button>
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="cart-actions">
          <Link to="/">
            <button className="return-btn">Return To Shop</button>
          </Link>
          <button className="update-btn" onClick={handleUpdateCart}>
            Update Cart
          </button>
        </div>

        <div className="inline">
          <div className="coupon-section">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button className="apply-btn" onClick={handleApplyCoupon}>
              Apply Coupon
            </button>
            //Demo cupon code "SAVE10"
          </div>

          <div className="cart-summary">
            <h3>Cart Total</h3>
            <p>
              Subtotal: <span>${subtotal.toFixed(2)}</span>
            </p>
            <p>
              Shipping: <span>Free</span>
            </p>
            {/* Show savings line only if a valid coupon is applied */}
            {discountPercent > 0 && (
              <p className="savings">
                Savings ({discountPercent}%):{" "}
                <span>-${discountAmount.toFixed(2)}</span>
              </p>
            )}
            <p className="total">
              Total:{" "}
              <span>
                $
                {(discountPercent > 0 ? totalAfterDiscount : subtotal).toFixed(
                  2
                )}
              </span>
            </p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
