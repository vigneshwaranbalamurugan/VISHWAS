import React from 'react-dom';
import CropCard from './CropCard';

interface CropData {
  name: string;
  type: string;
  price: number;
  imageUrl: string;
}

const CropCards = () => {
    const cropData = [
        { name: 'Rice', type: 'Basmati', price: 1000, imageUrl: 'https://www.health.com/thmb/a8GxwWgmB5KpQW8SfW6VA7UFwaI=/722x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1734160670-0157c2daf8e841d6a783b38aedc51aa8.jpg' },
        { name: 'Wheat', type: 'Sharbati', price: 1200, imageUrl: 'https://www.medicalnewstoday.com/articles/270731' },
        { name: 'Corn', type: 'Yellow', price: 800, imageUrl: 'https://www.webmd.com/diet/health-benefits-corn' },
        { name: 'Tomatoes', type: 'Cherry', price: 500, imageUrl: 'https://www.healthline.com/nutrition/tomatoes' },
        { name: 'Potatoes', type: 'Russet', price: 300, imageUrl: 'https://www.bbcgoodfood.com/recipes/roast-potatoes-613647' },
        { name: 'Apples', type: 'Red Delicious', price: 700, imageUrl: 'https://www.healthline.com/nutrition/apples' },
        { name: 'Oranges', type: 'Navel', price: 600, imageUrl: 'https://www.webmd.com/diet/health-benefits-of-oranges' },
        { name: 'Mangoes', type: 'Alphonso', price: 1500, imageUrl: 'https://www.medicalnewstoday.com/articles/278028' },
        { name: 'Bananas', type: 'Cavendish', price: 400, imageUrl: 'https://www.healthline.com/nutrition/bananas' },
        { name: 'Grapes', type: 'Red Seedless', price: 850, imageUrl: 'https://www.webmd.com/diet/health-benefits-of-grapes' },
      ];

  return (
    <div className="crop-card-container">
      {cropData.map((crop) => (
        <CropCard key={crop.name} {...crop} />
      ))}
    </div>
  );
};

export default CropCards;