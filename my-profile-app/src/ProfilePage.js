import React from 'react';

const ProfilePage = ({ user }) => {
  return (
    <div className="container mt-3">
    <h2>Profile Details</h2>
    <div className="card">
      <div className="card-body">
        <p className="card-text">First Name: {user.firstName}</p>
        <p className="card-text">Last Name: {user.lastName}</p>
        <p className="card-text">Email: {user.email}</p>
      </div>
    </div>
  </div>
);
};

export default ProfilePage;