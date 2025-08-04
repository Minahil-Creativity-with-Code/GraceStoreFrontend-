import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavLine from "../components/NavLine";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ViewProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 40,
    seconds: 45,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
        setMainImage(`http://localhost:5000/images/${res.data.image || 'default.jpg'}`);
      } catch (err) {
        console.error('❌ Failed to fetch product:', err);
        alert('Product not found.');
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev;
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <NavLine />
      <Navbar />

      <div className="product-page">
        <div className="breadcrumbs">
          Home / Shop / Category / {product.category || 'Products'} / {product.name}
        </div>

        <div className="product-container">
          {/* Image Gallery Section */}
          <div className="product-gallery">
            <div className="main-image">
              <img src={mainImage} alt={product.name} />
            </div>
            <div className="thumbnail-container">
              <div
                className={`thumbnail active`}
                onClick={() =>
                  setMainImage(`http://localhost:5000/images/${product.image || 'default.jpg'}`)
                }
              >
                <img src={`http://localhost:5000/images/${product.image || 'default.jpg'}`} alt="Thumbnail" />
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="product-details">
            <h1 className="product-title">{product.name}</h1>

            <div className="sale-timer">
              <h3>Sale Price Offer Will End After:</h3>
              <div className="timer-container">
                <div className="time-block">
                  <span className="time-value">{timeLeft.days.toString().padStart(2, '0')}</span>
                  <span className="time-label">days</span>
                </div>
                <div className="time-block">
                  <span className="time-value">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className="time-label">hrs</span>
                </div>
                <div className="time-block">
                  <span className="time-value">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className="time-label">mins</span>
                </div>
                <div className="time-block">
                  <span className="time-value">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className="time-label">secs</span>
                </div>
              </div>
            </div>

            <div className="price-section">
              {product.prices?.original && (
                <span className="original-price">Rs{product.prices.original} PKR</span>
              )}
              <span className="sale-price">
                Rs{product.prices?.medium || product.price} PKR
              </span>
              <span className="stock-status">
                {product.stockQuantity > 0 ? 'In stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="product-description">
              <h3>{product.shortTitle || 'Product Description'}</h3>
              <ul className="features-list">
                {product.description?.split('.').map((line, idx) =>
                  line.trim() ? <li key={idx}>{line.trim()}</li> : null
                )}
              </ul>
            </div>

            <div className="quantity-selector">
              <label>Quantity:</label>
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            <div className="action-buttons">
              <button className="add-to-cart">Add to Cart</button>
              <button className="buy-now">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ViewProduct;
