import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#51c051] text-white py-5 w-full bottom-0 left-0 mt-auto">
      <div className="flex justify-between p-4">
        <div>
          <ul className="list-none p-0">
            <li className="mb-2">Home</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Services</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>

        <div>
          <p>
            1234 Divi St. #1000<br />
            San Francisco, CA 94123<br />
            (255) 352-6258<br />
            info@yourwebsite.com
          </p>
        </div>

        <div className="flex space-x-4 text-white text-lg">
          <FaFacebookF className="hover:text-gray-300 transition-colors duration-300" />
          <FaTwitter className="hover:text-gray-300 transition-colors duration-300" />
          <FaInstagram className="hover:text-gray-300 transition-colors duration-300" />
          <FaLinkedinIn className="hover:text-gray-300 transition-colors duration-300" />
        </div>
      </div>

      <div className="text-center mt-5">
        ©2020 All Rights Reserved | Powered by Number 7
      </div>
    </footer>
  );
};

export default Footer;
