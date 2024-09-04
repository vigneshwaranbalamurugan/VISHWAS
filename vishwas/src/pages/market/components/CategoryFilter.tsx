import React, { useState } from 'react';

const categories = {
  'Food Crops': ['Rice', 'Wheat', 'Corn'],
  'Fiber Crops': ['Cotton', 'Hemp', 'Flax'],
  'Feed Crops': ['Alfalfa', 'Soybean', 'Barley'],
  'Industrial Crops': ['Rubber', 'Jute', 'Kenaf'],
};

const quantities = ['10-50 kg', '100 kg', '200 kg', '500 kg', 'above'];

const CategoryFilter = ({ onFilter }: { onFilter: (filters: any) => void }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedQuantity, setSelectedQuantity] = useState<string>('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onFilter({ category, quantity: selectedQuantity, location: selectedLocation, priceRange });
  };

  const handleQuantityChange = (quantity: string) => {
    setSelectedQuantity(quantity);
    onFilter({ category: selectedCategory, quantity, location: selectedLocation, priceRange });
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const location = event.target.value;
    setSelectedLocation(location);
    onFilter({ category: selectedCategory, quantity: selectedQuantity, location, priceRange });
  };

  const handlePriceRangeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const range = event.target.value;
    setPriceRange(range);
    onFilter({ category: selectedCategory, quantity: selectedQuantity, location, priceRange: range });
  };

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Filter</h2>

      <div className="mb-4">
        <h3 className="text-gray-600 mb-2">Categories</h3>
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`block w-full text-left p-2 mb-2 rounded ${
              selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-blue-100'
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="text-gray-600 mb-2">Quantity</h3>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => handleQuantityChange(e.target.value)}
          value={selectedQuantity}
        >
          <option value="">Select Quantity</option>
          {quantities.map((quantity) => (
            <option key={quantity} value={quantity}>
              {quantity}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <h3 className="text-gray-600 mb-2">Price Range</h3>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          onChange={handlePriceRangeChange}
          value={priceRange}
        >
          <option value="">Select Price Range</option>
          <option value="0-500">₹0 - ₹500</option>
          <option value="501-1000">₹501 - ₹1000</option>
          <option value="1001-1500">₹1001 - ₹1500</option>
          <option value="1501-2000">₹1501 - ₹2000</option>
          <option value="2001-above">₹2001 and above</option>
        </select>
      </div>

      <div>
        <h3 className="text-gray-600 mb-2">Location</h3>
        <input
          type="text"
          placeholder="Enter location"
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedLocation}
          onChange={handleLocationChange}
        />
      </div>
    </div>
  );
};

export default CategoryFilter;
