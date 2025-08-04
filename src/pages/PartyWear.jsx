import React, { useState } from 'react';
import NavLine from "../components/NavLine";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PartyWear = () => {
  const [sortOption, setSortOption] = useState('latest');

  const products = [
    {
      id: 1,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 2,
      name: 'Green Printed Suit',
      tag: null,
      discount: '29% Off',
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 3,
      name: 'Floral Green Suit',
      tag: null,
      discount: '22% Off',
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 4,
      name: 'Traditional Saree',
      tag: null,
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 5,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 6,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 7,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 8,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 9,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 10,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 11,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 12,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 13,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 14,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 15,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    },
    {
      id: 16,
      name: 'Navy Blue Dress',
      tag: 'Trending',
      discount: null,
      image: '/P1.jpg',
      outOfStock: true
    }
  ];

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
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-img-container">
                {product.tag && <span className="tag trending">{product.tag}</span>}
                {product.discount && <span className="tag discount">{product.discount}</span>}
                <img src={product.image} alt={product.name} />
                {product.outOfStock && <div className="out-of-stock">OUT OF STOCK</div>}
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
