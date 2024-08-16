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
        { name: 'Wheat', type: 'Sharbati', price: 1200, imageUrl: 'https://cdn.britannica.com/80/157180-050-7B906E02/Heads-wheat-grains.jpg' },
        { name: 'Corn', type: 'Yellow', price: 800, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Ab_food_06.jpg' },
        { name: 'Tomatoes', type: 'Cherry', price: 500, imageUrl: 'https://m.media-amazon.com/images/I/71+a9WSqn1L._AC_UF1000,1000_QL80_.jpg' },
        { name: 'Potatoes', type: 'Russet', price: 300, imageUrl: 'https://www.mashed.com/img/gallery/everything-you-need-to-know-about-russet-potatoes/l-intro-1622044763.jpg' },
        { name: 'Apples', type: 'Red Delicious', price: 700, imageUrl: 'https://media.self.com/photos/5b6b0b0cbb7f036f7f5cbcfa/4:3/w_2560%2Cc_limit/apples.jpg' },
        { name: 'Oranges', type: 'Navel', price: 600, imageUrl: 'https://www.thespruceeats.com/thmb/ldJoq2pEQKLm5Tma6A2mm-aSs4Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/naveloranges49pauly-a593f93a4fa341bcae74ee36bd180673.jpg' },
        { name: 'Mangoes', type: 'Alphonso', price: 1500, imageUrl: 'https://hugaplant.com/cdn/shop/products/MAIN_81788813-2624-49b8-b1ca-307fc71de95a_1200x.png?v=1674722192' },
        { name: 'Bananas', type: 'Cavendish', price: 400, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Cavendish_Banana_DS.jpg' },
        { name: 'Grapes', type: 'Red Seedless', price: 850, imageUrl: 'https://images.squarespace-cdn.com/content/v1/5a8d04ec4c0dbfcf5f37aa83/1530555106650-SJ4EKY7M8LG2XPP38OWI/redgrapes.848320856.1200x1200.jpg' },
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