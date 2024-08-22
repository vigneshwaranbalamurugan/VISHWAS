import React from 'react';
import { contractors } from './cpt';
import { Link } from 'react-router-dom';

const CProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8"> {/* Increased max width */}
        <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-8">Contractor Profiles</h1>
        {contractors.map((contractor) => (
          <div
            key={contractor.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row border-t-4 border-blue-500 mx-4 my-8"
          >
            <img
              className="h-80 w-full object-cover md:w-80"
              src='https://media.licdn.com/dms/image/v2/C5103AQH8t-edTph6KA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1559281100146?e=2147483647&v=beta&t=3wgz8XhSC3kJuc5skSoctICrWB7l2yNxBNeh0yYD2Zg' // Adjust according to your image source
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
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contracts</h3>
                <div className="flex flex-wrap -mx-2">
                  {contractor.contracts.map((contract) => (
                    <div
                      key={contract.id}
                      className={`w-full md:w-1/2 px-4 py-4 mb-4 ${contract.status === 'Active' ? 'bg-green-100' : 'bg-gray-200'} rounded-lg`}
                    >
                      <Link to="/doc">
                        <h4 className="text-lg font-semibold text-gray-700 hover:underline">{contract.title}</h4>
                      </Link>
                      <p className={`text-sm ${contract.status === 'Active' ? 'text-green-600' : 'text-gray-600'} font-semibold`}>
                        Status: {contract.status}
                      </p>
                      <p className="text-gray-600">{contract.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CProfile;
