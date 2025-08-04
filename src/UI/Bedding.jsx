import React, { useState } from 'react';
import NavLine from "../components/NavLine";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Bedding = () => {
    const [sortOption, setSortOption] = useState('latest');

    const products = [
        {
            id: 1,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 2,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: null,
            discount: '29% Off',
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 3,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: null,
            discount: '22% Off',
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 4,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: null,
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 5,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 6,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 7,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 8,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 9,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 10,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 11,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 12,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 13,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 14,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 15,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
            outOfStock: true
        },
        {
            id: 16,
            name: '3 PCs King Size Cotton Mix Printed Bedsheet',
            tag: 'Trending',
            discount: null,
            image: '/B1.jpg',
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
                        <h2>Home Decor</h2>
                        <p className="breadcrumb">Home / Shop / Home Decor / <span>Bedding</span></p>
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

export default Bedding;