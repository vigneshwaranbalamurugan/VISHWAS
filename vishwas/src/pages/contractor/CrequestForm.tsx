import React, { useState } from 'react';

const CrequestForm: React.FC = () => {
  const [cropType, setCropType] = useState('');
  const [estimatedEndDate, setEstimatedEndDate] = useState('');
  const [quantity, setQuantity] = useState<number | ''>('');
  const [requestDetails, setRequestDetails] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const requestData = {
      cropType,
      estimatedEndDate,
      quantity,
      requestDetails,
    };

    try {
      const response = await fetch('http://localhost:5000/api/farmer/futurecon', { // Replace with your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData), // Convert the data to JSON
      });

      if (response.ok) {
        const result = await response.json();
        alert('Form submitted successfully: ' + result.message);
        // Optionally, clear the form fields
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
<option value="wheat">Wheat</option>
<option value="barley">Barley</option>
<option value="soybean">Soybean</option>
<option value="maize">Maize</option>
<option value="oats">Oats</option>
<option value="millet">Millet</option>
<option value="sorghum">Sorghum</option>
<option value="chickpeas">Chickpeas</option>
<option value="lentils">Lentils</option>
<option value="peas">Peas</option>
<option value="sunflower">Sunflower</option>
<option value="canola">Canola</option>
<option value="flax">Flax</option>
<option value="safflower">Safflower</option>
<option value="potato">Potato</option>
<option value="sweetcorn">Sweetcorn</option>
<option value="tomato">Tomato</option>
<option value="onion">Onion</option>
<option value="garlic">Garlic</option>
<option value="carrot">Carrot</option>
<option value="cucumber">Cucumber</option>
<option value="lettuce">Lettuce</option>
<option value="spinach">Spinach</option>

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
            step="0.01" // Allows decimal values
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
