import React from 'react';
import './FinalReview.css';
interface FinalInfoRowProps {
  label: string;
  value: string;
}

const FinalInfoRow: React.FC<FinalInfoRowProps> = ({ label, value }) => {
  return (
    <div className="final-info-row">
      <span className="final-label">{label}</span>
      <span className="final-colon">:</span>
      <span className="final-value">{value}</span>
    </div>
  );
};

export default FinalInfoRow;
