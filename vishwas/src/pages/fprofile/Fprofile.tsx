import React from 'react';
import FarmerProfile from './fpt'; // Assuming Test.tsx is renamed to FarmerProfile.tsx

const farmerData = {
  name: "John Doe",
  location: "123 Main St, Anytown, CA 90210, USA",
  contact: {
    phone: "(123) 456-7890",
    email: "johndoe@farmfresh.com",
    socialMedia: ["https://www.facebook.com/johndoe/", "https://www.instagram.com/johndoe_farm/"],
  },
  farmSize: 150,
  yearsOfExperience: 25,
  certifications: ["Organic", "Fairtrade"],
  // ... remaining farm data
  farmLands: [
    {
      landId: 1,
      image: "https://via.placeholder.com/200x150", // Replace with actual image URL
      size: 20,
      soilType: "Sandy Loam",
      npkValues: { N: 12, P: 8, K: 10 },
    },
    {
      landId: 2,
      image: "https://via.placeholder.com/200x150", // Replace with actual image URL
      size: 35,
      soilType: "Clay Loam",
      npkValues: { N: 15, P: 10, K: 14 },
    },
    // ... add more farm lands if needed
  ],
};

function T() {
  return (
    <div className="container"> {/* Added a container class */}
      <FarmerProfile {...farmerData} />
    </div>
  );
}

export default T;