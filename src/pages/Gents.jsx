import React from 'react'
import NavLine from "../components/NavLine";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gents = () => {
  return (
    <>
    <NavLine/>
    <Navbar />
    <div>
         <div className='gents-section'>
      <h2 className="shop-title">Gents</h2>
      <p className="breadcrumb">Home / <span>Shop</span>/<span>Clothing</span>/<span>Gents</span></p>
    </div>
    <div className='gents'>
        No products were found matching your selection.
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Gents;