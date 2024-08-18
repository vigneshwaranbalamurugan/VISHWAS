import React, { useState } from 'react';
import CropCards from './components/CropCards';
import CategoryFilter from './components/CategoryFilter';
import SortingMenu from './components/SortingMenu';
import './market.css';

const Market = () => {
  const [sortCriteria, setSortCriteria] = useState<string>('');
  const [filters, setFilters] = useState<any>({});

  const handleSort = (criteria: string) => {
    setSortCriteria(criteria);
  };

  const handleFilter = (filters: any) => {
    setFilters(filters);
  };

  return (
    <div className="flex h-screen">
      <CategoryFilter onFilter={handleFilter} />
      <div className="flex-1">
        <SortingMenu onSort={handleSort} />
        <CropCards filters={filters} sortCriteria={sortCriteria} />
      </div>
    </div>
  );
};

export default Market;
