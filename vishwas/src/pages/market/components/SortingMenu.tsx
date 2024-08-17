import React, { useState } from 'react';

const SortingMenu = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`left-0 top-0 h-full bg-gray-100 w-64 p-4 transition-all duration-300 ease-in-out ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Sort</h2>
        {/* <button onClick={toggleMenu} className="text-gray-500">
          {isExpanded ? '-' : '+'}
        </button> */}
      </div>
      <div className="space-y-2">
        <h3 className="text-gray-600">Price-Based Sorting</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Lowest Price</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Highest Price</button>
        <h3 className="text-gray-600">Popularity-Based Sorting</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Most Popular</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Least Popular</button>
        <h3 className="text-gray-600">Category-Based Sorting</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Category</button>
        {/* ... other sorting options */}
      </div>
    </div>
  );
};

export default SortingMenu;