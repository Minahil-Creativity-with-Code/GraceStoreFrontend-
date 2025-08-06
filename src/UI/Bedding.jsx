import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavLine from "../components/NavLine";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeTextilesPage = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('latest');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/search/category/Bedding");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch Bedding products:", error);
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
      <div className="textile-wrapper">
        <div className="textile-header">
          <div className="textile-info">
            <h2>Bedding & Home Textiles</h2>
            <p className="breadcrumb">
              Home / Shop / Home Decor / <span>Bedding</span>
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

        <div className="textile-grid">
          {sortedProducts.map((product) => (
            <div key={product._id} className="textile-card">
              {product.discount && (
                <div className="badge discount">{product.discount}% Off</div>
              )}
              <div className="textile-image-wrapper">
                <img
                  src={`http://localhost:5000/images/${product.image}`}
                  alt={product.name}
                />
                {product.outOfStock && (
                  <div className="badge stock-status">OUT OF STOCK</div>
                )}
              </div>
              <h4>{product.name}</h4>
              <div className="textile-card-prices">
                <span className="original-price">Rs {product.prices?.large || '-'}</span>
                <span className="sale-price">Rs {product.prices?.medium || '-'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeTextilesPage;
