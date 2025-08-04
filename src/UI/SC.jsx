import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from "Summer" category
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/search/category/Summer");
        setProducts(res.data);
      } catch (error) {
        console.error("Failed to fetch Summer Collection products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='sc'>
      <h2 className="shop-title">Summer Collection 2025</h2>
      <p className="breadcrumb">Home / <span>Summer Collection 2025</span></p>

      <div className="card">
        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={`http://localhost:5000/images/${product.image}`}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-brand">{product.brand}</h3>
              <p className="product-name">{product.name}</p>
              <div className="product-prices">
                <span className="original-price">Rs {product.prices?.large || '-'} PKR</span>
                <span className="sale-price">Rs {product.prices?.medium || '-'} PKR</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SC;
