import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddUser = ({ mode = 'signup' }) => {
  const { id } = useParams();
  const isEditMode = mode === 'edit' || !!id;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    profession: '',
    gender: 'male',
    address: '',
    phone: '',
    profileImage: null,
  });

  useEffect(() => {
    if (isEditMode) {
      axios.get(`http://localhost:5000/api/users/${id}`)
        .then(res => {
          const user = res.data;
          setFormData({
            name: user.name || '',
            email: user.email || '',
            password: '',
            confirmPassword: '',
            role: user.role || 'user',
            profession: user.profession || '',
            gender: user.gender || 'male',
            address: user.address || '',
            phone: user.phone || '',
            profileImage: null, // image will be uploaded again if changed
          });
        })
        .catch(err => {
          console.error('❌ Failed to fetch user:', err);
          alert('Error loading user data.');
        });
    }
  }, [id, isEditMode]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const val = type === 'file' ? files[0] : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEditMode && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const formPayload = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value) formPayload.append(key, value);
    });

    try {
      const url = isEditMode
        ? `http://localhost:5000/api/users/${id}`
        : `http://localhost:5000/api/users`;

      const method = isEditMode ? 'put' : 'post';

      const res = await axios({
        method,
        url,
        data: formPayload,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(`✅ User ${isEditMode ? 'updated' : 'created'}:`, res.data);
      alert(`User ${isEditMode ? 'updated' : 'created'} successfully!`);

      if (!isEditMode) {
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: 'user',
          profession: '',
          gender: 'male',
          address: '',
          phone: '',
          profileImage: null,
        });
      }
    } catch (error) {
      console.error('❌ Error submitting form:', error.response?.data || error.message);
      alert(`Failed to ${isEditMode ? 'update' : 'create'} user.`);
    }
  };

  return (
    <div className="signup-container">
      <div className="form-box">
        <h2 className="title">
          {isEditMode ? 'Edit User' : 'Sign Up'}
        </h2>

        <form className="form" onSubmit={handleSubmit}>
          {/* Name & Email */}
          <div className="grid">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          {!isEditMode && (
            <div className="grid">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {/* Role, Profession, Gender */}
          <div className="grid">
            <div className="field-group">
              <label>Role</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="field-group">
              <label>Profession</label>
              <input
                name="profession"
                type="text"
                placeholder="Profession"
                value={formData.profession}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Address & Phone */}
          <div className="grid">
            <input
              name="address"
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Profile Photo */}
          <div className="upload-section">
            <label>Profile Photo</label>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            {isEditMode ? 'Save Changes' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
