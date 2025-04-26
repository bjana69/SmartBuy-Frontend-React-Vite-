// ProfileDetailsPage.jsx
import React, { useState, useEffect } from "react";
import "../styles/ProfileDetailsPage.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const ProfileDetailsPage = () => {
  const [profile, setProfile] = useState({
    firstName: "Biswanath",
    lastName: "Jana",
    email: "biswanath@gmail.com",
    address: "Harish Chatterjee street,kolkata - 700025",
    age: "",
    dob: "",
    gender: "",
    pinCode: "",
    phoneNo: "",
    state: "",
    country: "INDIA",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Whenever the DOB changes, recalculate age
  useEffect(() => {
    if (!profile.dob) return;
    const birthDate = new Date(profile.dob);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    // adjust if birthday hasn’t occurred yet this year
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      years--;
    }
    setProfile((prev) => ({ ...prev, age: years }));
  }, [profile.dob]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    // Reset editable fields (custom and password)
    setProfile((prev) => ({
      ...prev,
      age: "",
      dob: "",
      gender: "",
      pinCode: "",
      phoneNo: "",
      state: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: validate and submit to API
    console.log("Profile updated:", profile);
    alert("Profile updated successfully (demo)");
  };

  return (
    <>
      <Header />
      <main className="profile-container">
        <section className="profile-form">
          <h2>Edit Your Profile</h2>
          <form onSubmit={handleSubmit}>
            {/* Static user info */}
            <div className="box">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="box">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Custom fields */}
            <div className="box">
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  placeholder="Enter your age"
                  value={profile.age}
                  readOnly
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={profile.dob}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group gender-group">
              <label>Gender</label>
              <div className="gender-options">
                {["Male", "Female", "Others"].map((g) => (
                  <label key={g} className="gender-label">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={profile.gender === g}
                      onChange={handleChange}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            {/* PIN Code Block */}
            <div className="box">
              <div className="form-group">
                <label>PIN Code</label>
                <input
                  type="number"
                  name="pinCode"
                  placeholder="Postal Index Number"
                  value={profile.pinCode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="number"
                  name="phoneNo"
                  placeholder="Enter Phone Number"
                  value={profile.phoneNo}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="box">
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter your state"
                  value={profile.state}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={profile.country}
                  readOnly
                />
              </div>
            </div>

            {/* Password change */}
            <h4>Password Changes</h4>
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                value={profile.currentPassword}
                onChange={handleChange}
              />
            </div><br />
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={profile.newPassword}
                onChange={handleChange}
              />
            </div><br />
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={profile.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <div className="form-actions">
              <button type="button" className="cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="save">
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProfileDetailsPage;
