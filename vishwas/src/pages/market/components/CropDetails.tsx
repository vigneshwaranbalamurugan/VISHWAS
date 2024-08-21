import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CropDatas } from './CropData.js'; // Import your crop data

const CropDetails = () => {
  const { id } = useParams<{ id: string }>(); // Get the ID from URL parameters
  const cropId = parseInt(id, 10);
  const crop = CropDatas.find((crop) => crop.id === cropId);

  if (!crop) {
    return <div>Crop not found</div>;
  }

  const navigate = useNavigate();

  // Additional details
  const contractor = "John Doe";
  const commodity = "Agricultural";
  const specifications = "High-quality, organic produce";
  const deliveryType = "On-site pickup";
  const estimatedPrice = "1200";
  const typeOfPayment = "Installments available";
  const collaborativeOrder = "Collaborative";
  const methodOfCultivation = "Organic, sustainable farming methods";

  const handleClick = () => {
    // Choose one of the following approaches based on your preference:

    // 1. Redirect using useNavigate (removes anchor tag)
    navigate('/chat'); // Replace '/chat' with the actual chat route

    // 2. Redirect using anchor tag (keeps anchor tag functionality)
    // window.location.href = '/chat'; // Replace '/chat' with the actual chat route
  };

  return (
    <div>
      <div className="crop-details-container flex flex-col md:flex-row p-4">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={crop.imageUrl}
            alt={crop.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="mt-4 md:mt-0 md:ml-8 w-full md:w-2/3">
          <h2 className="text-2xl font-bold">{crop.name} ({crop.type})</h2>
          <p className="mt-2"><strong>Category:</strong> {crop.category}</p>
          <p><strong>Price:</strong> ₹{crop.price}</p>
          <p><strong>Quantity:</strong> {crop.quantity}</p>
          <p><strong>Location:</strong> {crop.location}</p>
          <p><strong>Popularity:</strong> {crop.popularity}</p>

          <h3 className="text-xl font-semibold mt-6">Additional Details</h3>
          <p><strong>Contractor:</strong> {contractor}</p>
          <p><strong>Commodity and Specifications:</strong> {commodity} - {specifications}</p>
          <p><strong>Delivery Type:</strong> {deliveryType}</p>
          <p><strong>Estimated Price:</strong> ₹{estimatedPrice}</p>
          <p><strong>Type of Payment:</strong> {typeOfPayment}</p>
          <p><strong>Collaborative Order:</strong> {collaborativeOrder}</p>
          <p><strong>Method of Cultivation:</strong> {methodOfCultivation}</p>
        </div>
      </div>

        <center>
      <div>

        <button
          onClick={handleClick}
          style={{
            padding: '10px',
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 'bold',
          }}
          >
          Contact With Buyer
        </button>
      </div>
          </center>

      <div style={{ margin: '2rem' }}>
        <center>
          {/* Removed unnecessary `<center>` element */}
          <a href="/contract">
            <button
              style={{
                padding: '10px',
                backgroundColor: 'green',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Sign Contract
            </button>
          </a>
        </center>
      </div>
    </div>
  );
};

export default CropDetails;