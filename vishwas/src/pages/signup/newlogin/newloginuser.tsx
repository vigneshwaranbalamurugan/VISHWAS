import React, { useState, useEffect } from 'react';
import LandOtpPopup from './landOtp';
import './newlogin.css';
import { Backend_URL } from '../../../url/backendURL';
const FarmerForm = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedSurvey, setSelectedSurvey] = useState('');
  const [lands, setLands] = useState([
    { surveyNumber: '', subdivisionNumber: '', soilType: '', landSize: '', landLocation: '', photo: '' },
  ]);
  const [profilePic, setProfilePic] = useState(null);
  const [isVerified, setVerify] = useState(false);
  const [isotpSend, setOtpSend] = useState(false);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch(`${Backend_URL}/api/v1/requirement/get-state`);
        const data = await response.json();
        setStates(data.states);
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const response = await fetch(`${Backend_URL}api/v1/requirement/get-city`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ state: selectedState }),
        });
        const data = await response.json();
        setDistricts(data.cities);
      } catch (error) {
        console.error('Error fetching districts:', error);
      }
    };

    if (selectedState) {
      fetchDistricts();
    }
  }, [selectedState]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const addLand = () => {
    setVerify(false);
    setLands([...lands, { soilType: '', landSize: '', landLocation: '', surveyNumber: '', subdivisionNumber: '', photo: '' }]);
  };

  const handleVerify = async (index, event) => {
    try {
      const { surveyNumber, subdivisionNumber } = lands[index];
      const response = await fetch(`${Backend_URL}/api/v1/requirement/get-land-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ surveyNumber: surveyNumber, subdivisionNumber: subdivisionNumber }),
      });

      if (response.ok) {
        setSelectedSurvey(surveyNumber);
        const data = await response.json();
        alert(data.message);
        console.log(data);
        setOtpSend(true);
      } else {
        alert("Error sending OTP");
        console.error('Error sending data:', response.statusText);
      }

    } catch (error) {
      console.error('Error:', error);
    }
  }
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleLandFileChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const updatedLands = [...lands];
      updatedLands[index].photo = file;
      setLands(updatedLands);
    }
  };


  const handleLandInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedLands = [...lands];
    updatedLands[index] = { ...updatedLands[index], [name]: value };
    setLands(updatedLands);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    const formData = new FormData();
    lands.forEach((land, index) => {
      if (land.photo) {
        formData.append(`landPhotos[${index}]`, land.photo);
      }
      formData.append(`lands[${index}][soilType]`, land.soilType);
      formData.append(`lands[${index}][landSize]`, land.landSize);
      formData.append(`lands[${index}][landLocation]`, land.landLocation);
      formData.append(`lands[${index}][surveyNumber]`, land.surveyNumber);
      formData.append(`lands[${index}][subdivisionNumber]`, land.subdivisionNumber);
    });
    formData.append('profilePic', document.querySelector('#profilePicInput').files[0]);
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

      }),
    })
      .then(response => response.json())
      .then(data => console.log('Form submitted:', data))
      .catch(error => console.error('Error submitting form:', error));
  };

  return (
    <form className="nelod-form" onSubmit={handleSubmit}>
      {isotpSend && (
        <LandOtpPopup
          onClose={() => setOtpSend(false)}
          onVerify={() => setVerify(true)}
          surveyNumber={selectedSurvey}
        />
      )}
      <div className="nelod-profile">
        <label htmlFor="state">Profile pic:</label><br></br>
        <img src={profilePic || '/path/to/default-profile-picture.jpg'} alt="Farmer Profile" className="nelod-profile-pic" />
      </div>
      <div className="nelod-profile">
        <input type="file" id="profilePicInput" accept="image/*" onChange={handleFileChange} className="nelod-file-input" />
      </div>
      <div className="nelod-field">
        <label htmlFor="state">State</label>
        <select id="state" value={selectedState} onChange={handleStateChange} className="nelod-select">
          <option value="">Select State</option>
          {states.map(state => (
            <option key={state.id} value={state.id}>{state.name}</option>
          ))}
        </select>
      </div>
      <div className="nelod-field">
        <label htmlFor="district">District</label>
        <select id="district" className="nelod-select" disabled={!selectedState}>
          <option value="">Select District</option>
          {districts.map(district => (
            <option key={district.id} value={district.id}>{district.name}</option>
          ))}
        </select>
      </div>
      <div className="nelod-field">
        <label htmlFor="farmSize">Farm Size (Acres)</label>
        <input type="number" id="farmSize" className="nelod-input" />
      </div>
      <div className="nelod-field">
        <label htmlFor="yearsOfExperience">Years of Experience</label>
        <input type="number" id="yearsOfExperience" className="nelod-input" />
      </div>
      <div className="nelod-field">
        <label htmlFor="farmingMethods">Farming Methods</label>
        <input type="text" id="farmingMethods" className="nelod-input" />
      </div>
      <div className="nelod-field">
        <label htmlFor="irrigation">Irrigation</label>
        <input type="text" id="irrigation" className="nelod-input" />
      </div>
      <div className="nelod-field">
        <label htmlFor="pesticide">Pesticide</label>
        <input type="text" id="pesticide" className="nelod-input" />
      </div>
      <div className="nelod-land-details">
        <h3>Land Details</h3>
        {lands.map((land, index) => (
          <div key={index} className="nelod-land">
            <input
              type="text"
              name="surveyNumber"
              value={land.surveyNumber}
              placeholder="Survey Number"
              className="nelod-input"
              onChange={(e) => handleLandInputChange(index, e)}
            />
            <input
              type="text"
              name="subdivisionNumber"
              value={land.subdivisionNumber}
              placeholder="Subdivision Number"
              className="nelod-input"
              onChange={(e) => handleLandInputChange(index, e)}
            />
            <input
              type="text"
              name="soilType"
              value={land.soilType}
              placeholder="Soil Type"
              className="nelod-input"
              disabled
            />
            <input
              type="number"
              name="landSize"
              value={land.landSize}
              placeholder="Land Size"
              className="nelod-input"
              disabled
            />
            <input
              type="text"
              name="landLocation"
              value={land.landLocation}
              placeholder="Land Location"
              className="nelod-input"
              onChange={(e) => handleLandInputChange(index, e)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleLandFileChange(index, e)}
              className="nelod-input"
            />
            <button type="button" onClick={(e) => handleVerify(index, e)} className="nelod-verify-btn">Verify</button>
          </div>
      ))}

        <button type="button" onClick={addLand} className="nelod-add-land-btn">Add More Land</button>
      </div>
     {isVerified && ( <button type="submit"  className="nelod-submit-btn">Submit</button>)}
    </form>
  );
};

export default FarmerForm;
