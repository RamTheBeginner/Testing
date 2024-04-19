import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const NavBar = () => {
  return (
    <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div>
        <span className="font-bold text-xl">YourFinance</span>
      </div>
      <div>
        <Link to="/login" className="text-gray-300 hover:text-gray-200 mr-4 transition duration-300">Login</Link>
        <Link to="/signup" className="text-gray-300 hover:text-gray-200 transition duration-300">Sign Up</Link>
      </div>
    </div>
  );
};

export default NavBar;
