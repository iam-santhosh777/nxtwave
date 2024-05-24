import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('resource');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 6;

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      const response = await fetch('https://media-content.ccbp.in/website/react-assignment/resources.json'); // Replace with your API endpoint
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to the first page when the tab changes
    setSearchTerm(''); // Clear the search term when the tab changes
  };

  // Filter data based on active tab
  const filteredData = data.filter((item) => {
    if (activeTab === 'resource') {
      return true;
    } else if (activeTab === 'request') {
      return item.tag === 'request';
    } else if (activeTab === 'user') {
      return item.tag === 'user';
    }
    return false;
  });

  // Filter data based on search term
  const filteredSearchData = filteredData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the items to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredSearchData.slice(startIndex, endIndex);

  // Calculate total pages
  const totalPages = Math.ceil(filteredSearchData.length / itemsPerPage);

  return (
    <div className="flex flex-col justify-center items-center my-5">
      {/* Tab Navigation */}
      <div className="flex justify-center border">
        <button
          className={`py-2 px-4 border font-semibold ${activeTab === 'resource' ? 'border-b-2 font-normal bg-blue-600 text-white' : 'text-gray-600'}`}
          onClick={() => handleTabClick('resource')}
        >
          Resources
        </button>
        <button
          className={`py-2 px-4 border font-semibold ${activeTab === 'request' ? 'border-b-2 font-normal bg-blue-600 text-white' : 'text-gray-600'}`}
          onClick={() => handleTabClick('request')}
        >
          Requests
        </button>
        <button
          className={`py-2 px-4 border font-semibold ${activeTab === 'user' ? 'border-b-2 font-normal bg-blue-600 text-white' : 'text-gray-600'}`}
          onClick={() => handleTabClick('user')}
        >
          Users
        </button>
      </div>

      {/* Search bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Tab Content */}
      <div className="p-4 w-[90%] flex justify-center gap-3 flex-wrap">
        {currentItems.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Tabs;
