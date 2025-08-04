import React, { useEffect, useState } from 'react';
import { AiOutlineProduct } from "react-icons/ai";
import { MdSpaceDashboard, MdBorderColor, MdDelete } from "react-icons/md";
import { FaUserFriends, FaRegUser, FaPlus, FaEye, FaEdit } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { RxCross1 } from "react-icons/rx";
import axios from 'axios';

const User = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users');
        setUsers(res.data);
      } catch (err) {
        console.error('Failed to fetch users:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

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
    user.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || user.role?.toLowerCase() === selectedCategory.toLowerCase())
  );

  return (
    <div className="dashboard">
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <Link to='/dashboard'><MdSpaceDashboard /> Dashboard</Link>
            <Link to='/products'><AiOutlineProduct /> Products</Link>
            <Link to='/order'><MdBorderColor /> Orders</Link>
            <Link to='/customer'><FaUserFriends /> Customers</Link>
            <Link to='/user' className="active"><FaRegUser /> User</Link>
          </ul>
        </nav>
        <div className="support">
          Customer Support<br />
          <Link to='/register'><button>Connect Now</button></Link>
        </div>
        <div className="user-profile">
          <img src="admin.jpg" alt="Admin" className="adminImage" />
          <div className="user-details">
            <div>Admin <br /><Link to='/userProfile' className='view'>View Profile</Link></div>
          </div>
        </div>
        <br />
        <Link to='/'><button className="logout-button">Logout</button></Link>
      </aside>

      <main className="main-content">
        <div className="header">
          <button className="hamburger" onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
          <h1>Users</h1>
          <Link to="/addUser">
            <button className="add-button"><FaPlus /> Add Users</button>
          </Link>
        </div>

        <div className="filters">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          {(searchTerm || selectedCategory) && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
              aria-label="Clear Filters"
            >
              <RxCross1 />
            </button>
          )}
        </div>

        {loading ? (
          <p>Loading users...</p>
        ) : filteredUsers.length > 0 ? (
          <div className="product-table-wrapper">
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
                      <img
                        src={`http://localhost:5000/images/${user.image || 'User.jpg'}`}
                        onError={(e) => { e.target.src = "/default-user.jpg"; }}
                        alt={user.name}
                      />
                      <span>{user.name}</span>
                    </td>
                    <td>{user.role?.charAt(0).toUpperCase() + user.role?.slice(1)}</td>
                    <td>{user.profession}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td className="actions">
                      <Link to={`/addUser/${user._id}`}><button><FaEdit /></button></Link>
                      <button onClick={() => handleDelete(user._id)}><MdDelete /></button>
                      <Link to={`/viewUser/${user._id}`}><button><FaEye /></button></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No users found.</p>
        )}
      </main>
    </div>
  );
};

export default User;
