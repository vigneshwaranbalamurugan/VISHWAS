import React from 'react';
import { Contract } from './cpt';
import './ContractDetails.css'; // Import the CSS file

interface ContractDetailProps {
  contract: Contract;
  onBack: () => void;
}

const ContractDetail: React.FC<ContractDetailProps> = ({ contract, onBack }) => {
  // Sample static details for demonstration
  const farmerName = "John Doe";
  const duration = "6 months";
  const startDate = "2024-03-01";
  const endDate = "2024-08-31";
  const amount = "$10,000";
  const statusDetail = "Harvesting";

  return (
    <div className="ccontainer">
      <button className="cbutton" onClick={onBack}>Back to Contracts List</button>
      <h2 className='ctitle'>{contract.title}</h2>
      <p className='cdetail'><strong>Farmer Name:</strong> {farmerName}</p>
      <p className='cdetail'><strong>Duration:</strong> {duration}</p>
      <p className='cdetail'><strong>Start Date:</strong> {startDate}</p>
      <p className='cdetail'><strong>End Date:</strong> {endDate}</p>
      <p className='cdetail'><strong>Amount:</strong> {amount}</p>
      <p className='cdetail'><strong>Status:</strong> {statusDetail}</p>
      <p className='cdetail'><strong>Description:</strong> {contract.description}</p>
    </div>
  );
};

export default ContractDetail;
