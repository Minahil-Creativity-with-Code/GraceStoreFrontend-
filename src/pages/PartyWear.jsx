import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavLine from "../components/NavLine";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PartyWear = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('latest');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/search/category/PartyWear");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch Party Wear Collection products:", error);
      }
    };

    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return (a.prices?.medium || 0) - (b.prices?.medium || 0);
      case 'price-high':
        return (b.prices?.medium || 0) - (a.prices?.medium || 0);
      case 'latest':
        return new Date(b.createdAt) - new Date(a.createdAt);
      case 'popularity':
        return (b.sold || 0) - (a.sold || 0);
      default:
        return 0;
    }
  });

  return (
    <>
      <NavLine />
      <Navbar />
      <div className="summer-page">
        <div className="summer-header">
          <div className="summer-title">
            <h2>Party Wear Collection 2025</h2>
            <p className="summer-breadcrumb">
              Home / Shop / Clothing / <span>Party Wear Collection 2025</span>
            </p>
          </div>
          <div className="summer-sort">
            <span>
              Showing 1–{products.length} of {products.length} results
            </span>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="latest">Sort by latest</option>
              <option value="popularity">Sort by popularity</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
            </select>
          </div>
        </div>

        <div className="summer-product-grid">
          {sortedProducts.map((product) => (
            <div key={product._id} className="summer-card">
              {product.discount && (
                <div className="summer-discount-badge">{product.discount}% Off</div>
              )}
              <img
                src={`http://localhost:5000/images/${product.image}`}
                alt={product.name}
                className="summer-card-image"
              />
              <h3 className="summer-card-brand">{product.brand}</h3>
              <p className="summer-card-name">{product.name}</p>
              <div className="summer-card-prices">
                <span className="summer-card-original">Rs {product.prices?.large || '-'}</span>
                <span className="summer-card-sale">Rs {product.prices?.medium || '-'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PartyWear;
