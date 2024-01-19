import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`);
      const data = response.data.items || [];
      setSearchResults(data);
      // You can perform further actions with the search results, such as updating the UI
      console.log('Search results:', searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="container mt-3">
      <h2>Search</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Display search results */}
      <div>
        <h3>Search Results</h3>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.volumeInfo.title}</li>
            // Customize the display of search results based on your needs
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;

