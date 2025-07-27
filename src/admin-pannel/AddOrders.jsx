import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';

const AddOrders = () => {
  const initialState = {
    customerName: '',
    email: '',
    phone: '',
    address: '',
    selectedProducts: [],
    quantity: 1,
    status: 'Pending',
  };

  const [orderData, setOrderData] = useState(initialState);
  const [productOptions, setProductOptions] = useState([]);

  // Fetch product options on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProductOptions(res.data);
        console.error('Order saved successfully!');
      } catch (err) {
        console.error('Error fetching products:', err.message);
      }
    };
    fetchProducts();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setOrderData(prev => ({ ...prev, [name]: value }));
  };

  const handleProductSelect = (selectedList) => {
    setOrderData(prev => ({ ...prev, selectedProducts: selectedList }));
  };

  const handleProductRemove = (selectedList) => {
    setOrderData(prev => ({ ...prev, selectedProducts: selectedList }));
  };

 const handleSubmit = async e => {
  e.preventDefault();

  // Simulated existing user ID (replace this with actual user selection or login)
  const userId = '64dabc1234567890ef123456'; // get this from user selection or auth

  // Prepare items array with price instead of priceAtPurchase
  const items = orderData.selectedProducts.map(prod => {
    const price = prod.prices?.medium ?? 0;
    return {
      productId: prod._id,
      quantity: parseInt(orderData.quantity),
      price,
    };
  });

  // Calculate total
  const totalAmount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Build payload to match schema
  const payload = {
    user: userId, // ✅ MUST be ObjectId
    items,        // ✅ Each must have productId, quantity, price
    totalAmount,
    shippingAddress: orderData.address, // ✅ String only
    status: orderData.status,
  };

  try {
    const res = await axios.post('http://localhost:5000/api/orders', payload, {
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('✅ Order created:', res.data);
    alert('Order created successfully!');
    setOrderData(initialState); // clear form
  } catch (err) {
    console.error('❌ Error creating order:', err.response?.data || err.message);
    alert('Failed to create order.');
  }
};

  return (
    <div className="signup-container">
      <div className="form-box">
        <h2 className="title">Add Order</h2>

        <form className="form" onSubmit={handleSubmit}>
          {/* Customer Info */}
          <div className="grid">
            <input
              name="customerName"
              type="text"
              placeholder="Customer Name"
              value={orderData.customerName}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={orderData.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid">
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={orderData.phone}
              onChange={handleChange}
            />
            <input
              name="address"
              type="text"
              placeholder="Address"
              value={orderData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Product Selection */}
          <div className="field-group">
            <label>Select Products</label>
            <Multiselect
              options={productOptions}
              displayValue="name"
              onSelect={handleProductSelect}
              onRemove={handleProductRemove}
              selectedValues={orderData.selectedProducts}
            />
          </div>

          {/* Quantity and Status */}
          <div className="grid">
            <input
              name="quantity"
              type="number"
              min="1"
              placeholder="Quantity"
              value={orderData.quantity}
              onChange={handleChange}
              required
            />
            <select name="status" value={orderData.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">Add Order</button>
        </form>
      </div>
    </div>
  );
};

export default AddOrders;
