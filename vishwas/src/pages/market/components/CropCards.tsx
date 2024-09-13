import React, { useState, useEffect } from 'react';
import CropCard from './CropCard';
import {CropDatas} from './CropData.js'; // Ensure this is correctly imported

interface CropData {
  id: number;
  name: string;
  type: string;
  category: string;
  price: number;
  imageUrl: string;
  quantity: string;
  location: string;
  popularity: number;
}

const CropCards = ({ filters, sortCriteria }: { filters: any; sortCriteria: string }) => {
  const [cropData, setCropData] = useState<CropData[]>(CropDatas);
  const [filteredCrops, setFilteredCrops] = useState<CropData[]>(cropData);

  useEffect(() => {
    let result = cropData;

    // Apply search filter
    if (filters.searchQuery) {
      result = result.filter(crop =>
        crop.name.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category) {
      result = result.filter(crop => crop.category === filters.category);
    }

    // Apply type filter
    if (filters.type) {
      result = result.filter(crop => crop.type === filters.type);
    }

    // Apply quantity filter
    if (filters.quantity) {
      result = result.filter(crop => crop.quantity === filters.quantity);
    }

    // Apply location filter
    if (filters.location) {
      result = result.filter(crop => crop.location.toLowerCase().includes(filters.location.toLowerCase()));
    }

    // Apply price range filter
    if (filters.priceRange) {
      const [minPrice, maxPrice] = filters.priceRange.split('-').map(price => parseFloat(price.replace('above', '')));
      result = result.filter(crop => {
        if (filters.priceRange.includes('above')) {
          return crop.price > minPrice;
        }
        return crop.price >= minPrice && crop.price <= (maxPrice || Infinity);
      });
    }

    // Apply sorting
    result = result.sort((a, b) => {
      switch (sortCriteria) {
        case 'lowest-price':
          return a.price - b.price;
        case 'highest-price':
          return b.price - a.price;
        case 'most-popular':
          return b.popularity - a.popularity;
        case 'least-popular':
          return a.popularity - b.popularity;
        default:
          return 0;
      }
    });

    setFilteredCrops(result);
  }, [filters, sortCriteria, cropData]);

  return (
    <div className="crop-card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredCrops.map((crop) => (
        <CropCard key={crop.id} {...crop} />
      ))}
    </div>
  );
};

export default CropCards;
