import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WC = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('latest');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/search/category/Winter");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch Winter Collection products:", error);
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
     <div className="party-page">
        <div className="party-header">
          <div>
            <h2>Winter Collection</h2>
            <p className="breadcrumb">Home / Shop / Clothing / <span>Winter Collection</span></p>
          </div>
          <div className="sort-dropdown">
            <span>Showing all {products.length} results</span>
            <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="latest">Sort by latest</option>
              <option value="popularity">Sort by popularity</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
            </select>
          </div>
        </div>

      {/* Product Grid */}
      <div className="card">
        <div className="product-list">
          {sortedProducts.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={`http://localhost:5000/images/${product.image}`}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-brand">{product.brand}</h3>
              <p className="product-name">{product.name}</p>
              <div className="product-prices">
                <span className="original-price">Rs {product.prices?.large || '-'}</span>
                <span className="sale-price">Rs {product.prices?.medium || '-'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WC;
