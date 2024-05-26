// TabNavigation.js
import React from 'react';

const TabNavigation = ({ activeTab, handleTabClick }) => {
  return (
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
  );
};

export default TabNavigation;
