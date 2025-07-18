import React, { useState } from 'react';

const Search = ({ setCity }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setCity(input.trim());
      setInput('');
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={input}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};

export default Search;
