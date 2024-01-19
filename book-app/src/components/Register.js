// components/Auth/Register.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/user/add', formData);
      console.log('Registration successful:', response.data);

      if (response.data.success) {
        // Redirect to another page upon successful registration
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration failed:', error.response.data.message);
    }
  };

  return (
    <div className="container mt-3">
      <h2>Register</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="text"
          className="form-control"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
