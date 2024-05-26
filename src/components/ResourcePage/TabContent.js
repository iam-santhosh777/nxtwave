// TabContent.js
import React from 'react';
import ItemCard from './ItemCard';

const TabContent = ({ currentItems }) => {
  return (
    <div className="p-4 w-[90%] flex justify-center gap-3 flex-wrap">
      {currentItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TabContent;
