import React from 'react';

const SC = () => {
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
      brand: "BAROGUE LANDI",
      name: "Baroque 3Pca Digital Print Summer Lawn Collection 2025 BQ-1251",
      originalPrice: "RB 9.500 PKR",
      salePrice: "RB 3.199 PKR",
      image: "/card3.jpg"
    },
    {
      brand: "DERSBOEDEED GURATTA",
      name: "Asim Jota 3Pca Embroidered Summer Lawn Collection 2025 AJ-01",
      originalPrice: "RB 4.999 PKR",
      salePrice: "RB 3.999 PKR",
      image: "/card4.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/card1.jpg"
    },
    
    
  ];

  return (
    <div className='sc'>
      <h2 className="shop-title">Summer Collection 2025</h2>
      <p className="breadcrumb">Home / <span>Summer Collection 2025</span></p>

      <div className="card">
        <div className="product-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-brand">{product.brand}</h3>
              <p className="product-name">{product.name}</p>
              <div className="product-prices">
                <span className="original-price">{product.originalPrice}</span>
                <span className="sale-price">{product.salePrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SC;
