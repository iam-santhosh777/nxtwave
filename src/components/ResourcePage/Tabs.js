// Tabs.js
import React, { useState } from 'react';
import useFetchData from '../../utils/useFetchData';
import TabNavigation from './TabNavigation';
import TabContent from './TabContent';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

const Tabs = () => {
  const { data, loading, error } = useFetchData('https://media-content.ccbp.in/website/react-assignment/resources.json');
  const [activeTab, setActiveTab] = useState('resource');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 6;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSearchTerm('');
  };

  const filteredData = data.filter((item) => {
    if (activeTab === 'resource') return true;
    if (activeTab === 'request') return item.tag === 'request';
    if (activeTab === 'user') return item.tag === 'user';
    return false;
  });

  const filteredSearchData = filteredData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredSearchData.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredSearchData.length / itemsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col justify-center items-center my-5">
      <TabNavigation activeTab={activeTab} handleTabClick={handleTabClick} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TabContent currentItems={currentItems} />
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Tabs;
