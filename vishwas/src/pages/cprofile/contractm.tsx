import React, { useState } from 'react';
import ContractorsList from './ContractorsList';
import ContractDetail from './ContractDetail';
import { Contract, contractors } from './cpt';

const ContractManagement: React.FC = () => {
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);

  const handleSelectContract = (contract: Contract) => {
    setSelectedContract(contract);
  };

  const handleBack = () => {
    setSelectedContract(null);
  };

  return (
    <div>
      {selectedContract ? (
        <ContractDetail contract={selectedContract} onBack={handleBack} />
      ) : (
        <ContractorsList contractors={contractors} onSelectContract={handleSelectContract} />
      )}
    </div>
  );
};

export default ContractManagement;
