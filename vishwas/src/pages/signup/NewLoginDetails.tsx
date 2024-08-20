import React, { useState, useEffect } from 'react';

const states = [
  // Replace with all Indian states and their corresponding districts (object format)
  { value: 'Andhra Pradesh', districts: ['Anantapur', 'Chittoor'] },
  { value: 'Arunachal Pradesh', districts: ['Itanagar', 'East Kameng'] },
  // ... (add all other states and districts)
];

const farmingTypes = [
  // Replace with general farming types
  { value: 'Organic Farming', label: 'Organic' },
  { value: 'Conventional Farming', label: 'Conventional' },
  // ... (add other farming types)
];

const FarmerDetailsForm = () => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [mno, setMno] = useState('');
  const [ftype, setFType] = useState('');
  const [lands, setLands] = useState([
    { soilType: '', landSize: '', landLocation: '' },
  ]);

  useEffect(() => {
    const matchedState = states.find((state) => state.value === selectedState);
    setDistricts(matchedState ? matchedState.districts : []);
  }, [selectedState]);

  const handleLandChange = (index, field, value) => {
    const newLands = [...lands];
    newLands[index][field] = value;
    setLands(newLands);
  };

  const addLand = () => {
    setLands([...lands, { soilType: '', landSize: '', landLocation: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', fname, lname);
    console.log('Location:', selectedState, selectedDistrict);
    console.log('Mobile Number:', mno);
    console.log('Farming Type:', ftype);
    console.log('Lands:', lands);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full h-full rounded overflow-hidden shadow-md bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Farmer Details </h2>
        <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
          <div className="grid grid-cols-2 gap-4">
            {/* First Name */}
            <div className="form-group">
              <label htmlFor="fname" className="block text-gray-700 text-sm font-bold mb-2">
                First Name:
              </label>
              <input
                type="text"
                id="fname"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Last Name */}
            <div className="form-group">
              <label htmlFor="lname" className="block text-gray-700 text-sm font-bold mb-2">
                Last Name:
              </label>
              <input
                type="text"
                id="lname"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* State */}
            <div className="form-group">
              <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
                State:
              </label>
              <select
                id="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.value}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            <div className="form-group">
              <label htmlFor="district" className="block text-gray-700 text-sm font-bold mb-2">
                District:
              </label>
              <select
                id="district"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Number */}
            <div className="form-group">
              <label htmlFor="mno" className="block text-gray-700 text-sm font-bold mb-2">
                Mobile Number:
              </label>
              <input
                type="text"
                id="mno"
                value={mno}
                onChange={(e) => setMno(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            {/* Farming Type */}
            <div className="form-group">
              <label htmlFor="ftype" className="block text-gray-700 text-sm font-bold mb-2">
                Farming Type:
              </label>
              <select
                id="ftype"
                value={ftype}
                onChange={(e) => setFType(e.target.value)}
                required
                className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select Farming Type</option>
                {farmingTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Dynamic Land Details */}
            {lands.map((land, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 border p-4 rounded-lg bg-gray-50">
                <h3 className="font-bold text-lg mb-4 col-span-2">Land {index + 1}</h3>

                {/* Type of Soil */}
                <div className="form-group">
                  <label
                    htmlFor={`soilType-${index}`}
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Type of Soil:
                  </label>
                  <input
                    type="text"
                    id={`soilType-${index}`}
                    value={land.soilType}
                    onChange={(e) => handleLandChange(index, 'soilType', e.target.value)}
                    required
                    className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                {/* Size of Land */}
                <div className="form-group">
                  <label
                    htmlFor={`landSize-${index}`}
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Size of Land:
                  </label>
                  <input
                    type="text"
                    id={`landSize-${index}`}
                    value={land.landSize}
                    onChange={(e) => handleLandChange(index, 'landSize', e.target.value)}
                    required
                    className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                {/* Location of Land */}
                <div className="form-group">
                  <label
                    htmlFor={`landLocation-${index}`}
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Location of Land:
                  </label>
                  <input
                    type="text"
                    id={`landLocation-${index}`}
                    value={land.landLocation}
                    onChange={(e) => handleLandChange(index, 'landLocation', e.target.value)}
                    required
                    className="shadow appearance-none border rounded-md w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between mb-6 col-span-2">
              <button
                type="button"
                onClick={addLand}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Another Land
              </button>
            </div>

            <div className="flex items-center justify-between col-span-2">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmerDetailsForm;