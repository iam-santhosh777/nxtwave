// SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
      <div className='w-[75%] relative'>
        <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
      className="w-3/4 p-2 my-4 border rounded mb-4"
    />
      </div>
  );
};

export default SearchBar;
