import React, { useState } from 'react';

interface AadhaarAuthProps {
  onSuccess?: (aadhaarNumber: string) => void; // Callback for successful verification
}

const AadhaarAuth: React.FC<AadhaarAuthProps> = ({ onSuccess }) => {
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [isOtpStep, setIsOtpStep] = useState(false);

  const handleAadhaarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAadhaarNumber(event.target.value);
  };

  const handleAadhaarSubmit = () => {
    // Simulate API call to Meri Pehchan (replace with actual API call)
    console.log(`Submitted Aadhaar number: ${aadhaarNumber}`);
    setIsOtpStep(true);

    // Hypothetical success callback (replace with actual logic)
    onSuccess?.(aadhaarNumber);
  };

  const handleOtpSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted OTP'); // Simulate OTP verification (replace with actual logic)
    // Handle successful OTP verification (redirect to protected content, etc.)
  };

  return (
    <div className="aadhaar-auth flex flex-col items-center justify-center h-screen bg-green-600">
      <img
        src="https://meripehchaan.gov.in/assets/img/logo/meripahchaan-main.png"
        alt="Meri Pehchan Logo"
        className="mb-6 w-auto h-24 object-contain" // Ensures aspect ratio is preserved
      />
      <h2 className="text-2xl font-semibold mb-4">Aadhaar Authentication</h2>
      {!isOtpStep && (
        <form onSubmit={handleAadhaarSubmit} className="w-full max-w-sm">
          <label htmlFor="aadhaarNumber" className="block text-gray-700 font-bold mb-2">Enter your Aadhaar Number</label>
          <input
            type="number"
            id="aadhaarNumber"
            value={aadhaarNumber}
            onChange={handleAadhaarChange}
            minLength={12}
            maxLength={12}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <button type="submit" className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
        </form>
      )}
      {isOtpStep && (
        <form onSubmit={handleOtpSubmit} className="w-full max-w-sm">
          <p className="text-gray-700 mb-4">An OTP has been sent to the phone number linked to your Aadhaar card.</p>
          <label htmlFor="otp" className="block text-gray-700 font-bold mb-2">Enter OTP</label>
          <input type="number" id="otp" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          <button type="submit" className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600">Verify OTP</button>
        </form>
      )}
    </div>
  );
};

export default AadhaarAuth;