import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] text-white py-8 w-full mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 md:flex md:justify-between">
        {/* Left Section: Links */}
        <div className="mb-6 md:mb-0">
          <ul className="list-none space-y-2">
            <li className="hover:text-gray-400 transition-colors duration-300">Home</li>
            <li className="hover:text-gray-400 transition-colors duration-300">Market</li>
            <li className="hover:text-gray-400 transition-colors duration-300">Services</li>
            <li className="hover:text-gray-400 transition-colors duration-300">Contact</li>
          </ul>
        </div>

        <div>
          <p>
          Secure your harvest <br />
          with hassle-free contracts real-time<br />
          updates guaranteed payments<br />
            <a href="mailto:info@yourwebsite.com" className="hover:text-gray-400 transition-colors duration-300">
            vishwas@gmail.com
            </a>
          </p>
        </div>

        
      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm">
        <p>©2024 All Rights Reserved | Powered by Vishwas</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Security</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">Accessibility</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
