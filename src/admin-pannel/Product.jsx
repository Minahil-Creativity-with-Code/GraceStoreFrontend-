import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaPlus, FaRegUser, FaUserFriends } from 'react-icons/fa';
import { MdDelete, MdSpaceDashboard, MdBorderColor } from 'react-icons/md';
import { AiOutlineProduct } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const AdminProductPanel = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  };

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => {
        setProducts(prev => prev.filter(p => p._id !== id));
      })
      .catch(err => {
        console.error('Failed to delete product:', err);
        alert('Error deleting product.');
      });
  };

  const filteredProducts = products.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard">
      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <GiHamburgerMenu />
      </button>

      {/* Sidebar */}
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
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="header">
          <h1>Products</h1>
          <Link to="/addproduct">
            <button className="add-button"><FaPlus /> Add Product</button>
          </Link>
        </div>

        {/* Filters */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search products by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select><option>Category</option></select>
          <select><option>Price</option></select>
          <select><option>Quantity in Stock</option></select>
        </div>

        {/* Product Table */}
        <div className="product-table-wrapper">
          <table className="product-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price (Medium)</th>
                <th>Quantity in Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product._id}>
                  <td className="product-info">
                    <img src={product.image || '/default.jpg'} alt={product.name} />
                    <span>{product.name}</span>
                  </td>
                  <td>{product.category}</td>
                  <td>${product.prices?.medium ?? '-'}</td>
                  <td>{product.stockQuantity}</td>
                  <td className="actions">
                    <Link to={`/addproduct/${product._id}`}><button><FaEdit /> Edit</button></Link>
                    <button onClick={() => handleDelete(product._id)}><MdDelete /> Delete</button>
                    <Link to={`/viewproduct/${product._id}`}><button><FaEye /> View</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminProductPanel;
