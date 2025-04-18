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
    const text = `By accessing and using the Vishwas platform, you agree to comply with and be bound by the following terms and conditions:\n\n
  Contractor: Vishwas\n
  Commodity: Wheat\n
  Specifications:Shape-Oval\n 
  Color-brown\n
  Delivery Type: By own and by Installments\n
  Estimated Price: 50000K\n
  Type of Payment: Online Payment by Installments\n
  Collaborative Order: No\n
  Method of Cultivation: Organic, sustainable farming methods\n\nBy accessing and using the Vishwas, you agree to comply with and be bound by the following terms and conditions: The platform facilitates contract farming agreements between farmers and buyers, providing tools for transparent communication, secure contracts, and payment processing. Both parties must adhere to the agreed terms within the contracts, including pricing, delivery schedules, and payment timelines. The platform is not responsible for any breaches of contract or disputes that arise between users. Payments are held in escrow until all contract conditions are met. Users must provide accurate information and are responsible for their own actions on the platform. The platform reserves the right to suspend or terminate accounts for any violations of these terms. By using this platform, you acknowledge and accept these terms as legally binding.`;
    
    const textX = 15; // Left margin
    const textY = 50; // Starting Y position
    const maxWidth = 180; // Maximum width for text

    doc.text(text, textX, textY, { maxWidth: maxWidth, align: 'left' });

    // Saving the PDF
    doc.save('Terms_and_Conditions.pdf');
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-lg transform transition duration-500 hover:scale-105 mt-10 min-h-screen flex flex-col justify-center">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
        Terms and Conditions
      </h2>

      <p className="text-gray-700 text-lg mb-6">
        By accessing and using the Vishwas platform, you agree to comply with and be bound by the following terms and conditions:
      </p>

      <div className="mb-6">
        <p className="font-semibold text-xl">Contractor:</p>
        <p className="text-gray-600 text-lg mb-2">Vishwas</p>
        <p className="font-semibold text-xl">Commodity:</p>
        <p className="text-gray-600 text-lg mb-2">Wheat</p>
        <p className="font-semibold text-xl">Specifications:</p>
        <p className="text-gray-600 text-lg mb-2">Shape-Oval, Color-brown</p>
        <p className="font-semibold text-xl">Delivery Type:</p>
        <p className="text-gray-600 text-lg mb-2">By own and by Installments</p>
        <p className="font-semibold text-xl">Estimated Price:</p>
        <p className="text-gray-600 text-lg mb-2">50000K</p>
        <p className="font-semibold text-xl">Type of Payment:</p>
        <p className="text-gray-600 text-lg mb-2">Online Payment by Installments</p>
        <p className="font-semibold text-xl">Collaborative Order:</p>
        <p className="text-gray-600 text-lg mb-2">No</p>
        <p className="font-semibold text-xl">Method of Cultivation:</p>
        <p className="text-gray-600 text-lg mb-2">Organic, sustainable farming methods</p>
      </div>

      <p className="text-gray-700 text-lg mb-6" style={{ textAlign: 'justify' }}>
        By accessing and using the Vishwas platform, you agree to comply with and be bound by the following terms and conditions: The platform facilitates contract farming agreements between farmers and buyers, providing tools for transparent communication, secure contracts, and payment processing. Both parties must adhere to the agreed terms within the contracts, including pricing, delivery schedules, and payment timelines. The platform is not responsible for any breaches of contract or disputes that arise between users. Payments are held in escrow until all contract conditions are met. Users must provide accurate information and are responsible for their own actions on the platform. The platform reserves the right to suspend or terminate accounts for any violations of these terms. By using this platform, you acknowledge and accept these terms as legally binding.
      </p>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={handleAgreementChange}
          className="mr-2 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition duration-500 ease-in-out transform hover:scale-110"
        />
        <label htmlFor="agree" className="text-gray-800 text-lg">
          I agree to these Terms and Conditions
        </label>
      </div>

      <button
        onClick={handleProceed}
        disabled={!agreed}
        className={`${
          agreed
            ? 'bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 shadow-lg hover:shadow-2xl'
            : 'bg-gray-400 cursor-not-allowed'
        } text-white py-2 px-6 rounded-lg text-lg transition duration-500 ease-in-out transform hover:scale-105`}
      >
        Proceed
      </button>
    </div>
  );
};

export default TermsAndConditions;
