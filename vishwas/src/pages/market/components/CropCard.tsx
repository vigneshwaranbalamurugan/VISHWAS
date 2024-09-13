import React from 'react';

interface CropCardProps {
  name: string;
  type: string;
  price: number;
  imageUrl: string;
}

const CropCard = ({id, name, type, price, imageUrl }: CropCardProps) => {
  return (
    <a href={`/cropdetail/${id}`} className="crop-card-link">
    <div className="crop-card">
      <img src={imageUrl} alt={name} className="crop-card-image" />
      <div className="crop-card-content">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>Price: ₹{price}</p>
      </div>
    </div>
    </a>

  );
};

export default CropCard;
