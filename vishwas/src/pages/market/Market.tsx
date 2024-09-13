import React, { useState } from 'react';
import CropCards from './components/CropCards';
import CategoryFilter from './components/CategoryFilter';
import SortingMenu from './components/SortingMenu';
import { CiSearch } from "react-icons/ci";
import './market.css';

const Market = () => {
  const [sortCriteria, setSortCriteria] = useState<string>('');
  const [filters, setFilters] = useState<any>({});
  const [sideMenuOpen, setSideMenuOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSort = (criteria: string) => {
    setSortCriteria(criteria);
  };

  const handleFilter = (filters: any) => {
    setFilters({ ...filters, searchQuery });
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    setFilters((prevFilters: any) => ({ ...prevFilters, searchQuery: query }));
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
    document.body.style.overflow = sideMenuOpen ? 'auto' : 'hidden'; // Prevent background scroll when menu is open
  };

  return (
    <div className="flex h-screen">
      <div className={`side-menu ${sideMenuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <button onClick={toggleSideMenu}>✕</button> {/* Close button */}
        </div>
        <CategoryFilter onFilter={handleFilter} />
        <SortingMenu onSort={handleSort} />
      </div>
      <div className="flex-1">
        <div className="search-filter-container">
          <button onClick={toggleSideMenu}>☰</button> {/* Menu button */}
          <div className="search-bar flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="p-2 border border-gray-300 rounded-lg w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            />
            <CiSearch className="ml-2 h-10 w-10 text-blue-700 hover:text-blue-500 transition-colors duration-300 ease-in-out" />
          </div>
        </div>
        <CropCards filters={filters} sortCriteria={sortCriteria} />
      </div>
    </div>
  );
};

export default Market;
