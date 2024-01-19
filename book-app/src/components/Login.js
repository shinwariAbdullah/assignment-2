// components/Auth/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", formData);
      console.log("Login successful:", response.data);

      const token = response.data.token;
      // Set the token into localStorage
      localStorage.setItem("token", token);

      if (response.data.success) {
        // Redirect to another page upon successful login
        navigate("/search");
      }
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
    }
  };

  return (
    <div className="container mt-3">
      <h2>Login</h2>
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
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;

