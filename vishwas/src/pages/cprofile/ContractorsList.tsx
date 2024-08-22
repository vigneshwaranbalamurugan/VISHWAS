import React from 'react';
import { Contract } from './cpt';

interface ContractorsListProps {
  contractors: { contracts: Contract[] }[]; // Adjusted type to handle only contracts
  onSelectContract: (contract: Contract) => void;
}

const ContractorsList: React.FC<ContractorsListProps> = ({ contractors, onSelectContract }) => {
  // Flatten all contracts from all contractors into a single list
  const allContracts = contractors.flatMap(contractor => contractor.contracts);

  return (
    <div>
      <h2>Contracts</h2>
      <ul>
        {allContracts.map(contract => (
          <li key={contract.id} onClick={() => onSelectContract(contract)} style={{ cursor: 'pointer' }}>
            <h5>{contract.title}</h5>
            <p>Status: {contract.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContractorsList;
