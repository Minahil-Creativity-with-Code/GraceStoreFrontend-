import React from "react";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
const Card = () => {
  const products = [
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-102A",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card2.jpg"
    },
    {
      brand: "DERSBOEDEED GURATTA",
      name: "Asim Jota 3Pca Embroidered Summer Lawn Collection 2025 AJ-01",
      originalPrice: "RB 4.999 PKR",
      salePrice: "RB 3.999 PKR",
      image: "/card4.jpg"
    }
  ];

  return (
    <div className="card-header">
      <h2> <FaShoppingCart />  What's New</h2>
      <div className="product-list">
        {products.map((product, index) => (  //map for Loops over each product and renders
          <Link to={`/product/1`} key={index} className="product-card-link login-route"> {/* Static product ID for now */}
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />   {/*img for Product image */}
              <h3 className="product-brand">{product.brand}</h3>
              <p className="product-name">{product.name}</p>
              <div className="product-prices">
                <span className="original-price">{product.originalPrice}</span>
                <span className="sale-price">{product.salePrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="section1">
        <img src="\section1.jpg" alt="section-img" />
      </div>
    </div>

  );
};

export default Card;
