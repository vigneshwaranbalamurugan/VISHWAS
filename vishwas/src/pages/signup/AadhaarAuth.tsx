import React, { useState, FormEvent } from 'react';



const AadhaarAuth = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [isOtpStep, setIsOtpStep] = useState(false);

  const handleAadhaarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hi");
    console.log(aadhaarNumber);
    setAadhaarNumber(event.target.value);
  };

  const handleAadhaarSubmit = () => {
    console.log(`Submitted Aadhaar number: ${aadhaarNumber}`);
    setIsOtpStep(true);
  };

  const handleOtpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted OTP'); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-200 p-4">
      <div className="bg-green-400 text-black p-6 rounded-lg shadow-lg max-w-md w-full">
        <img
          src="https://meripehchaan.gov.in/assets/img/logo/meripahchaan-main.png"
          alt="Meri Pehchan Logo"
          className="mb-6 w-auto h-24 object-contain mx-auto"
        />
        <h2 className="text-2xl font-semibold mb-4 text-center">Aadhaar Authentication</h2>
        {!isOtpStep ? (
          <form onSubmit={handleAadhaarSubmit} className="space-y-4">
            <div>
              <label htmlFor="aadhaarNumber" className="block text-black font-bold mb-2">Enter your Aadhaar Number</label>
              <input
                type="number"
                id="aadhaarNumber"
                value={aadhaarNumber}
                onChange={handleAadhaarChange}
                minLength={12}
                maxLength={12}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <p className="text-gray-300 text-center mb-4">An OTP has been sent to the phone number linked to your Aadhaar card.</p>
            <div>
              <label htmlFor="otp" className="block text-gray-200 font-bold mb-2">Enter OTP</label>
              <input
                type="number"
                id="otp"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AadhaarAuth;
