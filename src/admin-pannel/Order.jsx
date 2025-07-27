import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaPlus, FaRegUser, FaUserFriends } from 'react-icons/fa';
import { MdDelete, MdSpaceDashboard, MdBorderColor } from 'react-icons/md';
import { AiOutlineProduct } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const AdminOrderPanel = () => {
  const [orders, setOrders] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ Added this state

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get('http://localhost:5000/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error('Error fetching orders:', err));
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this order?')) return;

    axios.delete(`http://localhost:5000/api/orders/${id}`)
      .then(() => {
        setOrders(prev => prev.filter(o => o._id !== id));
      })
      .catch(err => {
        console.error('Failed to delete order:', err);
        alert('Error deleting order.');
      });
  };

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
          <Link to="/order" className="active"><MdBorderColor /> Orders</Link>
          <Link to="/customer"><FaUserFriends /> Customers</Link>
          <Link to="/user"><FaRegUser /> Users</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header">
          <h1>Orders</h1>
          <Link to="/addorder">
            <button className="add-button"><FaPlus /> Add Order</button>
          </Link>
        </div>

        <table className="product-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Status</th>
              <th>Total</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user?.name || 'N/A'}</td>
                <td>{order.status}</td>
                <td>${order.totalAmount}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td className="actions">
                  <Link to={`/addorder/${order._id}`}>
                    <button><FaEdit /> Edit</button>
                  </Link>
                  <button onClick={() => handleDelete(order._id)}>
                    <MdDelete /> Delete
                  </button>
                  <Link to={`/vieworder/${order._id}`}>
                    <button><FaEye /> View</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default AdminOrderPanel;
