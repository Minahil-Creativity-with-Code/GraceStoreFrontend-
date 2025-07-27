import React from 'react';

const ViewUser = () => {
  const user = {
    name: 'Minahil Asim',
    email: 'minahil@example.com',
    role: 'Admin',
    status: 'Active',
    image: '/User.jpg', // Place this image in public/images/
    bio: 'Minahil is a senior admin managing the Grace store dashboard. She is responsible for overseeing product uploads, customer management, and order processing.'
  };

  return (
    <div className="view-user-wrapper">
      <div className="view-user">
        {/* LEFT SIDE: Profile Picture */}
        <div className="user-image">
          <img src={user.image} alt="User Profile" />
        </div>

        {/* RIGHT SIDE: User Details */}
        <div className="user-details">
          <h2>{user.name}</h2>
          <p className="user-role">{user.role}</p>

          <div className="user-info">
            <p><strong>Email:</strong> {user.email}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span className={`status ${user.status === 'Active' ? 'active' : 'inactive'}`}>
                {user.status}
              </span>
            </p>
          </div>

          <div className="user-bio">
            <h4>Bio</h4>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
