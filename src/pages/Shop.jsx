import React from 'react'
import NavLine from "../components/NavLine";
import Navbar from "../components/Navbar";
import ShopCards from '../UI/ShopCards';
import Footer from "../components/Footer";

export const Shop = () => {
  return (
    <>
        <NavLine />
        <Navbar />
        <ShopCards /> 
        <Footer />
    </>
  )
}
export default Shop;