import React, { useState } from 'react';



const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // First Name and Last Name validation
    if (!formData.firstName.match(/^[A-Za-z]+$/)) {
      errors.firstName = 'Only letters are allowed.';
      formIsValid = false;
    }
    if (!formData.lastName.match(/^[A-Za-z]+$/)) {
      errors.lastName = 'Only letters are allowed.';
      formIsValid = false;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is not valid.';
      formIsValid = false;
    }

    // Password validation
    if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters.';
      formIsValid = false;
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match.';
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onRegister(formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="col-12">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <div className="col-12">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Submit/Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;