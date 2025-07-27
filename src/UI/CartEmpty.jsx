import React from 'react';
import NavLine from '../components/NavLine';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <>
      <NavLine />
      <Navbar />
      <div className="cart-empty-container">
        <div className="cart-steps">
          <span className="active">SHOPPING CART</span>
          <span className="arrow">›</span>
          <span className="inactive">CHECKOUT DETAILS</span>
          <span className="arrow">›</span>
          <span className="inactive">ORDER COMPLETE</span>
        </div>

        <p className="empty-message">Your cart is currently empty.</p>

        <Link to='/shop'><button to="/shop" className="return-button">
          RETURN TO SHOP
        </button></Link>
      </div>
      <Footer />
    </>
  );
};

export default CartEmpty;
