import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const Card2 = () => {
  const products = [
    {
      brand: "LANDI GURATTA",
      name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-09YA",
      originalPrice: "RB 9.499 PKR",
      salePrice: "RB 2.999 PKR",
      image: "/section01.jpg"
    },
    // {
    //   brand: "LANDI GURATTA",
    //   name: "Al Karami 3Pca Embroidered Summer Lawn Collection 2025 AK-102A",
    //   originalPrice: "RB 9.499 PKR",
    //   salePrice: "RB 2.999 PKR",
    //   image: "\section02.jpg"
    // },
    {
      brand: "BAROGUE LANDI",
      name: "Baroque 3Pca Digital Print Summer Lawn Collection 2025 BQ-1251",
      originalPrice: "RB 9.500 PKR",
      salePrice: "RB 3.199 PKR",
      image: "/section03.jpg"
    },
    {
      brand: "DERSBOEDEED GURATTA",
      name: "Asim Jota 3Pca Embroidered Summer Lawn Collection 2025 AJ-01",
      originalPrice: "RB 4.999 PKR",
      salePrice: "RB 3.999 PKR",
      image: "/section04.jpg"
    }
  ];

  return (
    <div className="card2">
        <h2> <IoIosArrowDown /> Shop Summer LAWN COLLECTION 2025</h2>
    <div className="product-list">
      {products.map((product, index) => (  //map for Loops over each product and renders
        <div key={index} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />  {/*img for Product image */}
          <h3 className="product-brand">{product.brand}</h3>
          <p className="product-name">{product.name}</p>
          <div className="product-prices">
            <span className="original-price">{product.originalPrice}</span>
            <span className="sale-price">{product.salePrice}</span>
          </div>
        </div>
      ))}
    </div>
    <div className="section1">
        <img src="\section2.jpg" alt="section-img"/>
     </div>
 </div>
     
  );
};

export default Card2;
