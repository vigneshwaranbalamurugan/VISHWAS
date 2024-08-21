import React from 'react';
import FarmerProfile from './fpt'; // Assuming Test.tsx is renamed to FarmerProfile.tsx

const farmerData = {
  name: "Mahendra Singh Dhoni",
  location: "Harmu Housing Colony, Ranchi, Jharkhand, India",
  contact: {
    phone: "022-67254873",
    email: "mahiranchi@yahoo.co.in",
    socialMedia: ["https://www.facebook.com/johndoe/", "https://www.instagram.com/johndoe_farm/"],
  },
  farmSize: 150,
  yearsOfExperience: 25,
  certifications: ["Organic", "Fairtrade"],
  // ... remaining farm data
  farmLands: [
    {
      landId: 1,
      image: "https://kj1bcdn.b-cdn.net/media/58724/ms-dhoni-2.jpg", // Replace with actual image URL
      size: 20,
      soilType: "Sandy Loam",
      npkValues: { N: 12, P: 8, K: 10 },
    },
    {
      landId: 2,
      image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/MS_DHoni_farm_1200x768.jpeg?size=690:388", // Replace with actual image URL
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