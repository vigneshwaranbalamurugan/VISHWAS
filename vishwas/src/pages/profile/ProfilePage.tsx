import React from 'react';

interface ProfileProps {
  name: string;
  location: string;
  landDetails: {
    land1: {
      soilType: string;
      size: string;
      location: string;
    };
    land2: {
      soilType: string;
      size: string;
      location: string;
    };
  };
}

const Profile: React.FC<ProfileProps> = ({ name, location, landDetails }) => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-600">{location}</p>

      <h3 className="text-lg font-semibold mt-4">Land Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {/* Land 1 */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-xl font-medium">Land 1</h4>
          <p className="text-gray-700">Soil Type: {landDetails.land1.soilType}</p>
          <p className="text-gray-700">Size: {landDetails.land1.size}</p>
          <p className="text-gray-700">Location: {landDetails.land1.location}</p>
        </div>

        {/* Land 2 */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h4 className="text-xl font-medium">Land 2</h4>
          <p className="text-gray-700">Soil Type: {landDetails.land2.soilType}</p>
          <p className="text-gray-700">Size: {landDetails.land2.size}</p>
          <p className="text-gray-700">Location: {landDetails.land2.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;