// ItemCard.js
import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div key={item.id} className="border p-2 mb-2 rounded">
      <div className="flex items-center">
        <img src={item.icon_url} alt={item.title} className="w-16 h-16 mr-4" />
        <div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p>{item.description}</p>
          <a href={item.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Visit
          </a>
          <p className="text-sm text-gray-500">Category: {item.category}</p>
          <p className="text-sm text-gray-500">Tag: {item.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
