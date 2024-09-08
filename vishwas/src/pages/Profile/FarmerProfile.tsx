import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface PersonalIdentification {
  photo: string;
  aadhaarNumber: string;
}

interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  dob: string;
}

interface LocationInfo {
  state: string;
  district: string;
  pincode: string;
  longitude: number;
  latitude: number;
  address: string;
}

interface LandDetails {
  farmSize: number;
  yearsOfExperience: number;
  farmingMethods: string;
  irrigation: string;
  pesticide: string;
  lands: Land[];
}

interface Land {
  surveyNumber: string;
  subdivisionNumber: string;
  soilType: string;
  landSize: string;
  landLocation: string;
}

interface FarmerData {
  mobileNumber: string;
  personalIdentification: PersonalIdentification;
  personalInfo: PersonalInfo;
  locationInfo: LocationInfo;
  landDetails: LandDetails;
}


const FarmerProfile = () => {
  const [farmerData, setFarmerData] = useState<FarmerData | null>(null);
  const { mobileNumber } = useParams<{ mobileNumber: string }>();

  // Fetch farmer details by ID from the backend
  useEffect(() => {
    const fetchFarmerDetails = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/farmer/get-farmer-data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mobileNumber
          }),
        });
        if (response.ok) {
          const data = await response.json();
          setFarmerData(data);
        } else {
          const errorData = await response.json();
          alert(errorData.message || 'Failed to sign up');
        }
      } catch (error) {
        console.error('Error fetching farmer data:', error);
      }
    };
    fetchFarmerDetails();
  }, [mobileNumber]);

  if (!farmerData) {
    return <div>Loading...</div>;
  }

  const {
    personalIdentification: { photo, aadhaarNumber },
    personalInfo: { firstName, lastName, email, gender, age, dob },
    locationInfo: { state, district, pincode, longitude, latitude, address },
    landDetails: { farmSize, yearsOfExperience, farmingMethods, irrigation, pesticide, lands }
  } = farmerData;

  return (
    <div className="farmer-profile-container mt-10 max-w-6xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
      {/* Header Section: Image on the left, name and email on the right */}
      <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-8">Farmer Profile</h1>

      <div className="flex items-center space-x-8 mb-6">
        {/* Profile Image */}
        <img
          src={photo}
          alt={`${firstName}'s Profile`}
          className="profile-photo h-40 w-40 object-cover rounded-full border-4 border-green-600"
        />
        {/* Name and Email */}
        <div>
          <h1 className="text-3xl font-bold text-green-800">{`${firstName} ${lastName}`}</h1>
          <p className="text-gray-600 text-lg">{email}</p>
          <p className="text-xl text-gray-800">
            <strong>Mobile Number:</strong> {mobileNumber}
          </p>
        </div>
      </div>

      {/* Mobile Number */}
      <div className="mb-6">
        <p className="text-xl text-gray-800">
        </p>
      </div>

      {/* Personal Information Section */}
      <div className="profile-section bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Personal Information</h2>
        <p className="text-gray-700 mb-2"><strong>Gender:</strong> {gender}</p>
        <p className="text-gray-700 mb-2"><strong>Age:</strong> {age}</p>
        <p className="text-gray-700 mb-2"><strong>Date of Birth:</strong> {dob}</p>
        <p className="text-gray-700 mb-2"><strong>Aadhaar Number:</strong> {aadhaarNumber}</p>
      </div>

      {/* Location Information Section */}
      <div className="profile-section bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Location Information</h2>
        <p className="text-gray-700 mb-2"><strong>State:</strong> {state}</p>
        <p className="text-gray-700 mb-2"><strong>District:</strong> {district}</p>
        <p className="text-gray-700 mb-2"><strong>Pincode:</strong> {pincode}</p>
        <p className="text-gray-700 mb-2"><strong>Address:</strong> {address}</p>
        <p className="text-gray-700 mb-2"><strong>Longitude:</strong> {longitude}</p>
        <p className="text-gray-700 mb-2"><strong>Latitude:</strong> {latitude}</p>
      </div>

      {/* Land Details Section */}
      <div className="profile-section bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Land Details</h2>
        <p className="text-gray-700 mb-2"><strong>Farm Size:</strong> {farmSize} acres</p>
        <p className="text-gray-700 mb-2"><strong>Years of Experience:</strong> {yearsOfExperience} years</p>
        <p className="text-gray-700 mb-2"><strong>Farming Methods:</strong> {farmingMethods}</p>
        <p className="text-gray-700 mb-2"><strong>Irrigation:</strong> {irrigation}</p>
        <p className="text-gray-700 mb-2"><strong>Pesticide Use:</strong> {pesticide}</p>

        <h3 className="text-xl font-semibold text-green-600 mt-4 mb-2">Lands</h3>
        {lands.map((land, index) => (
          <div key={index} className="land-details mb-4 p-4 bg-gray-100 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-2"><strong>Survey Number:</strong> {land.surveyNumber}</p>
            <p className="text-gray-700 mb-2"><strong>Subdivision Number:</strong> {land.subdivisionNumber}</p>
            <p className="text-gray-700 mb-2"><strong>Soil Type:</strong> {land.soilType}</p>
            <p className="text-gray-700 mb-2"><strong>Land Size:</strong> {land.landSize}</p>
            <p className="text-gray-700 mb-2"><strong>Land Location:</strong> {land.landLocation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerProfile;
