import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/SignUpPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUpPage = () => {
  // form fields
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // validation errors
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!emailOrPhone.trim()) errs.emailOrPhone = "Email or phone is required.";
    if (!password) errs.password = "Password is required.";
    else if (password.length < 6)
      errs.password = "Password must be at least 6 characters.";
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
    // TODO: replace with real API call
    console.log({ name, emailOrPhone, password });
    alert("Account created! (this is just a demo)");
    // clear form
    setName("");
    setEmailOrPhone("");
    setPassword("");
  };

  return (
    <>
      <Header />
      <main className="mainSi">
        <div className="account-section">
          <div className="account-image">
            <img src="/signup1.png" alt="Shopping Cart" />
          </div>

          <div className="account-form">
            <h2>Create an account</h2>
            <p>Enter your details below</p>
            <br />

            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="error">{errors.name}</p>}

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

              <button type="submit" className="create-account">
                Create Account
              </button>
              <button
                type="button"
                className="signup-google"
                onClick={() => alert("Google Sign‑up not implemented")}
              >
                Sign up with Google
              </button>
            </form>
            <br />

            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  cursor: "pointer",
                  marginLeft: "10px",
                  color: "blue",
                  textDecoration: "underline",
                }}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SignUpPage;
