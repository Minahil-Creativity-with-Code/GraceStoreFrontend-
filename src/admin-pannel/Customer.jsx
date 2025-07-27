import React, { useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSpaceDashboard, MdBorderColor } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';

// Sample customer data
const customers = [
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '555-123-4567',
    address: '123 Main St, New York, NY'
  },
  {
    name: 'Bob Smith',
    email: 'bob@example.com',
    phone: '555-234-5678',
    address: '456 Oak Ave, Los Angeles, CA'
  },
  {
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    phone: '555-345-6789',
    address: '789 Pine Rd, Miami, FL'
  }
];

const Customer = () => {
  const [menuOpen, setMenuOpen] = useState(false); // ✅ For sidebar toggle

  return (
    <div className="admin-panel">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h2>Admin Panel</h2>
        <nav>
          <Link to="/dashboard"><MdSpaceDashboard /> Dashboard</Link>
          <Link to="/products"><AiOutlineProduct /> Products</Link>
          <Link to="/order"><MdBorderColor /> Orders</Link>
          <Link to="/customer" className="active"><FaPerson /> Customers</Link>
          <Link to="/user"><FaRegUser /> Users</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="customerContent">
        <h1>Customer List</h1>
        <table className="customerTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customer;
