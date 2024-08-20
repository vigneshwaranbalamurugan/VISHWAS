import React from 'react';

interface FarmerProfileProps {
  name: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    socialMedia: string[];
  };
  farmSize: number;
  yearsOfExperience: number;
  certifications: string[];
  crops: {
    type: string;
    image: string; // Optional
    availability: string;
    quantity: number;
  }[];
  farmingMethods: string;
  irrigation: string;
  pesticideFertilizerUse: string;
  soilHealth: string;
  farmLands: {
    landId: number;
    image: string;
    size: number;
    soilType: string;
    npkValues: { N: number; P: number; K: number };
  }[];
}

const FarmerProfile: React.FC<FarmerProfileProps> = ({
  name,
  location,
  contact,
  farmSize,
  yearsOfExperience,
  certifications,
  crops,
  farmingMethods,
  irrigation,
  pesticideFertilizerUse,
  soilHealth,
  farmLands,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Farmer Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Farmer Information */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Basic Information</h3>
          <p>Name: {name}</p>
          <p>Location: {location}</p>
          <p>Phone: {contact.phone}</p>
          <p>Email: {contact.email}</p>
          <p>Social Media: {contact.socialMedia.join(', ')}</p>
          <p>Farm Size: {farmSize} acres</p>
          <p>Years of Experience: {yearsOfExperience} years</p>
          <p>Certifications: {certifications.join(', ')}</p>
          <p>Farming Methods: {farmingMethods}</p>
          <p>Irrigation: {irrigation}</p>
          <p>Pesticide and Fertilizer Use: {pesticideFertilizerUse}</p>
          <p>Soil Health: {soilHealth}</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold mt-6">Farm Lands</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {farmLands.slice(0, 2).map((land) => (
          <div key={land.landId} className="bg-white p-4 rounded-lg shadow-sm">
            <img src={land.image} alt={`Land ${land.landId}`} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <p>Land Size: {land.size} acres</p>
              <p>Soil Type: {land.soilType}</p>
              <p>NPK Values: N: {land.npkValues.N}, P: {land.npkValues.P}, K: {land.npkValues.K}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerProfile;