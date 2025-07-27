import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'User',
    role: 'Admin',
    profession: 'Fashion Designer',
    gender: 'Female',
    email: 'user@example.com',
    address: 'Lahore, Pakistan',
    image: '/User.jpg' // Make sure this exists in public folder
  };

  return (
    <div className="user-profile-page">
      <div className="profile-card">
        <div className="profile-image">
          <img src={user.image} alt={user.name} />
        </div>
        <div className="profile-details">
          <h2>{user.name}</h2>
          <p className={`role ${user.role === 'Admin' ? 'admin' : 'user'}`}>{user.role}</p>
          <p><strong>Profession:</strong> {user.profession}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
