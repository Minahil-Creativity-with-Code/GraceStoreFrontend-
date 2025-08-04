import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Bedsheets = () => {
  const [bedsheetProducts, setBedsheetProducts] = useState([]);

  useEffect(() => {
    const fetchBedsheets = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products/search/category/Bedsheet");
        setBedsheetProducts(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch bedsheet products:", err);
      }
    };

    fetchBedsheets();
  }, []);

  return (
    <div className="card2">
      <h2><IoIosArrowDown /> Luxury BedSheets Collection 2025</h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Autoplay]}
        className="product-list"
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {bedsheetProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <Link to={`/product/${product._id}`} className="product-card-link login-route">
              <div className="product-card">
                <img
                  src={`http://localhost:5000/images/${product.image}`}
                  alt={product.name}
                  className="product-image"
                />
                <h3 className="product-brand">{product.brand || "No Brand"}</h3>
                <p className="product-name">{product.name}</p>
                <div className="product-prices">
                  <span className="original-price">
                    Rs {product.prices?.large || product.originalPrice || "-"} PKR
                  </span>
                  <span className="sale-price">
                    Rs {product.prices?.medium || product.salePrice || "-"} PKR
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bedsheets;
