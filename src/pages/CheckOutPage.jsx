import React, { useState, useEffect } from "react";
import "../styles/CheckOutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Dummy profile data; in real app, fetch from context or API
const userProfile = {
  firstName: "Biswanath",
  companyName: "",
  streetAddress: "Harish Chatterjee Street, Kolkata - 700025",
  apartment: "",
  city: "Kolkata",
  phone: "+1234567890",
  email: "Biswanath@gmail.com",
};

// Dummy order items
const orderItems = [
  { id: 1, name: "LCD Monitor", image: "src/assets/cart1.jpeg", price: 650 },
  { id: 2, name: "H1 Gamepad", image: "src/assets/cart2.webp", price: 1100 },
];

const CheckOutPage = () => {
  // Form state
  const [form, setForm] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  // Save info checkbox
  const [saveInfo, setSaveInfo] = useState(false);

  // Coupon
  const [coupon, setCoupon] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  // When saveInfo toggles on, fill form from profile
  useEffect(() => {
    if (saveInfo) {
      setForm({
        firstName: userProfile.firstName,
        companyName: userProfile.companyName,
        streetAddress: userProfile.streetAddress,
        apartment: userProfile.apartment,
        city: userProfile.city,
        phone: userProfile.phone,
        email: userProfile.email,
      });
    }
  }, [saveInfo]);

  // Calculate subtotal
  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = subtotal - discountAmount;

  // Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveInfoChange = () => setSaveInfo((prev) => !prev);

  const handleApplyCoupon = () => {
    if (coupon.trim().toUpperCase() === "SAVE10") {
      setDiscountPercent(10);
      alert("Coupon applied: 10% off");
    } else {
      setDiscountPercent(0);
      alert("Invalid coupon code");
    }
  };

  const handlePlaceOrder = () => {
    // Validate required fields
    const required = ["firstName", "streetAddress", "city", "phone", "email"];
    for (let field of required) {
      if (!form[field].trim()) {
        alert(`Please fill in ${field}`);
        return;
      }
    }
    console.log("Order placed:", { form, orderItems, total });
    alert("Order placed successfully!");
  };

  return (
    <>
      <Header />
      <div className="container-checkout">
        <div className="checkout-wrapper">
          {/* Billing Details */}
          <div className="billing-details">
            <h2>Billing Details</h2>
            <form>
              <label>First Name*</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={form.firstName}
                onChange={handleInputChange}
                required
              />

              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Company (optional)"
                value={form.companyName}
                onChange={handleInputChange}
              />

              <label>Street Address*</label>
              <input
                type="text"
                name="streetAddress"
                placeholder="Enter your address"
                value={form.streetAddress}
                onChange={handleInputChange}
                required
              />

              <label>Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                name="apartment"
                placeholder="Additional details"
                value={form.apartment}
                onChange={handleInputChange}
              />

              <label>Town/City*</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={form.city}
                onChange={handleInputChange}
                required
              />

              <label>Phone Number*</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleInputChange}
                required
              />

              <label>Email Address*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleInputChange}
                required
              />

              <div className="save-info">
                <input
                  type="checkbox"
                  id="save-info"
                  checked={saveInfo}
                  onChange={handleSaveInfoChange}
                />
                <label htmlFor="save-info">
                  Same information as inside my profile
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            {orderItems.map((item) => (
              <div className="order-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <span>${item.price}</span>
              </div>
            ))}

            <div className="price-details">
              <p>
                Subtotal: <span>${subtotal.toFixed(2)}</span>
              </p>
              <hr />
              <p>
                Shipping: <span>Free</span>
              </p>
              <hr />
              {discountPercent > 0 && (
                <p className="savings">
                  Savings ({discountPercent}%):{" "}
                  <span>-${discountAmount.toFixed(2)}</span>
                </p>
              )}
              <p>
                <b>
                  Total: <span>${total.toFixed(2)}</span>
                </b>
              </p>
            </div>

            <div className="payment-methods">
              <label>
                <input type="radio" name="payment" value="bank" /> Bank{" "}
                <img src="src/assets/checkout1.png" alt="Payment Methods" />
              </label>
              <label>
                <input type="radio" name="payment" value="cod" defaultChecked />{" "}
                Cash on delivery
              </label>
            </div>

            <div className="coupon">
              <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="apply-coupon" onClick={handleApplyCoupon}>
                Apply Coupon
              </button>
            </div>

            <button className="place-order" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckOutPage;
