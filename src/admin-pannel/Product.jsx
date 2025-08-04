import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaPlus, FaRegUser, FaUserFriends } from 'react-icons/fa';
import { MdDelete, MdSpaceDashboard, MdBorderColor } from 'react-icons/md';
import { AiOutlineProduct } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from "react-icons/rx";

const AdminProductPanel = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error:', err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Delete this product?')) {
      setDeletingId(id);
      axios.delete(`http://localhost:5000/api/products/${id}`)
        .then(() => setProducts(prev => prev.filter(p => p._id !== id)))
        .catch(error => {
          console.error('Error deleting product:', error);
          alert('Error deleting product.');
        })
    }
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || product.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  return (
    <div className="dashboard">
      <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <Link to='/dashboard'><MdSpaceDashboard /> Dashboard</Link>
            <Link to='/products' className="active"><AiOutlineProduct /> Products</Link>
            <Link to='/order'><MdBorderColor /> Orders</Link>
            <Link to='/customer'><FaUserFriends /> Customers</Link>
            <Link to='/user'><FaRegUser /> User</Link>
          </ul>
        </nav>
        <div className="support">
          Customer Support<br />
          <Link to='/register'><button>Connect Now</button></Link>
        </div>
        <div className="user-profile">
          <img src="admin.jpg" alt="Admin" className="adminImage" />
          <div>Admin <br /><Link to='/userProfile' className='view'>View Profile</Link></div>
        </div>
        <br />
        <Link to='/'><button className="logout-button">Logout</button></Link>
      </aside>

      <main className="main-content">
        <div className="header">
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <GiHamburgerMenu />
          </button>
          <h1>Products</h1>
          <Link to="/addproduct">
            <button className="add-button"><FaPlus /> Add Product</button>
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
            <option value="Featured">Featured</option>
            <option value="Summer">Summer</option>
            <option value="Winter">Winter</option>
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

        <div className="product-table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product._id}>
                  <td className="product-info">
                    <img src={`http://localhost:5000/images/${product.image || 'default.jpg'}`} alt={product.name} />
                    <span>{product.name}</span>
                  </td>
                  <td>{product.category}</td>
                  <td>${product.prices?.medium ?? '-'}</td>
                  <td>{product.stockQuantity}</td>
                  <td className="actions">
                    <Link to={`/addproduct/${product._id}`}>
                      <button><FaEdit /></button>
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      disabled={deletingId === product._id}
                    >
                      <MdDelete />
                    </button>
                    <Link to={`/viewproduct/${product._id}`}>
                      <button><FaEye /></button>
                    </Link>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminProductPanel;
