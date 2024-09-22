import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // You can create specific styles for each page

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants!</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
