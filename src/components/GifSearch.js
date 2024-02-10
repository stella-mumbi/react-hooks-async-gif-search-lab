import React, { useState } from 'react';

function GifSearch({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for GIFs..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default GifSearch