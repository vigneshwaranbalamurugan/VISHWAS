import React from 'react';
import { Contract } from './cpt';
import './ContractDetails.css';

interface ContractDetailProps {
  contract: Contract;
  onBack: () => void;
}

const ContractDetail: React.FC<ContractDetailProps> = ({ contract, onBack }) => {
  const farmerName = "Mahendra singh dhoni";
  const farmerImage =" https://i.ytimg.com/vi/9WKdtr_PR-Q/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYYyBlKDwwDw==&rs=AOn4CLDKw8nUgZn4YYpAyJ8VH16BzveeYA" // Adjust according to your image source
  const farmerDetailLink = `/farmer/john-doe`;
  const duration = "6 months";
  const startDate = "2024-03-01";
  const endDate = "2024-08-31";
  const amount = "$10,000";
  const statusDetail = "Harvesting";

  return (
    <div className="ccontainer">
      <button className="cbutton" onClick={onBack}>Back to Contracts List</button>
      
      {/* Farmer Image */}
      <img src={farmerImage} alt={farmerName} className="cimage" />
      
      {/* Contract Details */}
      <h2 className='ctitle'>{contract.title}</h2>
      <p className='cdetail'><strong>Farmer Name:</strong> {farmerName}</p>
      <p className='cdetail'><strong>Duration:</strong> {duration}</p>
      <p className='cdetail'><strong>Start Date:</strong> {startDate}</p>
      <p className='cdetail'><strong>End Date:</strong> {endDate}</p>
      <p className='cdetail'><strong>Amount:</strong> {amount}</p>
      <p className='cdetail'><strong>Status:</strong> {statusDetail}</p>
      <p className='cdetail'><strong>Description:</strong> {contract.description}</p>

      {/* Link to Farmer Details */}
      <a href={farmerDetailLink} className="farmer-link">View more details about {farmerName}</a>
    </div>
  );
};

export default ContractDetail;
