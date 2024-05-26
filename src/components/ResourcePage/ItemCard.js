// ItemCard.js
import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div key={item.id} className="border p-2 mb-2 rounded w-[300px]">
      <div className="flex items-center ">
        <div>
        <img src={item.icon_url} alt={item.title} className="w-16 h-16 mr-4" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.category}</p> 
        </div>
      </div>
      <div className='flex flex-col justify-center'>
          <a href={item.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          <p>{item.description}</p>        
          </div>
      </div>
  );
};

export default ItemCard;
