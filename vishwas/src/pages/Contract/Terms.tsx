import React, { useState } from 'react';
import jsPDF from 'jspdf';

const TermsAndConditions: React.FC = () => {
  const [agreed, setAgreed] = useState(false);

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(e.target.checked);
  };

  const handleProceed = () => {
    if (agreed) {
      generatePDF();
      alert('You have agreed to the terms and conditions. Proceeding...');
      // Redirect to the next step, e.g., signup page
    } else {
      alert('Please agree to the terms and conditions before proceeding.');
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    // Adding a border
    doc.setLineWidth(0.5);
    doc.rect(10, 10, 190, 277); // (x, y, width, height)

    // Adding a heading
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('Terms and Conditions', 105, 30, { align: 'center' });

    // Adding the content
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    const text = `By accessing and using the Vishwas, you agree to comply with and be bound by the following terms and conditions: The platform facilitates contract farming agreements between farmers and buyers, providing tools for transparent communication, secure contracts, and payment processing. Both parties must adhere to the agreed terms within the contracts, including pricing, delivery schedules, and payment timelines. The platform is not responsible for any breaches of contract or disputes that arise between users. Payments are held in escrow until all contract conditions are met. Users must provide accurate information and are responsible for their own actions on the platform. The platform reserves the right to suspend or terminate accounts for any violations of these terms. By using this platform, you acknowledge and accept these terms as legally binding.`;
    
    const textX = 15; // Left margin
    const textY = 50; // Starting Y position
    const maxWidth = 180; // Maximum width for text

    doc.text(text, textX, textY, { maxWidth: maxWidth, align: 'left' });

    // Saving the PDF
    doc.save('Terms_and_Conditions.pdf');
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
      <p className="text-gray-700 mb-6">
        By accessing and using the Vishwas, you agree to comply with and be bound by the following terms and conditions: The platform facilitates contract farming agreements between farmers and buyers, providing tools for transparent communication, secure contracts, and payment processing. Both parties must adhere to the agreed terms within the contracts, including pricing, delivery schedules, and payment timelines. The platform is not responsible for any breaches of contract or disputes that arise between users. Payments are held in escrow until all contract conditions are met. Users must provide accurate information and are responsible for their own actions on the platform. The platform reserves the right to suspend or terminate accounts for any violations of these terms. By using this platform, you acknowledge and accept these terms as legally binding.
      </p>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={handleAgreementChange}
          className="mr-2"
        />
        <label htmlFor="agree" className="text-gray-800">
          I agree to these Terms and Conditions
        </label>
      </div>

      <button
        onClick={handleProceed}
        disabled={!agreed}
        className={`${
          agreed
            ? 'bg-blue-500 hover:bg-blue-600'
            : 'bg-gray-400 cursor-not-allowed'
        } text-white py-2 px-4 rounded`}
      >
        Proceed
      </button>
    </div>
  );
};

export default TermsAndConditions;
