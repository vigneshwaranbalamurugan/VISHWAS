import React, { useState } from 'react';
import { Backend_URL } from '../../../url/backendURL';
const FarmerRequestForm = () => {
  const [formData, setFormData] = useState({
    farmerName: 'Sri',
    location: 'Salem',
    landArea: '',
    quantity: '',
    duration: '6',
    durationUnit: 'days', // Add durationUnit to state
    availableDate: '',
    profileUrl: 'https://vishwasweb.netlify.app/profile/8940790989',
    additionalNotes: '', // Add additionalNotes to state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${Backend_URL}/api/v1/farmer/farreq`, { // Replace with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Form submitted successfully: ' + result.message);
        window.location.href='/market';
        setFormData({
          farmerName: 'Sri',
          location: 'Location',
          landArea: '',
          quantity: '',
          duration: '6',
          durationUnit: 'days', // Reset durationUnit
          availableDate: '',
          profileUrl: '',
          additionalNotes: '', // Reset additionalNotes
        });
      } else {
        const errorResult = await response.json();
        alert('Failed to submit form: ' + errorResult.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="mx-auto mt-6 mb-6 p-12 bg-white rounded-lg shadow-xl border border-gray-300 min-w-[40%]">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Farmer Details Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Farmer Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2"            style={{display:'none'}}
 htmlFor="farmerName">
            Farmer Name
          </label>
          <input
            type="text"
            id="farmerName"
            name="farmerName"
            value={formData.farmerName}
            onChange={handleChange}
            style={{display:'none'}}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter farmer's name"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2"  style={{display:'none'}} htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            style={{display:'none'}}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
            required
          />
        </div>

        {/* Land Area */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="landArea">
            Land Area (in acres)
          </label>
          <input
            type="number"
            id="landArea"
            name="landArea"
            value={formData.landArea}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter land area"
            required
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="quantity">
            Quantity (in kg)
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter quantity"
            required
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="duration" style={{display:'none'}}>
            Duration
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              style={{display:'none'}}
              className="w-2/3 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={`Enter duration in ${formData.durationUnit}`}
              required
            />
            <select
              name="durationUnit"
              value={formData.durationUnit}
              onChange={handleChange}
              style={{display:'none'}}
              className="w-1/3 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="days">Days</option>
              <option value="months">Months</option>
            </select>
          </div>
        </div>

        {/* Available Date */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="availableDate">
            Available By Date
          </label>
          <input
            type="date"
            id="availableDate"
            name="availableDate"
            value={formData.availableDate}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="additionalNotes">
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter any additional information"
            rows="6"
          />
        </div>

        {/* Profile URL */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="profileUrl">
            Farmer Profile URL
          </label>
          <input
            type="url"
            id="profileUrl"
            name="profileUrl"
            value={formData.profileUrl}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter profile URL"
            disabled={true}
          />
        </div> 

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FarmerRequestForm;
