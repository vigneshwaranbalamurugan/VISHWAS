import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CropDatas } from './CropData.js'; // Import your crop data

const CropDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from URL parameters
  const cropId = parseInt(id, 10);
  const crop = CropDatas.find((crop) => crop.id === cropId);

  if (!crop) {
    return <div className="text-center py-10 text-red-600">Crop not found</div>;
  }

  const contractor = "John Doe";
  const commodity = "Agricultural";
  const specifications = "High-quality, organic produce";
  const deliveryType = "On-site pickup";
  const estimatedPrice = "1200";
  const typeOfPayment = "Installments available";
  const collaborativeOrder = "Collaborative";
  const methodOfCultivation = "Organic, sustainable farming methods";

  return (
    <div className="crop-details-container p-6 flex flex-col md:flex-row items-start transition-transform transform hover:scale-105">
      {/* Image Section */}
      <div className="image-section w-full md:w-1/3 mb-6 md:mb-0">
        <img
          src={crop.imageUrl}
          alt={crop.name}
          className="rounded-lg object-cover w-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>

      {/* Details Section */}
      <div className="details-section w-full md:w-2/3 pl-0 md:pl-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">{crop.name} ({crop.type})</h2>
        <p className="text-2xl font-bold text-green-600 mb-6">
          ₹{crop.price} <span className="line-through text-gray-400">₹{crop.originalPrice}</span>
        </p>
        <p className="text-gray-700 mb-2"><strong>Category:</strong> {crop.category}</p>
        <p className="text-gray-700 mb-2"><strong>Quantity:</strong> {crop.quantity}</p>
        <p className="text-gray-700 mb-2"><strong>Location:</strong> {crop.location}</p>
        <p className="text-gray-700 mb-6"><strong>Popularity:</strong> {crop.popularity}</p>

        {/* Additional Details */}
        <div className="additional-details">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Additional Details</h3>
          <p className="text-gray-700"><strong>Contractor:</strong> {contractor}</p>
          <p className="text-gray-700"><strong>Commodity and Specifications:</strong> {commodity} - {specifications}</p>
          <p className="text-gray-700"><strong>Delivery Type:</strong> {deliveryType}</p>
          <p className="text-gray-700"><strong>Estimated Price:</strong> ₹{estimatedPrice}</p>
          <p className="text-gray-700"><strong>Type of Payment:</strong> {typeOfPayment}</p>
          <p className="text-gray-700"><strong>Collaborative Order:</strong> {collaborativeOrder}</p>
          <p className="text-gray-700 mb-6"><strong>Method of Cultivation:</strong> {methodOfCultivation}</p>
        </div>

        {/* Buttons */}
        <div className="button-group flex gap-4 mt-4">
          <Link to="/chat">
            <button className="bg-green-600 text-white py-2 px-4 font-bold rounded shadow-md hover:bg-green-700 transition-colors duration-300">
              Contact Buyer
            </button>
          </Link>
          <Link to="/contract">
            <button className="bg-green-600 text-white py-2 px-4 font-bold rounded shadow-md hover:bg-green-700 transition-colors duration-300">
              Sign Contract
            </button>
          </Link>
          <Link to="/cprofile">
            <button className="bg-green-600 text-white py-2 px-4 font-bold rounded shadow-md hover:bg-green-700 transition-colors duration-300">
              Contractor Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CropDetails;
