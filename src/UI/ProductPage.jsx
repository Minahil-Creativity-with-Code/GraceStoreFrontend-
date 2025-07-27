import React, { useState, useEffect } from 'react';  //React hooks for managing state and lifecycle logic
import NavLine from '../components/NavLine';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ProductPage = () => {  //Declares the functional component ProductPage
  const [timeLeft, setTimeLeft] = useState({   //Initializes a countdown timer with 40 minutes and 45 seconds.
    days: 0,
    hours: 0,
    minutes: 40,
    seconds: 45
  });

  const [mainImage, setMainImage] = useState('/P1.jpg');
  const [thumbnailImages] = useState([
    '/P1.jpg',
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;   //Decrements time correctly (seconds → minutes → hours → days).
        
        if (seconds > 0) return { ...prevTime, seconds: seconds - 1 };
        if (minutes > 0) return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { ...prevTime, days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        
        clearInterval(timer);   //Clears the interval when the timer ends or the component unmounts.
        return prevTime;
      });
    }, 1000); //Starts a 1-second interval to update the timeLeft state.

    return () => clearInterval(timer);
  }, []);

  return (
    <>
     <NavLine />
     <Navbar />
   
    <div className="product-page">
      <div className="breadcrumbs">
        Home / Shop / Clothing / SHOP BY BRANDS / Bareeze / Bareeze Karandi Collections
      </div>

      <div className="product-container">
        {/* Image Gallery Section */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={mainImage} alt="Bareeze BR-1166 - Premium Embroidered Winter Karandi Collection" />
          </div>
          <div className="thumbnail-container">
            {thumbnailImages.map((thumb, index) => (
              <div 
                key={index} 
                className={`thumbnail ${mainImage === thumb ? 'active' : ''}`}
                onClick={() => setMainImage(thumb)}
              >
                <img src={thumb} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          <h1 className="product-title">
            Bareeze BR-1166 - Premium Embroidered Winter Karandi Collection 2024
          </h1>

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
            <span className="original-price">Rs6,999 PKR</span>
            <span className="sale-price">Rs4,999 PKR</span>
            <span className="stock-status">In stock</span>
          </div>

          <div className="product-description">
            <h3>Bareeze Unstitched 3pcs Embroidered Karandi Suit with Heavy Embroidered Karandi Shawl</h3>
            <ul className="features-list">
              <li>Front Fully Embroidered Shirt</li>
              <li>Organza Embroidered Neck Patch</li>
              <li>Embroidered Sleeves</li>
              <li>Daman Organza Embroidered Patch</li>
              <li>Heavy Embroidered Karandi Shawl</li>
              <li>Karandi Trouser</li>
              <li>A+ Master Quality</li>
            </ul>
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

export default ProductPage;