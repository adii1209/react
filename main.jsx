import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import './ShoppingCartPage.css'; // Specific styles

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = useSelector((state) => state.totalPrice);

  return (
    <div className="shopping-cart-page">
      <h2>Your Cart</h2>
      {cart.map((plant) => (
        <CartItem key={plant.id} plant={plant} />
      ))}
      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
