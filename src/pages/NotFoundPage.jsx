import React from 'react'
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <>
    <Header /><br /><br />
    <main className="notfound-main">
      <div className="error-container">
        <h1 className="error-code">404 Not Found</h1>
        <p className="error-message">
          Your visited page not found. You may go home page.
        </p>
        <Link to="/" className="btn">
          Back to home page
        </Link>
      </div>
    </main><br /><br /><br /><br />
    <Footer />
    </>

  );
};

export default NotFoundPage;