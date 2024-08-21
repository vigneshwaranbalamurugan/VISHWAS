import React from 'react';
import './Details.css'; // Import the CSS file

interface FormData {
  contractorName: string;
  commodity: string;
  specifications: string;
  deliveryType: string;
  estimatedPrice: number;
  paymentType: string;
  methodOfCultivation: string;
  cropName: string;
  cropType: string;
  category: string;
  price: number;
  quantity: number;
  state: string;
  district: string;
}

interface SummaryProps {
  data: FormData;
  onEdit: () => void;
}

const Summary: React.FC<SummaryProps> = ({ data, onEdit }) => {
  return (
    <div className="summary-container">
      <h2>Order Summary</h2>
      <ul className="summary-list">
        <li><strong>Contractor Name:</strong> {data.contractorName}</li>
        <li><strong>Commodity:</strong> {data.commodity}</li>
        <li><strong>Specifications:</strong> {data.specifications}</li>
        <li><strong>Delivery Type:</strong> {data.deliveryType}</li>
        <li><strong>Estimated Price:</strong> ${data.estimatedPrice.toFixed(2)}</li>
        <li><strong>Payment Type:</strong> {data.paymentType}</li>
        <li><strong>Method of Cultivation:</strong> {data.methodOfCultivation}</li>
        <li><strong>Crop Name:</strong> {data.cropName}</li>
        <li><strong>Crop Type:</strong> {data.cropType}</li>
        <li><strong>Category:</strong> {data.category}</li>
        <li><strong>Price:</strong> ${data.price.toFixed(2)}</li>
        <li><strong>Quantity:</strong> {data.quantity} kg</li>
        <li><strong>State:</strong> {data.state}</li>
        <li><strong>District:</strong> {data.district}</li>
      </ul>
      <button className="edit-button" onClick={onEdit}>Edit</button>
    </div>
  );
};

export default Summary;
