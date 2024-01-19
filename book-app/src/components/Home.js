import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const storedToken = localStorage.getItem("token");

  const onLoginClick = () => {
    // Check if the token exists
    if (storedToken) {
      // You can use the token for further operations, such as including it in headers for API requests
      console.log("Token from localStorage:", storedToken);
      navigate("/search");
    } else {
      console.log("Token not found in localStorage");
      navigate("/login");
    }
  };

  const onSignupClick = () => {
    navigate("/register");
  };

  const onLogoutClick = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    console.log("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-flex-end">
        <Link to="/" className="navbar-brand">
          Bookstore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link">
                Book List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books/add" className="nav-link">
                Add Book
              </Link>
            </li>
          </ul>
          <div className="navbar-nav" style={{ marginLeft: "650px" }}>
            <Link to="/register" className="btn btn-primary" style={{ marginRight: "10px" }}>
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-outline-light ml-50 d-flex align-item-flex-end justify-content-flex-end">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div className="jumbotron">
        <h1 className="display-4">Welcome to the Bookstore</h1>
        <p className="lead">
          Explore a world of knowledge through our vast collection of books.
        </p>
        <hr className="my-4" />
        <p>
          Whether you're a book lover or looking for a new adventure, our bookstore
          has something for everyone.
        </p>
        <Link to="/books" className="btn btn-primary btn-lg" role="button">
          Explore Books
        </Link>
      </div>
    </div>
  );
};

export default Home;




