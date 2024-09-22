import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const totalItems = useSelector((state) => state.totalItems);

  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({totalItems})</Link>
    </nav>
  );
};

export default Navbar;
