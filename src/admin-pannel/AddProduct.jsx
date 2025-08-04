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
    image: '', // For storing existing image filename
  });

  const [selectedCategory, setSelectedCategory] = useState('');

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
            brand: '',
            color: '',
            size: '',
            productImage: null,
            image: product.image || '', // Save existing image
          });
          setSelectedCategory(product.category || '');
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

    if (name === 'category') {
      setSelectedCategory(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageName = '';

      // Upload image if provided
      if (productData.productImage) {
        const formData = new FormData();
        formData.append('productImage', productData.productImage);

        const uploadRes = await axios.post('http://localhost:5000/api/products/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

        imageName = uploadRes.data.filename;
      }

      const payload = {
        name: productData.title,
        image: imageName || productData.image || 'default.jpg',
        prices: {
          small: parseFloat(productData.price) - 2,
          medium: parseFloat(productData.price),
          large: parseFloat(productData.price) + 2
        },
        stockQuantity: parseInt(productData.stock),
        category: selectedCategory,
        description: productData.description,
        isCustomizable: true,
        CustomizationDescription: "Upload your design or add text"
      };

      if (id) {
        await axios.put(`http://localhost:5000/api/products/${id}`, payload);
        alert('✅ Product updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/products', payload);
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
          <div className="grid">
            <input
              name="title"
              type="text"
              placeholder="Product Title"
              value={productData.title}
              onChange={handleChange}
              required
            />
            <select
              name="category"
              value={selectedCategory}
              onChange={handleChange}
              required
            >
              <option value="">All Categories</option>
              <option value="Featured">Featured</option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
              <option value="Bedsheet">Bedsheet</option>
            </select>
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

            {/* Show current image if editing and no new image is selected */}
            {!productData.productImage && id && productData.image && (
              <img
                src={`http://localhost:5000/images/${productData.image}`}
                alt="Current Product"
                style={{ width: '150px', marginTop: '10px', borderRadius: '8px' }}
              />
            )}
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
