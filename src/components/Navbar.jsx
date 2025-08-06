import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from 'react-router-dom';

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
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) => isActive ? 'nav-route active' : 'nav-route'}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/summer"
            className={({ isActive }) => isActive ? 'nav-route active' : 'nav-route'}
          >
            Summer Collection  ▾
          </NavLink>
          <div className="dropdown">
            <NavLink to="/lawn">Lawn</NavLink>
            <NavLink to="/embroideredDuppata">Embroidered Duppata</NavLink>
          </div>
        </li>

        <li>
          <NavLink
            to="/winter"
            className={({ isActive }) => isActive ? 'nav-route active' : 'nav-route'}
          >
            Winter Collection  ▾
          </NavLink>
          <div className="dropdown">
            <NavLink to="/linen">Linen</NavLink>
            <NavLink to="/silk">Silk</NavLink>
          </div>
        </li>

        <li>
          <NavLink
            to="/gents"
            className={({ isActive }) => isActive ? 'nav-route active' : 'nav-route'}
          >
            GENTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/party"
            className={({ isActive }) => isActive ? 'nav-route active' : 'nav-route'}
          >
            Party Wear ▾
          </NavLink>
          <div className="dropdown">
            <NavLink to="/clutch-bag">Clutch Bag</NavLink>
            <NavLink to="/silk">Silk</NavLink>
            <NavLink to="/organza">Organza</NavLink>
          </div>
        </li>

        <li>
          <NavLink
            to="/home-decor"
            className={({ isActive }) => isActive ? 'nav-route active' : 'nav-route'}
          >
            Home Decor ▾
          </NavLink>
          <div className="dropdown">
            <NavLink to="/bedding">Bedding</NavLink>
            <NavLink to="/mattress-covers">Mattress Covers</NavLink>
            <NavLink to="/sofa-covers">Sofa Covers</NavLink>
            <NavLink to="/washing-machine-covers">Washing Machine Covers</NavLink>
          </div>
        </li>
      </ul>

      {/* Cart */}
      <div className="cart">
        <NavLink to='/cart' className='nav-route'>
          CART / <span>Rs0</span> PKR <FaShoppingCart />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
