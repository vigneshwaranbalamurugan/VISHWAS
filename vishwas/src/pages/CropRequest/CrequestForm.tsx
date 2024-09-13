import React, { useState, useEffect } from 'react';

const CrequestForm: React.FC = () => {
  const [cropType, setCropType] = useState('');
  const [estimatedEndDate, setEstimatedEndDate] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [requestDetails, setRequestDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // State to hold phone number

  // Fetch phone number from localStorage when the component mounts
  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem('mobile'); // Replace 'phoneNumber' with the correct key used to store the phone number
    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const requestData = {
      cropType,
      estimatedEndDate,
      quantity,
      requestDetails,
      phoneNumber, // Include phone number in the request data
    };

    try {
      const response = await fetch('http://localhost:5000/api/v1/farmer/futurecon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Form submitted successfully: ' + result.message);
        setCropType('');
        setEstimatedEndDate('');
        setQuantity('');
        setRequestDetails('');
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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Form</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            readOnly // Make the field read-only
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cropType" className="block text-gray-700 text-sm font-bold mb-2">
            Crop Type
          </label>
          <select
            id="cropType"
            value={cropType}
            onChange={(e) => setCropType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Crop Type</option>
            <option value="rice">Rice</option>
            <option value="cotton">Cotton</option>
            {/* Add other options here */}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="estimatedEndDate" className="block text-gray-700 text-sm font-bold mb-2">
            Wanted Date
          </label>
          <input
            type="date"
            id="estimatedEndDate"
            value={estimatedEndDate}
            onChange={(e) => setEstimatedEndDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
            Quantity (in kg)
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseFloat(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            step="0.01"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="requestDetails" className="block text-gray-700 text-sm font-bold mb-2">
            Request Details
          </label>
          <textarea
            id="requestDetails"
            value={requestDetails}
            onChange={(e) => setRequestDetails(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows={4}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrequestForm;
