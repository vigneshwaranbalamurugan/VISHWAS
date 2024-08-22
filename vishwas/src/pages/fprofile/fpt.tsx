import React from 'react';

interface FarmerProfileProps {
  name: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    socialMedia: { platform: string; url: string }[]; // Updated type to include platform and URL
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
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-green-800">Farmer Profile</h2>

      {/* Basic Farmer Information - Single Column Layout */}
      <div className="flex flex-col items-center justify-center mb-8">
        <img
          className="h-80 w-80 object-cover rounded-full border-4 border-green-600"
          src="https://i.ytimg.com/vi/9WKdtr_PR-Q/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYYyBlKDwwDw==&rs=AOn4CLDKw8nUgZn4YYpAyJ8VH16BzveeYA" // Adjust according to your image source
          alt="MS Dhoni"
        />
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl text-lg mt-6 col-span-2">
          <h3 className="text-2xl font-semibold mb-4 text-green-700">Basic Information</h3>
          <p className="text-gray-700"><strong>Name:</strong> {name}</p>
          <p className="text-gray-700"><strong>Location:</strong> {location}</p>
          <p className="text-gray-700"><strong>Phone:</strong> {contact.phone}</p>
          <p className="text-gray-700"><strong>Email:</strong> {contact.email}</p>
          <p className="text-gray-700"><strong>Social Media:</strong></p>
          <ul className="list-disc list-inside">
            {contact.socialMedia.map((social, index) => (
              <li key={index}>
                <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {social.platform}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mt-4"><strong>Farm Size:</strong> {farmSize} acres</p>
          <p className="text-gray-700"><strong>Years of Experience:</strong> {yearsOfExperience} years</p>
          <p className="text-gray-700"><strong>Certifications:</strong> {certifications.join(', ')}</p>
          <p className="text-gray-700"><strong>Farming Methods:</strong> {farmingMethods}</p>
          <p className="text-gray-700"><strong>Irrigation:</strong> {irrigation}</p>
          <p className="text-gray-700"><strong>Pesticide and Fertilizer Use:</strong> {pesticideFertilizerUse}</p>
          <p className="text-gray-700"><strong>Soil Health:</strong> {soilHealth}</p>
        </div>
      </div>

      {/* Farm Lands Section */}
      <h3 className="text-2xl font-semibold mt-8 mb-4 text-green-700 text-center">Farm Lands</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {farmLands.slice(0, 2).map((land) => (
          <div
            key={land.landId}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
          >
            <img
              src={land.image}
              alt={`Land ${land.landId}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-gray-700"><strong>Land Size:</strong> {land.size} acres</p>
              <p className="text-gray-700"><strong>Soil Type:</strong> {land.soilType}</p>
              <p className="text-gray-700"><strong>NPK Values:</strong> N: {land.npkValues.N}, P: {land.npkValues.P}, K: {land.npkValues.K}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerProfile;
