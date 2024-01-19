import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = async () => {
    try {
      await axios.post('http://localhost:5000/books', {
        title,
        author,
      });
      console.log('Book added successfully');
    } catch (error) {
      console.error('Failed to add book:', error.response.data);
    }
  };

  return (
    <div className="container mt-3">
      <h2>Add Book</h2>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Author:</label>
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddBook}>
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
