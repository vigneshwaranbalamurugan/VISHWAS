import React from 'react';
import CropCards from './components/CropCards'; // Import the CropCards component
import './market.css';
import SortingMenu from './components/SortingMenu';
import SearchBar from './components/SearchBar';

const Market = () => {
  return (
    <div className="flex h-screen">
      <SortingMenu />
      <div className="flex-1">
        <SearchBar/>
        <CropCards />
      </div>
    </div>
  );
};

export default Market;