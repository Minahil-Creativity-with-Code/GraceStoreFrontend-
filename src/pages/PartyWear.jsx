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
        console.error("Failed to fetch Party Wear products:", error);
      }
    };

    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return (a.price || 0) - (b.price || 0);
      case 'price-high':
        return (b.price || 0) - (a.price || 0);
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
      <div className="party-page">
        <div className="party-header">
          <div>
            <h2>Party Wear</h2>
            <p className="breadcrumb">Home / Shop / Clothing / <span>Party Wear</span></p>
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

        <div className="product-grid">
          {sortedProducts.map((product) => (
            <div className="product-card" key={product._id}>
              <div className="product-img-container">
                {product.tag && <span className="tag trending">{product.tag}</span>}
                {product.discount && <span className="tag discount">{product.discount}</span>}
                <img
                  src={`http://localhost:5000/images/${product.image}`}
                  alt={product.name}
                />
                {product.stockQuantity === 0 && (
                  <div className="out-of-stock">OUT OF STOCK</div>
                )}
              </div>
              <h4>{product.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PartyWear;
