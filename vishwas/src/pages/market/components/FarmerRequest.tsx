import React from 'react';
import Farmerreq from './Farmerreq';

function FarmerRequest() {
  // Sample data for demonstration; you can replace this with data from your backend
  const farmerData = {
    name: 'Ramesh Kumar',
    phone: '9876543210',
    place: 'Salem',
    landSize: 10, // in acres
    quantity: 500, // in kg
    pricePerKg: 20, // in INR
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Farmerreq farmer={farmerData} />
    </div>
  );
}

export default FarmerRequest;
