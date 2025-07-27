import React, { useEffect, useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSpaceDashboard, MdBorderColor, MdDelete } from "react-icons/md";
import { FaUser, FaRegUser, FaPlus, FaEye, FaEdit } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import axios from 'axios';

const User = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/users');
      setUsers(res.data);
    } catch (err) {
      console.error('Failed to fetch users:', err);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      setUsers(prev => prev.filter(user => user._id !== id));
    } catch (error) {
      console.error('Failed to delete user:', error);
      alert('Error deleting user.');
    }
  };

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.profession?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.address?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <button className="hamburger" onClick={toggleMenu}><GiHamburgerMenu /></button>
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><Link to='/dashboard'><MdSpaceDashboard /> Dashboard</Link></li>
            <li><Link to='/products'><AiOutlineProduct /> Products</Link></li>
            <li><Link to='/order'><MdBorderColor /> Orders</Link></li>
            <li><Link to='/customer'><FaUser /> Customers</Link></li>
            <li><Link to='/user' className="active"><FaRegUser /> Users</Link></li>
          </ul>
        </nav>
        <div className="support">
          Customer Support<br />
          <Link to='/register'><button>Connect Now</button></Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="content">
        <header>
          <Link to='/addUser'>
            <button className="add-button"><FaPlus /> Add User</button>
          </Link>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="profile">
            <img src="/PROFILE.jpg" alt="user" />
            <Link to="/userprofile" className="user-route">
              <span>Username</span>
            </Link>
            <small>Fashion Designer</small>
          </div>
        </header>

        <section className="greeting">
          <h1>User Management</h1>
        </section>

        {/* Conditional Rendering */}
        {filteredUsers.length > 0 ? (
          <table className="product-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Role</th>
                <th>Profession</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user._id}>
                  <td className="product-info">
                    <img src={user.image || '/User.jpg'} alt={user.name} />
                    <span>{user.name}</span>
                  </td>
                  <td>{user.role}</td>
                  <td>{user.profession}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td className="actions">
                    <Link to={`/addUser/${user._id}`}><button><FaEdit />Edit</button></Link>
                    <button onClick={() => handleDelete(user._id)}><MdDelete />Delete</button>
                    <Link to={`/viewUser/${user._id}`}><button><FaEye />View</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users found.</p>
        )}
      </main>
    </div>
  );
};

export default User;
