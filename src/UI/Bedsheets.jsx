import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Bedsheets = () => {
  // Img only
  const products = [
    { image: "/B1.jpg" },
    { image: "/B1.jpg" },
    { image: "/B1.jpg" },
    // { image: "/B1.jpg" },
    // { image: "/B1.jpg" }
  ];

  return (
    <div className="card2">
      <h2> <IoIosArrowDown />  Luxury BedSheets Collection 2025</h2>
      <div className="product-list">
        {products.map((product, index) => (  //map for Loops over each product and renders
          <div key={index} className="product-card">
            <img src={product.image} alt={`bedsheet-${index}`} className="product-image" />   {/*img for Product image */}
          </div> 
        ))}
      </div>
    </div>
  );
};

export default Bedsheets;
