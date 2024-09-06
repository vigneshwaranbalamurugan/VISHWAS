import React from 'react';
import { contractors } from './cpt';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import Tabs from './Contracttabs';

const CProfile = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleFutureContractsClick = () => {
    navigate('/Future/1'); // Navigate to the future contracts page
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-8">Contractor Profiles</h1>
        {contractors.map((contractor) => (
          <div
            key={contractor.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border-t-4 border-blue-500 mx-4 my-8"
          >
            {/* Contractor Details */}
            <div className="flex flex-col md:flex-row">
              <img
                className="h-80 w-full object-cover md:w-80"
                src='https://media.licdn.com/dms/image/v2/C5103AQH8t-edTph6KA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1559281100146?e=2147483647&v=beta&t=3wgz8XhSC3kJuc5skSoctICrWB7l2yNxBNeh0yYD2Zg'
                alt={contractor.name}
              />
              <div className="p-8 flex-1">
                <h2 className="text-3xl font-semibold text-gray-800">{contractor.name}</h2>
                <p className="text-gray-600 mt-4">
                  <strong>Company:</strong> {contractor.companyName}
                </p>
                <div className="mt-4">
                  <p className="text-gray-600">
                    <strong>Phone:</strong> {contractor.contactInfo.phone}
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong> {contractor.contactInfo.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs Section below Contractor Details */}
          </div>
        ))}

        
          {/* Tabs card displayed under contractor info */}
          <Tabs />
          
       

        {/* Future Contracts Button */}
        <div className="text-center">
          <button
            onClick={handleFutureContractsClick}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Future Contracts
          </button>
        </div>
      </div>
    </div>
  );
};

export default CProfile;
