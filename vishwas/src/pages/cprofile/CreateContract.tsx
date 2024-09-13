import React, { useState } from 'react';
import { cropNames, cropTypes, categories, indianStates, deliveryTypes, paymentMethods } from './formOptions';
import './CropContractForm.css'; // Importing external CSS

const CropContractForm = () => {
  const [formDetails, setFormDetails] = useState({
    cropName: '',
    cropType: '',
    category: '',
    pricePerKg: '',
    quantity: '',
    location: '',
    imageUrl: '',
    estimatedMonth: '',
    contractorName: '',
    companyName: '',
    phone: '',
    email: '',
    deliveryType: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails);
    // Handle form submission (e.g., send data to the backend)
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-content">
        <h2>Crop Contract Form</h2>

        {/* Crop Details */}
        <div className="form-section">
          <label>
            Crop Name:
            <select name="cropName" value={formDetails.cropName} onChange={handleChange} required>
              <option value="">Select Crop Name</option>
              {cropNames.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </label>
          <label>
            Crop Type:
            <select name="cropType" value={formDetails.cropType} onChange={handleChange} required>
              <option value="">Select Crop Type</option>
              {cropTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-section">
          <label>
            Category:
            <select name="category" value={formDetails.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </label>
          <label>
            Price per Kg:
            <input type="number" name="pricePerKg" value={formDetails.pricePerKg} onChange={handleChange} required />
          </label>
        </div>

        <div className="form-section">
          <label>
            Quantity:
            <input type="text" name="quantity" value={formDetails.quantity} onChange={handleChange} required />
          </label>
          <label>
            Location (Indian States):
            <select name="location" value={formDetails.location} onChange={handleChange} required>
              <option value="">Select Location</option>
              {indianStates.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-section">
          <label>
            Image URL:
            <input type="url" name="imageUrl" value={formDetails.imageUrl} onChange={handleChange} required />
          </label>
          <label>
            Estimated Month:
            <input type="text" name="estimatedMonth" value={formDetails.estimatedMonth} onChange={handleChange} required />
          </label>
        </div>

        {/* Contractor Details */}
        <h3>Contractor Details</h3>
        <div className="form-section">
          <label>
            Contractor Name:
            <input type="text" name="contractorName" value={formDetails.contractorName} onChange={handleChange} required />
          </label>
          <label>
            Company Name:
            <input type="text" name="companyName" value={formDetails.companyName} onChange={handleChange} required />
          </label>
        </div>

        <div className="form-section">
          <label>
            Phone Number:
            <input type="tel" name="phone" value={formDetails.phone} onChange={handleChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formDetails.email} onChange={handleChange} required />
          </label>
        </div>

        {/* Contract Details */}
        <h3>Contract Details</h3>
        <div className="form-section">
          <label>
            Delivery Type:
            <select name="deliveryType" value={formDetails.deliveryType} onChange={handleChange} required>
              <option value="">Select Delivery Type</option>
              {deliveryTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>
          <label>
            Payment Method:
            <select name="paymentMethod" value={formDetails.paymentMethod} onChange={handleChange} required>
              <option value="">Select Payment Method</option>
              {paymentMethods.map((method) => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default CropContractForm;
