import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [productData, setProductData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    stock: '',
    brand: '',
    color: '',
    size: '',
    productImage: null,
  });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/api/products/${id}`)
        .then(res => {
          const product = res.data;
          setProductData({
            title: product.name,
            description: product.description,
            category: product.category,
            price: product.prices?.medium || '',
            stock: product.stockQuantity,
            brand: '', // Add if supported in schema
            color: '',
            size: '',
            productImage: null,
          });
        })
        .catch(err => {
          console.error('❌ Error fetching product:', err);
          alert('Product not found!');
        });
    }
  }, [id]);

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    const val = type === 'file' ? files[0] : value;
    setProductData(prev => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
  	name: productData.title,
  	prices: {
  	  small: parseFloat(productData.price) - 2,
  	  medium: parseFloat(productData.price),
  	  large: parseFloat(productData.price) + 2
  	},
  	stockQuantity: parseInt(productData.stock),
  	category: productData.category,
  	description: productData.description,
  	image: "updated.jpg", // You can replace this dynamically if needed
  	isCustomizable: true,
  	CustomizationDescription: "Upload your design or add text"
    };
  
    try {
  	if (id) {
  	  // ✅ Edit mode – call update API
  	  await axios.put(`http://localhost:5000/api/products/${id}`, payload, {
  		headers: { 'Content-Type': 'application/json' },
  	  });
  	  alert('✅ Product updated successfully!');
  	} else {
  	  // ✅ Add mode
  	  await axios.post('http://localhost:5000/api/products', payload, {
  		headers: { 'Content-Type': 'application/json' },
  	  });
  	  alert('✅ Product added successfully!');
  	}
  
  	navigate('/products');
  
    } catch (error) {
  	console.error('❌ Error saving product:', error.response?.data || error.message);
  	alert('Something went wrong.');
    }
  };


  return (
    <div className="signup-container">
      <div className="form-box">
        <h2 className="title">{id ? 'Edit Product' : 'Add Product'}</h2>

        <form className="form" onSubmit={handleSubmit}>
          {/* ... all inputs same as before ... */}
          <div className="grid">
            <input
              name="title"
              type="text"
              placeholder="Product Title"
              value={productData.title}
              onChange={handleChange}
              required
            />
            <input
              name="category"
              type="text"
              placeholder="Category"
              value={productData.category}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid">
            <input
              name="brand"
              type="text"
              placeholder="Brand"
              value={productData.brand}
              onChange={handleChange}
            />
            <input
              name="color"
              type="text"
              placeholder="Color"
              value={productData.color}
              onChange={handleChange}
            />
          </div>

          <div className="grid">
            <input
              name="size"
              type="text"
              placeholder="Size (e.g. S, M, L, XL)"
              value={productData.size}
              onChange={handleChange}
            />
            <input
              name="stock"
              type="number"
              placeholder="Stock Quantity"
              value={productData.stock}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid">
            <input
              name="price"
              type="number"
              placeholder="Price (e.g. 49.99)"
              value={productData.price}
              onChange={handleChange}
              required
            />
            <div></div>
          </div>

          <textarea
            name="description"
            rows="4"
            placeholder="Product Description"
            value={productData.description}
            onChange={handleChange}
            required
          ></textarea>

          <div className="upload-section">
            <label>Product Image</label>
            <input
              type="file"
              name="productImage"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            {id ? 'Update Product' : 'Save Product'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
