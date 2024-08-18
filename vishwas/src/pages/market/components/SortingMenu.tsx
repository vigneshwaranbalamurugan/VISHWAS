import React from 'react';

interface SortingMenuProps {
  onSort: (criteria: string) => void;
}

const SortingMenu = ({ onSort }: SortingMenuProps) => {
  return (
    <div className="bg-gray-100 w-64 p-4 flex flex-col space-y-4">
      <div className="mb-4">
        <h2 className="text-lg font-medium">Sort</h2>
      </div>
      <div className="space-y-4">
        <h3 className="text-gray-600">Popularity-Based Sorting</h3>
        <button 
          onClick={() => onSort('most-popular')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Most Popular
        </button>
        <button 
          onClick={() => onSort('least-popular')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Least Popular
        </button>
        
        <h3 className="text-gray-600">Category-Based Sorting</h3>
        <button 
          onClick={() => onSort('category')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Category
        </button>
      </div>
    </div>
  );
};

export default SortingMenu;
