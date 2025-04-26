import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  // form state
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // validation errors
  const [errors, setErrors] = useState({});

  // simple validation
  const validate = () => {
    const errs = {};
    if (!emailOrPhone.trim()) {
      errs.emailOrPhone = "Email or phone is required.";
    }
    if (!password) {
      errs.password = "Password is required.";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: call your login API here
    console.log("Logging in with:", { emailOrPhone, password });
    alert("Logged in! (demo only)");
    // clear form
    setEmailOrPhone("");
    setPassword("");
  };

  return (
    <>
      <Header />
      <main className="mainLogin">
        <div className="account-section">
          <div className="account-image">
            <img src="src/assets/signup1.png" alt="Shopping Cart" />
          </div>

          <div className="account-form">
            <h2>Log in to SmartBuy</h2>
            <p>Enter your details below</p>
            <br />
            <br />

            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="email-phone">Email or Phone Number*</label>
              <input
                type="text"
                id="email-phone"
                name="email-phone"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
              {errors.emailOrPhone && (
                <p className="error">{errors.emailOrPhone}</p>
              )}

              <label htmlFor="password">Password*</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="error">{errors.password}</p>}

              <div className="options">
                <button type="submit" className="login-button">
                  Login
                </button>
                <p>
                  <a role="button"
                  onClick={() => navigate("/404")}
                  style={{ cursor: "pointer", marginLeft: "10px", color: "blue", textDecoration:"underline" }}>Forgot Password?</a>
                </p>
              </div>
              <br />
              <p>
                New to SmartBuy? Signup here!
                <a
                  role="button"
                  onClick={() => navigate("/signup")}
                  style={{ cursor: "pointer", marginLeft: "10px", color: "blue", textDecoration:"underline" }}
                >
                  SignUp
                </a>
              </p>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
