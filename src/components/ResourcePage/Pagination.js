import React from 'react';

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  // Create an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center my-4">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => setCurrentPage(pageNumber)}
          className={`px-4 py-2 mx-1 rounded-lg ${currentPage === pageNumber ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
