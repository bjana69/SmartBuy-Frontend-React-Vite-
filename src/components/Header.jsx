// src/components/Header.jsx
// import { React, useState } from "react";
// import "../styles/Header.css";
// import { CgProfile } from "react-icons/cg";
// import { MdManageAccounts } from "react-icons/md";
// import { LuPackageCheck } from "react-icons/lu";
// import { TbPackageOff, TbLogout } from "react-icons/tb";
// import { FaStarHalfAlt } from "react-icons/fa";
// import { TiShoppingCart } from "react-icons/ti";
// import { FaHeart } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown((prev) => !prev);
//   };

//   return (
//     <header className="header sticky-top bg-white shadow-sm px-4 py-2 d-flex justify-content-between align-items-center">
//       <div className="logo fw-bold fs-4">SmartBuy</div>

//       <nav className="nav d-flex gap-0.5">
//         <a href="index.html" className="nav-link text-dark">
//           Home
//         </a>
//         <a href="contactmain.html" className="nav-link text-dark">
//           Contact
//         </a>
//         <a href="about.html" className="nav-link text-dark">
//           About
//         </a>
//         <a href="signup.html" className="nav-link text-dark">
//           Sign Up
//         </a>
//       </nav>

//       <div className="d-flex align-items-center gap-3 ms-3">
//         <div className="input-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="What are you looking for?"
//           />
//           <button className="btn btn-outline-secondary">🔍</button>
//         </div>

//         <a href="wishlist.html" className="text-dark text-decoration-none fs-5">
//           <FaHeart className="heartIcon" />
//         </a>
//         <a href="cart.html" className="text-dark text-decoration-none fs-5">
//           <TiShoppingCart />
//         </a>

//         <div
//           className={`dropdown custom-hover-dropdown position-relative`}
//           onClick={toggleDropdown}
//           onMouseLeave={() => setShowDropdown(false)}
//         >
//           <span className="fs-4 cursor-pointer">
//             <CgProfile />
//           </span>

//           <ul className={`dropdown-menu dropdown-menu-end ${
//               showDropdown ? "d-block" : ""
//             }`}
//           >
//             <li>
//               <a className="dropdown-item" href="404.html">
//                 <MdManageAccounts className="icon" /> Manage My Account
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="404.html">
//                 <LuPackageCheck className="icon" /> My Order
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="404.html">
//                 <TbPackageOff className="icon" /> My Cancellations
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="404.html">
//                 <FaStarHalfAlt className="icon" /> My Reviews
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="404.html">
//                 <TbLogout className="icon" /> Logout
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { CgProfile } from "react-icons/cg";
import { MdManageAccounts } from "react-icons/md";
import { LuPackageCheck } from "react-icons/lu";
import { TbPackageOff, TbLogout } from "react-icons/tb";
import { FaStarHalfAlt } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header5 sticky-top">
        <div className="header-inner">
          <div className="logo">
            <Link to="/" onClick={closeMobileMenu} className="logo-link">
              SmartBuy
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          <nav className="nav desktop-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
            <Link to="/login" className="nav-link">
              Sign In
            </Link>
          </nav>

          {/* Search bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="search-input"
            />
            <button className="search-btn"><BiSearchAlt className="search-icon"/></button>
          </div>

          <div className="icons-group">
            <Link to="/wishlist" className="icon-link">
              <FaHeart className="heart-icon" />
            </Link>
            <Link to="/cart" className="icon-link">
              <TiShoppingCart />
            </Link>

            <div className="dropdown" onClick={toggleDropdown}>
              <CgProfile className="profile-icon" />
              {showDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/profile-details" className="dropdown-item">
                      <MdManageAccounts className="icon" /> Manage My Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/404" className="dropdown-item">
                      <LuPackageCheck className="icon" /> My Order
                    </Link>
                  </li>
                  <li>
                    <Link to="/404" className="dropdown-item">
                      <TbPackageOff className="icon" /> My Cancellations
                    </Link>
                  </li>
                  <li>
                    <Link to="/404" className="dropdown-item">
                      <FaStarHalfAlt className="icon" /> My Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="dropdown-item">
                      <TbLogout className="icon" /> Logout
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Mobile sidebar nav */}
        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <Link to="/" className="mobile-link" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/about" className="mobile-link" onClick={closeMobileMenu}>
              About
            </Link>
            <Link
              to="/contact"
              className="mobile-link"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <Link
              to="/signup"
              className="mobile-link"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
            <Link to="/login" className="mobile-link" onClick={closeMobileMenu}>
              Sign In
            </Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
