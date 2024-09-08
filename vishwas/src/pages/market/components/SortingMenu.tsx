import React from 'react';

interface SortingMenuProps {
  onSort: (criteria: string) => void;
}

const SortingMenu = ({ onSort }: SortingMenuProps) => {
  return (
    <div className="bg-black w-64 p-4 flex flex-col space-y-4 text-white">  {/* Changed to black background */}
      <div className="mb-4">
        <h2 className="text-lg font-medium">Sort</h2>
      </div>
      <div className="space-y-4">
        <h3 className="text-white text-bold-300">Popularity-Based Sorting</h3>  {/* Gray text to contrast with black */}
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
      </div>
    </div>
  );
};

export default SortingMenu;



