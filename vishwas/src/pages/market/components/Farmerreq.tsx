import React from 'react';

const FarmerDetails = ({ farmer }) => {
  // Sample farmer data can be passed as props or fetched from an API
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-5">
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Farmer Details</h2>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Name: <span className="font-normal">{farmer.name}</span></h3>
          <p className="text-sm text-gray-600">Phone: {farmer.phone}</p>
          <p className="text-sm text-gray-600">Place: {farmer.place}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Land Information</h3>
          <p className="text-sm text-gray-600">Total Land: {farmer.landSize} acres</p>
          <p className="text-sm text-gray-600">Produce Quantity: {farmer.quantity} kg</p>
          <p className="text-sm text-gray-600">Price per kg: ₹{farmer.pricePerKg}</p>
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Handover</button>
        </div>
      </div>
    </div>
  );
};

export default FarmerDetails;
