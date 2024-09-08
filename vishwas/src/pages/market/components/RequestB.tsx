import React, { useState } from 'react';

const FarmerDetailsForm = () => {
  const [formData, setFormData] = useState({
    farmerName: '',
    location: '',
    landArea: '',
    quantity: '',
    duration: '',
    availableDate: '',
    profileUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add form submission logic here
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Farmer Details Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Farmer Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="farmerName">
            Farmer Name
          </label>
          <input
            type="text"
            id="farmerName"
            name="farmerName"
            value={formData.farmerName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter farmer's name"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
            required
          />
        </div>

        {/* Land Area */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="landArea">
            Land Area (in acres)
          </label>
          <input
            type="number"
            id="landArea"
            name="landArea"
            value={formData.landArea}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter land area"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="quantity">
            Quantity (in kg)
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="duration">
            Duration (days)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter duration"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="duration">
            Duration (months)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter duration"
            required
          />
        </div>

        {/* Available Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="availableDate">
            Available By Date
          </label>
          <input
            type="date"
            id="availableDate"
            name="availableDate"
            value={formData.availableDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Profile URL */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="profileUrl">
            Farmer Profile URL
          </label>
          <input
            type="url"
            id="profileUrl"
            name="profileUrl"
            value={formData.profileUrl}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter profile URL"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FarmerDetailsForm;
