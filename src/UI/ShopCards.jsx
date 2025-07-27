import React from "react";
 //Card Categories 
const categories = [
  {
    title: "BED SHEETS",
    count: "79 PRODUCTS",
    image: "/S1.jpg"
  },
  {
    title: "CLOTHING",
    count: "1083 PRODUCTS",
    image: "/S6.jpg"
  },
  {
    title: "CLUTCH BAG",
    count: "11 PRODUCTS",
    image: "/S2.jpg"
  },
  {
    title: "MATTRESS COVERS",
    count: "8 PRODUCTS",
    image: "/S3.jpg"
  },
  {
    title: "SOFA COVERS",
    count: "48 PRODUCTS",
    image: "/S4.jpg"
  },
  {
    title: "WATER PROOF WASHING MACHINE COVER",
    count: "97 PRODUCTS",
    image: "/S5.jpg"
  }
];
 
//Cards Details
const ShopCards = () => {
  return (
    <div className="shop-container">
      <h2 className="shop-title">Shop</h2>
      <p className="breadcrumb">Home / <span>Shop</span></p>
      <div className="categories-grid">
        {categories.map((cat, index) => (   //for array of Categories
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.title} />
            <div className="category-info">
              <h3>{cat.title}</h3>
              <p>{cat.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
