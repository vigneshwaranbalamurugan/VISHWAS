import React, { useState } from 'react';
import { Contract,contractors } from './cpt';
import ContractDetail from './ContractDetail'; // Import the ContractDetail component

const ContractorsList: React.FC = () => {
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);

  const handleContractClick = (contract: Contract) => {
    setSelectedContract(contract); // Set the selected contract when clicked
  };

  const handleBack = () => {
    setSelectedContract(null); // Go back to the list
  };

  const contractor = contractors[0]; // Assuming you're showing contracts for the first contractor

  if (selectedContract) {
    return <ContractDetail contract={selectedContract} onBack={handleBack} />;
  }

  return (
    <div className="clist-container">
      <h1>{contractor.name} ({contractor.companyName})</h1>
      <p>{contractor.location}</p>
      <h2>Contracts</h2>
      <ul className="clist">
        {contractor.contracts.map((contract) => (
          <li key={contract.id} className="clist-item" onClick={() => handleContractClick(contract)}>
            <h3>{contract.title}</h3>
            <p>Status: {contract.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractorsList;
