import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "BED SHEETS",
    count: "79 PRODUCTS",
    image: "/S1.jpg",
    path: "/bedding"
  },
  {
    title: "CLOTHING",
    count: "1083 PRODUCTS",
    image: "/S6.jpg",
    path: "/clothing"
  },
  {
    title: "CLUTCH BAG",
    count: "11 PRODUCTS",
    image: "/S2.jpg",
    path: "/clutch-bag"
  },
  {
    title: "MATTRESS COVERS",
    count: "8 PRODUCTS",
    image: "/S3.jpg",
    path: "/mattress-covers"
  },
  {
    title: "SOFA COVERS",
    count: "48 PRODUCTS",
    image: "/S4.jpg",
    path: "/sofa-covers"
  },
  {
    title: "WATER PROOF WASHING MACHINE COVER",
    count: "97 PRODUCTS",
    image: "/S5.jpg",
    path: "/washing-machine-covers"
  }
];

const ShopCards = () => {
  return (
    <div className="shop-container">
      <h2 className="shop-title">Shop</h2>
      <p className="breadcrumb">Home / <span>Shop</span></p>
      <div className="categories-grid">
        {categories.map((cat, index) => (
          <Link to={cat.path} key={index} className="category-card">
            <img src={cat.image} alt={cat.title} />
            <div className="category-info">
              <h3>{cat.title}</h3>
              <p>{cat.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
