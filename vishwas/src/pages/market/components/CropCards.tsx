import React, { useState, useEffect } from 'react';
import CropCard from './CropCard';

interface CropData {
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
  const [cropData, setCropData] = useState<CropData[]>([
    { name: 'Rice', type: 'Basmati', category: 'Food Crops', price: 1000, quantity: '100 kg', location: 'India', imageUrl: 'https://www.health.com/thmb/a8GxwWgmB5KpQW8SfW6VA7UFwaI=/722x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1734160670-0157c2daf8e841d6a783b38aedc51aa8.jpg', popularity: 4 },
    { name: 'Wheat', type: 'Sharbati', category: 'Food Crops', price: 1200, quantity: '200 kg', location: 'USA', imageUrl: 'https://cdn.britannica.com/80/157180-050-7B906E02/Heads-wheat-grains.jpg', popularity: 2 },
    { name: 'Corn', type: 'Yellow', category: 'Food Crops', price: 800, quantity: '500 kg', location: 'Mexico', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Ab_food_06.jpg', popularity: 5 },
    { name: 'Tomatoes', type: 'Cherry', category: 'Food Crops', price: 500, quantity: '10 kg', location: 'Spain', imageUrl: 'https://m.media-amazon.com/images/I/71+a9WSqn1L._AC_UF1000,1000_QL80_.jpg', popularity: 3 },
    { name: 'Potatoes', type: 'Russet', category: 'Food Crops', price: 300, quantity: '50 kg', location: 'Canada', imageUrl: 'https://www.mashed.com/img/gallery/everything-you-need-to-know-about-russet-potatoes/l-intro-1622044763.jpg', popularity: 1 },
    { name: 'Apples', type: 'Red Delicious', category: 'Food Crops', price: 700, quantity: '30 kg', location: 'USA', imageUrl: 'https://media.self.com/photos/5b6b0b0cbb7f036f7f5cbcfa/4:3/w_2560%2Cc_limit/apples.jpg', popularity: 7 },
    { name: 'Oranges', type: 'Navel', category: 'Food Crops', price: 600, quantity: '40 kg', location: 'Spain', imageUrl: 'https://www.thespruceeats.com/thmb/ldJoq2pEQKLm5Tma6A2mm-aSs4Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/naveloranges49pauly-a593f93a4fa341bcae74ee36bd180673.jpg', popularity: 6 },
    { name: 'Mangoes', type: 'Alphonso', category: 'Food Crops', price: 1500, quantity: '20 kg', location: 'India', imageUrl: 'https://hugaplant.com/cdn/shop/products/MAIN_81788813-2624-49b8-b1ca-307fc71de95a_1200x.png?v=1674722192', popularity: 9 },
    { name: 'Bananas', type: 'Cavendish', category: 'Food Crops', price: 400, quantity: '60 kg', location: 'Philippines', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Cavendish_Banana_DS.jpg', popularity: 8 },
    { name: 'Grapes', type: 'Red Seedless', category: 'Food Crops', price: 850, quantity: '25 kg', location: 'Chile', imageUrl: 'https://images.squarespace-cdn.com/content/v1/5a8d04ec4c0dbfcf5f37aa83/1530555106650-SJ4EKY7M8LG2XPP38OWI/redgrapes.848320856.1200x1200.jpg', popularity: 10 },
    { name: 'Cotton', type: 'Gossypium', category: 'Fiber Crops', price: 1500, quantity: '200 kg', location: 'China', imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Organic-Cotton-PNG-Picture.png', popularity: 6 },
    { name: 'Soybeans', type: 'Glycine max', category: 'Oil Crops', price: 1200, quantity: '100 kg', location: 'Brazil', imageUrl: 'https://www.pngall.com/wp-content/uploads/2/Soybean-PNG-Image-HD.png', popularity: 7 },
    // Add more crops as needed
  ]);

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
  }, [filters, sortCriteria]);

  return (
    <div className="crop-card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {filteredCrops.map((crop) => (
        <CropCard key={crop.name} {...crop} />
      ))}
    </div>
  );
};

export default CropCards;
