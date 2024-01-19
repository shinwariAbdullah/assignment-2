import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import Register from "./components/Register";
import SearchComponent from "./components/search";
import './App.css'
function App() {
  return (
    <div className="app-container">    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" exact element={<BookList />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
