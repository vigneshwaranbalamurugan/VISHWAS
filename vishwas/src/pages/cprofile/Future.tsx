import React from 'react';
import { useParams } from 'react-router-dom';
import { contractors } from './cpt';

const FutureContracts = () => {
    const { id } = useParams<{ id: string }>(); // Get the ID from URL parameters
    const contractorId = parseInt(id, 10);
  const contractor = contractors.find(c => c.id === parseInt(contractorId));

  if (!contractor) {
    return <div>Contractor not found</div>;
  }

  const futureContracts = contractor.contracts.filter(contract => contract.status === 'Future');

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-8">{contractor.name}'s Future Contracts</h1>
        {futureContracts.length === 0 ? (
          <p className="text-center text-xl text-gray-600">No future contracts found.</p>
        ) : (
          futureContracts.map((contract) => (
            <div key={contract.id} className="bg-white shadow-lg rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800">{contract.title}</h2>
              <p className="text-gray-600 mt-4">{contract.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FutureContracts;
