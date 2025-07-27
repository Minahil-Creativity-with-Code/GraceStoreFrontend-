import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="grace-navbar">
      {/* Logo */}
      <Link to='/' className="logo route">
        <span className="grace">Grace</span>
        <span className="store">Store</span>
        <sup>®</sup>
      </Link>

      {/* Hamburger Icon (only visible on small screens) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><Link to="/shop" className='nav-route'>Shop</Link></li>
        <li><Link to="/summer" className='nav-route'>Summer Collection 2025 ▾</Link></li>
        <li><Link to="/winter" className='nav-route'>Winter Collection 2025 ▾</Link></li>
        <li><Link to="/gents" className='nav-route'>GENTS</Link></li>
        <li><Link to="/party" className='nav-route'>PARTY WEARS</Link></li>
        <li><Link to="/homedecor" className='nav-route'>Home Decor ▾</Link></li>
      </ul>

      {/* Cart */}
      <div className="cart">
        <Link to='/cart' className='nav-route'>
          CART / <span>Rs0</span> PKR <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
