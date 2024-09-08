import React from 'react';

const Cards = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl">
        <div className="flex flex-wrap justify-center gap-8">
          {/* Farmer Card */}
          <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 p-4 aspect-w-1 aspect-h-1">
            <div className="flex justify-center items-center h-full">
              {/* Replace with your actual farmer logo */}
              <img
                className="h-24 w-24"
                src="https://via.placeholder.com/80" // Use your farmer logo URL
                alt="Farmer Logo"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold mb-2 text-green-700">Farmer</h2>
            </div>
          </div>

          {/* Customer Card */}
          <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 p-4 aspect-w-1 aspect-h-1">
            <div className="flex justify-center items-center h-full">
              {/* Replace with your actual customer logo */}
              <img
                className="h-24 w-24"
                src="https://via.placeholder.com/80" // Use your customer logo URL
                alt="Customer Logo"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-bold mb-2 text-blue-700">Customer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
