import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to AgriConnect</h1>
      <p className="text-lg mb-6">
        Your one-stop solution for connecting farmers and buyers.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">For Farmers</h2>
          <ul className="list-disc">
            <li>Connect with potential buyers</li>
            <li>Manage contracts and negotiate prices</li>
            <li>Secure payment processing</li>
            <li>Collaborate with other farmers</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold mb-2">For Buyers</h2>
          <ul className="list-disc">
            <li>Find reliable farmers</li>
            <li>Purchase quality agricultural products</li>
            <li>Secure payment options</li>
            <li>Track order status</li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Why Choose Us?</h2>
        <ul className="list-disc">
          <li>Meri Pehchan verification for credibility</li>
          <li>Razorpay escrow account for secure payments</li>
          <li>In-built chat application for communication</li>
          <li>Real-time status updates</li>
        </ul>
      </div>
      <div className="mt-4">
        <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;