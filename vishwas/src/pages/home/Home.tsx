import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-green-100 min-h-screen flex items-center justify-center py-12">
      <div className="container max-w-6xl mx-auto p-8 bg-white rounded-3xl shadow-2xl">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">
          Welcome to AgriConnect
        </h1>
        <p className="text-2xl text-center text-gray-700 mb-12">
          Your one-stop solution for connecting farmers and buyers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              For Farmers
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Connect with potential buyers</li>
              <li>Manage contracts and negotiate prices</li>
              <li>Secure payment processing</li>
              <li>Collaborate with other farmers</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transition-transform transform hover:scale-110 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              For Buyers
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Find reliable farmers</li>
              <li>Purchase quality agricultural products</li>
              <li>Secure payment options</li>
              <li>Track order status</li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside text-gray-700 text-center space-y-2">
            <li>Meri Pehchan verification for credibility</li>
            <li>Razorpay escrow account for secure payments</li>
            <li>In-built chat application for communication</li>
            <li>Real-time status updates</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/register"
            className="inline-block bg-green-500 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>
<<<<<<< Updated upstream
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
        <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Get Started
        </Link>
      </div>
=======
>>>>>>> Stashed changes
    </div>
  );
};

export default Home;
